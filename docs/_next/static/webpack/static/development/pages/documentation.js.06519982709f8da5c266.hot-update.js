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
            className: "jsx-1474177893" + " " + "container",
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
                className: "jsx-1474177893",
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
              className: "jsx-1474177893",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: undefined
            },
            __jsx(
              "div",
              {
                className: "jsx-1474177893" + " " + "grid",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: undefined
              },
              __jsx(
                "div",
                {
                  className: "jsx-1474177893" + " " + "card primo",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: undefined
                },
                __jsx(
                  "h1",
                  {
                    className: "jsx-1474177893" + " " + "title",
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
                    className: "jsx-1474177893" + " " + "description",
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
                    className: "jsx-1474177893" + " " + "description",
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
                      className: "jsx-1474177893",
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
                  className: "jsx-1474177893" + " " + "col2",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: undefined
                },
                __jsx(
                  "h2",
                  {
                    className: "jsx-1474177893",
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
                  '\ntype RGBA = [0-255, 0-255, 0-255, 0-1]\n\ntype Color = {\n  gradient?: RGBA | RGBA[];\n  solid?: RGBA | RGBA[];\n};\n\ntype Stroke = {\n  width: number;\n  style: "dash" | "solid";\n  color: Color;\n};'
                ),
                __jsx(
                  "h2",
                  {
                    className: "jsx-1474177893",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
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
                      lineNumber: 45
                    },
                    __self: undefined
                  },
                  '\ntype RGBA = [0-255, 0-255, 0-255, 0-1]\n\ntype Color = {\n  gradient?: RGBA | RGBA[];\n  solid?: RGBA | RGBA[];\n};\n\ntype Stroke = {\n  width: number;\n  style: "dash" | "solid";\n  color: Color;\n};'
                )
              )
            )
          ),
          __jsx(
            "footer",
            {
              className: "jsx-1474177893",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: undefined
            },
            __jsx(
              "a",
              {
                href: "/",
                className: "jsx-1474177893",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-1474177893",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
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
                className: "jsx-1474177893",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-1474177893",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
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
              id: "2740360847",
              __self: undefined
            },
            ".container.jsx-1474177893{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1474177893{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1474177893{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1474177893 img.jsx-1474177893{margin-left:0.5rem;}footer.jsx-1474177893 a.jsx-1474177893{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1474177893{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1474177893 a.jsx-1474177893{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1474177893 a.jsx-1474177893:hover,.title.jsx-1474177893 a.jsx-1474177893:focus,.title.jsx-1474177893 a.jsx-1474177893:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1474177893{margin:100px 0 0;line-height:1.15;font-size:3rem;}.title.jsx-1474177893,.description.jsx-1474177893{text-align:center;}.description.jsx-1474177893{line-height:1.5;font-size:0.9rem;}code.jsx-1474177893{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1474177893{display:grid;grid-template-columns:380px 1140px;max-width:100vw;margin-top:3rem;}.col2.jsx-1474177893{margin-top:75px;}.card.jsx-1474177893{margin:1rem;padding:1.5rem;box-sizing:border-box;}.card.jsx-1474177893 pre.jsx-1474177893{height:240px;overflow-y:scroll;}.card.primo.jsx-1474177893{color:#444;text-transform:lowercase;position:relative;margin-right:7rem;margin-top:2.5rem;}h3.jsx-1474177893{font-weight:normal;margin-top:60px;-webkit-text-decoration:underline;text-decoration:underline;}@media (max-width:600px){.grid.jsx-1474177893{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJZ0IsQUFHMEIsQUFTQSxBQVNJLEFBVUYsQUFJRixBQU9ILEFBS0EsQUFPWSxBQUlULEFBU0MsQUFJRixBQUtHLEFBYU4sQUFPRyxBQU9KLEFBUUMsQUFNRixBQVFRLEFBT04sV0FkWSxBQWVELENBNUJULENBZm9CLEFBc0JqQixDQXJFRyxBQUtBLEVBd0JKLEFBeUJuQixDQTdGbUIsQUFTVixBQXVCTSxBQXVCSSxDQVNuQixDQXBDQSxBQTZDb0IsQUFpREYsRUF4R0wsTUFxRlcsSUFNeEIsQ0ExRmUsQ0FrRGYsQ0FwRWUsQUF1REUsQ0FtRVcsQ0FSUixDQXpDRixRQXJESCxHQWtFRyxDQTVCbEIsQUE2Q0EsQ0E5RmUsR0FpRUksQ0F5Q0MsTUFqRXBCLElBWEEsQUFLQSxBQTJDa0IsTUFYb0QsRUF3Q2xELFFBNUJwQixTQXlDRSxDQVpGLENBckZ5QixJQTJGekIsYUExSHdCLFdBb0JDLEtBWEQsOERBUkMsSUErQkosQ0E0Q3JCLFdBbEV5QixnQkFXSixpRUFZckIsRUEvQnFCLGdCQVNBLFVBV3JCLG1FQW5CQSxnQkFTQSIsImZpbGUiOiIvVXNlcnMvYWFyb25tb3JhZGkvRG9jdW1lbnRzL3Byb2plY3RzL3NjaW50aWxsYS93d3cvcGFnZXMvZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgcHJpc20gfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuXG5jb25zdCBEb2NzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnNjaW50aWxsYTwvdGl0bGU+XG4gICAgICB7Lyo8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+Ki99XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHByaW1vXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2NpbnRpbGxhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkEgUmVhY3Qgc3BhcmtsaW5lcyBjb21wb25lbnQ8L3A+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIGhvbWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyXCI+XG4gICAgICAgIDxoMj50eXBlczwvaDI+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2BcbnR5cGUgUkdCQSA9IFswLTI1NSwgMC0yNTUsIDAtMjU1LCAwLTFdXG5cbnR5cGUgQ29sb3IgPSB7XG4gIGdyYWRpZW50PzogUkdCQSB8IFJHQkFbXTtcbiAgc29saWQ/OiBSR0JBIHwgUkdCQVtdO1xufTtcblxudHlwZSBTdHJva2UgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBcImRhc2hcIiB8IFwic29saWRcIjtcbiAgY29sb3I6IENvbG9yO1xufTtgXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICAgICAgIDxoMj50eXBlczwvaDI+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2BcbnR5cGUgUkdCQSA9IFswLTI1NSwgMC0yNTUsIDAtMjU1LCAwLTFdXG5cbnR5cGUgQ29sb3IgPSB7XG4gIGdyYWRpZW50PzogUkdCQSB8IFJHQkFbXTtcbiAgc29saWQ/OiBSR0JBIHwgUkdCQVtdO1xufTtcblxudHlwZSBTdHJva2UgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBcImRhc2hcIiB8IFwic29saWRcIjtcbiAgY29sb3I6IENvbG9yO1xufTtgXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG5cbnsvKiAvLyBDb21wb25lbnRzXG5cbiMjIyBgPEZyYW1lIC8+YFxuXG5SZXNwb25zaXZlIGNvbnRhaW5lciBmb3IgYWxsIGBkYXRhYC1uZWVkeSBjaGlsZCBjb21wb25lbnRzLlxuXG4tICoqYGhlaWdodD86IG51bWJlcmAqKlxuICBPcHRpb25hbGx5IHNwZWNpZnkgaGVpZ2h0IGluIHBpeGVscy4gRGVmYXVsdHMgdG8gYDUwcHhgLlxuXG4tICoqYHJhbmdlPzogW21pbjxudW1iZXI+LCBtYXg8bnVtYmVyPl1gKipcbiAgT3B0aW9uYWxseSBwbG90IGBjaGlsZHJlbmAgY29tcG9uZW50cyB3aXRoIHRoaXMgeSBheGlzIGNvbnN0cmFpbnQuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lIGhlaWdodD17MTAwfSByYW5nZT17WzAsIDUwMF19PlxuICA8TGluZSAvPlxuPC9GcmFtZT5cbmBgYFxuXG4tLS1cblxuIyMjIGA8TGluZSAvPmBcblxuUGxvdCB5b3VyIHNlcmllcyBkYXRhIGFzIGEgbGluZS4gU3R5bGUgbGluZSB3aXRoIGBzdHJva2VgLCBgZmlsbGAgb3IgYm90aC5cblxuLSAqKmBkYXRhOiBudW1iZXJbXWAqKlxuICBUaGUgbGlzdCBvZiBgeWAgZGF0YSB0byBwbG90LlxuXG4tICoqYHN0cm9rZT86IFN0cm9rZWAqKlxuICBTZXQgYHdpZHRoYCBpbiBwaXhlbHMsIGBzdHlsZWAgYXMgYCdkYXNoJ2Agb3IgYCdzb2xpZCdgIGFuZCBjb2xvciBvcHRpb24uXG5cbi0gKipgZmlsbD86IENvbG9yYCoqXG4gIFNvbGlkIG9yIGdyYWRpZW50IGZpbGwsIHdpdGggb25lIG9yIG1hbnkgY29sb3JzLiBGaWxscyBhcmVhIGZyb20gZGF0YSBsaW5lIHRvIGJvdHRvbSBheGlzLlxuXG4qKkV4YW1wbGUqKlxuXG5gYGBqc3hcbjxGcmFtZT5cbiAgPExpbmVcbiAgICBkYXRhPXtbLTEsIDIsIDYsIDksIDExLCAyMV19XG4gICAgc3Ryb2tlPXt7XG4gICAgICB3aWR0aDogMSxcbiAgICAgIHN0eWxlOiBcImRhc2hcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHNvbGlkOiBbXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC4yNV0sXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC41XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjFdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9fVxuICAgIGZpbGw9e3tcbiAgICAgIGdyYWRpZW50OiBbXG4gICAgICAgIFsyNTUsIDAsIDAsIDAuMV0sXG4gICAgICAgIFsyNTUsIDAsIDAsIDFdXG4gICAgICBdXG4gICAgfX1cbiAgLz5cbjwvRnJhbWU+XG5gfSBcbiAgPC9TeW50YXhIaWdobGlnaHRlcj4qL31cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgIDxoMz5ob21lPC9oMz5cbiAgICAgIDwvYT5cblxuICAgICAgPGEgaHJlZj1cIi9kb2N1bWVudGF0aW9uXCI+XG4gICAgICAgIDxoMz5kb2N1bWVudGF0aW9uPC9oMz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDVyZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGEge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMTAwcHggMCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuXG4gICAgICBjb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZCB7XG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMTE0MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAuY29sMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gICAgICB9XG5cbiAgICAgIC8vLmdyaWQgPiAqLFxuICAgICAgLmNhcmQge1xuICAgICAgICAvLyBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAvLyBtYXgtd2lkdGg6IDM4MHB4O1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIC8vIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAvL2FsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHByZSB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQucHJpbW8ge1xuICAgICAgICAvL2FsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxuICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3M7XG4iXX0= */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "3702522083",
              __self: undefined
            },
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtSdUIsQUFJa0MsQUFRSCxzQkFDeEIsR0FSWSxVQUNELFNBRTZELHFJQUN4RSIsImZpbGUiOiIvVXNlcnMvYWFyb25tb3JhZGkvRG9jdW1lbnRzL3Byb2plY3RzL3NjaW50aWxsYS93d3cvcGFnZXMvZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgcHJpc20gfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuXG5jb25zdCBEb2NzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnNjaW50aWxsYTwvdGl0bGU+XG4gICAgICB7Lyo8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+Ki99XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHByaW1vXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2NpbnRpbGxhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkEgUmVhY3Qgc3BhcmtsaW5lcyBjb21wb25lbnQ8L3A+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIGhvbWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyXCI+XG4gICAgICAgIDxoMj50eXBlczwvaDI+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2BcbnR5cGUgUkdCQSA9IFswLTI1NSwgMC0yNTUsIDAtMjU1LCAwLTFdXG5cbnR5cGUgQ29sb3IgPSB7XG4gIGdyYWRpZW50PzogUkdCQSB8IFJHQkFbXTtcbiAgc29saWQ/OiBSR0JBIHwgUkdCQVtdO1xufTtcblxudHlwZSBTdHJva2UgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBcImRhc2hcIiB8IFwic29saWRcIjtcbiAgY29sb3I6IENvbG9yO1xufTtgXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICAgICAgIDxoMj50eXBlczwvaDI+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2BcbnR5cGUgUkdCQSA9IFswLTI1NSwgMC0yNTUsIDAtMjU1LCAwLTFdXG5cbnR5cGUgQ29sb3IgPSB7XG4gIGdyYWRpZW50PzogUkdCQSB8IFJHQkFbXTtcbiAgc29saWQ/OiBSR0JBIHwgUkdCQVtdO1xufTtcblxudHlwZSBTdHJva2UgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBcImRhc2hcIiB8IFwic29saWRcIjtcbiAgY29sb3I6IENvbG9yO1xufTtgXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG5cbnsvKiAvLyBDb21wb25lbnRzXG5cbiMjIyBgPEZyYW1lIC8+YFxuXG5SZXNwb25zaXZlIGNvbnRhaW5lciBmb3IgYWxsIGBkYXRhYC1uZWVkeSBjaGlsZCBjb21wb25lbnRzLlxuXG4tICoqYGhlaWdodD86IG51bWJlcmAqKlxuICBPcHRpb25hbGx5IHNwZWNpZnkgaGVpZ2h0IGluIHBpeGVscy4gRGVmYXVsdHMgdG8gYDUwcHhgLlxuXG4tICoqYHJhbmdlPzogW21pbjxudW1iZXI+LCBtYXg8bnVtYmVyPl1gKipcbiAgT3B0aW9uYWxseSBwbG90IGBjaGlsZHJlbmAgY29tcG9uZW50cyB3aXRoIHRoaXMgeSBheGlzIGNvbnN0cmFpbnQuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lIGhlaWdodD17MTAwfSByYW5nZT17WzAsIDUwMF19PlxuICA8TGluZSAvPlxuPC9GcmFtZT5cbmBgYFxuXG4tLS1cblxuIyMjIGA8TGluZSAvPmBcblxuUGxvdCB5b3VyIHNlcmllcyBkYXRhIGFzIGEgbGluZS4gU3R5bGUgbGluZSB3aXRoIGBzdHJva2VgLCBgZmlsbGAgb3IgYm90aC5cblxuLSAqKmBkYXRhOiBudW1iZXJbXWAqKlxuICBUaGUgbGlzdCBvZiBgeWAgZGF0YSB0byBwbG90LlxuXG4tICoqYHN0cm9rZT86IFN0cm9rZWAqKlxuICBTZXQgYHdpZHRoYCBpbiBwaXhlbHMsIGBzdHlsZWAgYXMgYCdkYXNoJ2Agb3IgYCdzb2xpZCdgIGFuZCBjb2xvciBvcHRpb24uXG5cbi0gKipgZmlsbD86IENvbG9yYCoqXG4gIFNvbGlkIG9yIGdyYWRpZW50IGZpbGwsIHdpdGggb25lIG9yIG1hbnkgY29sb3JzLiBGaWxscyBhcmVhIGZyb20gZGF0YSBsaW5lIHRvIGJvdHRvbSBheGlzLlxuXG4qKkV4YW1wbGUqKlxuXG5gYGBqc3hcbjxGcmFtZT5cbiAgPExpbmVcbiAgICBkYXRhPXtbLTEsIDIsIDYsIDksIDExLCAyMV19XG4gICAgc3Ryb2tlPXt7XG4gICAgICB3aWR0aDogMSxcbiAgICAgIHN0eWxlOiBcImRhc2hcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHNvbGlkOiBbXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC4yNV0sXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC41XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjFdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9fVxuICAgIGZpbGw9e3tcbiAgICAgIGdyYWRpZW50OiBbXG4gICAgICAgIFsyNTUsIDAsIDAsIDAuMV0sXG4gICAgICAgIFsyNTUsIDAsIDAsIDFdXG4gICAgICBdXG4gICAgfX1cbiAgLz5cbjwvRnJhbWU+XG5gfSBcbiAgPC9TeW50YXhIaWdobGlnaHRlcj4qL31cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgIDxoMz5ob21lPC9oMz5cbiAgICAgIDwvYT5cblxuICAgICAgPGEgaHJlZj1cIi9kb2N1bWVudGF0aW9uXCI+XG4gICAgICAgIDxoMz5kb2N1bWVudGF0aW9uPC9oMz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDVyZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGEge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMTAwcHggMCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuXG4gICAgICBjb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZCB7XG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMTE0MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAuY29sMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gICAgICB9XG5cbiAgICAgIC8vLmdyaWQgPiAqLFxuICAgICAgLmNhcmQge1xuICAgICAgICAvLyBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAvLyBtYXgtd2lkdGg6IDM4MHB4O1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIC8vIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAvL2FsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHByZSB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQucHJpbW8ge1xuICAgICAgICAvL2FsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxuICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3M7XG4iXX0= */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          )
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Docs;

      /***/
    }
});
//# sourceMappingURL=documentation.js.06519982709f8da5c266.hot-update.js.map
