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
            className: "jsx-1374324289" + " " + "container",
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
                className: "jsx-1374324289",
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
              className: "jsx-1374324289",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: undefined
            },
            __jsx(
              "div",
              {
                className: "jsx-1374324289" + " " + "grid",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: undefined
              },
              __jsx(
                "div",
                {
                  className: "jsx-1374324289" + " " + "card primo",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: undefined
                },
                __jsx(
                  "h1",
                  {
                    className: "jsx-1374324289" + " " + "title",
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
                    className: "jsx-1374324289" + " " + "description",
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
                    className: "jsx-1374324289" + " " + "description",
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
                      className: "jsx-1374324289",
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
                  className: "jsx-1374324289",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: undefined
                },
                __jsx(
                  "h2",
                  {
                    className: "jsx-1374324289",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: undefined
                  },
                  "Types"
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
                    className: "jsx-1374324289",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: undefined
                  },
                  "Types"
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
              className: "jsx-1374324289",
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
                className: "jsx-1374324289",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-1374324289",
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
                className: "jsx-1374324289",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-1374324289",
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
              id: "4124934507",
              __self: undefined
            },
            ".container.jsx-1374324289{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1374324289{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1374324289{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1374324289 img.jsx-1374324289{margin-left:0.5rem;}footer.jsx-1374324289 a.jsx-1374324289{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1374324289{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1374324289 a.jsx-1374324289{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1374324289 a.jsx-1374324289:hover,.title.jsx-1374324289 a.jsx-1374324289:focus,.title.jsx-1374324289 a.jsx-1374324289:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1374324289{margin:100px 0 0;line-height:1.15;font-size:3rem;}.title.jsx-1374324289,.description.jsx-1374324289{text-align:center;}.description.jsx-1374324289{line-height:1.5;font-size:0.9rem;}code.jsx-1374324289{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1374324289{display:grid;grid-template-columns:fitContent(320px,380px) 1140px;max-width:100vw;margin-top:3rem;}.card.jsx-1374324289{min-width:320px;max-width:380px;margin:1rem;-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;padding:1.5rem;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.card.jsx-1374324289 pre.jsx-1374324289{height:240px;overflow-y:scroll;}.card.primo.jsx-1374324289{color:#444;text-transform:lowercase;}h3.jsx-1374324289{font-weight:normal;margin-top:60px;-webkit-text-decoration:underline;text-decoration:underline;}@media (max-width:600px){.grid.jsx-1374324289{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJZ0IsQUFHMEIsQUFTQSxBQVNJLEFBVUYsQUFJRixBQU9ILEFBS0EsQUFPWSxBQUlULEFBU0MsQUFJRixBQUtHLEFBYU4sQUFRRyxBQVNILEFBTUYsQUFLUSxBQU9OLFdBWFksQUFZRCxFQW5DOEIsQUFpQnBDLENBaEVHLEFBS0EsRUF3QkosQUEwQkQsQ0E5RkMsQUFTVixBQXVCTSxBQXVCSSxDQVNuQixDQXBDQSxBQTZDb0IsQUF5Q0YsRUFoR0wsVUFzRmIsQ0FyRmUsQUE0RUQsQ0ExQmQsQ0FwRWUsQUF1REUsQ0EyRFcsQ0FMNUIsQ0FwQ2tCLE9Bc0JELENBM0VGLElBc0NmLENBakRlLEdBaUVJLE9BeEJuQixJQVhBLEFBS0EsRUEwQ2tCLElBVm9ELFlBV3BELE9Ba0NoQixFQXpGdUIsSUFtRnpCLEdBM0JBLFVBdkZ3QixFQStGUCxTQTNFUSxLQVhELENBdUZBLDZEQS9GQyxJQStCSixDQTRDckIsV0FsRXlCLENBdUZ6QixlQTVFcUIsaUVBWXJCLEVBL0JxQixnQkFTQSxVQVdyQixtRUFuQkEsZ0JBU0EiLCJmaWxlIjoiL1VzZXJzL2Fhcm9ubW9yYWRpL0RvY3VtZW50cy9wcm9qZWN0cy9zY2ludGlsbGEvd3d3L3BhZ2VzL2RvY3VtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcbmltcG9ydCB7IHByaXNtIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc21cIjtcblxuY29uc3QgRG9jcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5zY2ludGlsbGE8L3RpdGxlPlxuICAgICAgey8qPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiovfVxuICAgIDwvSGVhZD5cblxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBwcmltb1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNjaW50aWxsYTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5BIFJlYWN0IHNwYXJrbGluZXMgY29tcG9uZW50PC9wPlxuXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICBob21lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5UeXBlczwvaDI+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2BcbnR5cGUgUkdCQSA9IFswLTI1NSwgMC0yNTUsIDAtMjU1LCAwLTFdXG5cbnR5cGUgQ29sb3IgPSB7XG4gIGdyYWRpZW50PzogUkdCQSB8IFJHQkFbXTtcbiAgc29saWQ/OiBSR0JBIHwgUkdCQVtdO1xufTtcblxudHlwZSBTdHJva2UgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBcImRhc2hcIiB8IFwic29saWRcIjtcbiAgY29sb3I6IENvbG9yO1xufTtgXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICAgICAgIDxoMj5UeXBlczwvaDI+XG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInRzeFwiIHN0eWxlPXtwcmlzbX0+XG4gICAgICAgICAge2BcbnR5cGUgUkdCQSA9IFswLTI1NSwgMC0yNTUsIDAtMjU1LCAwLTFdXG5cbnR5cGUgQ29sb3IgPSB7XG4gIGdyYWRpZW50PzogUkdCQSB8IFJHQkFbXTtcbiAgc29saWQ/OiBSR0JBIHwgUkdCQVtdO1xufTtcblxudHlwZSBTdHJva2UgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBcImRhc2hcIiB8IFwic29saWRcIjtcbiAgY29sb3I6IENvbG9yO1xufTtgXG59XG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG5cbnsvKiAvLyBDb21wb25lbnRzXG5cbiMjIyBgPEZyYW1lIC8+YFxuXG5SZXNwb25zaXZlIGNvbnRhaW5lciBmb3IgYWxsIGBkYXRhYC1uZWVkeSBjaGlsZCBjb21wb25lbnRzLlxuXG4tICoqYGhlaWdodD86IG51bWJlcmAqKlxuICBPcHRpb25hbGx5IHNwZWNpZnkgaGVpZ2h0IGluIHBpeGVscy4gRGVmYXVsdHMgdG8gYDUwcHhgLlxuXG4tICoqYHJhbmdlPzogW21pbjxudW1iZXI+LCBtYXg8bnVtYmVyPl1gKipcbiAgT3B0aW9uYWxseSBwbG90IGBjaGlsZHJlbmAgY29tcG9uZW50cyB3aXRoIHRoaXMgeSBheGlzIGNvbnN0cmFpbnQuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lIGhlaWdodD17MTAwfSByYW5nZT17WzAsIDUwMF19PlxuICA8TGluZSAvPlxuPC9GcmFtZT5cbmBgYFxuXG4tLS1cblxuIyMjIGA8TGluZSAvPmBcblxuUGxvdCB5b3VyIHNlcmllcyBkYXRhIGFzIGEgbGluZS4gU3R5bGUgbGluZSB3aXRoIGBzdHJva2VgLCBgZmlsbGAgb3IgYm90aC5cblxuLSAqKmBkYXRhOiBudW1iZXJbXWAqKlxuICBUaGUgbGlzdCBvZiBgeWAgZGF0YSB0byBwbG90LlxuXG4tICoqYHN0cm9rZT86IFN0cm9rZWAqKlxuICBTZXQgYHdpZHRoYCBpbiBwaXhlbHMsIGBzdHlsZWAgYXMgYCdkYXNoJ2Agb3IgYCdzb2xpZCdgIGFuZCBjb2xvciBvcHRpb24uXG5cbi0gKipgZmlsbD86IENvbG9yYCoqXG4gIFNvbGlkIG9yIGdyYWRpZW50IGZpbGwsIHdpdGggb25lIG9yIG1hbnkgY29sb3JzLiBGaWxscyBhcmVhIGZyb20gZGF0YSBsaW5lIHRvIGJvdHRvbSBheGlzLlxuXG4qKkV4YW1wbGUqKlxuXG5gYGBqc3hcbjxGcmFtZT5cbiAgPExpbmVcbiAgICBkYXRhPXtbLTEsIDIsIDYsIDksIDExLCAyMV19XG4gICAgc3Ryb2tlPXt7XG4gICAgICB3aWR0aDogMSxcbiAgICAgIHN0eWxlOiBcImRhc2hcIixcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHNvbGlkOiBbXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC4yNV0sXG4gICAgICAgICAgWzI1NSwgMCwgMCwgMC41XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjFdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9fVxuICAgIGZpbGw9e3tcbiAgICAgIGdyYWRpZW50OiBbXG4gICAgICAgIFsyNTUsIDAsIDAsIDAuMV0sXG4gICAgICAgIFsyNTUsIDAsIDAsIDFdXG4gICAgICBdXG4gICAgfX1cbiAgLz5cbjwvRnJhbWU+XG5gfSBcbiAgPC9TeW50YXhIaWdobGlnaHRlcj4qL31cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgIDxoMz5ob21lPC9oMz5cbiAgICAgIDwvYT5cblxuICAgICAgPGEgaHJlZj1cIi9kb2N1bWVudGF0aW9uXCI+XG4gICAgICAgIDxoMz5kb2N1bWVudGF0aW9uPC9oMz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDVyZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGEge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMTAwcHggMCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuXG4gICAgICBjb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZCB7XG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogZml0Q29udGVudCgzMjBweCwgMzgwcHgpIDExNDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgLy8uZ3JpZCA+ICosXG4gICAgICAuY2FyZCB7XG4gICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgZmxleC1iYXNpczogMjUlO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHByZSB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQucHJpbW8ge1xuICAgICAgICAvL2FsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxuICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKX07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3M7XG4iXX0= */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "3702522083",
              __self: undefined
            },
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBRdUIsQUFJa0MsQUFRSCxzQkFDeEIsR0FSWSxVQUNELFNBRTZELHFJQUN4RSIsImZpbGUiOiIvVXNlcnMvYWFyb25tb3JhZGkvRG9jdW1lbnRzL3Byb2plY3RzL3NjaW50aWxsYS93d3cvcGFnZXMvZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgcHJpc20gfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuXG5jb25zdCBEb2NzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnNjaW50aWxsYTwvdGl0bGU+XG4gICAgICB7Lyo8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+Ki99XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHByaW1vXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2NpbnRpbGxhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkEgUmVhY3Qgc3BhcmtsaW5lcyBjb21wb25lbnQ8L3A+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIGhvbWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlR5cGVzPC9oMj5cbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwidHN4XCIgc3R5bGU9e3ByaXNtfT5cbiAgICAgICAgICB7YFxudHlwZSBSR0JBID0gWzAtMjU1LCAwLTI1NSwgMC0yNTUsIDAtMV1cblxudHlwZSBDb2xvciA9IHtcbiAgZ3JhZGllbnQ/OiBSR0JBIHwgUkdCQVtdO1xuICBzb2xpZD86IFJHQkEgfCBSR0JBW107XG59O1xuXG50eXBlIFN0cm9rZSA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgc3R5bGU6IFwiZGFzaFwiIHwgXCJzb2xpZFwiO1xuICBjb2xvcjogQ29sb3I7XG59O2Bcbn1cbiAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cbiAgICAgICAgPGgyPlR5cGVzPC9oMj5cbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwidHN4XCIgc3R5bGU9e3ByaXNtfT5cbiAgICAgICAgICB7YFxudHlwZSBSR0JBID0gWzAtMjU1LCAwLTI1NSwgMC0yNTUsIDAtMV1cblxudHlwZSBDb2xvciA9IHtcbiAgZ3JhZGllbnQ/OiBSR0JBIHwgUkdCQVtdO1xuICBzb2xpZD86IFJHQkEgfCBSR0JBW107XG59O1xuXG50eXBlIFN0cm9rZSA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgc3R5bGU6IFwiZGFzaFwiIHwgXCJzb2xpZFwiO1xuICBjb2xvcjogQ29sb3I7XG59O2Bcbn1cbiAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cblxuey8qIC8vIENvbXBvbmVudHNcblxuIyMjIGA8RnJhbWUgLz5gXG5cblJlc3BvbnNpdmUgY29udGFpbmVyIGZvciBhbGwgYGRhdGFgLW5lZWR5IGNoaWxkIGNvbXBvbmVudHMuXG5cbi0gKipgaGVpZ2h0PzogbnVtYmVyYCoqXG4gIE9wdGlvbmFsbHkgc3BlY2lmeSBoZWlnaHQgaW4gcGl4ZWxzLiBEZWZhdWx0cyB0byBgNTBweGAuXG5cbi0gKipgcmFuZ2U/OiBbbWluPG51bWJlcj4sIG1heDxudW1iZXI+XWAqKlxuICBPcHRpb25hbGx5IHBsb3QgYGNoaWxkcmVuYCBjb21wb25lbnRzIHdpdGggdGhpcyB5IGF4aXMgY29uc3RyYWludC5cblxuKipFeGFtcGxlKipcblxuYGBganN4XG48RnJhbWUgaGVpZ2h0PXsxMDB9IHJhbmdlPXtbMCwgNTAwXX0+XG4gIDxMaW5lIC8+XG48L0ZyYW1lPlxuYGBgXG5cbi0tLVxuXG4jIyMgYDxMaW5lIC8+YFxuXG5QbG90IHlvdXIgc2VyaWVzIGRhdGEgYXMgYSBsaW5lLiBTdHlsZSBsaW5lIHdpdGggYHN0cm9rZWAsIGBmaWxsYCBvciBib3RoLlxuXG4tICoqYGRhdGE6IG51bWJlcltdYCoqXG4gIFRoZSBsaXN0IG9mIGB5YCBkYXRhIHRvIHBsb3QuXG5cbi0gKipgc3Ryb2tlPzogU3Ryb2tlYCoqXG4gIFNldCBgd2lkdGhgIGluIHBpeGVscywgYHN0eWxlYCBhcyBgJ2Rhc2gnYCBvciBgJ3NvbGlkJ2AgYW5kIGNvbG9yIG9wdGlvbi5cblxuLSAqKmBmaWxsPzogQ29sb3JgKipcbiAgU29saWQgb3IgZ3JhZGllbnQgZmlsbCwgd2l0aCBvbmUgb3IgbWFueSBjb2xvcnMuIEZpbGxzIGFyZWEgZnJvbSBkYXRhIGxpbmUgdG8gYm90dG9tIGF4aXMuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lPlxuICA8TGluZVxuICAgIGRhdGE9e1stMSwgMiwgNiwgOSwgMTEsIDIxXX1cbiAgICBzdHJva2U9e3tcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgc3R5bGU6IFwiZGFzaFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgc29saWQ6IFtcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjI1XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjVdLFxuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuMV1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH19XG4gICAgZmlsbD17e1xuICAgICAgZ3JhZGllbnQ6IFtcbiAgICAgICAgWzI1NSwgMCwgMCwgMC4xXSxcbiAgICAgICAgWzI1NSwgMCwgMCwgMV1cbiAgICAgIF1cbiAgICB9fVxuICAvPlxuPC9GcmFtZT5cbmB9IFxuICA8L1N5bnRheEhpZ2hsaWdodGVyPiovfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgzPmhvbWU8L2gzPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiL2RvY3VtZW50YXRpb25cIj5cbiAgICAgICAgPGgzPmRvY3VtZW50YXRpb248L2gzPlxuICAgICAgPC9hPlxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIG1haW4ge1xuICAgICAgICBwYWRkaW5nOiAwIDAgNXJlbTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGEge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAwIDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG5cbiAgICAgIGNvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkIHtcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBmaXRDb250ZW50KDMyMHB4LCAzODBweCkgMTE0MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAvLy5ncmlkID4gKixcbiAgICAgIC5jYXJkIHtcbiAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzODBweDtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICBmbGV4LWJhc2lzOiAyNSU7XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgcHJlIHtcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC5wcmltbyB7XG4gICAgICAgIC8vYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFmMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pfTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jcztcbiJdfQ== */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          )
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Docs;

      /***/
    }
});
//# sourceMappingURL=documentation.js.519ad56c16fb7e7d3d4c.hot-update.js.map
