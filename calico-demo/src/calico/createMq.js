/**
 * Helper to determine if the provided value is a plain, non-responsive style.
 * @private
 *
 * @param val The value to check.
 * @returns A boolean indicating if the value is a plain style.
 */
const isPlainStyle = (val) => {
    return !Array.isArray(val) && typeof val !== 'object';
};
/**
 * Helper to determine if the provided value is a psuedo-style.
 * @private
 *
 * @param val The value to check.
 * @returns A boolean indicating if the value is a psuedo-style.
 */
const isPsuedoStyle = (val) => {
    return !Array.isArray(val) && typeof val === 'object';
};
/**
 * Higher order function to create a function that can be used to
 * create atomic style classNames with responsive arrays.
 *
 * @param breakpoints The breakpoint values to utilize for the
 * responsive array. Must be an array of valid CSS units.
 * @returns A function like the `style` function from `treat` but with
 * support for responsive arrays.
 */
export const createMq = (breakpoints) => {
    const mq = (mqStyles) => {
        var _a, _b, _c, _d, _e;
        const styles = Object.entries(mqStyles);
        let newObj = { '@media': {} };
        let mediaObj = newObj['@media'];
        for (const [cssKey, style] of styles) {
            if (cssKey === 'selectors') {
                newObj.selectors = style;
                continue;
            }
            if (cssKey === '@keyframes') {
                newObj['@keyframes'] = style;
                continue;
            }
            if (isPlainStyle(style)) {
                newObj[cssKey] = style;
                continue;
            }
            if (isPsuedoStyle(style)) {
                const psuedoStyles = Object.entries(style);
                for (const [psuedoCssKey, psuedoValue] of psuedoStyles) {
                    if (isPlainStyle(psuedoValue)) {
                        newObj[cssKey] = (_a = newObj[cssKey]) !== null && _a !== void 0 ? _a : {};
                        newObj[cssKey][psuedoCssKey] = psuedoValue;
                        continue;
                    }
                    for (const [idx, bpStyle] of psuedoValue.entries()) {
                        if (!bpStyle)
                            continue;
                        if (idx === 0) {
                            newObj[cssKey] = (_b = newObj[cssKey]) !== null && _b !== void 0 ? _b : {};
                            newObj[cssKey][psuedoCssKey] = bpStyle;
                            continue;
                        }
                        const mediaQuery = `(min-width: ${breakpoints[idx - 1]})`;
                        mediaObj[mediaQuery] = (_c = mediaObj[mediaQuery]) !== null && _c !== void 0 ? _c : {};
                        mediaObj[mediaQuery][cssKey] = (_d = mediaObj[mediaQuery][cssKey]) !== null && _d !== void 0 ? _d : {};
                        mediaObj[mediaQuery][cssKey][psuedoCssKey] = bpStyle;
                    }
                }
                continue;
            }
            for (const [idx, bpStyle] of style.entries()) {
                if (!bpStyle)
                    continue;
                if (idx === 0) {
                    newObj[cssKey] = bpStyle;
                    continue;
                }
                const mediaQuery = `(min-width: ${breakpoints[idx - 1]})`;
                mediaObj[mediaQuery] = (_e = mediaObj[mediaQuery]) !== null && _e !== void 0 ? _e : {};
                mediaObj[mediaQuery][cssKey] = bpStyle;
            }
        }
        return newObj;
    };
    return mq;
};
