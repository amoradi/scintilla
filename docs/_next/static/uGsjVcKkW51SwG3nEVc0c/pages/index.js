(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "+J7U": function(e, n, t) {
      var i,
        a,
        r = t("We69"),
        o = t("4feL"),
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
    "2tSK": function(e, n, t) {
      var i = t("We69"),
        a = t("4feL");
      e.exports = function(e, n, t) {
        var r = (n && t) || 0;
        "string" == typeof e &&
          ((n = "binary" === e ? new Array(16) : null), (e = null));
        var o = (e = e || {}).random || (e.rng || i)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), n))
          for (var l = 0; l < 16; ++l) n[r + l] = o[l];
        return n || a(o);
      };
    },
    "4feL": function(e, n) {
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
    AEdO: function(e, n, t) {
      var i = t("+J7U"),
        a = t("2tSK"),
        r = a;
      (r.v1 = i), (r.v4 = a), (e.exports = r);
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
        p = t("mXGw"),
        w = t.n(p),
        k = t("AEdO");
      const b = {
          height: 50,
          viewBox: { width: 100, height: 100 },
          yRange: null
        },
        v = w.a.createContext(Object.assign({}, b)),
        j = ({ children: e, height: n, yRange: t }) => {
          const i = b.viewBox;
          return w.a.createElement(
            "svg",
            {
              width: "100%",
              height: n,
              style: { display: "inline" },
              overflow: "visible"
            },
            w.a.createElement(
              v.Provider,
              { value: { height: n, viewBox: i, yRange: t } },
              e
            )
          );
        };
      function E(e) {
        return "number" == typeof e && !isNaN(e) && isFinite(e);
      }
      function F(e) {
        return Array.isArray(e) && 4 === e.length && e.every(e => E(e));
      }
      function L(e, n) {
        let t = () => !0;
        if (Array.isArray(n) && 2 === n.length && n.every(E)) {
          const [e, i] = n;
          t = n => n >= e && n <= i;
        }
        return e.filter(E).filter(t);
      }
      function R(e, { n: n, min: t, max: i }) {
        return e * ((n - t) / (0 == i - t ? 1 : i - t));
      }
      function $(e) {
        return e.map((e, n) => [n, e]);
      }
      function N(e, n, t, i) {
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
            R(n.width, { n: e, min: a.x.min, max: a.x.max }),
            R(n.height, {
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
      j.defaultProps = Object.assign({}, b);
      const A = ({
          clipPath: e,
          d: n,
          fill: t,
          stroke: i,
          strokeDasharray: a,
          strokeWidth: r,
          vectorEffect: o
        }) =>
          w.a.createElement("path", {
            clipPath: e,
            d: n,
            fill: t,
            stroke: i,
            strokeDasharray: a,
            strokeWidth: r,
            vectorEffect: o
          }),
        M = ({ id: e, gradient: n }) => {
          let t = null;
          return (
            Array.isArray(n) &&
            n.every(e => Array.isArray(e) && e.every(e => E(e)))
              ? (t = w.a.createElement(
                  w.a.Fragment,
                  null,
                  n.map((e, t) => {
                    const i = 100 / (n || []).length;
                    return w.a.createElement("stop", {
                      key: t,
                      offset: `${i / 2 + t * i}%`,
                      stopColor: `rgba(${e.join(",")})`
                    });
                  })
                ))
              : Array.isArray(n) &&
                n.every(e => E(e)) &&
                (t = w.a.createElement("stop", {
                  offset: "100%",
                  stopColor: `rgba(${n.join(",")})`
                })),
            w.a.createElement(
              "linearGradient",
              { id: e, gradientUnits: "userSpaceOnUse" },
              t
            )
          );
        },
        z = ({ gradient: e, polygonalD: n, uuid: t }) =>
          w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              "defs",
              null,
              w.a.createElement(M, { id: t, gradient: e })
            ),
            w.a.createElement(A, {
              clipPath: "none",
              d: n,
              fill: `url(#${t})`,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              vectorEffect: "non-scaling-stroke"
            })
          ),
        S = ({
          d: e,
          gradient: n,
          strokeDasharray: t,
          strokeWidth: i,
          uuid: a
        }) =>
          w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              "defs",
              null,
              w.a.createElement(M, { id: a, gradient: n })
            ),
            w.a.createElement(A, {
              clipPath: "none",
              d: e,
              stroke: `url(#${a})`,
              strokeWidth: i,
              strokeDasharray: t,
              fill: "none",
              vectorEffect: "non-scaling-stroke"
            })
          ),
        D = ({ id: e, height: n, width: t, x: i }) =>
          w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              "clipPath",
              { id: e },
              w.a.createElement("rect", {
                x: i,
                width: t,
                height: n,
                fill: "red"
              })
            )
          );
      function W({
        color: e,
        d: n,
        maskHeight: t,
        viewBoxWidth: i,
        strokeStyle: a,
        width: r,
        mode: o
      }) {
        const l = e.map(() => Object(k.v1)()),
          s = i / e.length;
        return w.a.createElement(
          w.a.Fragment,
          null,
          e.map((e, i) =>
            w.a.createElement(
              w.a.Fragment,
              { key: i },
              w.a.createElement(
                "defs",
                null,
                w.a.createElement(D, {
                  x: i * s,
                  id: l[i],
                  height: t,
                  width: s
                })
              ),
              w.a.createElement(A, {
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
      const O = ({ data: e, fill: n, stroke: t }) =>
          w.a.createElement(
            v.Consumer,
            null,
            ({ height: i, viewBox: a, yRange: r }) => {
              var o = Math.max,
                l = Math.min;
              const s = L(e, r);
              let [d, c] = r || [l(...s), o(...s)];
              const h = $(s.map(e => R(i, { n: e, min: d, max: c }))),
                m = N(
                  h,
                  a,
                  r
                    ? {
                        min: R(i, { n: d, min: d, max: c }),
                        max: R(i, { n: c, min: d, max: c })
                      }
                    : void 0
                ),
                f = N(
                  h,
                  a,
                  r
                    ? {
                        min: R(i, { n: d, min: d, max: c }),
                        max: R(i, { n: c, min: d, max: c })
                      }
                    : void 0,
                  !0
                ),
                g = Object(k.v1)();
              let u;
              return w.a.createElement(
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
                  (u = Object(k.v1)()) &&
                  w.a.createElement(z, {
                    gradient: n.gradient,
                    polygonalD: f,
                    uuid: u
                  }),
                n &&
                  n.solid &&
                  F(n.solid) &&
                  w.a.createElement(A, {
                    clipPath: "none",
                    d: f,
                    fill: `rgba(${n.solid.join(", ")})`,
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    vectorEffect: "non-scaling-stroke"
                  }),
                n &&
                  n.solid &&
                  Array.isArray(n.solid) &&
                  n.solid.every(e => F(e)) &&
                  w.a.createElement(W, {
                    color: n.solid,
                    d: f,
                    maskHeight: a.height,
                    viewBoxWidth: a.width,
                    strokeStyle: "solid",
                    width: 0,
                    mode: "fill"
                  }),
                t &&
                  t.color &&
                  t.color.gradient &&
                  w.a.createElement(S, {
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
                    uuid: g
                  }),
                t &&
                  t.color &&
                  F(t.color.solid) &&
                  w.a.createElement(A, {
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
                  t.color.solid.every(e => F(e)) &&
                  w.a.createElement(W, {
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
          w.a.createElement("circle", {
            cx: n / 2,
            cy: n / 2,
            r: n / 2,
            fill: `rgba(${e.join(", ")})`
          }),
        C = ({ color: e, data: n, index: t, shape: i, size: a }) =>
          w.a.createElement(v.Consumer, null, ({ height: r, yRange: o }) => {
            var l = Math.max,
              s = Math.min;
            a = s(a, 10);
            const d = Object(k.v1)(),
              c = L(n, o);
            let [h, m] = o || [s(...c), l(...c)];
            const f = c.length - 1,
              g = void 0 === t ? f : s(t, f),
              u = $(c.map(e => R(r, { n: e, min: h, max: m }))),
              x = (() => {
                let n;
                switch (i) {
                  case "circle":
                    n = w.a.createElement(B, { color: e, size: a });
                    break;
                  default:
                    n = w.a.createElement(B, { color: e, size: a });
                }
                return n;
              })(),
              y =
                0 === g
                  ? "0"
                  : `calc(${(g / f) * 100}% - ${a / (g === f ? 1 : 2)})`,
              p = `${r - u[g][1] - a / 2}`;
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(
                "symbol",
                { id: d, viewBox: "0 0 10 10", width: "10", height: "10" },
                x
              ),
              w.a.createElement("use", { href: `#${d}`, x: y, y: p })
            );
          });
      C.defaultProps = Object.assign(
        {},
        { color: [255, 0, 0, 1], index: void 0, shape: "circle", size: 4 }
      );
      var P = f.a.createElement,
        X = function(e) {
          var n = e.codeString,
            t = e.Example;
          return P(
            "div",
            null,
            P(
              "div",
              { style: { height: "50px", width: "120px", margin: "0 auto" } },
              P(t, null)
            ),
            P(
              "div",
              {
                style: {
                  fontSize: "12px",
                  marginTop: "40px",
                  maxHeight: "240px",
                  overflowY: "scroll"
                }
              },
              P(x.a, { language: "jsx", style: y.prism }, n)
            )
          );
        },
        U = f.a.createElement;
      n.default = function() {
        return U(
          "div",
          { className: "jsx-483060736 container" },
          U(u.a, null, U("title", { className: "jsx-483060736" }, "scintilla")),
          U(
            "main",
            { className: "jsx-483060736" },
            U(
              "div",
              { className: "jsx-483060736 grid" },
              U(
                "div",
                { className: "jsx-483060736 card primo" },
                U(
                  "a",
                  {
                    href: "https://amoradi.github.io/scintilla",
                    className: "jsx-483060736"
                  },
                  U("h1", { className: "jsx-483060736 title" }, "Scintilla"),
                  U(
                    "p",
                    { className: "jsx-483060736 description" },
                    "react sparklines"
                  )
                ),
                U(
                  "h3",
                  { className: "jsx-483060736 description" },
                  U(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla",
                      className: "jsx-483060736"
                    },
                    "home"
                  )
                ),
                U(
                  "h3",
                  { className: "jsx-483060736 description" },
                  U(
                    "a",
                    {
                      href: "https://amoradi.github.io/scintilla/documentation",
                      className: "jsx-483060736"
                    },
                    "documentation"
                  )
                ),
                U(
                  "h3",
                  { className: "jsx-483060736 description" },
                  U(
                    "a",
                    {
                      href: "https://github.com/amoradi/scintilla",
                      className: "jsx-483060736"
                    },
                    "repository"
                  )
                )
              ),
              [
                [
                  function() {
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                      P(C, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                      P(C, {
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
                      P(C, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40, yRange: [34, 50] },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40, yRange: [34, 50] },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40, yRange: [34, 50] },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40, yRange: [34, 50] },
                      P(O, {
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
                    return P(
                      j,
                      { height: 40, yRange: [34, 54] },
                      P(O, {
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
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                      P(O, {
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
                    return P(
                      j,
                      { height: 40, yRange: [35, 50] },
                      P(O, {
                        data: [38, 42, 45, 49, 48.5, 47, 44],
                        fill: { solid: [3, 201, 169, 0.5] }
                      }),
                      P(O, {
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
                    return P(
                      j,
                      { height: 40, yRange: [32, 60] },
                      P(O, {
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
                      P(O, {
                        data: [45, 43, 47, 52, 53, 56, 57],
                        stroke: {
                          color: { solid: [255, 0, 0, 1] },
                          width: 1,
                          style: "dash"
                        }
                      }),
                      P(O, {
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
                    return P(
                      j,
                      { height: 40, yRange: [34, 50] },
                      P(O, {
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
                      P(O, {
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
                    return P(
                      j,
                      { height: 40 },
                      P(O, {
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
                      P(O, {
                        data: [38, 43, 45, 44, 43, 42, 40],
                        fill: { solid: [83, 51, 237, 0.4] }
                      })
                    );
                  },
                  "\n    <Frame height={40}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [255, 0, 0, 0.6]}}\n      />\n      <Line\n        data={[ 38, 43, 45, 44, 43, 42, 40 ]}\n        fill={{ solid: [83, 51, 237, 0.4]}}\n      />\n    </Frame>\n  "
                ],
                [
                  function() {
                    return P(
                      j,
                      { height: 40, yRange: [34, 50] },
                      P(O, {
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
                      P(O, {
                        data: [44, 44],
                        fill: { solid: [255, 255, 255, 0.5] }
                      })
                    );
                  },
                  "\n    <Frame height={40} yRange={[34, 50]}>\n      <Line\n        data={[40, 39, 37, 39, 39, 40, 41, 42, 43, 46, 47, 48, 48, 50, 49, 48, 48, 49]}\n        fill={{ solid: [137, 196, 244, 1]}}\n      />\n      <Line\n        data={[ 44, 44 ]}\n        fill={{ solid: [120, 120, 120, 0.5] }}\n      />\n    </Frame>\n  "
                ],
                [
                  function() {
                    return P(
                      j,
                      { height: 40, yRange: [34, 50] },
                      P(O, {
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
                      P(O, {
                        data: [42, 43, 45, 44, 43, 40, 40],
                        fill: {
                          solid: [
                            [83, 51, 237, 0.5],
                            [83, 51, 237, 0.2]
                          ]
                        }
                      }),
                      P(O, {
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
                return U(
                  "div",
                  { className: "jsx-483060736 card" },
                  U(X, { codeString: i, Example: t })
                );
              })
            )
          ),
          U(
            "footer",
            { className: "jsx-483060736" },
            U(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/",
                className: "jsx-483060736 link"
              },
              "home"
            ),
            U(
              "a",
              {
                href: "https://amoradi.github.io/scintilla/documentation",
                className: "jsx-483060736 link"
              },
              "documentation"
            ),
            U(
              "a",
              {
                href: "https://github.com/amoradi/scintilla",
                className: "jsx-483060736 link"
              },
              "repository"
            )
          ),
          U(h.a, { id: "4104695978" }, [
            ".container.jsx-483060736{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "main.jsx-483060736{padding:0 0 5rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-483060736{padding-bottom:100px;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "footer.jsx-483060736 img.jsx-483060736{margin-left:0.5rem;}",
            "footer.jsx-483060736 a.jsx-483060736{padding:5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
            "a.jsx-483060736{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",
            ".link.jsx-483060736{-webkit-text-decoration:underline;text-decoration:underline;}",
            ".title.jsx-483060736 a.jsx-483060736{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",
            ".title.jsx-483060736 a.jsx-483060736:hover,.title.jsx-483060736 a.jsx-483060736:focus,.title.jsx-483060736 a.jsx-483060736:active{-webkit-text-decoration:underline;text-decoration:underline;}",
            ".title.jsx-483060736{margin:100px 0 0;line-height:1.15;font-size:3rem;}",
            ".title.jsx-483060736,.description.jsx-483060736{text-align:center;}",
            ".description.jsx-483060736{line-height:1.5;font-size:0.9rem;}",
            "code.jsx-483060736{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",
            ".grid.jsx-483060736{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100vw;margin-top:3rem;}",
            ".grid.jsx-483060736>*.jsx-483060736,.card.jsx-483060736{min-width:320px;max-width:380px;margin:1rem;-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;padding:1.5rem;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;box-sizing:border-box;}",
            ".card.jsx-483060736 pre.jsx-483060736{height:240px;overflow-y:scroll;}",
            ".card.primo.jsx-483060736{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:#444;text-transform:lowercase;}",
            "h3.jsx-483060736{font-weight:normal;margin-top:60px;margin-bottom:0;-webkit-text-decoration:underline;text-decoration:underline;}",
            "h3.jsx-483060736~h3.jsx-483060736{margin-top:0px;}",
            "@media (max-width:600px){.grid.jsx-483060736{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}"
          ]),
          U(h.a, { id: "3702522083" }, [
            "html,body{background-color:#fffaf0;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}",
            "*{box-sizing:border-box;}"
          ])
        );
      };
    },
    Rp86: function(e, n, t) {
      t("bBy9"), t("FlQf"), (e.exports = t("fXsU"));
    },
    We69: function(e, n) {
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
    }
  },
  [["vlRD", 1, 2, 0, 3]]
]);
