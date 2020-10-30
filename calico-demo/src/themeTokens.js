import { createCalicoTheme, baseCalicoTheme } from './calico';

const colors = {
    primary: '#3cba54',
    secondary: '#db3236',
    red5: '#db3236',
    blue5: '#4885ed',
};
const space = {
    0: 0,
    1: '0.25rem',
};
export const theme = createCalicoTheme({
    brandColor: 'deeppink',
    breakpoints: {
        mobile: '0rem',
        tablet: '48rem',
        desktop: '75rem',
        desktopWide: '90rem',
    },

    // The rules object will determine the classes we will generate
    // at build-time.
    rules: {
        // Any valid CSS property can be specified.
        color: colors,
        backgroundColor: colors,
        margin: space,

        // Extending default rules can be done naturally:
        borderRadius: {
            ...baseCalicoTheme.rules.borderRadius,
            full: '50%',
        },
    },

    // The variants object determines the variant classes that will be
    // generated.
    variants: {
        backgroundColor: {
            hover: true,
            focus: true,
        },
    },
});

console.log('==createCalicoTheme: ');
console.log(theme);
