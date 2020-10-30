import { styleTree, styleMap } from 'treat';
import * as R from 'fp-ts/Record';
import { pipe } from 'fp-ts/pipeable';
import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils';

export const styles = styleTree((theme) =>
    pipe(
        theme.rules,
        R.mapWithIndex((propertyName, atoms) =>
            pipe(
                atoms,
                R.map(styleSingleton(propertyName)),
                mapToBreakpoints(theme),
                R.map((atoms) => styleMap(atoms, propertyName)),
            ),
        ),
    ),
);

export const hover = styleTree((theme) =>
    pipe(
        theme.rules,
        R.filterWithIndex((ruleName) => {
            var _a;
            return Boolean((_a = theme.variants[ruleName]) === null || _a === void 0 ? void 0 : _a.hover);
        }),
        R.mapWithIndex((propertyName, atoms) =>
            pipe(
                atoms,
                R.map(styleSingleton(propertyName)),
                R.map(mapToPseudo(':hover')),
                mapToBreakpoints(theme),
                R.map((atoms) => styleMap(atoms, propertyName)),
            ),
        ),
    ),
);

export const focus = styleTree((theme) =>
    pipe(
        theme.rules,
        R.filterWithIndex((ruleName) => {
            var _a;
            return Boolean((_a = theme.variants[ruleName]) === null || _a === void 0 ? void 0 : _a.focus);
        }),
        R.mapWithIndex((propertyName, atoms) =>
            pipe(
                atoms,
                R.map(styleSingleton(propertyName)),
                R.map(mapToPseudo(':focus')),
                mapToBreakpoints(theme),
                R.map((atoms) => styleMap(atoms, propertyName)),
            ),
        ),
    ),
);
