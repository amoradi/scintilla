webpackHotUpdate("static/development/pages/index.js", {
  /***/ "./components/Line/Line.tsx":
    /*!**********************************!*\
  !*** ./components/Line/Line.tsx ***!
  \**********************************/
    /*! exports provided: DefaultLine, Master */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "DefaultLine",
        function() {
          return DefaultLine;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "Master",
        function() {
          return Master;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js"
      );
      /* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js"
      );
      /* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var scintilla__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! scintilla */ "../build/bundle.esm.js"
      );
      var _jsxFileName =
        "/Users/aaronmoradi/Documents/projects/scintilla/www/components/Line/Line.tsx";

      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      const DefaultLine = ({ codeString, Example }) => {
        return __jsx(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            },
            __self: undefined
          },
          __jsx(
            "div",
            {
              style: {
                height: "50px",
                width: "120px",
                margin: "0 auto"
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              },
              __self: undefined
            },
            __jsx(Example, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: undefined
            })
          ),
          __jsx(
            "div",
            {
              style: {
                fontSize: "12px",
                marginTop: "40px",
                maxHeight: "240px",
                overflowY: "scroll"
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              },
              __self: undefined
            },
            __jsx(
              react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"],
              {
                language: "jsx",
                style:
                  react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__[
                    "prism"
                  ],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: undefined
              },
              codeString
            )
          )
        );
      };

      const Master = () => {
        const tuple = [
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 1]
                    },
                    width: 1,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
                  color: [255, 0, 0, 1],
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  index: 17,
                  size: 3,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n      <Marker\n      color={[255, 0, 0, 1]}\n      data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n      index={17}\n      size={3}\n    />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [41, 241, 195, 0.7]
                    },
                    width: 3,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [41, 241, 195, 0.7] },\n          width: 3,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [255, 0, 0, 0.7]
                    },
                    width: 2,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [255, 0, 0, 0.7] },\n          width: 2,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [
                        [255, 0, 0, 1],
                        [0, 140, 255, 1],
                        [35, 203, 167, 1]
                      ]
                    },
                    width: 2,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [[255, 0, 0, 1], [0, 140, 255, 1], [35, 203, 167, 1]]  },\n          width: 2,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 248
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      gradient: [
                        [255, 148, 255, 0.5],
                        [255, 0, 255, 1]
                      ]
                    },
                    width: 2,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 249
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { gradient: [[255, 148, 255, 0.5], [255, 0, 255, 1]] },\n          width: 2,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 298
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 1]
                    },
                    width: 1,
                    style: "dash"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 299
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 343
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [255, 0, 0, 1]
                    },
                    width: 1,
                    style: "dash"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 344
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [255, 0, 0, 1] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 388
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [
                        [255, 0, 0, 1],
                        [0, 140, 255, 1],
                        [20, 128, 20, 1]
                      ]
                    },
                    width: 1,
                    style: "dash"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 389
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [[255, 0, 0, 1], [0, 140, 255, 1], [20, 128, 20, 1]]  },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 439
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      gradient: [
                        [255, 148, 255, 0.5],
                        [255, 0, 255, 1]
                      ]
                    },
                    width: 1,
                    style: "dash"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 440
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { gradient: [[255, 148, 255, 0.5], [255, 0, 255, 1]] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 489
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 1]
                    },
                    width: 1,
                    style: "solid"
                  },
                  fill: {
                    solid: [20, 20, 20, 1]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 490
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n        fill={{ solid: [20, 20, 20, 1] }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 536
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 0.4]
                    },
                    width: 2,
                    style: "solid"
                  },
                  fill: {
                    solid: [20, 20, 20, 0.2]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 537
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 0.4] },\n          width: 2,\n          style: "solid"\n        }}\n        fill={{ solid: [20, 20, 20, 0.2] }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [34, 50],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 583
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [255, 0, 0, 0.7]
                    },
                    width: 1,
                    style: "solid"
                  },
                  fill: {
                    solid: [255, 0, 0, 0.7]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 584
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [255, 0, 0, 0.7] },\n          width: 1,\n          style: "solid"\n        }}\n        fill={{ solid: [255, 0, 0, 0.7] }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [34, 50],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 630
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  fill: {
                    solid: [
                      [145, 61, 136, 1],
                      [20, 20, 20, 0.6],
                      [255, 0, 0, 0.7]
                    ]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 631
                  },
                  __self: undefined
                })
              ),
            "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [[145, 61, 136, 1],[20, 20, 20, 0.6], [255, 0, 0, 0.7]] }}\n      />\n    </Frame>\n  "
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [34, 50],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 673
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  fill: {
                    gradient: [
                      [242, 120, 75, 1],
                      [244, 208, 63, 1]
                    ]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 674
                  },
                  __self: undefined
                })
              ),
            "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ gradient: [[242, 120, 75, 1], [244, 208, 63, 1]] }}\n      />\n    </Frame>\n  "
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [34, 50],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 715
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  fill: {
                    gradient: [
                      [38, 194, 129, 1],
                      [0, 230, 64, 1],
                      [0, 230, 64, 1]
                    ]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 716
                  },
                  __self: undefined
                })
              ),
            "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ gradient: [[38, 194, 129, 1], [0, 230, 64, 1], [0, 230, 64, 1]] }}\n      />\n    </Frame>\n  "
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [34, 54],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 758
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    41,
                    42,
                    39,
                    43,
                    43,
                    43,
                    44,
                    45,
                    46,
                    48,
                    49,
                    49,
                    50,
                    52,
                    52,
                    53,
                    53,
                    54
                  ],
                  fill: {
                    solid: [246, 36, 89, 1]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 759
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  fill: {
                    solid: [238, 238, 0, 1]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 782
                  },
                  __self: undefined
                })
              ),
            "\n    <Frame height={40} yRange={[34, 54]}>\n      <Line\n        data={[ 41, 42, 39, 43, 43, 43, 44, 45, 46, 48, 49, 49, 50, 52, 52, 53, 53, 54 ]}\n        fill={{ solid: [246, 36, 89, 1] }}\n      />\n      <Line\n        data={[ 40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49 ]}\n        fill={{ solid: [238, 238, 0, 1] }}\n      />\n    </Frame>\n  "
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 822
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 1]
                    },
                    width: 1,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 823
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [38, 42, 45, 49, 50, 48, 47],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 1]
                    },
                    width: 1,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 850
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40} >\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n      <Line\n        data={[ 38, 42, 45, 49, 50, 48, 47 ]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [35, 50],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 883
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [38, 42, 45, 49, 48.5, 47, 44],
                  fill: {
                    solid: [3, 201, 169, 0.5]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 884
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [165, 55, 253, 0.8]
                    },
                    width: 1,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 888
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40} yRange={[35, 50]}>\n      <Line\n        data={[ 38, 42, 45, 49, 48.5, 47, 44 ]}\n        fill={{ solid: [3, 201, 169, 0.5]}}\n      />\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 0.7] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [32, 60],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 936
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 1]
                    },
                    width: 1,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 937
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [45, 43, 47, 52, 53, 56, 57],
                  stroke: {
                    color: {
                      solid: [255, 0, 0, 1]
                    },
                    width: 1,
                    style: "dash"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 964
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [34, 32, 34, 38, 41, 43, 43],
                  stroke: {
                    color: {
                      solid: [41, 241, 195, 1]
                    },
                    width: 1,
                    style: "dash"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 972
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40} yRange={[32, 60]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n      <Line\n        data={[ 45, 43, 47, 52, 53, 56, 57 ]}\n        stroke={{\n          color: { solid: [255, 0, 0, 1] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n      <Line\n        data={[ 34, 32, 34, 38, 41, 43, 43 ]}\n        stroke={{\n          color: { solid: [41, 241, 195, 1] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [34, 50],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1013
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 1]
                    },
                    width: 1,
                    style: "solid"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1014
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [42, 42],
                  stroke: {
                    color: {
                      solid: [20, 20, 20, 0.5]
                    },
                    width: 1,
                    style: "dash"
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1041
                  },
                  __self: undefined
                })
              ),
            '\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n      <Line\n        data={[ 42, 42 ]}\n        stroke={{\n          color: { solid: [20, 20, 20, 0.5] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1074
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  fill: {
                    solid: [255, 0, 0, 0.6]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1075
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [38, 43, 45, 44, 43, 42, 40],
                  fill: {
                    solid: [83, 51, 237, 0.4]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1098
                  },
                  __self: undefined
                })
              ),
            "\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [255, 0, 0, 0.6]}}\n      />\n      <Line\n        data={[ 38, 43, 45, 44, 43, 42, 40 ]}\n        fill={{ solid: [83, 51, 237, 0.4]}}\n      />\n    </Frame>\n  "
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [34, 50],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1119
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  fill: {
                    solid: [137, 196, 244, 1]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1120
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [44, 44],
                  fill: {
                    solid: [255, 255, 255, 0.5]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1143
                  },
                  __self: undefined
                })
              ),
            "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [137, 196, 244, 1]}}\n      />\n      <Line\n        data={[ 44, 44 ]}\n        fill={{ solid: [120, 120, 120, 0.5] }}\n      />\n    </Frame>\n  "
          ],
          [
            () =>
              __jsx(
                scintilla__WEBPACK_IMPORTED_MODULE_3__["Frame"],
                {
                  height: 40,
                  yRange: [34, 50],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1161
                  },
                  __self: undefined
                },
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [
                    40,
                    39,
                    37,
                    39,
                    39,
                    40,
                    41,
                    42,
                    43,
                    46,
                    47,
                    48,
                    48,
                    50,
                    49,
                    48,
                    48,
                    49
                  ],
                  fill: {
                    solid: [46, 204, 113, 0.6]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1162
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [42, 43, 45, 44, 43, 40, 40],
                  fill: {
                    solid: [
                      [83, 51, 237, 0.5],
                      [83, 51, 237, 0.2]
                    ]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1185
                  },
                  __self: undefined
                }),
                __jsx(scintilla__WEBPACK_IMPORTED_MODULE_3__["Line"], {
                  data: [36, 36.25, 37.5, 38, 39, 38, 37],
                  fill: {
                    solid: [255, 255, 126, 0.8]
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 1194
                  },
                  __self: undefined
                })
              ),
            "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [46, 204, 113, 0.6]}}\n      />\n      <Line\n        data={[ 42, 43, 45, 44, 43, 40, 40]}\n        fill={{ solid: [[83, 51, 237, 0.5], [83, 51, 237, 0.2]]}}\n      />\n      <Line\n        data={[ 36, 36.25, 37.5, 38, 39, 38, 37]}\n        fill={{ solid: [255, 255, 126, 0.8]}}\n      />\n    </Frame>\n  "
          ]
        ];
        return tuple;
      };

      /***/
    }
});
//# sourceMappingURL=index.js.4d4e17004f9aed202e31.hot-update.js.map
