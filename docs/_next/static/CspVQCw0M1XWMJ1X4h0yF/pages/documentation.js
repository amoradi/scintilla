(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "5UNB": function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n("MX0m"),
        a = n.n(i),
        s = n("q1tI"),
        o = n.n(s),
        l = n("8Kt/"),
        r = n.n(l),
        c = n("uUdh"),
        x = n("c2c2"),
        m = o.a.createElement;
      t.default = function() {
        return m(
          "div",
          { className: "jsx-1057303148 container" },
          m(
            r.a,
            null,
            m("title", { className: "jsx-1057303148" }, "scintilla")
          ),
          m(
            "main",
            { className: "jsx-1057303148" },
            m(
              "div",
              { className: "jsx-1057303148 grid" },
              m(
                "div",
                { className: "jsx-1057303148 card primo" },
                m("h1", { className: "jsx-1057303148 title" }, "Scintilla"),
                m(
                  "p",
                  { className: "jsx-1057303148 description" },
                  "A React sparklines component"
                ),
                m(
                  "h3",
                  { className: "jsx-1057303148 description" },
                  m(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla",
                      className: "jsx-1057303148"
                    },
                    "home"
                  )
                ),
                m(
                  "h3",
                  { className: "jsx-1057303148 description" },
                  m(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla/documentation",
                      className: "jsx-1057303148"
                    },
                    "documentation"
                  )
                ),
                m(
                  "h3",
                  { className: "jsx-1057303148 description" },
                  m(
                    "a",
                    {
                      href: "https://github.com/amoradi/scintilla",
                      className: "jsx-1057303148"
                    },
                    "repo"
                  )
                )
              ),
              m(
                "div",
                { className: "jsx-1057303148 col2" },
                m("h2", { className: "jsx-1057303148" }, "types"),
                m(
                  c.a,
                  { language: "tsx", style: x.prism },
                  'type RGBA = [0-255, 0-255, 0-255, 0-1]\n\ntype Color = {\n  gradient?: RGBA | RGBA[];\n  solid?: RGBA | RGBA[];\n};\n\ntype Stroke = {\n  width: number;\n  style: "dash" | "solid";\n  color: Color;\n};'
                ),
                m("h2", { className: "jsx-1057303148" }, "frame"),
                m(
                  "p",
                  { className: "jsx-1057303148" },
                  "Responsive container for all data-needy child components."
                ),
                m(
                  c.a,
                  { language: "tsx", style: x.prism },
                  "// specify height in pixels. defaults to 50px.\nheight?: number\n\n// plot children components with this y axis constraint.\nyRange?: [min<number>, max<number>]\n\n// example\n<Frame height={100} yRange={[0, 500]}>\n  <Line />\n</Frame>\n"
                ),
                m("h2", { className: "jsx-1057303148" }, "line"),
                m(
                  "p",
                  { className: "jsx-1057303148" },
                  "Plot your series data as a line. Style line with stroke, fill or both."
                ),
                m(
                  c.a,
                  { language: "tsx", style: x.prism },
                  "// the list of y data to plot.\ndata: number[]\n\n// set width in pixels, style as 'dash' or 'solid' and color option\nstroke?: Stroke\n\n// solid or gradient fill, with one or many colors. fills area from data line to bottom axis.\nfill?: Color\n\n// example\n<Frame>\n  <Line\n    data={[-1, 2, 6, 9, 11, 21]}\n    stroke={{\n      width: 1,\n      style: \"dash\",\n      color: {\n        solid: [\n          [255, 0, 0, 0.25],\n          [255, 0, 0, 0.5],\n          [255, 0, 0, 0.1]\n        ]\n      }\n    }}\n    fill={{\n      gradient: [\n        [255, 0, 0, 0.1],\n        [255, 0, 0, 1]\n      ]\n    }}\n  />\n</Frame>\n"
                )
              )
            )
          ),
          m(
            "footer",
            { className: "jsx-1057303148" },
            m(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/",
                className: "jsx-1057303148"
              },
              m("h3", { className: "jsx-1057303148" }, "home")
            ),
            m(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/documentation",
                className: "jsx-1057303148"
              },
              m("h3", { className: "jsx-1057303148" }, "documentation")
            ),
            m(
              "a",
              {
                href: "https://github.com/amoradi/scintilla",
                className: "jsx-1057303148"
              },
              "repo"
            )
          ),
          m(a.a, { id: "2533212645" }, [
            ".container.jsx-1057303148{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "main.jsx-1057303148{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-1057303148{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-1057303148 img.jsx-1057303148{margin-left:0.5rem;}",
            "footer.jsx-1057303148 a.jsx-1057303148{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "a.jsx-1057303148{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",
            ".title.jsx-1057303148 a.jsx-1057303148{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",
            ".title.jsx-1057303148 a.jsx-1057303148:hover,.title.jsx-1057303148 a.jsx-1057303148:focus,.title.jsx-1057303148 a.jsx-1057303148:active{-webkit-text-decoration:underline;text-decoration:underline;}",
            ".title.jsx-1057303148{margin:100px 0 0;line-height:1.15;font-size:3rem;}",
            ".title.jsx-1057303148,.description.jsx-1057303148{text-align:center;}",
            ".description.jsx-1057303148{line-height:1.5;font-size:0.9rem;}",
            "code.jsx-1057303148{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",
            ".grid.jsx-1057303148{display:grid;grid-template-columns:380px 1140px;max-width:100vw;margin-top:3rem;}",
            ".col2.jsx-1057303148{margin-top:75px;}",
            ".card.jsx-1057303148{margin:1rem;padding:1.5rem;box-sizing:border-box;}",
            ".card.jsx-1057303148 pre.jsx-1057303148{height:240px;overflow-y:scroll;}",
            ".card.primo.jsx-1057303148{color:#444;text-transform:lowercase;position:relative;margin-right:7rem;margin-top:2.5rem;}",
            "h3.jsx-1057303148{font-weight:normal;margin-top:60px;-webkit-text-decoration:underline;text-decoration:underline;}",
            "h3.jsx-1057303148~h3.jsx-1057303148{margin-top:0px;}",
            "h2.jsx-1057303148,h3.jsx-1057303148{color:#444;}",
            ".col2.jsx-1057303148>h2.jsx-1057303148~h2.jsx-1057303148{margin-top:6rem;}",
            "@media (max-width:600px){.grid.jsx-1057303148{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"
          ]),
          m(a.a, { id: "587275360" }, [
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}",
            "*{box-sizing:border-box;}"
          ])
        );
      };
    },
    gbwl: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation",
        function() {
          return n("5UNB");
        }
      ]);
    }
  },
  [["gbwl", 1, 2, 0, 3]]
]);
