import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Docs = () => {
  return (
    <div className="container">
      <Head>
        <title>scintilla</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main>
        <div className="grid">
          <div className="card primo">
            <h1 className="title">Scintilla</h1>
            <p className="description">A React sparklines component</p>

            <h3 className="description">
              <a href="/">home</a>
            </h3>
          </div>

          <div className="col2">
            <h2>types</h2>
            <SyntaxHighlighter language="tsx" style={prism}>
              {`type RGBA = [0-255, 0-255, 0-255, 0-1]

type Color = {
  gradient?: RGBA | RGBA[];
  solid?: RGBA | RGBA[];
};

type Stroke = {
  width: number;
  style: "dash" | "solid";
  color: Color;
};`}
            </SyntaxHighlighter>
            <h2>frame</h2>
            <p>Responsive container for all data-needy child components.</p>
            <SyntaxHighlighter language="tsx" style={prism}>
              {`// specify height in pixels. defaults to 50px.
height?: number

// plot children components with this y axis constraint.
yRange?: [min<number>, max<number>]

// example
<Frame height={100} yRange={[0, 500]}>
  <Line />
</Frame>
`}
            </SyntaxHighlighter>
            <h2>line</h2>
            <p>
              Plot your series data as a line. Style line with stroke, fill or
              both.
            </p>
            <SyntaxHighlighter language="tsx" style={prism}>
              {`// the list of y data to plot.
data: number[]

// set width in pixels, style as 'dash' or 'solid' and color option
stroke?: Stroke

// solid or gradient fill, with one or many colors. fills area from data line to bottom axis.
fill?: Color

// example
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
`}
            </SyntaxHighlighter>

            {/* // Components

### `<Frame />`

Responsive container for all `data`-needy child components.

- **`height?: number`**
  Optionally specify height in pixels. Defaults to `50px`.

- **`range?: [min<number>, max<number>]`**
  Optionally plot `children` components with this y axis constraint.

**Example**

```jsx
<Frame height={100} range={[0, 500]}>
  <Line />
</Frame>
```

---

### `<Line />`

Plot your series data as a line. Style line with `stroke`, `fill` or both.

- **`data: number[]`**
  The list of `y` data to plot.

- **`stroke?: Stroke`**
  Set `width` in pixels, `style` as `'dash'` or `'solid'` and color option.

- **`fill?: Color`**
  Solid or gradient fill, with one or many colors. Fills area from data line to bottom axis.

**Example**

```jsx
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
`} 
  </SyntaxHighlighter>*/}
          </div>
        </div>
      </main>

      <footer>
        <a href="/">
          <h3>home</h3>
        </a>

        <a href="/documentation">
          <h3>documentation</h3>
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0 0 5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          padding-bottom: 100px;
          width: 100%;
          height: 100px;
          //border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          padding: 5px 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 100px 0 0;
          line-height: 1.15;
          font-size: 3rem;
          // text-transform: uppercase;
          // height: 150px;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 0.9rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          // display: flex;
          // align-items: center;
          // justify-content: center;
          // flex-wrap: wrap;
          display: grid;
          grid-template-columns: 380px 1140px;
          max-width: 100vw;
          margin-top: 3rem;
        }

        .col2 {
          margin-top: 75px;
        }

        //.grid > *,
        .card {
          // min-width: 320px;
          // max-width: 380px;
          margin: 1rem;
          // flex-basis: 25%;
          padding: 1.5rem;
          //align-self: flex-start;
          box-sizing: border-box;
        }

        .card pre {
          height: 240px;
          overflow-y: scroll;
        }

        .card.primo {
          //align-self: center;
          color: #444;
          text-transform: lowercase;
          position: relative;
          margin-right: 7rem;
          margin-top: 2.5rem;
        }

        h3 {
          font-weight: normal;
          margin-top: 60px;
          text-decoration: underline;
        }

        h2,
        h3 {
          color: #444;
        }

        .col2 > h2 ~ h2 {
          margin-top: 6rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #fffaf0;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Docs;
