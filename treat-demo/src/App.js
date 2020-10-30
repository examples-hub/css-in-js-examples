import React from 'react';
import { TreatProvider } from 'react-treat';
// import { ThemeProvider, StyleInjectorProvider } from 'glaze';
// import { Button, GlazeComponent, ThemedButton } from './Button';
import { Button, ThemedButton } from './Button';
// import theme1 from './theme1.treat';
import theme2 from './theme2.treat';

export const App = () => {
    return (
        <TreatProvider theme={theme2}>
            <Button text='Button样式' />
            <hr />
            <ThemedButton text='ThemedButton样式' />
        </TreatProvider>
    );
};
