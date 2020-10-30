# treat-demo

## intro

- 使用 [treat](https://github.com/seek-oss/treat)这个 css in js 工具库的示例
- 组件样式示例

``` typescript
// Button.treat.js
// ** THIS CODE WON'T END UP IN YOUR BUNDLE! **
import { style } from 'treat';
export const button = style({
  backgroundColor: 'blue',
  height: 48
});

// Button.js
import * as styles from './Button.treat.js';
export const Button = ({ text }) => `
  <button class="${styles.button}">${text}</button>
`;
```

- treat特性
  - The primary goals of treat are full static extraction, minimal runtime code, type safety and legacy browser support. 
  - All CSS rules are created ahead of time, so the runtime is very lightweight—only needing to swap out pre-existing classes. 
  - In fact, if your application doesn’t use theming, you don’t even need the runtime at all.
  - For themed styles, treat generates a separate block of CSS for each theme.
    - The runtime API can be used to resolve the correct class for the desired theme.
    - Theming in this way allows full static extraction of themed styles. 

## demo

``` shell
yarn start
```

- open http://localhost:9000/

## notes

- roadmap: 调试时生成唯一类名的css，发布时生成atomic css
