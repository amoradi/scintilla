import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Frame, Line } from "scintilla";

// stroke variation
// - solid
// - width
// - single solid
// - multi solid color
// - multi gradient color

// - dashed
// - width
// - single solid
// - multi solid color
// - multi gradient color

// fill

// solid
// one color
// 2 multicolors

// gradient
// 2, 3

export const DefaultLine = ({ codeString, Example }) => {
  return (
    <div>
      <div style={{ height: "50px", width: "120px", margin: "0 auto" }}>
        <Example />
      </div>
      <div style={{ fontSize: "12px", marginTop: "40px" }}>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const Master = () => {
  const tuple = [
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: { solid: [20, 20, 20, 1] },
              width: 1,
              style: "solid"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [20, 20, 20, 1] },
        width: 1,
        style: "solid"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: { solid: [20, 20, 20, 1] },
              width: 3,
              style: "solid"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [20, 20, 20, 1] },
        width: 3,
        style: "solid"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: { solid: [255, 0, 0, 1] },
              width: 2,
              style: "solid"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [255, 0, 0, 1] },
        width: 2,
        style: "solid"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: {
                solid: [
                  [255, 0, 0, 1],
                  [0, 140, 255, 1],
                  [20, 128, 20, 1]
                ]
              },
              width: 2,
              style: "solid"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [[255, 0, 0, 1], [0, 140, 255, 1], [20, 128, 20, 1]]  },
        width: 2,
        style: "solid"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: {
                gradient: [
                  [255, 148, 255, 0.5],
                  [255, 0, 255, 1]
                ]
              },
              width: 2,
              style: "solid"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { gradient: [[255, 148, 255, 0.5], [255, 0, 255, 1]] },
        width: 2,
        style: "solid"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: { solid: [20, 20, 20, 1] },
              width: 1,
              style: "dash"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [20, 20, 20, 1] },
        width: 1,
        style: "dash"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: { solid: [255, 0, 0, 1] },
              width: 1,
              style: "dash"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [255, 0, 0, 1] },
        width: 1,
        style: "dash"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: {
                solid: [
                  [255, 0, 0, 1],
                  [0, 140, 255, 1],
                  [20, 128, 20, 1]
                ]
              },
              width: 1,
              style: "dash"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [[255, 0, 0, 1], [0, 140, 255, 1], [20, 128, 20, 1]]  },
        width: 1,
        style: "dash"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: {
                gradient: [
                  [255, 148, 255, 0.5],
                  [255, 0, 255, 1]
                ]
              },
              width: 1,
              style: "dash"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { gradient: [[255, 148, 255, 0.5], [255, 0, 255, 1]] },
        width: 1,
        style: "dash"
      }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: { solid: [20, 20, 20, 1] },
              width: 1,
              style: "solid"
            }}
            fill={{ solid: [20, 20, 20, 1] }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [20, 20, 20, 1] },
        width: 1,
        style: "solid"
      }}
      fill={{ solid: [20, 20, 20, 1] }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: { solid: [20, 20, 20, 1] },
              width: 1,
              style: "solid"
            }}
            fill={{ solid: [20, 20, 20, 0.2] }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [20, 20, 20, 1] },
        width: 1,
        style: "solid"
      }}
      fill={{ solid: [20, 20, 20, 1] }}
    />
  </Frame>
  `
    ],
    [
      () => (
        <Frame height={40} yRange={[34, 50]}>
          <Line
            data={[
              40,
              39,
              37,
              39,
              39,
              40,
              41,
              42,
              43,
              46,
              47,
              48,
              48,
              50,
              49,
              48,
              48,
              49
            ]}
            stroke={{
              color: { solid: [20, 20, 20, 1] },
              width: 1,
              style: "solid"
            }}
            fill={{ solid: [20, 20, 20, 0.2] }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
    <Line
      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
      stroke={{
        color: { solid: [20, 20, 20, 1] },
        width: 1,
        style: "solid"
      }}
      fill={{ solid: [20, 20, 20, 1] }}
    />
  </Frame>
  `
    ]
  ];

  return tuple;
};

export { Master };
