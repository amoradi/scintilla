import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Frame, Line, Marker } from "scintilla";

export const DefaultLine = ({ codeString, Example }) => {
  return (
    <div>
      <div style={{ height: "50px", width: "120px", margin: "0 auto" }}>
        <Example />
      </div>
      <div
        style={{
          fontSize: "12px",
          marginTop: "40px",
          maxHeight: "240px",
          overflowY: "scroll"
        }}
      >
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
          <Marker
            color={[255, 0, 0, 1]}
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
            index={18}
            shape={"circle"}
            size={5}
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
              color: { solid: [41, 241, 195, 0.7] },
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
          color: { solid: [41, 241, 195, 0.7] },
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
              color: { solid: [255, 0, 0, 0.7] },
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
          color: { solid: [255, 0, 0, 0.7] },
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
                  [35, 203, 167, 1]
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
          color: { solid: [[255, 0, 0, 1], [0, 140, 255, 1], [35, 203, 167, 1]]  },
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
              color: { solid: [20, 20, 20, 0.4] },
              width: 2,
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
          color: { solid: [20, 20, 20, 0.4] },
          width: 2,
          style: "solid"
        }}
        fill={{ solid: [20, 20, 20, 0.2] }}
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
              color: { solid: [255, 0, 0, 0.7] },
              width: 1,
              style: "solid"
            }}
            fill={{ solid: [255, 0, 0, 0.7] }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[34, 50]}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        stroke={{
          color: { solid: [255, 0, 0, 0.7] },
          width: 1,
          style: "solid"
        }}
        fill={{ solid: [255, 0, 0, 0.7] }}
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
            fill={{
              solid: [
                [145, 61, 136, 1],
                [20, 20, 20, 0.6],
                [255, 0, 0, 0.7]
              ]
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[34, 50]}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        fill={{ solid: [[145, 61, 136, 1],[20, 20, 20, 0.6], [255, 0, 0, 0.7]] }}
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
            fill={{
              gradient: [
                [242, 120, 75, 1],
                [244, 208, 63, 1]
              ]
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[34, 50]}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        fill={{ gradient: [[242, 120, 75, 1], [244, 208, 63, 1]] }}
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
            fill={{
              gradient: [
                [38, 194, 129, 1],
                [0, 230, 64, 1],
                [0, 230, 64, 1]
              ]
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[34, 50]}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        fill={{ gradient: [[38, 194, 129, 1], [0, 230, 64, 1], [0, 230, 64, 1]] }}
      />
    </Frame>
  `
    ],
    [
      () => (
        <Frame height={40} yRange={[34, 54]}>
          <Line
            data={[
              41,
              42,
              39,
              43,
              43,
              43,
              44,
              45,
              46,
              48,
              49,
              49,
              50,
              52,
              52,
              53,
              53,
              54
            ]}
            fill={{ solid: [246, 36, 89, 1] }}
          />
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
            fill={{ solid: [238, 238, 0, 1] }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[34, 54]}>
      <Line
        data={[ 41, 42, 39, 43, 43, 43, 44, 45, 46, 48, 49, 49, 50, 52, 52, 53, 53, 54 ]}
        fill={{ solid: [246, 36, 89, 1] }}
      />
      <Line
        data={[ 40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49 ]}
        fill={{ solid: [238, 238, 0, 1] }}
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
          />
          <Line
            data={[38, 42, 45, 49, 50, 48, 47]}
            stroke={{
              color: { solid: [20, 20, 20, 1] },
              width: 1,
              style: "solid"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40} >
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        stroke={{
          color: { solid: [20, 20, 20, 1] },
          width: 1,
          style: "solid"
        }}
      />
      <Line
        data={[ 38, 42, 45, 49, 50, 48, 47 ]}
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
        <Frame height={40} yRange={[35, 50]}>
          <Line
            data={[38, 42, 45, 49, 48.5, 47, 44]}
            fill={{ solid: [3, 201, 169, 0.5] }}
          />
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
              color: { solid: [165, 55, 253, 0.8] },
              width: 1,
              style: "solid"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[35, 50]}>
      <Line
        data={[ 38, 42, 45, 49, 48.5, 47, 44 ]}
        fill={{ solid: [3, 201, 169, 0.5]}}
      />
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        stroke={{
          color: { solid: [20, 20, 20, 0.7] },
          width: 1,
          style: "solid"
        }}
      />
    </Frame>
  `
    ],
    [
      () => (
        <Frame height={40} yRange={[32, 60]}>
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
          <Line
            data={[45, 43, 47, 52, 53, 56, 57]}
            stroke={{
              color: { solid: [255, 0, 0, 1] },
              width: 1,
              style: "dash"
            }}
          />
          <Line
            data={[34, 32, 34, 38, 41, 43, 43]}
            stroke={{
              color: { solid: [41, 241, 195, 1] },
              width: 1,
              style: "dash"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[32, 60]}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        stroke={{
          color: { solid: [20, 20, 20, 1] },
          width: 1,
          style: "solid"
        }}
      />
      <Line
        data={[ 45, 43, 47, 52, 53, 56, 57 ]}
        stroke={{
          color: { solid: [255, 0, 0, 1] },
          width: 1,
          style: "dash"
        }}
      />
      <Line
        data={[ 34, 32, 34, 38, 41, 43, 43 ]}
        stroke={{
          color: { solid: [41, 241, 195, 1] },
          width: 1,
          style: "dash"
        }}
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
          />
          <Line
            data={[42, 42]}
            stroke={{
              color: { solid: [20, 20, 20, 0.5] },
              width: 1,
              style: "dash"
            }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[34, 50]}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        stroke={{
          color: { solid: [20, 20, 20, 1] },
          width: 1,
          style: "solid"
        }}
      />
      <Line
        data={[ 42, 42 ]}
        stroke={{
          color: { solid: [20, 20, 20, 0.5] },
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
            fill={{ solid: [255, 0, 0, 0.6] }}
          />
          <Line
            data={[38, 43, 45, 44, 43, 42, 40]}
            fill={{ solid: [83, 51, 237, 0.4] }}
          />
        </Frame>
      ),
      `
    <Frame height={40}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        fill={{ solid: [255, 0, 0, 0.6]}}
      />
      <Line
        data={[ 38, 43, 45, 44, 43, 42, 40 ]}
        fill={{ solid: [83, 51, 237, 0.4]}}
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
            fill={{ solid: [137, 196, 244, 1] }}
          />
          <Line data={[44, 44]} fill={{ solid: [255, 255, 255, 0.5] }} />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[34, 50]}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        fill={{ solid: [137, 196, 244, 1]}}
      />
      <Line
        data={[ 44, 44 ]}
        fill={{ solid: [120, 120, 120, 0.5] }}
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
            fill={{ solid: [46, 204, 113, 0.6] }}
          />
          <Line
            data={[42, 43, 45, 44, 43, 40, 40]}
            fill={{
              solid: [
                [83, 51, 237, 0.5],
                [83, 51, 237, 0.2]
              ]
            }}
          />
          <Line
            data={[36, 36.25, 37.5, 38, 39, 38, 37]}
            fill={{ solid: [255, 255, 126, 0.8] }}
          />
        </Frame>
      ),
      `
    <Frame height={40} yRange={[34, 50]}>
      <Line
        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}
        fill={{ solid: [46, 204, 113, 0.6]}}
      />
      <Line
        data={[ 42, 43, 45, 44, 43, 40, 40]}
        fill={{ solid: [[83, 51, 237, 0.5], [83, 51, 237, 0.2]]}}
      />
      <Line
        data={[ 36, 36.25, 37.5, 38, 39, 38, 37]}
        fill={{ solid: [255, 255, 126, 0.8]}}
      />
    </Frame>
  `
    ]
  ];

  return tuple;
};

export { Master };
