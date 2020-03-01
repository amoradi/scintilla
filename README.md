## ⚛️ Scintilla

**A React Sparklines Component**

{ badges here }
{ pictures here }

---

### Demo

https://github.com/tannerlinsley/react-charts/blob/master/README.md

### Install

```bash
$ yarn add scintilla
$ npm install scintilla --save
```

### Quick Start

```tsx
import React from "react";
import { Frame, Line } from "scintilla";

const RedLine = () => (
  <Frame>
    <Line
      data={[40, 50, 60, 70]}
      stroke={{
        color: { solid: [255, 0, 0, 1] },
        width: 2,
        style: "solid"
      }}
    />
  </Frame>
);
```

### Features

- composeable
- `SVG`-based
- flexible intra-data color options
- responsive width

### API

**Types**

```ts
type Color = {
  gradient?: RGBA | RGBA[];
  solid?: RGBA | RGBA[];
};
```

```ts
type RGBA = [0-255, 0-255, 0-255, 0-1]
```

```ts
type Stroke = {
  width: number;
  style: "dash" | "solid";
  color: Color;
};
```

**Components**

#### `<Frame />`

Responsive container for all `data`-needy child components.

**`height?: number`**
Optionally specify height in pixels. Defaults to `50px`.

**`range?: [min<number>, max<number>]`**
Optionally plot `children` components with this y axis constraint.

**Example**

```tsx
<Frame height={100} range={[0, 500]}>
  <Line />
</Frame>
```

---

#### `<Line />`

Plot your series data as a line. Style line with `stroke`, `fill` or both.

**`data: number[]`**
The list of `y` data to plot.

**`stroke?: Stroke`**
Set `width` in pixels, `style` as `'dash'` or `'solid'` and color option.

**`fill?: Color`**
Solid or gradient fill, with one or many colors. Fills area from data line to bottom axis.

**Example**

```tsx
<Frame>
  <Line
    data={[-1, 2, 6, 9, 11, 21]}
    stroke={{
      width: 1,
      style: "dash",
      color: {
        solid: [
          [255, 0, 0, 0.25],
          [255, 0, 0, 0.5],
          [255, 0, 0, 0.1]
        ]
      }
    }}
    fill={{
      gradient: [
        [255, 0, 0, 0.1],
        [255, 0, 0, 1]
      ]
    }}
  />
</Frame>
```

### Examples

See demo: https://github.com/gitname/react-gh-pages

### License

MIT
