# X and Y Components

## Overview

The `X` and `Y` components are flexible layout utilities built using `styled-components`. They provide an easy way to structure horizontal (`X`) and vertical (`Y`) layouts in React applications.

## Installation

Ensure you have `styled-components` installed in your project:

```sh
npm install @xy-direction/styled
```

Then, import and use the `X` and `Y` components:

```tsx
import { X, Y } from "@xy-direction/styled";
```

## Usage

### Row (`X`) and Column (`Y`) Components

```tsx
<X g="10px">
  <div>Row Item 1</div>
  <div>Row Item 2</div>
</X>

<Y g="10px">
  <div>Column Item 1</div>
  <div>Column Item 2</div>
</Y>
```

## Props

| Prop         | Type    | Description                                                       |
| ------------ | ------- | ----------------------------------------------------------------- |
| `g`          | string  | Sets the CSS `gap` property.                                      |
| `m`          | string  | Sets the CSS `margin` property.                                   |
| `p`          | string  | Sets the CSS `padding` property.                                  |
| `inline`     | boolean | Sets `display: inline-flex` if `true`, otherwise `display: flex`. |
| `wrap`       | boolean | Enables `flex-wrap: wrap`.                                        |
| `shrink`     | boolean | Prevents flex shrinking (`flex-shrink: 0`).                       |
| `align`      | string  | Sets `align-items`.                                               |
| `justify`    | string  | Sets `justify-content`.                                           |
| `fullWidth`  | boolean | Sets `width: 100%`.                                               |
| `fullHeight` | boolean | Sets `height: 100%`.                                              |
| `debug`      | boolean | Adds a red outline for debugging.                                 |

## Example with Debugging

```tsx
<X debug p="10px" g="10px">
  <div>Debugging mode</div>
</X>
```

This will outline the `X` component in red to help visualize its dimensions.

## Without a Library

If you were to achieve the same layout without using `styled-components`, you would need to write CSS manually:

```tsx
const X = ({ children, gap }) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap }}>
    {children}
  </div>
);

const Y = ({ children, gap }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap }}>
    {children}
  </div>
);

<X gap="10px">
  <div>Row Item 1</div>
  <div>Row Item 2</div>
</X>

<Y gap="10px">
  <div>Column Item 1</div>
  <div>Column Item 2</div>
</Y>
```

## License

MIT
