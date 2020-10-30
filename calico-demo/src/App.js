import React from 'react';
import { TreatProvider, useStyles } from 'react-treat';
// import theme from './theme1.treat.js';
import { theme } from './theme1.treat';
import * as styles from './MyTreatTitle.treat';
import { Box } from './calico';
const UnThemedTitle = (props) => <h2 className={styles.sBtn}>{props.children}</h2>;

// export const ThemedTitle = (props) => {
//     const styles1 = useStyles(styles);

//     return (
//         <h2 {...props} className={styles1.tBtn}>
//             {props.children}
//         </h2>
//     );
// };

// <UnThemedTitle>无主题style</UnThemedTitle>
// <ThemedTitle>brand 主题style</ThemedTitle>
export const CalicoBox = (props) => (
    <Box
        styles={{
            // color: 'primary',
            color: 'red5',
            // color: 'red55',
            margin: [1, 0],
        }}
    >
        {props.children}
    </Box>
);

export const App = () => {
    return (
        <TreatProvider theme={theme}>
            <CalicoBox>calico box 组件</CalicoBox>
            <UnThemedTitle>使用.treat定义一次性的样式</UnThemedTitle>
        </TreatProvider>
    );
};
