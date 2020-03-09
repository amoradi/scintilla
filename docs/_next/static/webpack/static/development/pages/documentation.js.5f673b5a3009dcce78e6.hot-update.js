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
            className: "jsx-4118271772" + " " + "container",
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
                className: "jsx-4118271772",
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
              className: "jsx-4118271772",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: undefined
            },
            __jsx(
              "div",
              {
                className: "jsx-4118271772" + " " + "grid",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: undefined
              },
              __jsx(
                "div",
                {
                  className: "jsx-4118271772" + " " + "card primo",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: undefined
                },
                __jsx(
                  "h1",
                  {
                    className: "jsx-4118271772" + " " + "title",
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
                    className: "jsx-4118271772" + " " + "description",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: undefined
                  },
                  "A React sparklines component"
                ),
                __jsx(
                  "a",
                  {
                    href: "/",
                    className: "jsx-4118271772" + " " + "description",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: undefined
                  },
                  __jsx(
                    "h3",
                    {
                      className: "jsx-4118271772",
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
                  className: "jsx-4118271772",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: undefined
                },
                __jsx(
                  "h2",
                  {
                    className: "jsx-4118271772",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
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
                      lineNumber: 26
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
              className: "jsx-4118271772",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: undefined
            },
            __jsx(
              "a",
              {
                href: "https://nextjs.org/docs",
                className: "jsx-4118271772",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                },
                __self: undefined
              },
              __jsx(
                "h3",
                {
                  className: "jsx-4118271772",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
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
              id: "1570343222",
              __self: undefined
            },
            ".container.jsx-4118271772{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-4118271772{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-4118271772{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-4118271772 img.jsx-4118271772{margin-left:0.5rem;}footer.jsx-4118271772 a.jsx-4118271772{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-4118271772{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-4118271772 a.jsx-4118271772{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-4118271772 a.jsx-4118271772:hover,.title.jsx-4118271772 a.jsx-4118271772:focus,.title.jsx-4118271772 a.jsx-4118271772:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-4118271772{margin:100px 0 0;line-height:1.15;font-size:3rem;}.title.jsx-4118271772,.description.jsx-4118271772{text-align:center;}.description.jsx-4118271772{line-height:1.5;font-size:0.9rem;}code.jsx-4118271772{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-4118271772{display:grid;grid-template-columns:320px 700px;max-width:100vw;margin-top:3rem;}.card.jsx-4118271772{min-width:320px;max-width:380px;margin:1rem;-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;padding:1.5rem;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.card.jsx-4118271772 pre.jsx-4118271772{height:240px;overflow-y:scroll;}.card.primo.jsx-4118271772{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:#444;text-transform:lowercase;}h3.jsx-4118271772{font-weight:normal;margin-top:60px;-webkit-text-decoration:underline;text-decoration:underline;}@media (max-width:600px){.grid.jsx-4118271772{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIZ0IsQUFHMEIsQUFTQSxBQVNJLEFBVUYsQUFJTixBQU1DLEFBS0EsQUFPWSxBQUlULEFBU0MsQUFJRixBQUtHLEFBYU4sQUFRRyxBQVNILEFBS0ssQUFNQyxBQU9OLFdBQ1csRUFuQ1UsQUFpQmhCLENBaEVHLEFBS0EsRUF3QkosQUEwQkQsQ0E3RkMsQUFTVixBQTZDVSxDQVNuQixDQW5DQSxBQTRDb0IsQUF5Q0YsRUEvRkwsVUFxRmIsQ0FwRmUsQUEyRUQsQ0ExQmQsQ0FuRWUsQUFzREUsQ0EyRFcsRUF6Q1YsT0FzQkQsQ0ExRUYsRUFpRUcsRUE1QmxCLENBaERlLEdBZ0VJLE9BeEJuQixHQXFDa0IsQ0FoRGxCLEFBS0EsTUFnQ3NFLENBK0J6RCxHQTNFWSxLQXdEekIsR0FvQjJCLE9BYXpCLE1BTkYsWUFOQSxDQTNHd0IsRUE4RlAsU0ExRVEsS0FYRCxDQXNGQSxnREFoRUgsYUE5QkksS0EwRXpCLFdBakV5QixDQXNGekIsZUEzRXFCLGdEQVdyQixtQkE5QnFCLGdCQVNBLFVBV3JCLG1FQW5CQSxnQkFTQSIsImZpbGUiOiIvVXNlcnMvYWFyb25tb3JhZGkvRG9jdW1lbnRzL3Byb2plY3RzL3NjaW50aWxsYS93d3cvcGFnZXMvZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgcHJpc20gfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuXG5jb25zdCBEb2NzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnNjaW50aWxsYTwvdGl0bGU+XG4gICAgICB7Lyo8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+Ki99XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHByaW1vXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2NpbnRpbGxhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkEgUmVhY3Qgc3BhcmtsaW5lcyBjb21wb25lbnQ8L3A+XG5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8aDM+aG9tZTwvaDM+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlR5cGVzPC9oMj5cbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwidHN4XCIgc3R5bGU9e3ByaXNtfT5cbiAgICAgICAgICB7YFxudHlwZSBSR0JBID0gWzAtMjU1LCAwLTI1NSwgMC0yNTUsIDAtMV1cblxudHlwZSBDb2xvciA9IHtcbiAgZ3JhZGllbnQ/OiBSR0JBIHwgUkdCQVtdO1xuICBzb2xpZD86IFJHQkEgfCBSR0JBW107XG59O1xuXG50eXBlIFN0cm9rZSA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgc3R5bGU6IFwiZGFzaFwiIHwgXCJzb2xpZFwiO1xuICBjb2xvcjogQ29sb3I7XG59O2Bcbn1cbiAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cblxuey8qIC8vIENvbXBvbmVudHNcblxuIyMjIGA8RnJhbWUgLz5gXG5cblJlc3BvbnNpdmUgY29udGFpbmVyIGZvciBhbGwgYGRhdGFgLW5lZWR5IGNoaWxkIGNvbXBvbmVudHMuXG5cbi0gKipgaGVpZ2h0PzogbnVtYmVyYCoqXG4gIE9wdGlvbmFsbHkgc3BlY2lmeSBoZWlnaHQgaW4gcGl4ZWxzLiBEZWZhdWx0cyB0byBgNTBweGAuXG5cbi0gKipgcmFuZ2U/OiBbbWluPG51bWJlcj4sIG1heDxudW1iZXI+XWAqKlxuICBPcHRpb25hbGx5IHBsb3QgYGNoaWxkcmVuYCBjb21wb25lbnRzIHdpdGggdGhpcyB5IGF4aXMgY29uc3RyYWludC5cblxuKipFeGFtcGxlKipcblxuYGBganN4XG48RnJhbWUgaGVpZ2h0PXsxMDB9IHJhbmdlPXtbMCwgNTAwXX0+XG4gIDxMaW5lIC8+XG48L0ZyYW1lPlxuYGBgXG5cbi0tLVxuXG4jIyMgYDxMaW5lIC8+YFxuXG5QbG90IHlvdXIgc2VyaWVzIGRhdGEgYXMgYSBsaW5lLiBTdHlsZSBsaW5lIHdpdGggYHN0cm9rZWAsIGBmaWxsYCBvciBib3RoLlxuXG4tICoqYGRhdGE6IG51bWJlcltdYCoqXG4gIFRoZSBsaXN0IG9mIGB5YCBkYXRhIHRvIHBsb3QuXG5cbi0gKipgc3Ryb2tlPzogU3Ryb2tlYCoqXG4gIFNldCBgd2lkdGhgIGluIHBpeGVscywgYHN0eWxlYCBhcyBgJ2Rhc2gnYCBvciBgJ3NvbGlkJ2AgYW5kIGNvbG9yIG9wdGlvbi5cblxuLSAqKmBmaWxsPzogQ29sb3JgKipcbiAgU29saWQgb3IgZ3JhZGllbnQgZmlsbCwgd2l0aCBvbmUgb3IgbWFueSBjb2xvcnMuIEZpbGxzIGFyZWEgZnJvbSBkYXRhIGxpbmUgdG8gYm90dG9tIGF4aXMuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lPlxuICA8TGluZVxuICAgIGRhdGE9e1stMSwgMiwgNiwgOSwgMTEsIDIxXX1cbiAgICBzdHJva2U9e3tcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgc3R5bGU6IFwiZGFzaFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgc29saWQ6IFtcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjI1XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjVdLFxuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuMV1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH19XG4gICAgZmlsbD17e1xuICAgICAgZ3JhZGllbnQ6IFtcbiAgICAgICAgWzI1NSwgMCwgMCwgMC4xXSxcbiAgICAgICAgWzI1NSwgMCwgMCwgMV1cbiAgICAgIF1cbiAgICB9fVxuICAvPlxuPC9GcmFtZT5cbmB9IFxuICA8L1N5bnRheEhpZ2hsaWdodGVyPiovfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCI+XG4gICAgICAgIDxoMz5kb2N1bWVudGF0aW9uPC9oMz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDVyZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAwIDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG5cbiAgICAgIGNvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkIHtcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCA3MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgLy8uZ3JpZCA+ICosXG4gICAgICAuY2FyZCB7XG4gICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgZmxleC1iYXNpczogMjUlO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHByZSB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQucHJpbW8ge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWYwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcbiAgICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBEb2NzO1xuIl19 */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "3702522083",
              __self: undefined
            },
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtQdUIsQUFJa0MsQUFRSCxzQkFDeEIsR0FSWSxVQUNELFNBRTZELHFJQUN4RSIsImZpbGUiOiIvVXNlcnMvYWFyb25tb3JhZGkvRG9jdW1lbnRzL3Byb2plY3RzL3NjaW50aWxsYS93d3cvcGFnZXMvZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgcHJpc20gfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuXG5jb25zdCBEb2NzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnNjaW50aWxsYTwvdGl0bGU+XG4gICAgICB7Lyo8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+Ki99XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHByaW1vXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2NpbnRpbGxhPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkEgUmVhY3Qgc3BhcmtsaW5lcyBjb21wb25lbnQ8L3A+XG5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8aDM+aG9tZTwvaDM+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlR5cGVzPC9oMj5cbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwidHN4XCIgc3R5bGU9e3ByaXNtfT5cbiAgICAgICAgICB7YFxudHlwZSBSR0JBID0gWzAtMjU1LCAwLTI1NSwgMC0yNTUsIDAtMV1cblxudHlwZSBDb2xvciA9IHtcbiAgZ3JhZGllbnQ/OiBSR0JBIHwgUkdCQVtdO1xuICBzb2xpZD86IFJHQkEgfCBSR0JBW107XG59O1xuXG50eXBlIFN0cm9rZSA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgc3R5bGU6IFwiZGFzaFwiIHwgXCJzb2xpZFwiO1xuICBjb2xvcjogQ29sb3I7XG59O2Bcbn1cbiAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cblxuey8qIC8vIENvbXBvbmVudHNcblxuIyMjIGA8RnJhbWUgLz5gXG5cblJlc3BvbnNpdmUgY29udGFpbmVyIGZvciBhbGwgYGRhdGFgLW5lZWR5IGNoaWxkIGNvbXBvbmVudHMuXG5cbi0gKipgaGVpZ2h0PzogbnVtYmVyYCoqXG4gIE9wdGlvbmFsbHkgc3BlY2lmeSBoZWlnaHQgaW4gcGl4ZWxzLiBEZWZhdWx0cyB0byBgNTBweGAuXG5cbi0gKipgcmFuZ2U/OiBbbWluPG51bWJlcj4sIG1heDxudW1iZXI+XWAqKlxuICBPcHRpb25hbGx5IHBsb3QgYGNoaWxkcmVuYCBjb21wb25lbnRzIHdpdGggdGhpcyB5IGF4aXMgY29uc3RyYWludC5cblxuKipFeGFtcGxlKipcblxuYGBganN4XG48RnJhbWUgaGVpZ2h0PXsxMDB9IHJhbmdlPXtbMCwgNTAwXX0+XG4gIDxMaW5lIC8+XG48L0ZyYW1lPlxuYGBgXG5cbi0tLVxuXG4jIyMgYDxMaW5lIC8+YFxuXG5QbG90IHlvdXIgc2VyaWVzIGRhdGEgYXMgYSBsaW5lLiBTdHlsZSBsaW5lIHdpdGggYHN0cm9rZWAsIGBmaWxsYCBvciBib3RoLlxuXG4tICoqYGRhdGE6IG51bWJlcltdYCoqXG4gIFRoZSBsaXN0IG9mIGB5YCBkYXRhIHRvIHBsb3QuXG5cbi0gKipgc3Ryb2tlPzogU3Ryb2tlYCoqXG4gIFNldCBgd2lkdGhgIGluIHBpeGVscywgYHN0eWxlYCBhcyBgJ2Rhc2gnYCBvciBgJ3NvbGlkJ2AgYW5kIGNvbG9yIG9wdGlvbi5cblxuLSAqKmBmaWxsPzogQ29sb3JgKipcbiAgU29saWQgb3IgZ3JhZGllbnQgZmlsbCwgd2l0aCBvbmUgb3IgbWFueSBjb2xvcnMuIEZpbGxzIGFyZWEgZnJvbSBkYXRhIGxpbmUgdG8gYm90dG9tIGF4aXMuXG5cbioqRXhhbXBsZSoqXG5cbmBgYGpzeFxuPEZyYW1lPlxuICA8TGluZVxuICAgIGRhdGE9e1stMSwgMiwgNiwgOSwgMTEsIDIxXX1cbiAgICBzdHJva2U9e3tcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgc3R5bGU6IFwiZGFzaFwiLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgc29saWQ6IFtcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjI1XSxcbiAgICAgICAgICBbMjU1LCAwLCAwLCAwLjVdLFxuICAgICAgICAgIFsyNTUsIDAsIDAsIDAuMV1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH19XG4gICAgZmlsbD17e1xuICAgICAgZ3JhZGllbnQ6IFtcbiAgICAgICAgWzI1NSwgMCwgMCwgMC4xXSxcbiAgICAgICAgWzI1NSwgMCwgMCwgMV1cbiAgICAgIF1cbiAgICB9fVxuICAvPlxuPC9GcmFtZT5cbmB9IFxuICA8L1N5bnRheEhpZ2hsaWdodGVyPiovfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCI+XG4gICAgICAgIDxoMz5kb2N1bWVudGF0aW9uPC9oMz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDVyZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAwIDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG5cbiAgICAgIGNvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkIHtcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCA3MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgLy8uZ3JpZCA+ICosXG4gICAgICAuY2FyZCB7XG4gICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgZmxleC1iYXNpczogMjUlO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHByZSB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQucHJpbW8ge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWYwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcbiAgICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBEb2NzO1xuIl19 */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/documentation.js */"
          )
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Docs;

      /***/
    }
});
//# sourceMappingURL=documentation.js.5f673b5a3009dcce78e6.hot-update.js.map
