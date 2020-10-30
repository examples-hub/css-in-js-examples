import { createTheme, defaultTokens } from 'glaze';

const theme1 = createTheme({
    brandColor: 'blue',
    ...defaultTokens,
    scales: {
        ...defaultTokens.scales,
        color: { primary: 'beige' }, // Example for customization
    },
});
console.log('==theme1, ', theme1);
export default theme1;
