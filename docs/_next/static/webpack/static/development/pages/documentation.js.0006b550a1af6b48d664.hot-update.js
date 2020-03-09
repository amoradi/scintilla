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
                      lineNumber: 46
                    },
                    __self: undefined
                  },
                  "// specify height in pixels. defaults to 50px.\nheight?: number\n\n// plot children components with this y axis constraint.\nrange?: [min<number>, max<number>]\n\n// ex.\n<Frame height={100} range={[0, 500]}>\n  <Line />\n</Frame>\n"
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
                lineNumber: 127
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
                  lineNumber: 128
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-3811075568",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
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
                  lineNumber: 132
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-3811075568",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
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
            ".container.jsx-3811075568{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-3811075568{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3811075568{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3811075568 img.jsx-3811075568{margin-left:0.5rem;}footer.jsx-3811075568 a.jsx-3811075568{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3811075568{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3811075568 a.jsx-3811075568{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3811075568 a.jsx-3811075568:hover,.title.jsx-3811075568 a.jsx-3811075568:focus,.title.jsx-3811075568 a.jsx-3811075568:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-3811075568{margin:100px 0 0;line-height:1.15;font-size:3rem;}.title.jsx-3811075568,.description.jsx-3811075568{text-align:center;}.description.jsx-3811075568{line-height:1.5;font-size:0.9rem;}code.jsx-3811075568{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-3811075568{display:grid;grid-template-columns:380px 1140px;max-width:100vw;margin-top:3rem;}.col2.jsx-3811075568{margin-top:75px;}.card.jsx-3811075568{margin:1rem;padding:1.5rem;box-sizing:border-box;}.card.jsx-3811075568 pre.jsx-3811075568{height:240px;overflow-y:scroll;}.card.primo.jsx-3811075568{color:#444;text-transform:lowercase;position:relative;margin-right:7rem;margin-top:2.5rem;}h3.jsx-3811075568{font-weight:normal;margin-top:60px;-webkit-text-decoration:underline;text-decoration:underline;}h2.jsx-3811075568,h3.jsx-3811075568{color:#444;}@media (max-width:600px){.grid.jsx-3811075568{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdJZ0IsQUFHMEIsQUFTQSxBQVNJLEFBVUYsQUFJRixBQU9ILEFBS0EsQUFPWSxBQUlULEFBU0MsQUFJRixBQUtHLEFBYU4sQUFPRyxBQU9KLEFBUUMsQUFNRixBQVFRLEFBTVIsQUFLRSxXQWxCWSxBQWMzQixBQUswQixDQWhDVCxDQWZvQixBQXNCakIsQ0FyRUcsQUFLQSxFQXdCSixBQXlCbkIsQ0E3Rm1CLEFBU1YsQUF1Qk0sQUF1QkksQ0FTbkIsQ0FwQ0EsQUE2Q29CLEFBaURGLEVBeEdMLE1BcUZXLElBTXhCLENBMUZlLENBa0RmLENBcEVlLEFBdURFLENBbUVXLENBUlIsQ0F6Q0YsUUFyREgsR0FrRUcsQ0E1QmxCLEFBNkNBLENBOUZlLEdBaUVJLENBeUNDLE1BakVwQixJQVhBLEFBS0EsQUEyQ2tCLE1BWG9ELEVBd0NsRCxRQTVCcEIsU0E2Q0UsQ0FoQkYsQ0FyRnlCLElBMkZ6QixhQTFId0IsV0FvQkMsS0FYRCw4REFSQyxJQStCSixDQTRDckIsV0FsRXlCLGdCQVdKLGlFQVlyQixFQS9CcUIsZ0JBU0EsVUFXckIsbUVBbkJBLGdCQVNBIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyBwcmlzbSB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtXCI7XG5cbmNvbnN0IERvY3MgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+c2NpbnRpbGxhPC90aXRsZT5cbiAgICAgIHsvKjxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4qL31cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcHJpbW9cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TY2ludGlsbGE8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+QSBSZWFjdCBzcGFya2xpbmVzIGNvbXBvbmVudDwvcD5cblxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgaG9tZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDJcIj5cbiAgICAgICAgPGgyPnR5cGVzPC9oMj5cbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwidHN4XCIgc3R5bGU9e3ByaXNtfT5cbiAgICAgICAgICB7YHR5cGUgUkdCQSA9IFswLTI1NSwgMC0yNTUsIDAtMjU1LCAwLTFdXG5cbnR5cGUgQ29sb3IgPSB7XG4gIGdyYWRpZW50PzogUkdCQSB8IFJHQkFbXTtcbiAgc29saWQ/OiBSR0JBIHwgUkdCQVtdO1xufTtcblxudHlwZSBTdHJva2UgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBcImRhc2hcIiB8IFwic29saWRcIjtcbiAgY29sb3I6IENvbG9yO1xufTtgXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICAgICAgIDxoMj5mcmFtZTwvaDI+XG4gICAgICAgIDxwPlJlc3BvbnNpdmUgY29udGFpbmVyIGZvciBhbGwgZGF0YS1uZWVkeSBjaGlsZCBjb21wb25lbnRzLjwvcD5cblxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiBzdHlsZT17cHJpc219PlxuICAgICAgICAgIHtgLy8gc3BlY2lmeSBoZWlnaHQgaW4gcGl4ZWxzLiBkZWZhdWx0cyB0byA1MHB4LlxuaGVpZ2h0PzogbnVtYmVyXG5cbi8vIHBsb3QgY2hpbGRyZW4gY29tcG9uZW50cyB3aXRoIHRoaXMgeSBheGlzIGNvbnN0cmFpbnQuXG5yYW5nZT86IFttaW48bnVtYmVyPiwgbWF4PG51bWJlcj5dXG5cbi8vIGV4LlxuPEZyYW1lIGhlaWdodD17MTAwfSByYW5nZT17WzAsIDUwMF19PlxuICA8TGluZSAvPlxuPC9GcmFtZT5cbmBcbn1cbiAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cblxuey8qIC8vIENvbXBvbmVudHNcblxuIyMjIGA8RnJhbWUgLz5gXG5cblJlc3BvbnNpdmUgY29udGFpbmVyIGZvciBhbGwgYGRhdGFgLW5lZWR5IGNoaWxkIGNvbXBvbmVudHMuXG5cbi0gKipgaGVpZ2h0PzogbnVtYmVyYCoqXG4gIE9wdGlvbmFsbHkgc3BlY2lmeSBoZWlnaHQgaW4gcGl4ZWxzLiBEZWZhdWx0cyB0byBgNTBweGAuXG5cbi0gKipgcmFuZ2U/OiBbbWluPG51bWJlcj4sIG1heDxudW1iZXI+XWAqKlxuICBPcHRpb25hbGx5IHBsb3QgYGNoaWxkcmVuYCBjb21wb25lbnRzIHdpdGggdGhpcyB5IGF4aXMgY29uc3RyYWludC5cblxuKipFeGFtcGxlKipcblxuYGBganN4XG48RnJhbWUgaGVpZ2h0PXsxMDB9IHJhbmdlPXtbMCwgNTAwXX0+XG4gIDxMaW5lIC8+XG48L0ZyYW1lPlxuYGBgXG5cbi0tLVxuXG4jIyMgYDxMaW5lIC8+YFxuXG5QbG90IHlvdXIgc2VyaWVzIGRhdGEgYXMgYSBsaW5lLiBTdHlsZSBsaW5lIHdpdGggYHN0cm9rZWAsIGBmaWxsYCBvciBib3RoLlxuXG4tICoqYGRhdGE6IG51bWJlcltdYCoqXG4gIFRoZSBsaXN0IG9mIGB5YCBkYXRhIHRvIHBsb3QuXG5cbi0gKipgc3Ryb2tlPzogU3Ryb2tlYCoqXG4gIFNldCBgd2lkdGhgIGluIHBpeGVscywgYHN0eWxlYCBhcyBgJ2Rhc2gnYCBvciBgJ3NvbGlkJ2AgYW5kIGNvbG9yIG9wdGlvbi5cblxuLSAqKmBmaWxsPzogQ29sb3JgKipcbiAgU29saWQgb3IgZ3JhZGllbnQgZmlsbCwgd2l0aCBvbmUgb3IgbWFueSBjb2xvcnMuIEZpbGxzIGFyZWEgZnJvbSBkYXRhIGxpbmUgdG8gYm90dG9tIGF4aXMuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lPlxuICA8TGluZVxuICAgIGRhdGE9e1stMSwgMiwgNiwgOSwgMTEsIDIxXX1cbiAgICBzdHJva2U9e3tcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgc3R5bGU6IFwiZGFzaFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgc29saWQ6IFtcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjI1XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjVdLFxuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuMV1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH19XG4gICAgZmlsbD17e1xuICAgICAgZ3JhZGllbnQ6IFtcbiAgICAgICAgWzI1NSwgMCwgMCwgMC4xXSxcbiAgICAgICAgWzI1NSwgMCwgMCwgMV1cbiAgICAgIF1cbiAgICB9fVxuICAvPlxuPC9GcmFtZT5cbmB9IFxuICA8L1N5bnRheEhpZ2hsaWdodGVyPiovfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgzPmhvbWU8L2gzPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiL2RvY3VtZW50YXRpb25cIj5cbiAgICAgICAgPGgzPmRvY3VtZW50YXRpb248L2gzPlxuICAgICAgPC9hPlxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIG1haW4ge1xuICAgICAgICBwYWRkaW5nOiAwIDAgNXJlbTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGEge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAwIDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG5cbiAgICAgIGNvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkIHtcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzODBweCAxMTQwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIC5jb2wyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICAgIH1cblxuICAgICAgLy8uZ3JpZCA+ICosXG4gICAgICAuY2FyZCB7XG4gICAgICAgIC8vIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgIC8vIG1heC13aWR0aDogMzgwcHg7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgLy8gZmxleC1iYXNpczogMjUlO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgIC8vYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgcHJlIHtcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC5wcmltbyB7XG4gICAgICAgIC8vYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgaDIsIGgzIHtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxuICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3M7XG4iXX0= */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "3702522083",
              __self: undefined
            },
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFSdUIsQUFJa0MsQUFRSCxzQkFDeEIsR0FSWSxVQUNELFNBRTZELHFJQUN4RSIsImZpbGUiOiIvVXNlcnMvYWFyb25tb3JhZGkvRG9jdW1lbnRzL3Byb2plY3RzL3NjaW50aWxsYS93d3cvcGFnZXMvZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgcHJpc20gfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuXG5jb25zdCBEb2NzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnNjaW50aWxsYTwvdGl0bGU+XG4gICAgICB7Lyo8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+Ki99XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHByaW1vXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2NpbnRpbGxhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkEgUmVhY3Qgc3BhcmtsaW5lcyBjb21wb25lbnQ8L3A+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIGhvbWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyXCI+XG4gICAgICAgIDxoMj50eXBlczwvaDI+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2B0eXBlIFJHQkEgPSBbMC0yNTUsIDAtMjU1LCAwLTI1NSwgMC0xXVxuXG50eXBlIENvbG9yID0ge1xuICBncmFkaWVudD86IFJHQkEgfCBSR0JBW107XG4gIHNvbGlkPzogUkdCQSB8IFJHQkFbXTtcbn07XG5cbnR5cGUgU3Ryb2tlID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICBzdHlsZTogXCJkYXNoXCIgfCBcInNvbGlkXCI7XG4gIGNvbG9yOiBDb2xvcjtcbn07YFxufVxuICAgICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuICAgICAgICA8aDI+ZnJhbWU8L2gyPlxuICAgICAgICA8cD5SZXNwb25zaXZlIGNvbnRhaW5lciBmb3IgYWxsIGRhdGEtbmVlZHkgY2hpbGQgY29tcG9uZW50cy48L3A+XG5cbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwidHN4XCIgc3R5bGU9e3ByaXNtfT5cbiAgICAgICAgICB7YC8vIHNwZWNpZnkgaGVpZ2h0IGluIHBpeGVscy4gZGVmYXVsdHMgdG8gNTBweC5cbmhlaWdodD86IG51bWJlclxuXG4vLyBwbG90IGNoaWxkcmVuIGNvbXBvbmVudHMgd2l0aCB0aGlzIHkgYXhpcyBjb25zdHJhaW50LlxucmFuZ2U/OiBbbWluPG51bWJlcj4sIG1heDxudW1iZXI+XVxuXG4vLyBleC5cbjxGcmFtZSBoZWlnaHQ9ezEwMH0gcmFuZ2U9e1swLCA1MDBdfT5cbiAgPExpbmUgLz5cbjwvRnJhbWU+XG5gXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG5cbnsvKiAvLyBDb21wb25lbnRzXG5cbiMjIyBgPEZyYW1lIC8+YFxuXG5SZXNwb25zaXZlIGNvbnRhaW5lciBmb3IgYWxsIGBkYXRhYC1uZWVkeSBjaGlsZCBjb21wb25lbnRzLlxuXG4tICoqYGhlaWdodD86IG51bWJlcmAqKlxuICBPcHRpb25hbGx5IHNwZWNpZnkgaGVpZ2h0IGluIHBpeGVscy4gRGVmYXVsdHMgdG8gYDUwcHhgLlxuXG4tICoqYHJhbmdlPzogW21pbjxudW1iZXI+LCBtYXg8bnVtYmVyPl1gKipcbiAgT3B0aW9uYWxseSBwbG90IGBjaGlsZHJlbmAgY29tcG9uZW50cyB3aXRoIHRoaXMgeSBheGlzIGNvbnN0cmFpbnQuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lIGhlaWdodD17MTAwfSByYW5nZT17WzAsIDUwMF19PlxuICA8TGluZSAvPlxuPC9GcmFtZT5cbmBgYFxuXG4tLS1cblxuIyMjIGA8TGluZSAvPmBcblxuUGxvdCB5b3VyIHNlcmllcyBkYXRhIGFzIGEgbGluZS4gU3R5bGUgbGluZSB3aXRoIGBzdHJva2VgLCBgZmlsbGAgb3IgYm90aC5cblxuLSAqKmBkYXRhOiBudW1iZXJbXWAqKlxuICBUaGUgbGlzdCBvZiBgeWAgZGF0YSB0byBwbG90LlxuXG4tICoqYHN0cm9rZT86IFN0cm9rZWAqKlxuICBTZXQgYHdpZHRoYCBpbiBwaXhlbHMsIGBzdHlsZWAgYXMgYCdkYXNoJ2Agb3IgYCdzb2xpZCdgIGFuZCBjb2xvciBvcHRpb24uXG5cbi0gKipgZmlsbD86IENvbG9yYCoqXG4gIFNvbGlkIG9yIGdyYWRpZW50IGZpbGwsIHdpdGggb25lIG9yIG1hbnkgY29sb3JzLiBGaWxscyBhcmVhIGZyb20gZGF0YSBsaW5lIHRvIGJvdHRvbSBheGlzLlxuXG4qKkV4YW1wbGUqKlxuXG5gYGBqc3hcbjxGcmFtZT5cbiAgPExpbmVcbiAgICBkYXRhPXtbLTEsIDIsIDYsIDksIDExLCAyMV19XG4gICAgc3Ryb2tlPXt7XG4gICAgICB3aWR0aDogMSxcbiAgICAgIHN0eWxlOiBcImRhc2hcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHNvbGlkOiBbXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC4yNV0sXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC41XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjFdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9fVxuICAgIGZpbGw9e3tcbiAgICAgIGdyYWRpZW50OiBbXG4gICAgICAgIFsyNTUsIDAsIDAsIDAuMV0sXG4gICAgICAgIFsyNTUsIDAsIDAsIDFdXG4gICAgICBdXG4gICAgfX1cbiAgLz5cbjwvRnJhbWU+XG5gfSBcbiAgPC9TeW50YXhIaWdobGlnaHRlcj4qL31cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgIDxoMz5ob21lPC9oMz5cbiAgICAgIDwvYT5cblxuICAgICAgPGEgaHJlZj1cIi9kb2N1bWVudGF0aW9uXCI+XG4gICAgICAgIDxoMz5kb2N1bWVudGF0aW9uPC9oMz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDVyZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGEge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMTAwcHggMCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuXG4gICAgICBjb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZCB7XG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMTE0MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAuY29sMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gICAgICB9XG5cbiAgICAgIC8vLmdyaWQgPiAqLFxuICAgICAgLmNhcmQge1xuICAgICAgICAvLyBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAvLyBtYXgtd2lkdGg6IDM4MHB4O1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIC8vIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAvL2FsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHByZSB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQucHJpbW8ge1xuICAgICAgICAvL2FsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIGgyLCBoMyB7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWYwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcbiAgICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBEb2NzO1xuIl19 */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          )
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Docs;

      /***/
    }
});
//# sourceMappingURL=documentation.js.0006b550a1af6b48d664.hot-update.js.map
