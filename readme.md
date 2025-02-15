# X and Y Components

## Why XY?

The `X` and `Y` components provide a minimalistic and efficient approach to managing flexbox layouts in React. With a lightweight API, they eliminate boilerplate code and seamlessly integrate with both `styled-components` and `@emotion/styled`. Instead of repeatedly defining flex properties, `X` and `Y` offer intuitive horizontal and vertical layout utilities, making UI composition easier and more readable.

### Key Benefits:

- 🪶 Ultra Lightweight – Less than 1KB minified and gzipped (excluding peer dependencies).
- 🚀 **Less Boilerplate** – No need to write repetitive flexbox styles.
- 🎯 **Lightweight** – Minimal dependency footprint for better performance.
- 🔧 **Flexible** – Works with both `styled-components` and `@emotion/styled`.
- 📏 **Consistent** – Provides a structured way to handle layout spacing and alignment.

## Installation

You can install the library for either `styled-components` or `@emotion/styled`:

For `styled-components`:

```sh
npm install @xy-direction/styled
```

For `@emotion/styled`:

```sh
npm install @xy-direction/emotion
```

Then, import and use the `X` and `Y` components:

```tsx
import { X, Y } from "@xy-direction/styled"; // or "@xy-direction/emotion"
```

## Usage

### Row (`X`) and Column (`Y`) Components

```tsx
<X gap="10px" padding="5px" margin="10px">
  <div>Row Item 1</div>
  <div>Row Item 2</div>
</X>

<Y g="10px" p="5px" m="10px">
  <div>Column Item 1</div>
  <div>Column Item 2</div>
</Y>
```

## Props

| Prop             | Type    | Description                                                       |
| ---------------- | ------- | ----------------------------------------------------------------- |
| `g`              | string  | Sets the CSS `gap` property.                                      |
| `gap`            | string  | Alias for `g`.                                                    |
| `m`              | string  | Sets the CSS `margin` property.                                   |
| `margin`         | string  | Alias for `m`.                                                    |
| `p`              | string  | Sets the CSS `padding` property.                                  |
| `padding`        | string  | Alias for `p`.                                                    |
| `inline`         | boolean | Sets `display: inline-flex` if `true`, otherwise `display: flex`. |
| `wrap`           | boolean | Enables `flex-wrap: wrap`.                                        |
| `shrink`         | boolean | Prevents flex shrinking (`flex-shrink: 0`).                       |
| `align`          | string  | Sets `align-items`.                                               |
| `alignItems`     | string  | Alias for `align`.                                                |
| `justify`        | string  | Sets `justify-content`.                                           |
| `justifyContent` | string  | Alias for `justify`.                                              |
| `fullWidth`      | boolean | Sets `width: 100%`.                                               |
| `fullHeight`     | boolean | Sets `height: 100%`.                                              |
| `debug`          | boolean | Adds a red outline for debugging.                                 |

## Example with Debugging

```tsx
<X debug gap="10px" padding="5px" margin="10px">
  <div>Debugging mode</div>
</X>
```

This will outline the `X` component in red to help visualize its dimensions.

### Debugging with Theme

You can enable debugging globally using a theme:

```tsx
import { ThemeProvider } from "styled-components"; // or "@emotion/react"
import { X } from "@xy-direction/styled";

const theme = { xyDebug: true };

<ThemeProvider theme={theme}>
  <X gap="10px" padding="5px" margin="10px">
    <div>Debugging with Theme</div>
  </X>
</ThemeProvider>;
```

When `xyDebug` is set to `true` in the theme, all `X` and `Y` components will display a red outline for debugging.

## Without a Library

If you were to achieve the same layout without using `styled-components` or `@emotion/styled`, you would need to write CSS manually:

```tsx
const X = ({ children, gap, padding, margin }) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap, padding, margin }}>
    {children}
  </div>
);

const Y = ({ children, gap, padding, margin }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap, padding, margin }}>
    {children}
  </div>
);

<X gap="10px" padding="5px" margin="10px">
  <div>Row Item 1</div>
  <div>Row Item 2</div>
</X>

<Y gap="10px" padding="5px" margin="10px">
  <div>Column Item 1</div>
  <div>Column Item 2</div>
</Y>
```

## License

MIT
