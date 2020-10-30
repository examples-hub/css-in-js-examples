import React from 'react';
import { useStyles } from 'react-treat';
// import { useStyling } from 'glaze';
import * as styles from './Button.treat';

export const Button = (props) => <button className={styles.button}>{props.text}</button>;

export const ThemedButton = (props) => {
    const styles11 = useStyles(styles);

    return <button className={styles11.tBtn}>{props.text}</button>;
};

// export function GlazeComponent(props) {
//     const sx = useStyling();
//     return <button className={sx({ bg: 'snow', px: 32, fontSize: 32 })}>{props.text}</button>;
// }
