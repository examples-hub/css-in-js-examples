import clsx from 'clsx';
import { useStyles } from 'react-treat';
import { resolveResponsiveProp } from './utils';
import * as styleRefs from './useBoxStyles.treat';
const resolveClassNames = (props, styles) => {
    if (props === undefined) return;
    let resolvedClassNames = [];
    for (const key in props) {
        const value = props[key];
        if (value === null || value === undefined) continue;
        resolvedClassNames.push(resolveResponsiveProp(value, styles[key]));
    }
    return resolvedClassNames;
};
/**
 * A React hook for mapping atomic styles to `className`s. This is the low
 * level hook that `<Box />` is built on.
 *
 * @param styles - The object of styles to map to `className`s
 * @returns A string containing the resolved `className`s.
 */
export function useBoxStyles(styles) {
    const boxStyles = useStyles(styleRefs);
    return clsx(resolveClassNames(styles, boxStyles.styles));
}
export function usePseudoBoxStyles(styles, pseudo) {
    const boxStyles = useStyles(styleRefs);
    return clsx(resolveClassNames(styles, boxStyles[pseudo]));
}
