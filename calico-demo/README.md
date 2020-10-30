# calico-demo

## intro

- 使用 [calico](https://github.com/WalltoWall/calico)这个 css in js 工具库的示例
- 组件样式示例

``` typescript
import React from 'react'
import { Box } from '@walltowall/calico'

export const CalicoBox = () => (
  <Box styles={{ color: 'primary', margin: [1, 0] }}>
    I will be the color black!
  </Box>
)
```

<!-- calico: 白洋布，一种平坦的白色棉布，带白色斑纹动物如猫 -->

- calico特性
- Very light runtime made possible by the treat library. 样式完全静态提取
  - Static style extraction with full type safety.
  - Dynamic styles via swapping `className`s. 动态样式通过切换样式名实现
- Atomic CSS as inspired by libraries like Tailwind CSS. 预编译出的css是原子类，不重复
  - Statically extracted, but customizable upfront in a `theme` file. 原子类基于theme中预先定义的值
  - Encourages reusability with a finite set of generated `className`s.
- Developer-centric as inspired by styled-system and theme-ui. 带约束的样式值
  - Define responsive styles via arrays.
  - Namespaced styles to ease type-extensibility.
  - One-off styles can be defined in `.treat` files with additional responsive helpers added onto your `theme`.

## demo

``` shell
yarn start
```

- open http://localhost:9000/

## notes

- 通过styles属性直接书写theme对象中的属性值，通过类似`Button.treat.js`的treat file添加一次性的样式

- 尝试修改Box样式的color属性
  - 若为theme中定义的属性值如red5或blue5，文字样式会正常变化
  - 若为其他颜色值或颜色名，文字样式会使用默认黑色，注意本示例只支持16进制形式的颜色

- 尝试修改themeTokens.js中主题属性后，控制台会提示异常
  - 临时变通的方法，修改后重新执行yarn start就可显示

``` 

./src/theme1.treat.js
Module build failed (from ./node_modules/treat/webpack-plugin/loader.js):
TreatError: treat-webpack-plugin: An error occurred during compilation: 
Error: Mismatching style trees.

      All 'styleTree' functions must return the same structure for every theme.
      
      To avoid this error, ensure that object keys and array lengths do not depend on unique properties of each theme.
```
