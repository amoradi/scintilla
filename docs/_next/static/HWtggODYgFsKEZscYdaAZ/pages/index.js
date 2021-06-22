(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "4fRq": function(e, n) {
      var t =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (t) {
        var i = new Uint8Array(16);
        e.exports = function() {
          return t(i), i;
        };
      } else {
        var a = new Array(16);
        e.exports = function() {
          for (var e, n = 0; n < 16; n++)
            0 === (3 & n) && (e = 4294967296 * Math.random()),
              (a[n] = (e >>> ((3 & n) << 3)) & 255);
          return a;
        };
      }
    },
    EcEN: function(e, n, t) {
      var i = t("xDdU"),
        a = t("xk4V"),
        r = a;
      (r.v1 = i), (r.v4 = a), (e.exports = r);
    },
    I2ZF: function(e, n) {
      for (var t = [], i = 0; i < 256; ++i)
        t[i] = (i + 256).toString(16).substr(1);
      e.exports = function(e, n) {
        var i = n || 0,
          a = t;
        return [
          a[e[i++]],
          a[e[i++]],
          a[e[i++]],
          a[e[i++]],
          "-",
          a[e[i++]],
          a[e[i++]],
          "-",
          a[e[i++]],
          a[e[i++]],
          "-",
          a[e[i++]],
          a[e[i++]],
          "-",
          a[e[i++]],
          a[e[i++]],
          a[e[i++]],
          a[e[i++]],
          a[e[i++]],
          a[e[i++]]
        ].join("");
      };
    },
    RNiq: function(e, n, t) {
      "use strict";
      t.r(n);
      var i = t("p0XB"),
        a = t.n(i);
      var r = t("XXOK"),
        o = t.n(r),
        l = t("yLu3"),
        s = t.n(l);
      function d(e, n) {
        return (
          (function(e) {
            if (a()(e)) return e;
          })(e) ||
          (function(e, n) {
            if (
              s()(Object(e)) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            ) {
              var t = [],
                i = !0,
                a = !1,
                r = void 0;
              try {
                for (
                  var l, d = o()(e);
                  !(i = (l = d.next()).done) &&
                  (t.push(l.value), !n || t.length !== n);
                  i = !0
                );
              } catch (c) {
                (a = !0), (r = c);
              } finally {
                try {
                  i || null == d.return || d.return();
                } finally {
                  if (a) throw r;
                }
              }
              return t;
            }
          })(e, n) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var c = t("MX0m"),
        h = t.n(c),
        m = t("q1tI"),
        f = t.n(m),
        g = t("8Kt/"),
        u = t.n(g),
        x = t("uUdh"),
        y = t("c2c2"),
        p = t("EcEN");
      const w = {
          height: 50,
          viewBox: { width: 100, height: 100 },
          yRange: null
        },
        k = f.a.createContext(Object.assign({}, w)),
        b = ({ children: e, height: n, yRange: t }) => {
          const i = w.viewBox;
          return f.a.createElement(
            "svg",
            {
              width: "100%",
              height: n,
              style: { display: "inline" },
              overflow: "visible"
            },
            f.a.createElement(
              k.Provider,
              { value: { height: n, viewBox: i, yRange: t } },
              e
            )
          );
        };
      function v(e) {
        return "number" == typeof e && !isNaN(e) && isFinite(e);
      }
      function j(e) {
        return Array.isArray(e) && 4 === e.length && e.every(e => v(e));
      }
      function E(e, n) {
        let t = () => !0;
        if (Array.isArray(n) && 2 === n.length && n.every(v)) {
          const [e, i] = n;
          t = n => n >= e && n <= i;
        }
        return e.filter(v).filter(t);
      }
      function F(e, { n: n, min: t, max: i }) {
        return e * ((n - t) / (0 == i - t ? 1 : i - t));
      }
      function R(e) {
        return e.map((e, n) => [n, e]);
      }
      function L(e, n, t, i) {
        const a = (function(e) {
            var n = Math.max,
              t = Math.min;
            const i = e.map(([e]) => e),
              a = e.map(([e, n]) => n);
            return {
              x: { min: t(...i), max: n(...i) },
              y: { min: t(...a), max: n(...a) }
            };
          })(e),
          r = e.map(([e, i]) => [
            F(n.width, { n: e, min: a.x.min, max: a.x.max }),
            F(n.height, {
              n: i,
              min: t ? t.min : a.y.min,
              max: t ? t.max : a.y.max
            })
          ]);
        let o = "";
        return (
          r.forEach(([e, t], i) => {
            o += 0 === i ? `M ${e},${n.height - t}` : ` L ${e},${n.height - t}`;
          }),
          i &&
            ((o += ` L ${r[r.length - 1][0]},${n.height}`),
            (o += ` L 0,${n.height} Z`)),
          o
        );
      }
      b.defaultProps = Object.assign({}, w);
      const N = ({
          clipPath: e,
          d: n,
          fill: t,
          stroke: i,
          strokeDasharray: a,
          strokeWidth: r,
          vectorEffect: o
        }) =>
          f.a.createElement("path", {
            clipPath: e,
            d: n,
            fill: t,
            stroke: i,
            strokeDasharray: a,
            strokeWidth: r,
            vectorEffect: o
          }),
        $ = ({ id: e, gradient: n }) => {
          let t = null;
          return (
            Array.isArray(n) &&
            n.every(e => Array.isArray(e) && e.every(e => v(e)))
              ? (t = f.a.createElement(
                  f.a.Fragment,
                  null,
                  n.map((e, t) => {
                    const i = 100 / (n || []).length;
                    return f.a.createElement("stop", {
                      key: t,
                      offset: `${i / 2 + t * i}%`,
                      stopColor: `rgba(${e.join(",")})`
                    });
                  })
                ))
              : Array.isArray(n) &&
                n.every(e => v(e)) &&
                (t = f.a.createElement("stop", {
                  offset: "100%",
                  stopColor: `rgba(${n.join(",")})`
                })),
            f.a.createElement(
              "linearGradient",
              { id: e, gradientUnits: "userSpaceOnUse" },
              t
            )
          );
        },
        A = ({ gradient: e, polygonalD: n, uuid: t }) =>
          f.a.createElement(
            f.a.Fragment,
            null,
            f.a.createElement(
              "defs",
              null,
              f.a.createElement($, { id: t, gradient: e })
            ),
            f.a.createElement(N, {
              clipPath: "none",
              d: n,
              fill: `url(#${t})`,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              vectorEffect: "non-scaling-stroke"
            })
          ),
        M = ({
          d: e,
          gradient: n,
          strokeDasharray: t,
          strokeWidth: i,
          uuid: a
        }) =>
          f.a.createElement(
            f.a.Fragment,
            null,
            f.a.createElement(
              "defs",
              null,
              f.a.createElement($, { id: a, gradient: n })
            ),
            f.a.createElement(N, {
              clipPath: "none",
              d: e,
              stroke: `url(#${a})`,
              strokeWidth: i,
              strokeDasharray: t,
              fill: "none",
              vectorEffect: "non-scaling-stroke"
            })
          ),
        z = ({ id: e, height: n, width: t, x: i }) =>
          f.a.createElement(
            f.a.Fragment,
            null,
            f.a.createElement(
              "clipPath",
              { id: e },
              f.a.createElement("rect", {
                x: i,
                width: t,
                height: n,
                fill: "red"
              })
            )
          );
      function D({
        color: e,
        d: n,
        maskHeight: t,
        viewBoxWidth: i,
        strokeStyle: a,
        width: r,
        mode: o
      }) {
        const l = e.map(() => Object(p.v1)()),
          s = i / e.length;
        return f.a.createElement(
          f.a.Fragment,
          null,
          e.map((e, i) =>
            f.a.createElement(
              f.a.Fragment,
              { key: i },
              f.a.createElement(
                "defs",
                null,
                f.a.createElement(z, {
                  x: i * s,
                  id: l[i],
                  height: t,
                  width: s
                })
              ),
              f.a.createElement(N, {
                clipPath: `url(#${l[i]})`,
                d: n,
                stroke: "stroke" === o ? `rgba(${e.join(", ")})` : "none",
                strokeWidth: r,
                strokeDasharray:
                  ("dash" === a && `${6 * (r || 1)} ${4 * (r || 1)}`) || "none",
                fill: "fill" === o ? `rgba(${e.join(", ")})` : "none",
                vectorEffect: "non-scaling-stroke"
              })
            )
          )
        );
      }
      const S = ({ data: e, fill: n, stroke: t }) =>
          f.a.createElement(
            k.Consumer,
            null,
            ({ height: i, viewBox: a, yRange: r }) => {
              var o = Math.max,
                l = Math.min;
              const s = E(e, r);
              let [d, c] = r || [l(...s), o(...s)];
              const h = R(s.map(e => F(i, { n: e, min: d, max: c }))),
                m = L(
                  h,
                  a,
                  r
                    ? {
                        min: F(i, { n: d, min: d, max: c }),
                        max: F(i, { n: c, min: d, max: c })
                      }
                    : void 0
                ),
                g = L(
                  h,
                  a,
                  r
                    ? {
                        min: F(i, { n: d, min: d, max: c }),
                        max: F(i, { n: c, min: d, max: c })
                      }
                    : void 0,
                  !0
                ),
                u = Object(p.v1)();
              let x;
              return f.a.createElement(
                "svg",
                {
                  width: "100%",
                  height: i,
                  viewBox: `0 0 ${a.width} ${a.height}`,
                  preserveAspectRatio: "none",
                  overflow: "visible"
                },
                n &&
                  n.gradient &&
                  (x = Object(p.v1)()) &&
                  f.a.createElement(A, {
                    gradient: n.gradient,
                    polygonalD: g,
                    uuid: x
                  }),
                n &&
                  n.solid &&
                  j(n.solid) &&
                  f.a.createElement(N, {
                    clipPath: "none",
                    d: g,
                    fill: `rgba(${n.solid.join(", ")})`,
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    vectorEffect: "non-scaling-stroke"
                  }),
                n &&
                  n.solid &&
                  Array.isArray(n.solid) &&
                  n.solid.every(e => j(e)) &&
                  f.a.createElement(D, {
                    color: n.solid,
                    d: g,
                    maskHeight: a.height,
                    viewBoxWidth: a.width,
                    strokeStyle: "solid",
                    width: 0,
                    mode: "fill"
                  }),
                t &&
                  t.color &&
                  t.color.gradient &&
                  f.a.createElement(M, {
                    d: m,
                    gradient: t.color.gradient,
                    strokeDasharray:
                      (t &&
                        t.style &&
                        "dash" === t.style &&
                        `${6 * ((t && t.width) || 1)} ${4 *
                          ((t && t.width) || 1)}`) ||
                      "none",
                    strokeWidth: (t && t.width) || 0,
                    uuid: u
                  }),
                t &&
                  t.color &&
                  j(t.color.solid) &&
                  f.a.createElement(N, {
                    clipPath: "none",
                    d: m,
                    stroke: `rgba(${t &&
                      t.color &&
                      t.color.solid &&
                      t.color.solid.join(", ")})`,
                    strokeWidth: (t && t.width) || 0,
                    strokeDasharray:
                      (t &&
                        t.style &&
                        "dash" === t.style &&
                        `${6 * ((t && t.width) || 1)} ${4 *
                          ((t && t.width) || 1)}`) ||
                      "none",
                    fill: "none",
                    vectorEffect: "non-scaling-stroke"
                  }),
                t &&
                  t.color &&
                  Array.isArray(t.color.solid) &&
                  t.color.solid.every(e => j(e)) &&
                  f.a.createElement(D, {
                    color: t.color.solid,
                    d: m,
                    maskHeight: a.height,
                    viewBoxWidth: a.width,
                    strokeStyle: t.style,
                    width: t.width,
                    mode: "stroke"
                  })
              );
            }
          ),
        B = ({ color: e, size: n }) =>
          f.a.createElement("circle", {
            cx: n / 2,
            cy: n / 2,
            r: n / 2,
            fill: `rgba(${e.join(", ")})`
          }),
        C = ({ color: e, data: n, index: t, shape: i, size: a }) =>
          f.a.createElement(k.Consumer, null, ({ height: r, yRange: o }) => {
            var l = Math.max,
              s = Math.min;
            a = s(a, 10);
            const d = Object(p.v1)(),
              c = E(n, o);
            let [h, m] = o || [s(...c), l(...c)];
            const g = c.length - 1,
              u = void 0 === t ? g : s(t, g),
              x = R(c.map(e => F(r, { n: e, min: h, max: m }))),
              y = (() => {
                let n;
                switch (i) {
                  case "circle":
                    n = f.a.createElement(B, { color: e, size: a });
                    break;
                  default:
                    n = f.a.createElement(B, { color: e, size: a });
                }
                return n;
              })(),
              w =
                0 === u
                  ? "0"
                  : `calc(${(u / g) * 100}% - ${a / (u === g ? 1 : 2)}px)`,
              k = `${r - x[u][1] - a / 2}`;
            return f.a.createElement(
              f.a.Fragment,
              null,
              f.a.createElement(
                "symbol",
                { id: d, viewBox: "0 0 10 10", width: "10", height: "10" },
                y
              ),
              f.a.createElement("use", { href: `#${d}`, x: w, y: k })
            );
          });
      C.defaultProps = Object.assign(
        {},
        { color: [255, 0, 0, 1], index: void 0, shape: "circle", size: 4 }
      );
      var O = f.a.createElement,
        P = function(e) {
          var n = e.codeString,
            t = e.Example;
          return O(
            "div",
            null,
            O(
              "div",
              { style: { height: "50px", width: "120px", margin: "0 auto" } },
              O(t, null)
            ),
            O(
              "div",
              {
                style: {
                  fontSize: "12px",
                  marginTop: "40px",
                  maxHeight: "240px",
                  overflowY: "scroll"
                }
              },
              O(x.a, { language: "jsx", style: y.prism }, n)
            )
          );
        },
        W = f.a.createElement;
      n.default = function() {
        return W(
          "div",
          { className: "jsx-1799641728 container" },
          W(
            u.a,
            null,
            W("title", { className: "jsx-1799641728" }, "scintilla")
          ),
          W(
            "main",
            { className: "jsx-1799641728" },
            W(
              "div",
              { className: "jsx-1799641728 grid" },
              W(
                "div",
                { className: "jsx-1799641728 card primo" },
                W(
                  "a",
                  {
                    href: "https://amoradi.github.io/scintilla",
                    className: "jsx-1799641728"
                  },
                  W("h1", { className: "jsx-1799641728 title" }, "Scintilla"),
                  W(
                    "p",
                    { className: "jsx-1799641728 description" },
                    "react sparklines"
                  )
                ),
                W(
                  "h3",
                  { className: "jsx-1799641728 description" },
                  W(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla",
                      className: "jsx-1799641728"
                    },
                    "home"
                  )
                ),
                W(
                  "h3",
                  { className: "jsx-1799641728 description" },
                  W(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla/documentation",
                      className: "jsx-1799641728"
                    },
                    "documentation"
                  )
                ),
                W(
                  "h3",
                  { className: "jsx-1799641728 description" },
                  W(
                    "a",
                    {
                      href: "https://github.com/amoradi/scintilla",
                      className: "jsx-1799641728"
                    },
                    "repository"
                  )
                )
              ),
              [
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                          color: { solid: [20, 20, 20, 1] },
                          width: 1,
                          style: "solid"
                        }
                      }),
                      O(C, {
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
                        size: 4
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n      <Marker\n        color={[255, 0, 0, 1]}\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        size={4}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                          color: { solid: [41, 241, 195, 0.7] },
                          width: 3,
                          style: "solid"
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [41, 241, 195, 0.7] },\n          width: 3,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                          color: { solid: [255, 0, 0, 0.7] },
                          width: 2,
                          style: "solid"
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [255, 0, 0, 0.7] },\n          width: 2,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [[255, 0, 0, 1], [0, 140, 255, 1], [35, 203, 167, 1]]  },\n          width: 2,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { gradient: [[255, 148, 255, 0.5], [255, 0, 255, 1]] },\n          width: 2,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                          color: { solid: [20, 20, 20, 1] },
                          width: 1,
                          style: "dash"
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                          color: { solid: [255, 0, 0, 1] },
                          width: 1,
                          style: "dash"
                        }
                      }),
                      O(C, {
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
                        color: [255, 0, 0, 1],
                        size: 5,
                        index: 5
                      }),
                      O(C, {
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
                        color: [255, 0, 0, 1],
                        size: 5,
                        index: 14
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [255, 0, 0, 1] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n      <Marker\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        color={[255,0,0,1]}\n        size={5}\n        index={5}\n      />\n      <Marker\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        color={[255,0,0,1]}\n        size={5}\n        index={14}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [[255, 0, 0, 1], [0, 140, 255, 1], [20, 128, 20, 1]]  },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { gradient: [[255, 148, 255, 0.5], [255, 0, 255, 1]] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                          color: { solid: [20, 20, 20, 1] },
                          width: 1,
                          style: "solid"
                        },
                        fill: { solid: [20, 20, 20, 1] }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n        fill={{ solid: [20, 20, 20, 1] }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                          color: { solid: [20, 20, 20, 0.4] },
                          width: 2,
                          style: "solid"
                        },
                        fill: { solid: [20, 20, 20, 0.2] }
                      })
                    );
                  },
                  '\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 0.4] },\n          width: 2,\n          style: "solid"\n        }}\n        fill={{ solid: [20, 20, 20, 0.2] }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [34, 50] },
                      O(S, {
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
                          color: { solid: [255, 0, 0, 0.7] },
                          width: 1,
                          style: "solid"
                        },
                        fill: { solid: [255, 0, 0, 0.7] }
                      })
                    );
                  },
                  '\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [255, 0, 0, 0.7] },\n          width: 1,\n          style: "solid"\n        }}\n        fill={{ solid: [255, 0, 0, 0.7] }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [34, 50] },
                      O(S, {
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
                        }
                      })
                    );
                  },
                  "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [[145, 61, 136, 1],[20, 20, 20, 0.6], [255, 0, 0, 0.7]] }}\n      />\n    </Frame>\n  "
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [34, 50] },
                      O(S, {
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
                        }
                      })
                    );
                  },
                  "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ gradient: [[242, 120, 75, 1], [244, 208, 63, 1]] }}\n      />\n    </Frame>\n  "
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [34, 50] },
                      O(S, {
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
                        }
                      })
                    );
                  },
                  "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ gradient: [[38, 194, 129, 1], [0, 230, 64, 1], [0, 230, 64, 1]] }}\n      />\n    </Frame>\n  "
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [34, 54] },
                      O(S, {
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
                        fill: { solid: [246, 36, 89, 1] }
                      }),
                      O(S, {
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
                        fill: { solid: [238, 238, 0, 1] }
                      })
                    );
                  },
                  "\n    <Frame height={40} yRange={[34, 54]}>\n      <Line\n        data={[ 41, 42, 39, 43, 43, 43, 44, 45, 46, 48, 49, 49, 50, 52, 52, 53, 53, 54 ]}\n        fill={{ solid: [246, 36, 89, 1] }}\n      />\n      <Line\n        data={[ 40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49 ]}\n        fill={{ solid: [238, 238, 0, 1] }}\n      />\n    </Frame>\n  "
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                          color: { solid: [20, 20, 20, 1] },
                          width: 1,
                          style: "solid"
                        }
                      }),
                      O(S, {
                        data: [38, 42, 45, 49, 50, 48, 47],
                        stroke: {
                          color: { solid: [20, 20, 20, 1] },
                          width: 1,
                          style: "solid"
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40} >\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n      <Line\n        data={[ 38, 42, 45, 49, 50, 48, 47 ]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [35, 50] },
                      O(S, {
                        data: [38, 42, 45, 49, 48.5, 47, 44],
                        fill: { solid: [3, 201, 169, 0.5] }
                      }),
                      O(S, {
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
                          color: { solid: [165, 55, 253, 0.8] },
                          width: 1,
                          style: "solid"
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40} yRange={[35, 50]}>\n      <Line\n        data={[ 38, 42, 45, 49, 48.5, 47, 44 ]}\n        fill={{ solid: [3, 201, 169, 0.5]}}\n      />\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 0.7] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [32, 60] },
                      O(S, {
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
                          color: { solid: [20, 20, 20, 1] },
                          width: 1,
                          style: "solid"
                        }
                      }),
                      O(S, {
                        data: [45, 43, 47, 52, 53, 56, 57],
                        stroke: {
                          color: { solid: [255, 0, 0, 1] },
                          width: 1,
                          style: "dash"
                        }
                      }),
                      O(S, {
                        data: [34, 32, 34, 38, 41, 43, 43],
                        stroke: {
                          color: { solid: [41, 241, 195, 1] },
                          width: 1,
                          style: "dash"
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40} yRange={[32, 60]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n      <Line\n        data={[ 45, 43, 47, 52, 53, 56, 57 ]}\n        stroke={{\n          color: { solid: [255, 0, 0, 1] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n      <Line\n        data={[ 34, 32, 34, 38, 41, 43, 43 ]}\n        stroke={{\n          color: { solid: [41, 241, 195, 1] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [34, 50] },
                      O(S, {
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
                          color: { solid: [20, 20, 20, 1] },
                          width: 1,
                          style: "solid"
                        }
                      }),
                      O(S, {
                        data: [42, 42],
                        stroke: {
                          color: { solid: [20, 20, 20, 0.5] },
                          width: 1,
                          style: "dash"
                        }
                      })
                    );
                  },
                  '\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        stroke={{\n          color: { solid: [20, 20, 20, 1] },\n          width: 1,\n          style: "solid"\n        }}\n      />\n      <Line\n        data={[ 42, 42 ]}\n        stroke={{\n          color: { solid: [20, 20, 20, 0.5] },\n          width: 1,\n          style: "dash"\n        }}\n      />\n    </Frame>\n  '
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40 },
                      O(S, {
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
                        fill: { solid: [255, 0, 0, 0.6] }
                      }),
                      O(S, {
                        data: [38, 43, 45, 44, 43, 42, 40],
                        fill: { solid: [83, 51, 237, 0.4] }
                      })
                    );
                  },
                  "\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [255, 0, 0, 0.6]}}\n      />\n      <Line\n        data={[ 38, 43, 45, 44, 43, 42, 40 ]}\n        fill={{ solid: [83, 51, 237, 0.4]}}\n      />\n    </Frame>\n  "
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [34, 50] },
                      O(S, {
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
                        fill: { solid: [137, 196, 244, 1] }
                      }),
                      O(S, {
                        data: [44, 44],
                        fill: { solid: [255, 255, 255, 0.5] }
                      })
                    );
                  },
                  "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [137, 196, 244, 1]}}\n      />\n      <Line\n        data={[ 44, 44 ]}\n        fill={{ solid: [120, 120, 120, 0.5] }}\n      />\n    </Frame>\n  "
                ],
                [
                  function() {
                    return O(
                      b,
                      { height: 40, yRange: [34, 50] },
                      O(S, {
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
                        fill: { solid: [46, 204, 113, 0.6] }
                      }),
                      O(S, {
                        data: [42, 43, 45, 44, 43, 40, 40],
                        fill: {
                          solid: [
                            [83, 51, 237, 0.5],
                            [83, 51, 237, 0.2]
                          ]
                        }
                      }),
                      O(S, {
                        data: [36, 36.25, 37.5, 38, 39, 38, 37],
                        fill: { solid: [255, 255, 126, 0.8] }
                      })
                    );
                  },
                  "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [46, 204, 113, 0.6]}}\n      />\n      <Line\n        data={[ 42, 43, 45, 44, 43, 40, 40]}\n        fill={{ solid: [[83, 51, 237, 0.5], [83, 51, 237, 0.2]]}}\n      />\n      <Line\n        data={[ 36, 36.25, 37.5, 38, 39, 38, 37]}\n        fill={{ solid: [255, 255, 126, 0.8]}}\n      />\n    </Frame>\n  "
                ]
              ].map(function(e) {
                var n = d(e, 2),
                  t = n[0],
                  i = n[1];
                return W(
                  "div",
                  { className: "jsx-1799641728 card" },
                  W(P, { codeString: i, Example: t })
                );
              })
            )
          ),
          W(
            "footer",
            { className: "jsx-1799641728" },
            W(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/",
                className: "jsx-1799641728 link"
              },
              "home"
            ),
            W(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/documentation",
                className: "jsx-1799641728 link"
              },
              "documentation"
            ),
            W(
              "a",
              {
                href: "https://github.com/amoradi/scintilla",
                className: "jsx-1799641728 link"
              },
              "repository"
            )
          ),
          W(h.a, { id: "4104695978" }, [
            ".container.jsx-1799641728{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "main.jsx-1799641728{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-1799641728{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-1799641728 img.jsx-1799641728{margin-left:0.5rem;}",
            "footer.jsx-1799641728 a.jsx-1799641728{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "a.jsx-1799641728{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",
            ".link.jsx-1799641728{-webkit-text-decoration:underline;text-decoration:underline;}",
            ".title.jsx-1799641728 a.jsx-1799641728{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",
            ".title.jsx-1799641728 a.jsx-1799641728:hover,.title.jsx-1799641728 a.jsx-1799641728:focus,.title.jsx-1799641728 a.jsx-1799641728:active{-webkit-text-decoration:underline;text-decoration:underline;}",
            ".title.jsx-1799641728{margin:100px 0 0;line-height:1.15;font-size:3rem;}",
            ".title.jsx-1799641728,.description.jsx-1799641728{text-align:center;}",
            ".description.jsx-1799641728{line-height:1.5;font-size:0.9rem;}",
            "code.jsx-1799641728{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",
            ".grid.jsx-1799641728{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100vw;margin-top:3rem;}",
            ".grid.jsx-1799641728>*.jsx-1799641728,.card.jsx-1799641728{min-width:320px;max-width:380px;margin:1rem;-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;padding:1.5rem;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;box-sizing:border-box;}",
            ".card.jsx-1799641728 pre.jsx-1799641728{height:240px;overflow-y:scroll;}",
            ".card.primo.jsx-1799641728{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:#444;text-transform:lowercase;}",
            "h3.jsx-1799641728{font-weight:normal;margin-top:60px;margin-bottom:0;-webkit-text-decoration:underline;text-decoration:underline;}",
            "h3.jsx-1799641728~h3.jsx-1799641728{margin-top:0px;}",
            "@media (max-width:600px){.grid.jsx-1799641728{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}"
          ]),
          W(h.a, { id: "3970269027" }, [
            "html,body{background-color:#fff;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}",
            "*{box-sizing:border-box;}"
          ])
        );
      };
    },
    Rp86: function(e, n, t) {
      t("bBy9"), t("FlQf"), (e.exports = t("fXsU"));
    },
    XXOK: function(e, n, t) {
      e.exports = t("Rp86");
    },
    fXsU: function(e, n, t) {
      var i = t("5K7Z"),
        a = t("fNZA");
      e.exports = t("WEpk").getIterator = function(e) {
        var n = a(e);
        if ("function" != typeof n) throw TypeError(e + " is not iterable!");
        return i(n.call(e));
      };
    },
    vlRD: function(e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function() {
          return t("RNiq");
        }
      ]);
    },
    xDdU: function(e, n, t) {
      var i,
        a,
        r = t("4fRq"),
        o = t("I2ZF"),
        l = 0,
        s = 0;
      e.exports = function(e, n, t) {
        var d = (n && t) || 0,
          c = n || [],
          h = (e = e || {}).node || i,
          m = void 0 !== e.clockseq ? e.clockseq : a;
        if (null == h || null == m) {
          var f = r();
          null == h && (h = i = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]),
            null == m && (m = a = 16383 & ((f[6] << 8) | f[7]));
        }
        var g = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          u = void 0 !== e.nsecs ? e.nsecs : s + 1,
          x = g - l + (u - s) / 1e4;
        if (
          (x < 0 && void 0 === e.clockseq && (m = (m + 1) & 16383),
          (x < 0 || g > l) && void 0 === e.nsecs && (u = 0),
          u >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (l = g), (s = u), (a = m);
        var y = (1e4 * (268435455 & (g += 122192928e5)) + u) % 4294967296;
        (c[d++] = (y >>> 24) & 255),
          (c[d++] = (y >>> 16) & 255),
          (c[d++] = (y >>> 8) & 255),
          (c[d++] = 255 & y);
        var p = ((g / 4294967296) * 1e4) & 268435455;
        (c[d++] = (p >>> 8) & 255),
          (c[d++] = 255 & p),
          (c[d++] = ((p >>> 24) & 15) | 16),
          (c[d++] = (p >>> 16) & 255),
          (c[d++] = (m >>> 8) | 128),
          (c[d++] = 255 & m);
        for (var w = 0; w < 6; ++w) c[d + w] = h[w];
        return n || o(c);
      };
    },
    xk4V: function(e, n, t) {
      var i = t("4fRq"),
        a = t("I2ZF");
      e.exports = function(e, n, t) {
        var r = (n && t) || 0;
        "string" == typeof e &&
          ((n = "binary" === e ? new Array(16) : null), (e = null));
        var o = (e = e || {}).random || (e.rng || i)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), n))
          for (var l = 0; l < 16; ++l) n[r + l] = o[l];
        return n || a(o);
      };
    }
  },
  [["vlRD", 1, 2, 0, 3]]
]);
