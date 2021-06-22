(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "5UNB": function(e, n, t) {
      "use strict";
      t.r(n);
      var i = t("MX0m"),
        a = t.n(i),
        s = t("q1tI"),
        o = t.n(s),
        r = t("8Kt/"),
        l = t.n(r),
        c = t("uUdh"),
        d = t("c2c2"),
        m = o.a.createElement;
      n.default = function() {
        return m(
          "div",
          { className: "jsx-1529350720 container" },
          m(
            l.a,
            null,
            m("title", { className: "jsx-1529350720" }, "scintilla")
          ),
          m(
            "main",
            { className: "jsx-1529350720" },
            m(
              "div",
              { className: "jsx-1529350720 grid" },
              m(
                "div",
                { className: "jsx-1529350720 card primo" },
                m(
                  "a",
                  {
                    href: "https://amoradi.github.io/scintilla",
                    className: "jsx-1529350720"
                  },
                  m("h1", { className: "jsx-1529350720 title" }, "Scintilla"),
                  m(
                    "p",
                    { className: "jsx-1529350720 description" },
                    "react sparklines"
                  )
                ),
                m(
                  "h3",
                  { className: "jsx-1529350720 description" },
                  m(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla",
                      className: "jsx-1529350720"
                    },
                    "home"
                  )
                ),
                m(
                  "h3",
                  { className: "jsx-1529350720 description" },
                  m(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla/documentation",
                      className: "jsx-1529350720"
                    },
                    "documentation"
                  )
                ),
                m(
                  "h3",
                  { className: "jsx-1529350720 description" },
                  m(
                    "a",
                    {
                      href: "https://github.com/amoradi/scintilla",
                      className: "jsx-1529350720"
                    },
                    "repository"
                  )
                )
              ),
              m(
                "div",
                { className: "jsx-1529350720 col2" },
                m("h2", { className: "jsx-1529350720" }, "types"),
                m(
                  c.a,
                  { language: "tsx", style: d.prism },
                  'type RGBA = [0-255, 0-255, 0-255, 0-1]\n\ntype Color = {\n  gradient?: RGBA | RGBA[];\n  solid?: RGBA | RGBA[];\n};\n\ntype Stroke = {\n  width: number;\n  style: "dash" | "solid";\n  color: Color;\n};'
                ),
                m("h2", { className: "jsx-1529350720" }, "Frame"),
                m(
                  "p",
                  { className: "jsx-1529350720" },
                  "Responsive container for all data-needy child components. wrap frame in your own container to constrain width."
                ),
                m(
                  c.a,
                  { language: "tsx", style: d.prism },
                  "// specify height in pixels. defaults to 50px.\nheight?: number\n\n// plot children components with this y axis constraint.\nyRange?: [min<number>, max<number>]\n\n// example\n// wrap frame in your own container to constrain width\n<div style={{ width: '100px' }}>\n  <Frame height={100} yRange={[0, 500]}>\n    <Line />\n  </Frame>\n</div>\n"
                ),
                m("h2", { className: "jsx-1529350720" }, "Line"),
                m(
                  "p",
                  { className: "jsx-1529350720" },
                  "Plot your series data as a line. Style line with stroke, fill or both."
                ),
                m(
                  c.a,
                  { language: "tsx", style: d.prism },
                  "// the list of y data to plot.\ndata: number[]\n\n// set width in pixels, style as 'dash' or 'solid' and color option\nstroke?: Stroke\n\n// solid or gradient fill, with one or many colors. fills area from data line to bottom axis.\nfill?: Color\n\n// example\n<div style={{ width: '100px' }}>\n  <Frame>\n    <Line\n      data={[-1, 2, 6, 9, 11, 21]}\n      stroke={{\n        width: 1,\n        style: \"dash\",\n        color: {\n          solid: [\n            [255, 0, 0, 0.25],\n            [255, 0, 0, 0.5],\n            [255, 0, 0, 0.1]\n          ]\n        }\n      }}\n      fill={{\n        gradient: [\n          [255, 0, 0, 0.1],\n          [255, 0, 0, 1]\n        ]\n      }}\n    />\n  </Frame>\n</div>\n"
                ),
                m("h2", { className: "jsx-1529350720" }, "Marker"),
                m(
                  "p",
                  { className: "jsx-1529350720" },
                  "Circular marker positioned at data[index]."
                ),
                m(
                  c.a,
                  { language: "tsx", style: d.prism },
                  "// the list of y data marker will render from\ndata: number[]\n\n// rgba fill color\ncolor: RGBA\n\n// position marker at data[index]. if ommited, defaults to last index.\nindex: number\n\n// diameter of marker circle in pixels\nsize: numer<1-10>\n\n// example\n<div style={{ width: '100px' }}>\n  <Frame>\n    <Line\n      data={[-1, 2, 6, 9, 11, 21]}\n      fill={{\n        gradient: [\n          [255, 0, 0, 0.1],\n          [255, 0, 0, 1]\n        ]\n      }}\n    />\n    {/* 2 red markers, at 5th and last index */}\n    <marker\n      data={[-1, 2, 6, 9, 11, 21]}\n      color={[255,0,0,1]}\n      size={5}\n      index={5}\n    />\n    <marker\n      data={[-1, 2, 6, 9, 11, 21]}\n      color={[255,0,0,1]}\n      size={5}\n    />\n  </Frame>\n</div>\n"
                )
              )
            )
          ),
          m(
            "footer",
            { className: "jsx-1529350720" },
            m(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/",
                className: "jsx-1529350720 link"
              },
              "home"
            ),
            m(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/documentation",
                className: "jsx-1529350720 link"
              },
              "documentation"
            ),
            m(
              "a",
              {
                href: "https://github.com/amoradi/scintilla",
                className: "jsx-1529350720 link"
              },
              "repository"
            )
          ),
          m(a.a, { id: "2886363299" }, [
            ".container.jsx-1529350720{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "main.jsx-1529350720{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-1529350720{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-1529350720 img.jsx-1529350720{margin-left:0.5rem;}",
            "footer.jsx-1529350720 a.jsx-1529350720{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "a.jsx-1529350720{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",
            ".link.jsx-1529350720{-webkit-text-decoration:underline;text-decoration:underline;}",
            ".title.jsx-1529350720 a.jsx-1529350720{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",
            ".title.jsx-1529350720 a.jsx-1529350720:hover,.title.jsx-1529350720 a.jsx-1529350720:focus,.title.jsx-1529350720 a.jsx-1529350720:active{-webkit-text-decoration:underline;text-decoration:underline;}",
            ".title.jsx-1529350720{margin:100px 0 0;line-height:1.15;font-size:3rem;}",
            ".title.jsx-1529350720,.description.jsx-1529350720{text-align:center;}",
            ".description.jsx-1529350720{line-height:1.5;font-size:0.9rem;}",
            "code.jsx-1529350720{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",
            ".grid.jsx-1529350720{display:grid;grid-template-columns:380px 1140px;max-width:100vw;margin-top:3rem;}",
            ".col2.jsx-1529350720{margin-top:75px;}",
            ".card.jsx-1529350720{margin:1rem;padding:1.5rem;box-sizing:border-box;}",
            ".card.jsx-1529350720 pre.jsx-1529350720{height:240px;overflow-y:scroll;}",
            ".card.primo.jsx-1529350720{color:#444;text-transform:lowercase;position:relative;margin-right:7rem;margin-top:2.5rem;}",
            "h3.jsx-1529350720{font-weight:normal;margin-top:60px;margin-bottom:0;-webkit-text-decoration:underline;text-decoration:underline;}",
            "h3.jsx-1529350720~h3.jsx-1529350720{margin-top:0px;}",
            "h2.jsx-1529350720,h3.jsx-1529350720{color:#444;}",
            ".col2.jsx-1529350720>h2.jsx-1529350720~h2.jsx-1529350720{margin-top:6rem;}",
            "@media (max-width:600px){.grid.jsx-1529350720{display:block;width:calc(100% - 100px);}.card.primo.jsx-1529350720{margin:1rem;}}"
          ]),
          m(a.a, { id: "2365206794" }, [
            "html,body{background-color:#fff;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}",
            "*{box-sizing:border-box;}"
          ])
        );
      };
    },
    gbwl: function(e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation",
        function() {
          return t("5UNB");
        }
      ]);
    }
  },
  [["gbwl", 1, 2, 0, 3]]
]);
