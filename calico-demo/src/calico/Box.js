import { __rest } from 'tslib';
import * as React from 'react';
import { Box as PolymorphicBox } from 'react-polymorphic-box';
import clsx from 'clsx';
import { useBoxStyles, usePseudoBoxStyles } from './useBoxStyles';
const defaultElement = 'div';
// TODO: Remove in 1.0 release.
let didWarnAboutComponentPropMigration = false;
/**
 * The basic building block of `calico`. By default, it renders a `<div />` element,
 * but this can be overridden via the `as` prop.
 *
 * @param props
 *
 * @example
 * const Example = () => <Box styles={{ color: 'red' }} />
 */
export const Box = React.forwardRef((_a, innerRef) => {
    var { styles, hoverStyles, focusStyles, className, component } = _a,
        restProps = __rest(_a, ['styles', 'hoverStyles', 'focusStyles', 'className', 'component']);
    const resolvedClassNames =
        clsx(
            useBoxStyles(styles),
            usePseudoBoxStyles(focusStyles, 'focus'),
            usePseudoBoxStyles(hoverStyles, 'hover'),
            className,
        ) || undefined;
    // TODO: Remove in 1.0 release.
    if (process.env.NODE_ENV !== 'production' && component && !didWarnAboutComponentPropMigration) {
        console.warn(
            'A Calico <Box> component was found using the `component` prop. The `component` prop is deprecated and has been replaced by the `as` prop and will be removed in v1.0. You should be able to rename `component` to `as` without any other changes.',
        );
        didWarnAboutComponentPropMigration = true;
    }
    return React.createElement(
        PolymorphicBox,
        Object.assign({ as: component || defaultElement, className: resolvedClassNames }, restProps, { ref: innerRef }),
    );
});
Box.displayName = 'Box';
