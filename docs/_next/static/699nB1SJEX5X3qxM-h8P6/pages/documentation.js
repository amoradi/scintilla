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
        l = t("8Kt/"),
        r = t.n(l),
        c = t("uUdh"),
        x = t("c2c2"),
        m = o.a.createElement;
      n.default = function() {
        return m(
          "div",
          { className: "jsx-4193775242 container" },
          m(
            r.a,
            null,
            m("title", { className: "jsx-4193775242" }, "scintilla")
          ),
          m(
            "main",
            { className: "jsx-4193775242" },
            m(
              "div",
              { className: "jsx-4193775242 grid" },
              m(
                "div",
                { className: "jsx-4193775242 card primo" },
                m("h1", { className: "jsx-4193775242 title" }, "Scintilla"),
                m(
                  "p",
                  { className: "jsx-4193775242 description" },
                  "A React sparklines component"
                ),
                m(
                  "h3",
                  { className: "jsx-4193775242 description" },
                  m(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla/",
                      className: "jsx-4193775242"
                    },
                    "home"
                  )
                )
              ),
              m(
                "div",
                { className: "jsx-4193775242 col2" },
                m("h2", { className: "jsx-4193775242" }, "types"),
                m(
                  c.a,
                  { language: "tsx", style: x.prism },
                  'type RGBA = [0-255, 0-255, 0-255, 0-1]\n\ntype Color = {\n  gradient?: RGBA | RGBA[];\n  solid?: RGBA | RGBA[];\n};\n\ntype Stroke = {\n  width: number;\n  style: "dash" | "solid";\n  color: Color;\n};'
                ),
                m("h2", { className: "jsx-4193775242" }, "frame"),
                m(
                  "p",
                  { className: "jsx-4193775242" },
                  "Responsive container for all data-needy child components."
                ),
                m(
                  c.a,
                  { language: "tsx", style: x.prism },
                  "// specify height in pixels. defaults to 50px.\nheight?: number\n\n// plot children components with this y axis constraint.\nyRange?: [min<number>, max<number>]\n\n// example\n<Frame height={100} yRange={[0, 500]}>\n  <Line />\n</Frame>\n"
                ),
                m("h2", { className: "jsx-4193775242" }, "line"),
                m(
                  "p",
                  { className: "jsx-4193775242" },
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
            { className: "jsx-4193775242" },
            m(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/",
                className: "jsx-4193775242"
              },
              m("h3", { className: "jsx-4193775242" }, "home")
            ),
            m(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/documentation",
                className: "jsx-4193775242"
              },
              m("h3", { className: "jsx-4193775242" }, "documentation")
            )
          ),
          m(a.a, { id: "3997509827" }, [
            ".container.jsx-4193775242{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "main.jsx-4193775242{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-4193775242{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-4193775242 img.jsx-4193775242{margin-left:0.5rem;}",
            "footer.jsx-4193775242 a.jsx-4193775242{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "a.jsx-4193775242{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",
            ".title.jsx-4193775242 a.jsx-4193775242{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",
            ".title.jsx-4193775242 a.jsx-4193775242:hover,.title.jsx-4193775242 a.jsx-4193775242:focus,.title.jsx-4193775242 a.jsx-4193775242:active{-webkit-text-decoration:underline;text-decoration:underline;}",
            ".title.jsx-4193775242{margin:100px 0 0;line-height:1.15;font-size:3rem;}",
            ".title.jsx-4193775242,.description.jsx-4193775242{text-align:center;}",
            ".description.jsx-4193775242{line-height:1.5;font-size:0.9rem;}",
            "code.jsx-4193775242{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",
            ".grid.jsx-4193775242{display:grid;grid-template-columns:380px 1140px;max-width:100vw;margin-top:3rem;}",
            ".col2.jsx-4193775242{margin-top:75px;}",
            ".card.jsx-4193775242{margin:1rem;padding:1.5rem;box-sizing:border-box;}",
            ".card.jsx-4193775242 pre.jsx-4193775242{height:240px;overflow-y:scroll;}",
            ".card.primo.jsx-4193775242{color:#444;text-transform:lowercase;position:relative;margin-right:7rem;margin-top:2.5rem;}",
            "h3.jsx-4193775242{font-weight:normal;margin-top:60px;-webkit-text-decoration:underline;text-decoration:underline;}",
            "h2.jsx-4193775242,h3.jsx-4193775242{color:#444;}",
            ".col2.jsx-4193775242>h2.jsx-4193775242~h2.jsx-4193775242{margin-top:6rem;}",
            "@media (max-width:600px){.grid.jsx-4193775242{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"
          ]),
          m(a.a, { id: "587275360" }, [
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}",
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
