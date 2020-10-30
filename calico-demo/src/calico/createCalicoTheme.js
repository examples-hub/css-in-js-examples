import { map } from 'fp-ts/Record';
import { pipe } from 'fp-ts/pipeable';
import { rules } from './rules';
import { variants } from './variants';
import { createMq } from './createMq';
export const baseCalicoTheme = {
    baseFontSize: 16,
    rules,
    variants,
};
/**
 * Creates a `treat` compatible theme object that merges with the default calico rules.
 *
 * @param theme Your theme object.
 * @returns The merged theme object.
 */
export const createCalicoTheme = (theme) => {
    console.log('==createCalicoTheme start');
    const mediaQueries = pipe(
        theme.breakpoints,
        map((value) => `screen and (min-width: ${value})`),
    );

    console.log('==createCalicoTheme mediaQueries over');

    const x = Object.assign(
        Object.assign(
            Object.assign({ mediaQueries, mq: createMq(Object.values(theme.breakpoints).slice(1)) }, baseCalicoTheme),
            theme,
        ),
        {
            rules: Object.assign(Object.assign({}, baseCalicoTheme.rules), theme.rules),
            variants: Object.assign(Object.assign({}, baseCalicoTheme.variants), theme.variants),
        },
    );
    return x;
};
