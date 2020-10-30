# glaze-demo

## intro

- 使用 [glaze](https://github.com/kripod/glaze)这个 css in js 工具库的示例
- 组件样式示例

``` typescript
import { useStyling } from 'glaze';

export default function Component() {
  const sx = useStyling();

  return (
    <p
      className={sx({
        px: 4, // Sets padding-left and padding-right to 1rem
        color: 'white',
        bg: 'red', // Sets background to #f8485e
      })}
    >
      Hello, world!
    </p>
  );
}
```

## demo

``` shell
yarn start
```

- open http://localhost:9000

## notes

- 支持treat file形式的静态样式，也支持在sx方法中书写带theme约束的样式值，这部分样式会动态生成
- 要使用glaze的ThemeProvider传入theme，不能使用react-treat的TreatProvider传入theme
