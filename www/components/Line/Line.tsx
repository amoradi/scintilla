import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Frame, Line } from "scintilla";

const Example = () => (
  <Frame>
    <Line
      data={[40, 35, 36, 41, 47, 50, 49, 48, 55, 60]}
      stroke={{
        color: { solid: [255, 0, 0, 1] },
        width: 2,
        style: "solid"
      }}
    />
  </Frame>
);

const DefaultLine = () => {
  const codeString = `
  <Frame>
    <Line
      data={[40, 35, 36, 41, 47, 50, 49, 48, 55, 60]}
      stroke={{
        color: { solid: [255, 0, 0, 1] },
        width: 2,
        style: "solid"
      }}
    />
  </Frame>
  `;

  return (
    <div>
      <div style={{ height: "70px", width: "100px", margin: "0 auto" }}>
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

export { DefaultLine };
