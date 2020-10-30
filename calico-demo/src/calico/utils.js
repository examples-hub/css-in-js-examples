import clsx from 'clsx';
import * as B from 'fp-ts/boolean';
import * as R from 'fp-ts/Record';
import { pipe } from 'fp-ts/pipeable';
import { eqNumber } from 'fp-ts/Eq';
/**
 * Creates a Style with a single property.
 *
 * @param propertyName CSS property to which `value` will be assigned.
 *
 * @returns Treat-compatible Style to pass to `style`.
 */
export const styleSingleton = (propertyName) => (value) => R.singleton(propertyName, value);
/**
 * Assigns a Style to a particular breakpoint.
 *
 * @param breakpoint Breakpoint name to which styles will be assigned.
 * @param theme Theme with `breakpoints` tokens.
 *
 * @returns Style assigned to the breakpoint.
 */
export const makeResponsive = (breakpoint, theme) => (style) => {
    const minWidth = Number.parseFloat(theme.breakpoints[breakpoint]);
    const mediaQuery = theme.mediaQueries[breakpoint];
    return pipe(eqNumber.equals(minWidth, 0), B.fold(() => R.singleton('@media', R.singleton(mediaQuery, style)), () => style));
};
/**
 * Assigns a Style to a particular pseudo-class.
 *
 * @param pseudo Pseudo-class to which styles will be assigned.
 *
 * @returns Style assigned to the pseudo-class.
 */
export const mapToPseudo = (pseudo) => (style) => R.singleton(pseudo, style);
/**
 * Normalizes a responsive prop value to a tuple with values for all
 * breakpoints. If the prop value contains less values than there are
 * breakpoints, the right-most element is repeated (i.e. it is expanded).
 *
 * @param value Reponsive prop value.
 *
 * @returns A tuple containing prop values for all breakpoints.
 */
export const normalizeResponsiveProp = (value) => {
    if (typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean')
        return [value, value, value, value];
    if ('length' in value)
        switch (value.length) {
            case 2:
                return [value[0], value[1], value[1], value[1]];
            case 3:
                return [value[0], value[1], value[2], value[2]];
            case 4:
                return value;
        }
    throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`);
};
/**
 * Resolves a responsive prop value to a list of class names using a set of
 * atoms.
 *
 * @param value Responsive prop value.
 * @param responsiveAtoms Set of responsive atoms for appropriate for the prop.
 *
 * @returns A stringified list of class names.
 */
export const resolveResponsiveProp = (value, responsiveAtoms) => {
    if (value === undefined)
        return;
    if (typeof value === 'string' || typeof value === 'number')
        return responsiveAtoms.mobile[value];
    const [mobileValue, tabletValue, desktopValue, desktopWideValue] = value;
    // If a responsive value is null, it will return undefined and wont be included.
    return clsx(responsiveAtoms.mobile[mobileValue], responsiveAtoms.tablet[tabletValue], responsiveAtoms.desktop[desktopValue], responsiveAtoms.desktopWide[desktopWideValue]);
};
export const semigroupResponsiveStyle = {
    concat: (x, y) => (Object.assign(Object.assign(Object.assign({}, x), y), { '@media': Object.assign(Object.assign({}, y['@media']), x['@media']) })),
};
/**
 * Maps a set of atoms to all of a theme's breakpoints.
 *
 * @param theme Theme with `breakpoints` tokens.
 *
 * @returns The theme's breakpoints mapped to the set of atoms.
 */
export const mapToBreakpoints = (theme) => (atoms) => pipe(theme.breakpoints, R.mapWithIndex((breakpointName) => pipe(atoms, R.map(makeResponsive(breakpointName, theme)))));
