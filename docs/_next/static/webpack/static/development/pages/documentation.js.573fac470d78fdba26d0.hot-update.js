webpackHotUpdate("static/development/pages/documentation.js", {
  /***/ "./pages/documentation.js":
    /*!********************************!*\
  !*** ./pages/documentation.js ***!
  \********************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! styled-jsx/style */ "./node_modules/styled-jsx/style.js"
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! next/head */ "./node_modules/next/dist/next-server/lib/head.js"
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js"
      );
      /* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js"
      );
      /* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__
      );
      var _jsxFileName =
        "/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js";

      var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

      const Docs = () => {
        return __jsx(
          "div",
          {
            className: "jsx-3811075568" + " " + "container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            },
            __self: undefined
          },
          __jsx(
            next_head__WEBPACK_IMPORTED_MODULE_2___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              },
              __self: undefined
            },
            __jsx(
              "title",
              {
                className: "jsx-3811075568",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9
                },
                __self: undefined
              },
              "scintilla"
            )
          ),
          __jsx(
            "main",
            {
              className: "jsx-3811075568",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: undefined
            },
            __jsx(
              "div",
              {
                className: "jsx-3811075568" + " " + "grid",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: undefined
              },
              __jsx(
                "div",
                {
                  className: "jsx-3811075568" + " " + "card primo",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: undefined
                },
                __jsx(
                  "h1",
                  {
                    className: "jsx-3811075568" + " " + "title",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: undefined
                  },
                  "Scintilla"
                ),
                __jsx(
                  "p",
                  {
                    className: "jsx-3811075568" + " " + "description",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: undefined
                  },
                  "A React sparklines component"
                ),
                __jsx(
                  "h3",
                  {
                    className: "jsx-3811075568" + " " + "description",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: undefined
                  },
                  __jsx(
                    "a",
                    {
                      href: "/",
                      className: "jsx-3811075568",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: undefined
                    },
                    "home"
                  )
                )
              ),
              __jsx(
                "div",
                {
                  className: "jsx-3811075568" + " " + "col2",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: undefined
                },
                __jsx(
                  "h2",
                  {
                    className: "jsx-3811075568",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: undefined
                  },
                  "types"
                ),
                __jsx(
                  react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[
                    "Prism"
                  ],
                  {
                    language: "tsx",
                    style:
                      react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__[
                        "prism"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    },
                    __self: undefined
                  },
                  'type RGBA = [0-255, 0-255, 0-255, 0-1]\n\ntype Color = {\n  gradient?: RGBA | RGBA[];\n  solid?: RGBA | RGBA[];\n};\n\ntype Stroke = {\n  width: number;\n  style: "dash" | "solid";\n  color: Color;\n};'
                ),
                __jsx(
                  "h2",
                  {
                    className: "jsx-3811075568",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: undefined
                  },
                  "frame"
                ),
                __jsx(
                  "p",
                  {
                    className: "jsx-3811075568",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: undefined
                  },
                  "Responsive container for all data-needy child components."
                ),
                __jsx(
                  react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[
                    "Prism"
                  ],
                  {
                    language: "tsx",
                    style:
                      react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__[
                        "prism"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: undefined
                  },
                  "// specify height in pixels. defaults to 50px.\nheight?: number\n\n// plot children components with this y axis constraint.\nrange?: [min<number>, max<number>]\n\n// example\n<Frame height={100} range={[0, 500]}>\n  <Line />\n</Frame>\n"
                ),
                __jsx(
                  "h2",
                  {
                    className: "jsx-3811075568",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    },
                    __self: undefined
                  },
                  "line"
                ),
                __jsx(
                  "p",
                  {
                    className: "jsx-3811075568",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: undefined
                  },
                  "Plot your series data as a line. Style line with stroke, fill or both."
                ),
                __jsx(
                  react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[
                    "Prism"
                  ],
                  {
                    language: "tsx",
                    style:
                      react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__[
                        "prism"
                      ],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: undefined
                  },
                  "// the list of y data to plot.\ndata: number[]\n\n// set width in pixels, style as 'dash' or 'solid' and color option\nstroke?: Stroke\n\n// solid or gradient fill, with one or many colors. fills area from data line to bottom axis.\nfill?: Color\n\n// example\n<Frame>\n  <Line\n    data={[-1, 2, 6, 9, 11, 21]}\n    stroke={{\n      width: 1,\n      style: \"dash\",\n      color: {\n        solid: [\n          [255, 0, 0, 0.25],\n          [255, 0, 0, 0.5],\n          [255, 0, 0, 0.1]\n        ]\n      }\n    }}\n    fill={{\n      gradient: [\n        [255, 0, 0, 0.1],\n        [255, 0, 0, 1]\n      ]\n    }}\n  />\n</Frame>\n"
                )
              )
            )
          ),
          __jsx(
            "footer",
            {
              className: "jsx-3811075568",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: undefined
            },
            __jsx(
              "a",
              {
                href: "/",
                className: "jsx-3811075568",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-3811075568",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                  },
                  __self: undefined
                },
                "home"
              )
            ),
            __jsx(
              "a",
              {
                href: "/documentation",
                className: "jsx-3811075568",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 169
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-3811075568",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  },
                  __self: undefined
                },
                "documentation"
              )
            )
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "567762842",
              __self: undefined
            },
            ".container.jsx-3811075568{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-3811075568{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3811075568{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3811075568 img.jsx-3811075568{margin-left:0.5rem;}footer.jsx-3811075568 a.jsx-3811075568{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3811075568{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3811075568 a.jsx-3811075568{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3811075568 a.jsx-3811075568:hover,.title.jsx-3811075568 a.jsx-3811075568:focus,.title.jsx-3811075568 a.jsx-3811075568:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-3811075568{margin:100px 0 0;line-height:1.15;font-size:3rem;}.title.jsx-3811075568,.description.jsx-3811075568{text-align:center;}.description.jsx-3811075568{line-height:1.5;font-size:0.9rem;}code.jsx-3811075568{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-3811075568{display:grid;grid-template-columns:380px 1140px;max-width:100vw;margin-top:3rem;}.col2.jsx-3811075568{margin-top:75px;}.card.jsx-3811075568{margin:1rem;padding:1.5rem;box-sizing:border-box;}.card.jsx-3811075568 pre.jsx-3811075568{height:240px;overflow-y:scroll;}.card.primo.jsx-3811075568{color:#444;text-transform:lowercase;position:relative;margin-right:7rem;margin-top:2.5rem;}h3.jsx-3811075568{font-weight:normal;margin-top:60px;-webkit-text-decoration:underline;text-decoration:underline;}h2.jsx-3811075568,h3.jsx-3811075568{color:#444;}@media (max-width:600px){.grid.jsx-3811075568{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZLZ0IsQUFHMEIsQUFTQSxBQVNJLEFBVUYsQUFJRixBQU9ILEFBS0EsQUFPWSxBQUlULEFBU0MsQUFJRixBQUtHLEFBYU4sQUFPRyxBQU9KLEFBUUMsQUFNRixBQVFRLEFBTVIsQUFLRSxXQWxCWSxBQWMzQixBQUswQixDQWhDVCxDQWZvQixBQXNCakIsQ0FyRUcsQUFLQSxFQXdCSixBQXlCbkIsQ0E3Rm1CLEFBU1YsQUF1Qk0sQUF1QkksQ0FTbkIsQ0FwQ0EsQUE2Q29CLEFBaURGLEVBeEdMLE1BcUZXLElBTXhCLENBMUZlLENBa0RmLENBcEVlLEFBdURFLENBbUVXLENBUlIsQ0F6Q0YsUUFyREgsR0FrRUcsQ0E1QmxCLEFBNkNBLENBOUZlLEdBaUVJLENBeUNDLE1BakVwQixJQVhBLEFBS0EsQUEyQ2tCLE1BWG9ELEVBd0NsRCxRQTVCcEIsU0E2Q0UsQ0FoQkYsQ0FyRnlCLElBMkZ6QixhQTFId0IsV0FvQkMsS0FYRCw4REFSQyxJQStCSixDQTRDckIsV0FsRXlCLGdCQVdKLGlFQVlyQixFQS9CcUIsZ0JBU0EsVUFXckIsbUVBbkJBLGdCQVNBIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyBwcmlzbSB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtXCI7XG5cbmNvbnN0IERvY3MgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+c2NpbnRpbGxhPC90aXRsZT5cbiAgICAgIHsvKjxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4qL31cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcHJpbW9cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TY2ludGlsbGE8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+QSBSZWFjdCBzcGFya2xpbmVzIGNvbXBvbmVudDwvcD5cblxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgaG9tZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDJcIj5cbiAgICAgICAgPGgyPnR5cGVzPC9oMj5cbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwidHN4XCIgc3R5bGU9e3ByaXNtfT5cbiAgICAgICAgICB7YHR5cGUgUkdCQSA9IFswLTI1NSwgMC0yNTUsIDAtMjU1LCAwLTFdXG5cbnR5cGUgQ29sb3IgPSB7XG4gIGdyYWRpZW50PzogUkdCQSB8IFJHQkFbXTtcbiAgc29saWQ/OiBSR0JBIHwgUkdCQVtdO1xufTtcblxudHlwZSBTdHJva2UgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBcImRhc2hcIiB8IFwic29saWRcIjtcbiAgY29sb3I6IENvbG9yO1xufTtgXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICAgICAgIDxoMj5mcmFtZTwvaDI+XG4gICAgICAgIDxwPlJlc3BvbnNpdmUgY29udGFpbmVyIGZvciBhbGwgZGF0YS1uZWVkeSBjaGlsZCBjb21wb25lbnRzLjwvcD5cbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwidHN4XCIgc3R5bGU9e3ByaXNtfT5cbiAgICAgICAgICB7YC8vIHNwZWNpZnkgaGVpZ2h0IGluIHBpeGVscy4gZGVmYXVsdHMgdG8gNTBweC5cbmhlaWdodD86IG51bWJlclxuXG4vLyBwbG90IGNoaWxkcmVuIGNvbXBvbmVudHMgd2l0aCB0aGlzIHkgYXhpcyBjb25zdHJhaW50LlxucmFuZ2U/OiBbbWluPG51bWJlcj4sIG1heDxudW1iZXI+XVxuXG4vLyBleGFtcGxlXG48RnJhbWUgaGVpZ2h0PXsxMDB9IHJhbmdlPXtbMCwgNTAwXX0+XG4gIDxMaW5lIC8+XG48L0ZyYW1lPlxuYFxufVxuICAgICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuICAgICAgICA8aDI+bGluZTwvaDI+XG4gICAgICAgIDxwPlBsb3QgeW91ciBzZXJpZXMgZGF0YSBhcyBhIGxpbmUuIFN0eWxlIGxpbmUgd2l0aCBzdHJva2UsIGZpbGwgb3IgYm90aC48L3A+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2AvLyB0aGUgbGlzdCBvZiB5IGRhdGEgdG8gcGxvdC5cbmRhdGE6IG51bWJlcltdXG5cbi8vIHNldCB3aWR0aCBpbiBwaXhlbHMsIHN0eWxlIGFzICdkYXNoJyBvciAnc29saWQnIGFuZCBjb2xvciBvcHRpb25cbnN0cm9rZT86IFN0cm9rZVxuXG4vLyBzb2xpZCBvciBncmFkaWVudCBmaWxsLCB3aXRoIG9uZSBvciBtYW55IGNvbG9ycy4gZmlsbHMgYXJlYSBmcm9tIGRhdGEgbGluZSB0byBib3R0b20gYXhpcy5cbmZpbGw/OiBDb2xvclxuXG4vLyBleGFtcGxlXG48RnJhbWU+XG4gIDxMaW5lXG4gICAgZGF0YT17Wy0xLCAyLCA2LCA5LCAxMSwgMjFdfVxuICAgIHN0cm9rZT17e1xuICAgICAgd2lkdGg6IDEsXG4gICAgICBzdHlsZTogXCJkYXNoXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBzb2xpZDogW1xuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuMjVdLFxuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuNV0sXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC4xXVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfX1cbiAgICBmaWxsPXt7XG4gICAgICBncmFkaWVudDogW1xuICAgICAgICBbMjU1LCAwLCAwLCAwLjFdLFxuICAgICAgICBbMjU1LCAwLCAwLCAxXVxuICAgICAgXVxuICAgIH19XG4gIC8+XG48L0ZyYW1lPlxuYFxufVxuICAgICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuXG57LyogLy8gQ29tcG9uZW50c1xuXG4jIyMgYDxGcmFtZSAvPmBcblxuUmVzcG9uc2l2ZSBjb250YWluZXIgZm9yIGFsbCBgZGF0YWAtbmVlZHkgY2hpbGQgY29tcG9uZW50cy5cblxuLSAqKmBoZWlnaHQ/OiBudW1iZXJgKipcbiAgT3B0aW9uYWxseSBzcGVjaWZ5IGhlaWdodCBpbiBwaXhlbHMuIERlZmF1bHRzIHRvIGA1MHB4YC5cblxuLSAqKmByYW5nZT86IFttaW48bnVtYmVyPiwgbWF4PG51bWJlcj5dYCoqXG4gIE9wdGlvbmFsbHkgcGxvdCBgY2hpbGRyZW5gIGNvbXBvbmVudHMgd2l0aCB0aGlzIHkgYXhpcyBjb25zdHJhaW50LlxuXG4qKkV4YW1wbGUqKlxuXG5gYGBqc3hcbjxGcmFtZSBoZWlnaHQ9ezEwMH0gcmFuZ2U9e1swLCA1MDBdfT5cbiAgPExpbmUgLz5cbjwvRnJhbWU+XG5gYGBcblxuLS0tXG5cbiMjIyBgPExpbmUgLz5gXG5cblBsb3QgeW91ciBzZXJpZXMgZGF0YSBhcyBhIGxpbmUuIFN0eWxlIGxpbmUgd2l0aCBgc3Ryb2tlYCwgYGZpbGxgIG9yIGJvdGguXG5cbi0gKipgZGF0YTogbnVtYmVyW11gKipcbiAgVGhlIGxpc3Qgb2YgYHlgIGRhdGEgdG8gcGxvdC5cblxuLSAqKmBzdHJva2U/OiBTdHJva2VgKipcbiAgU2V0IGB3aWR0aGAgaW4gcGl4ZWxzLCBgc3R5bGVgIGFzIGAnZGFzaCdgIG9yIGAnc29saWQnYCBhbmQgY29sb3Igb3B0aW9uLlxuXG4tICoqYGZpbGw/OiBDb2xvcmAqKlxuICBTb2xpZCBvciBncmFkaWVudCBmaWxsLCB3aXRoIG9uZSBvciBtYW55IGNvbG9ycy4gRmlsbHMgYXJlYSBmcm9tIGRhdGEgbGluZSB0byBib3R0b20gYXhpcy5cblxuKipFeGFtcGxlKipcblxuYGBganN4XG48RnJhbWU+XG4gIDxMaW5lXG4gICAgZGF0YT17Wy0xLCAyLCA2LCA5LCAxMSwgMjFdfVxuICAgIHN0cm9rZT17e1xuICAgICAgd2lkdGg6IDEsXG4gICAgICBzdHlsZTogXCJkYXNoXCIsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBzb2xpZDogW1xuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuMjVdLFxuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuNV0sXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC4xXVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfX1cbiAgICBmaWxsPXt7XG4gICAgICBncmFkaWVudDogW1xuICAgICAgICBbMjU1LCAwLCAwLCAwLjFdLFxuICAgICAgICBbMjU1LCAwLCAwLCAxXVxuICAgICAgXVxuICAgIH19XG4gIC8+XG48L0ZyYW1lPlxuYH0gXG4gIDwvU3ludGF4SGlnaGxpZ2h0ZXI+Ki99XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cblxuICAgIDxmb290ZXI+XG4gICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICA8aDM+aG9tZTwvaDM+XG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGhyZWY9XCIvZG9jdW1lbnRhdGlvblwiPlxuICAgICAgICA8aDM+ZG9jdW1lbnRhdGlvbjwvaDM+XG4gICAgICA8L2E+XG4gICAgPC9mb290ZXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCA1cmVtO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgYSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAudGl0bGUgYTpmb2N1cyxcbiAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDEwMHB4IDAgMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlLFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIH1cblxuICAgICAgY29kZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgIH1cblxuICAgICAgLmdyaWQge1xuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4MHB4IDExNDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbDIge1xuICAgICAgICBtYXJnaW4tdG9wOiA3NXB4O1xuICAgICAgfVxuXG4gICAgICAvLy5ncmlkID4gKixcbiAgICAgIC5jYXJkIHtcbiAgICAgICAgLy8gbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiAzODBweDtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAvLyBmbGV4LWJhc2lzOiAyNSU7XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgLy9hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBwcmUge1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLnByaW1vIHtcbiAgICAgICAgLy9hbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogN3JlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICBoMiwgaDMge1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFmMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pfTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jcztcbiJdfQ== */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "3702522083",
              __self: undefined
            },
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBUdUIsQUFJa0MsQUFRSCxzQkFDeEIsR0FSWSxVQUNELFNBRTZELHFJQUN4RSIsImZpbGUiOiIvVXNlcnMvYWFyb25tb3JhZGkvRG9jdW1lbnRzL3Byb2plY3RzL3NjaW50aWxsYS93d3cvcGFnZXMvZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgcHJpc20gfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuXG5jb25zdCBEb2NzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnNjaW50aWxsYTwvdGl0bGU+XG4gICAgICB7Lyo8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+Ki99XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHByaW1vXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2NpbnRpbGxhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkEgUmVhY3Qgc3BhcmtsaW5lcyBjb21wb25lbnQ8L3A+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIGhvbWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyXCI+XG4gICAgICAgIDxoMj50eXBlczwvaDI+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2B0eXBlIFJHQkEgPSBbMC0yNTUsIDAtMjU1LCAwLTI1NSwgMC0xXVxuXG50eXBlIENvbG9yID0ge1xuICBncmFkaWVudD86IFJHQkEgfCBSR0JBW107XG4gIHNvbGlkPzogUkdCQSB8IFJHQkFbXTtcbn07XG5cbnR5cGUgU3Ryb2tlID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICBzdHlsZTogXCJkYXNoXCIgfCBcInNvbGlkXCI7XG4gIGNvbG9yOiBDb2xvcjtcbn07YFxufVxuICAgICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuICAgICAgICA8aDI+ZnJhbWU8L2gyPlxuICAgICAgICA8cD5SZXNwb25zaXZlIGNvbnRhaW5lciBmb3IgYWxsIGRhdGEtbmVlZHkgY2hpbGQgY29tcG9uZW50cy48L3A+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2AvLyBzcGVjaWZ5IGhlaWdodCBpbiBwaXhlbHMuIGRlZmF1bHRzIHRvIDUwcHguXG5oZWlnaHQ/OiBudW1iZXJcblxuLy8gcGxvdCBjaGlsZHJlbiBjb21wb25lbnRzIHdpdGggdGhpcyB5IGF4aXMgY29uc3RyYWludC5cbnJhbmdlPzogW21pbjxudW1iZXI+LCBtYXg8bnVtYmVyPl1cblxuLy8gZXhhbXBsZVxuPEZyYW1lIGhlaWdodD17MTAwfSByYW5nZT17WzAsIDUwMF19PlxuICA8TGluZSAvPlxuPC9GcmFtZT5cbmBcbn1cbiAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cbiAgICAgICAgPGgyPmxpbmU8L2gyPlxuICAgICAgICA8cD5QbG90IHlvdXIgc2VyaWVzIGRhdGEgYXMgYSBsaW5lLiBTdHlsZSBsaW5lIHdpdGggc3Ryb2tlLCBmaWxsIG9yIGJvdGguPC9wPlxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiBzdHlsZT17cHJpc219PlxuICAgICAgICAgIHtgLy8gdGhlIGxpc3Qgb2YgeSBkYXRhIHRvIHBsb3QuXG5kYXRhOiBudW1iZXJbXVxuXG4vLyBzZXQgd2lkdGggaW4gcGl4ZWxzLCBzdHlsZSBhcyAnZGFzaCcgb3IgJ3NvbGlkJyBhbmQgY29sb3Igb3B0aW9uXG5zdHJva2U/OiBTdHJva2VcblxuLy8gc29saWQgb3IgZ3JhZGllbnQgZmlsbCwgd2l0aCBvbmUgb3IgbWFueSBjb2xvcnMuIGZpbGxzIGFyZWEgZnJvbSBkYXRhIGxpbmUgdG8gYm90dG9tIGF4aXMuXG5maWxsPzogQ29sb3JcblxuLy8gZXhhbXBsZVxuPEZyYW1lPlxuICA8TGluZVxuICAgIGRhdGE9e1stMSwgMiwgNiwgOSwgMTEsIDIxXX1cbiAgICBzdHJva2U9e3tcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgc3R5bGU6IFwiZGFzaFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgc29saWQ6IFtcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjI1XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjVdLFxuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuMV1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH19XG4gICAgZmlsbD17e1xuICAgICAgZ3JhZGllbnQ6IFtcbiAgICAgICAgWzI1NSwgMCwgMCwgMC4xXSxcbiAgICAgICAgWzI1NSwgMCwgMCwgMV1cbiAgICAgIF1cbiAgICB9fVxuICAvPlxuPC9GcmFtZT5cbmBcbn1cbiAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cblxuey8qIC8vIENvbXBvbmVudHNcblxuIyMjIGA8RnJhbWUgLz5gXG5cblJlc3BvbnNpdmUgY29udGFpbmVyIGZvciBhbGwgYGRhdGFgLW5lZWR5IGNoaWxkIGNvbXBvbmVudHMuXG5cbi0gKipgaGVpZ2h0PzogbnVtYmVyYCoqXG4gIE9wdGlvbmFsbHkgc3BlY2lmeSBoZWlnaHQgaW4gcGl4ZWxzLiBEZWZhdWx0cyB0byBgNTBweGAuXG5cbi0gKipgcmFuZ2U/OiBbbWluPG51bWJlcj4sIG1heDxudW1iZXI+XWAqKlxuICBPcHRpb25hbGx5IHBsb3QgYGNoaWxkcmVuYCBjb21wb25lbnRzIHdpdGggdGhpcyB5IGF4aXMgY29uc3RyYWludC5cblxuKipFeGFtcGxlKipcblxuYGBganN4XG48RnJhbWUgaGVpZ2h0PXsxMDB9IHJhbmdlPXtbMCwgNTAwXX0+XG4gIDxMaW5lIC8+XG48L0ZyYW1lPlxuYGBgXG5cbi0tLVxuXG4jIyMgYDxMaW5lIC8+YFxuXG5QbG90IHlvdXIgc2VyaWVzIGRhdGEgYXMgYSBsaW5lLiBTdHlsZSBsaW5lIHdpdGggYHN0cm9rZWAsIGBmaWxsYCBvciBib3RoLlxuXG4tICoqYGRhdGE6IG51bWJlcltdYCoqXG4gIFRoZSBsaXN0IG9mIGB5YCBkYXRhIHRvIHBsb3QuXG5cbi0gKipgc3Ryb2tlPzogU3Ryb2tlYCoqXG4gIFNldCBgd2lkdGhgIGluIHBpeGVscywgYHN0eWxlYCBhcyBgJ2Rhc2gnYCBvciBgJ3NvbGlkJ2AgYW5kIGNvbG9yIG9wdGlvbi5cblxuLSAqKmBmaWxsPzogQ29sb3JgKipcbiAgU29saWQgb3IgZ3JhZGllbnQgZmlsbCwgd2l0aCBvbmUgb3IgbWFueSBjb2xvcnMuIEZpbGxzIGFyZWEgZnJvbSBkYXRhIGxpbmUgdG8gYm90dG9tIGF4aXMuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lPlxuICA8TGluZVxuICAgIGRhdGE9e1stMSwgMiwgNiwgOSwgMTEsIDIxXX1cbiAgICBzdHJva2U9e3tcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgc3R5bGU6IFwiZGFzaFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgc29saWQ6IFtcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjI1XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjVdLFxuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuMV1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH19XG4gICAgZmlsbD17e1xuICAgICAgZ3JhZGllbnQ6IFtcbiAgICAgICAgWzI1NSwgMCwgMCwgMC4xXSxcbiAgICAgICAgWzI1NSwgMCwgMCwgMV1cbiAgICAgIF1cbiAgICB9fVxuICAvPlxuPC9GcmFtZT5cbmB9IFxuICA8L1N5bnRheEhpZ2hsaWdodGVyPiovfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgzPmhvbWU8L2gzPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiL2RvY3VtZW50YXRpb25cIj5cbiAgICAgICAgPGgzPmRvY3VtZW50YXRpb248L2gzPlxuICAgICAgPC9hPlxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIG1haW4ge1xuICAgICAgICBwYWRkaW5nOiAwIDAgNXJlbTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGEge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAwIDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG5cbiAgICAgIGNvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkIHtcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzODBweCAxMTQwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIC5jb2wyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICAgIH1cblxuICAgICAgLy8uZ3JpZCA+ICosXG4gICAgICAuY2FyZCB7XG4gICAgICAgIC8vIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgIC8vIG1heC13aWR0aDogMzgwcHg7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgLy8gZmxleC1iYXNpczogMjUlO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgIC8vYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgcHJlIHtcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC5wcmltbyB7XG4gICAgICAgIC8vYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgaDIsIGgzIHtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxuICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3M7XG4iXX0= */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          )
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Docs;

      /***/
    }
});
//# sourceMappingURL=documentation.js.573fac470d78fdba26d0.hot-update.js.map
