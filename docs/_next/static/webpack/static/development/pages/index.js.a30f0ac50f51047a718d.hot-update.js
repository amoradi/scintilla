webpackHotUpdate("static/development/pages/index.js", {
  /***/ "./pages/index.js":
    /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
      /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../components */ "./components/index.tsx"
      );
      var _jsxFileName =
        "/Users/aaronmoradi/Documents/projects/scintilla/www/pages/index.js";

      var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

      const Home = () =>
        __jsx(
          "div",
          {
            className: "jsx-2313136871" + " " + "container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 5
            },
            __self: undefined
          },
          __jsx(
            next_head__WEBPACK_IMPORTED_MODULE_2___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6
              },
              __self: undefined
            },
            __jsx(
              "title",
              {
                className: "jsx-2313136871",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7
                },
                __self: undefined
              },
              "scintilla"
            )
          ),
          __jsx(
            "main",
            {
              className: "jsx-2313136871",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              },
              __self: undefined
            },
            __jsx(
              "div",
              {
                className: "jsx-2313136871" + " " + "grid",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                },
                __self: undefined
              },
              __jsx(
                "div",
                {
                  className: "jsx-2313136871" + " " + "card primo",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  },
                  __self: undefined
                },
                __jsx(
                  "h1",
                  {
                    className: "jsx-2313136871" + " " + "title",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14
                    },
                    __self: undefined
                  },
                  "Scintilla"
                ),
                __jsx(
                  "p",
                  {
                    className: "jsx-2313136871" + " " + "description",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 15
                    },
                    __self: undefined
                  },
                  "A React sparklines component"
                ),
                __jsx(
                  "h3",
                  {
                    className: "jsx-2313136871" + " " + "description",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: undefined
                  },
                  __jsx(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla",
                      className: "jsx-2313136871",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                      },
                      __self: undefined
                    },
                    "home"
                  )
                ),
                __jsx(
                  "h3",
                  {
                    className: "jsx-2313136871" + " " + "description",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: undefined
                  },
                  __jsx(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla/documentation",
                      className: "jsx-2313136871",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                      },
                      __self: undefined
                    },
                    "documentation"
                  )
                ),
                __jsx(
                  "h3",
                  {
                    className: "jsx-2313136871" + " " + "description",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: undefined
                  },
                  __jsx(
                    "a",
                    {
                      href: "https://github.com/amoradi/scintilla",
                      className: "jsx-2313136871",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: undefined
                    },
                    "repo"
                  )
                )
              ),
              Object(_components__WEBPACK_IMPORTED_MODULE_3__["Master"])().map(
                ([Example, codeString]) => {
                  return __jsx(
                    "div",
                    {
                      className: "jsx-2313136871" + " " + "card",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      },
                      __self: undefined
                    },
                    __jsx(
                      _components__WEBPACK_IMPORTED_MODULE_3__["DefaultLine"],
                      {
                        codeString: codeString,
                        Example: Example,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        },
                        __self: undefined
                      }
                    )
                  );
                }
              )
            )
          ),
          __jsx(
            "footer",
            {
              className: "jsx-2313136871",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: undefined
            },
            __jsx(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/",
                className: "jsx-2313136871" + " " + "link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: undefined
              },
              "home"
            ),
            __jsx(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/documentation",
                className: "jsx-2313136871" + " " + "link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                },
                __self: undefined
              },
              "documentation"
            ),
            __jsx(
              "a",
              {
                href: "https://github.com/amoradi/scintilla",
                className: "jsx-2313136871" + " " + "link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: undefined
              },
              "repo"
            )
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "2166508173",
              __self: undefined
            },
            ".container.jsx-2313136871{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-2313136871{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2313136871{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2313136871 img.jsx-2313136871{margin-left:0.5rem;}footer.jsx-2313136871 a.jsx-2313136871{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-2313136871{color:inherit;-webkit-text-decoration:none;text-decoration:none;}link.jsx-2313136871{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-2313136871 a.jsx-2313136871{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-2313136871 a.jsx-2313136871:hover,.title.jsx-2313136871 a.jsx-2313136871:focus,.title.jsx-2313136871 a.jsx-2313136871:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-2313136871{margin:100px 0 0;line-height:1.15;font-size:3rem;}.title.jsx-2313136871,.description.jsx-2313136871{text-align:center;}.description.jsx-2313136871{line-height:1.5;font-size:0.9rem;}code.jsx-2313136871{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-2313136871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100vw;margin-top:3rem;}.grid.jsx-2313136871>*.jsx-2313136871,.card.jsx-2313136871{min-width:320px;max-width:380px;margin:1rem;-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;padding:1.5rem;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.card.jsx-2313136871 pre.jsx-2313136871{height:240px;overflow-y:scroll;}.card.primo.jsx-2313136871{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:#444;text-transform:lowercase;}h3.jsx-2313136871{font-weight:normal;margin-top:60px;margin-bottom:0;-webkit-text-decoration:underline;text-decoration:underline;}h3.jsx-2313136871~h3.jsx-2313136871{margin-top:0px;}@media (max-width:600px){.grid.jsx-2313136871{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGdCLEFBRzBCLEFBU0EsQUFTSSxBQVVGLEFBSUYsQUFPSCxBQUtZLEFBSVosQUFPWSxBQUlULEFBU0MsQUFJRixBQUtHLEFBU04sQUFXRyxBQVNILEFBS0ssQUFNQyxBQU9KLEFBS0YsV0FDVyxFQXZCTixDQW5FRyxBQVNBLENBNEV2QixDQXBEbUIsQUF5QkQsQ0FqR0MsQUFTVixBQXVCTSxBQTJCSSxDQVNuQixDQXhDQSxBQWlEb0IsQUF3Q0YsRUFuR0wsVUF5RmIsQ0F4RmUsQUErRUQsQ0F6QmQsQ0F4RWUsQUEyREUsQ0EwREMsRUF4Q0EsT0FxQkQsQ0E5RUYsSUEwQ2YsQ0FyRGUsQ0E2R2EsRUF4Q1QsT0FuQ25CLEFBV0EsSUFmQSxBQVNBLE1BZ0NzRSxDQThCekQsR0F6QlEsUUEwQk0sT0FrQnpCLEVBakd1QixnQkFnRnpCLENBL0d3QixFQWtHUCxDQW9CakIsUUFsR3lCLEtBWEQsQ0EwRkEsMENBZEMsbUJBcEZBLElBK0JKLENBZ0RyQixXQXRFeUIsQ0EwRnpCLGVBL0VxQixnREFpRUosaUJBckRqQixFQS9CcUIsZ0JBU0EsVUFXckIsWUFrRWtCLGdCQUNBLGdCQUNsQix1QkF2RkEsZ0JBU0EiLCJmaWxlIjoiL1VzZXJzL2Fhcm9ubW9yYWRpL0RvY3VtZW50cy9wcm9qZWN0cy9zY2ludGlsbGEvd3d3L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgRGVmYXVsdExpbmUsIE1hc3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+c2NpbnRpbGxhPC90aXRsZT5cbiAgICAgIHsvKjxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4qL31cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcHJpbW9cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TY2ludGlsbGE8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+QSBSZWFjdCBzcGFya2xpbmVzIGNvbXBvbmVudDwvcD5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Ftb3JhZGkuZ2l0aHViLmlvL3NjaW50aWxsYVwiPlxuICAgICAgICAgICAgICBob21lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Ftb3JhZGkuZ2l0aHViLmlvL3NjaW50aWxsYS9kb2N1bWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgIGRvY3VtZW50YXRpb25cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbW9yYWRpL3NjaW50aWxsYVwiPlxuICAgICAgICAgICAgICByZXBvXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8TWFzdGVyIC8+ICovfVxuICAgICAgICB7TWFzdGVyKCkubWFwKChbRXhhbXBsZSwgY29kZVN0cmluZ10pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxEZWZhdWx0TGluZSBjb2RlU3RyaW5nPXtjb2RlU3RyaW5nfSBFeGFtcGxlPXtFeGFtcGxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYW1vcmFkaS5naXRodWIuaW8vc2NpbnRpbGxhL1wiIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgICAgaG9tZVxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hbW9yYWRpLmdpdGh1Yi5pby9zY2ludGlsbGEvZG9jdW1lbnRhdGlvblwiIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgICAgZG9jdW1lbnRhdGlvblxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Ftb3JhZGkvc2NpbnRpbGxhXCIgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICByZXBvXG4gICAgICA8L2E+XG4gICAgPC9mb290ZXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCA1cmVtO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgYSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGxpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGEge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMTAwcHggMCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuXG4gICAgICBjb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgLmdyaWQgPiAqLFxuICAgICAgLmNhcmQge1xuICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDM4MHB4O1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBwcmUge1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLnByaW1vIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgaDMgfiBoMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFmMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/index.js */"
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "3702522083",
              __self: undefined
            },
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbm1vcmFkaS9Eb2N1bWVudHMvcHJvamVjdHMvc2NpbnRpbGxhL3d3dy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTXVCLEFBSWtDLEFBUUgsc0JBQ3hCLEdBUlksVUFDRCxTQUU2RCxxSUFDeEUiLCJmaWxlIjoiL1VzZXJzL2Fhcm9ubW9yYWRpL0RvY3VtZW50cy9wcm9qZWN0cy9zY2ludGlsbGEvd3d3L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgRGVmYXVsdExpbmUsIE1hc3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+c2NpbnRpbGxhPC90aXRsZT5cbiAgICAgIHsvKjxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4qL31cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcHJpbW9cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TY2ludGlsbGE8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+QSBSZWFjdCBzcGFya2xpbmVzIGNvbXBvbmVudDwvcD5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Ftb3JhZGkuZ2l0aHViLmlvL3NjaW50aWxsYVwiPlxuICAgICAgICAgICAgICBob21lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Ftb3JhZGkuZ2l0aHViLmlvL3NjaW50aWxsYS9kb2N1bWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgIGRvY3VtZW50YXRpb25cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbW9yYWRpL3NjaW50aWxsYVwiPlxuICAgICAgICAgICAgICByZXBvXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8TWFzdGVyIC8+ICovfVxuICAgICAgICB7TWFzdGVyKCkubWFwKChbRXhhbXBsZSwgY29kZVN0cmluZ10pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxEZWZhdWx0TGluZSBjb2RlU3RyaW5nPXtjb2RlU3RyaW5nfSBFeGFtcGxlPXtFeGFtcGxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYW1vcmFkaS5naXRodWIuaW8vc2NpbnRpbGxhL1wiIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgICAgaG9tZVxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hbW9yYWRpLmdpdGh1Yi5pby9zY2ludGlsbGEvZG9jdW1lbnRhdGlvblwiIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgICAgZG9jdW1lbnRhdGlvblxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Ftb3JhZGkvc2NpbnRpbGxhXCIgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICByZXBvXG4gICAgICA8L2E+XG4gICAgPC9mb290ZXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCA1cmVtO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgYSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGxpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGEge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMTAwcHggMCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuXG4gICAgICBjb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgLmdyaWQgPiAqLFxuICAgICAgLmNhcmQge1xuICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDM4MHB4O1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBwcmUge1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLnByaW1vIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgaDMgfiBoMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFmMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/aaronmoradi/Documents/projects/scintilla/www/pages/index.js */"
          )
        );

      /* harmony default export */ __webpack_exports__["default"] = Home;

      /***/
    }
});
//# sourceMappingURL=index.js.a30f0ac50f51047a718d.hot-update.js.map
