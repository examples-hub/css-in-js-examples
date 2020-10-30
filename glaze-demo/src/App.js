import React from 'react';
// import { TreatProvider } from 'react-treat';
import { ThemeProvider, StyleInjectorProvider } from 'glaze';
import theme1 from './theme1.treat';
// import theme2 from './theme2.treat';
// import { Button, GlazeComponent, ThemedButton } from './Button';
import { Button, GlazeComponent } from './Button';

// export const App = () => {
//     return (
//         <StyleInjectorProvider>
//             <ThemeProvider theme={theme1}>
// <Button text='Button样式' />
//                 <ThemedButton text='ThemedButton样式' />
//                 <GlazeComponent text='GlazeComponent样式' />
//             </ThemeProvider>
//         </StyleInjectorProvider>
//     );
// };

export const App = () => {
    return (
        <StyleInjectorProvider>
            <ThemeProvider theme={theme1}>
                <Button text='Button样式' />
                <GlazeComponent text='GlazeComponent样式' />
            </ThemeProvider>
        </StyleInjectorProvider>
    );
};
