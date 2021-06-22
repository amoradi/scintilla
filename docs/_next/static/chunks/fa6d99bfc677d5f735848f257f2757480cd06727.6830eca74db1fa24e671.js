(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "++Eq": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#1d262f",
          color: "#57718e"
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#1d262f",
          color: "#57718e",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#004a9e"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#004a9e"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#004a9e"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#004a9e"
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#004a9e"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#004a9e"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#004a9e"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#004a9e"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#4a5f78" },
        prolog: { color: "#4a5f78" },
        doctype: { color: "#4a5f78" },
        cdata: { color: "#4a5f78" },
        punctuation: { color: "#4a5f78" },
        namespace: { Opacity: ".7" },
        tag: { color: "#0aa370" },
        operator: { color: "#0aa370" },
        number: { color: "#0aa370" },
        property: { color: "#57718e" },
        function: { color: "#57718e" },
        "tag-id": { color: "#ebf4ff" },
        selector: { color: "#ebf4ff" },
        "atrule-id": { color: "#ebf4ff" },
        "code.language-javascript": { color: "#7eb6f6" },
        "attr-name": { color: "#7eb6f6" },
        "code.language-css": { color: "#47ebb4" },
        "code.language-scss": { color: "#47ebb4" },
        boolean: { color: "#47ebb4" },
        string: { color: "#47ebb4" },
        entity: { color: "#47ebb4", cursor: "help" },
        url: { color: "#47ebb4" },
        ".language-css .token.string": { color: "#47ebb4" },
        ".language-scss .token.string": { color: "#47ebb4" },
        ".style .token.string": { color: "#47ebb4" },
        "attr-value": { color: "#47ebb4" },
        keyword: { color: "#47ebb4" },
        control: { color: "#47ebb4" },
        directive: { color: "#47ebb4" },
        unit: { color: "#47ebb4" },
        statement: { color: "#47ebb4" },
        regex: { color: "#47ebb4" },
        atrule: { color: "#47ebb4" },
        placeholder: { color: "#47ebb4" },
        variable: { color: "#47ebb4" },
        deleted: { textDecoration: "line-through" },
        inserted: {
          borderBottom: "1px dotted #ebf4ff",
          textDecoration: "none"
        },
        italic: { fontStyle: "italic" },
        important: { fontWeight: "bold", color: "#7eb6f6" },
        bold: { fontWeight: "bold" },
        "pre > code.highlight": {
          Outline: ".4em solid #34659d",
          OutlineOffset: ".4em"
        },
        ".line-numbers .line-numbers-rows": { borderRightColor: "#1f2932" },
        ".line-numbers-rows > span:before": { color: "#2c3847" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"
        }
      };
    },
    "+4XU": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.eiffel = {
          comment: /--.*/,
          string: [
            { pattern: /"([^[]*)\[[\s\S]*?\]\1"/, greedy: !0 },
            { pattern: /"([^{]*)\{[\s\S]*?\}\1"/, greedy: !0 },
            { pattern: /"(?:%\s+%|%.|[^%"\r\n])*"/, greedy: !0 }
          ],
          char: /'(?:%.|[^%'\r\n])+'/,
          keyword: /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
          boolean: /\b(?:True|False)\b/i,
          "class-name": { pattern: /\b[A-Z][\dA-Z_]*\b/, alias: "builtin" },
          number: [
            /\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
            /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/i
          ],
          punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
          operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
        };
      }
      (e.exports = a), (a.displayName = "eiffel"), (a.aliases = []);
    },
    "+E/D": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.vhdl = {
          comment: /--.+/,
          "vhdl-vectors": {
            pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
            alias: "number"
          },
          "quoted-function": { pattern: /"\S+?"(?=\()/, alias: "function" },
          string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
          constant: /\b(?:use|library)\b/i,
          keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
          boolean: /\b(?:true|false)\b/i,
          function: /\w+(?=\()/,
          number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
          operator: /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
          punctuation: /[{}[\];(),.:]/
        };
      }
      (e.exports = a), (a.displayName = "vhdl"), (a.aliases = []);
    },
    "+KGI": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.apl = {
          comment: /(?:\u235d|#[! ]).*$/m,
          string: { pattern: /'(?:[^'\r\n]|'')*'/, greedy: !0 },
          number: /\xaf?(?:\d*\.?\d+(?:e[+\xaf]?\d+)?|\xaf|\u221e)(?:j\xaf?(?:\d*\.?\d+(?:e[+\xaf]?\d+)?|\xaf|\u221e))?/i,
          statement: /:[A-Z][a-z][A-Za-z]*\b/,
          "system-function": { pattern: /\u2395[A-Z]+/i, alias: "function" },
          constant: /[\u236c\u233e#\u2395\u235e]/,
          function: /[-+\xd7\xf7\u2308\u230a\u2223|\u2373\u2378?*\u235f\u25cb!\u2339<\u2264=>\u2265\u2260\u2261\u2262\u220a\u2377\u222a\u2229~\u2228\u2227\u2371\u2372\u2374,\u236a\u233d\u2296\u2349\u2191\u2193\u2282\u2283\u2286\u2287\u2337\u234b\u2352\u22a4\u22a5\u2355\u234e\u22a3\u22a2\u2341\u2342\u2248\u236f\u2197\xa4\u2192]/,
          "monadic-operator": {
            pattern: /[\\\/\u233f\u2340\xa8\u2368\u2336&\u2225]/,
            alias: "operator"
          },
          "dyadic-operator": {
            pattern: /[.\u2363\u2360\u2364\u2218\u2338@\u233a]/,
            alias: "operator"
          },
          assignment: { pattern: /\u2190/, alias: "keyword" },
          punctuation: /[\[;\]()\u25c7\u22c4]/,
          dfn: {
            pattern: /[{}\u237a\u2375\u2376\u2379\u2207\u236b:]/,
            alias: "builtin"
          }
        };
      }
      (e.exports = a), (a.displayName = "apl"), (a.aliases = []);
    },
    "+iuc": function(e, t, n) {
      n("wgeU"),
        n("FlQf"),
        n("bBy9"),
        n("B9jh"),
        n("dL40"),
        n("xvv9"),
        n("V+O7"),
        (e.exports = n("WEpk").Set);
    },
    "/0+H": function(e, t, n) {
      "use strict";
      var a = n("hfKm"),
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      a(t, "__esModule", { value: !0 });
      var r = o(n("q1tI")),
        i = n("lwAK");
      function s() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          a = e.hybrid,
          o = void 0 !== a && a,
          r = e.hasQuery;
        return n || (o && void 0 !== r && r);
      }
      (t.isInAmpMode = s),
        (t.useAmp = function() {
          return s(r.default.useContext(i.AmpStateContext));
        });
    },
    "007m": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#2a2734",
          color: "#9a86fd"
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#2a2734",
          color: "#9a86fd",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#6a51e6"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#6a51e6"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#6a51e6"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#6a51e6"
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#6a51e6"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#6a51e6"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#6a51e6"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#6a51e6"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#6c6783" },
        prolog: { color: "#6c6783" },
        doctype: { color: "#6c6783" },
        cdata: { color: "#6c6783" },
        punctuation: { color: "#6c6783" },
        namespace: { Opacity: ".7" },
        tag: { color: "#e09142" },
        operator: { color: "#e09142" },
        number: { color: "#e09142" },
        property: { color: "#9a86fd" },
        function: { color: "#9a86fd" },
        "tag-id": { color: "#eeebff" },
        selector: { color: "#eeebff" },
        "atrule-id": { color: "#eeebff" },
        "code.language-javascript": { color: "#c4b9fe" },
        "attr-name": { color: "#c4b9fe" },
        "code.language-css": { color: "#ffcc99" },
        "code.language-scss": { color: "#ffcc99" },
        boolean: { color: "#ffcc99" },
        string: { color: "#ffcc99" },
        entity: { color: "#ffcc99", cursor: "help" },
        url: { color: "#ffcc99" },
        ".language-css .token.string": { color: "#ffcc99" },
        ".language-scss .token.string": { color: "#ffcc99" },
        ".style .token.string": { color: "#ffcc99" },
        "attr-value": { color: "#ffcc99" },
        keyword: { color: "#ffcc99" },
        control: { color: "#ffcc99" },
        directive: { color: "#ffcc99" },
        unit: { color: "#ffcc99" },
        statement: { color: "#ffcc99" },
        regex: { color: "#ffcc99" },
        atrule: { color: "#ffcc99" },
        placeholder: { color: "#ffcc99" },
        variable: { color: "#ffcc99" },
        deleted: { textDecoration: "line-through" },
        inserted: {
          borderBottom: "1px dotted #eeebff",
          textDecoration: "none"
        },
        italic: { fontStyle: "italic" },
        important: { fontWeight: "bold", color: "#c4b9fe" },
        bold: { fontWeight: "bold" },
        "pre > code.highlight": {
          Outline: ".4em solid #8a75f5",
          OutlineOffset: ".4em"
        },
        ".line-numbers .line-numbers-rows": { borderRightColor: "#2c2937" },
        ".line-numbers-rows > span:before": { color: "#3c3949" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"
        }
      };
    },
    "057u": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.xojo = {
          comment: {
            pattern: /(?:'|\/\/|Rem\b).+/i,
            inside: { keyword: /^Rem/i }
          },
          string: { pattern: /"(?:""|[^"])*"/, greedy: !0 },
          number: [
            /(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
            /&[bchou][a-z\d]+/i
          ],
          symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\b/i,
          keyword: /\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\b/i,
          operator: /<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,
          punctuation: /[.,;:()]/
        };
      }
      (e.exports = a), (a.displayName = "xojo"), (a.aliases = []);
    },
    "0HCD": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.rest = {
          table: [
            {
              pattern: /(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1(?:[+|].+)+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,
              lookbehind: !0,
              inside: { punctuation: /\||(?:\+[=-]+)+\+/ }
            },
            {
              pattern: /(\s*)(?:=+ +)+=+(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1(?:=+ +)+=+(?=(?:\r?\n|\r){2}|\s*$)/,
              lookbehind: !0,
              inside: { punctuation: /[=-]+/ }
            }
          ],
          "substitution-def": {
            pattern: /(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
            lookbehind: !0,
            inside: {
              substitution: {
                pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
                alias: "attr-value",
                inside: { punctuation: /^\||\|$/ }
              },
              directive: {
                pattern: /( +)[^:]+::/,
                lookbehind: !0,
                alias: "function",
                inside: { punctuation: /::$/ }
              }
            }
          },
          "link-target": [
            {
              pattern: /(^\s*\.\. )\[[^\]]+\]/m,
              lookbehind: !0,
              alias: "string",
              inside: { punctuation: /^\[|\]$/ }
            },
            {
              pattern: /(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
              lookbehind: !0,
              alias: "string",
              inside: { punctuation: /^_|:$/ }
            }
          ],
          directive: {
            pattern: /(^\s*\.\. )[^:]+::/m,
            lookbehind: !0,
            alias: "function",
            inside: { punctuation: /::$/ }
          },
          comment: {
            pattern: /(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
            lookbehind: !0
          },
          title: [
            {
              pattern: /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
              inside: {
                punctuation: /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                important: /.+/
              }
            },
            {
              pattern: /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
              lookbehind: !0,
              inside: {
                punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                important: /.+/
              }
            }
          ],
          hr: {
            pattern: /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
            lookbehind: !0,
            alias: "punctuation"
          },
          field: {
            pattern: /(^\s*):[^:\r\n]+:(?= )/m,
            lookbehind: !0,
            alias: "attr-name"
          },
          "command-line-option": {
            pattern: /(^\s*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
            lookbehind: !0,
            alias: "symbol"
          },
          "literal-block": {
            pattern: /::(?:\r?\n|\r){2}([ \t]+).+(?:(?:\r?\n|\r)\1.+)*/,
            inside: {
              "literal-block-punctuation": {
                pattern: /^::/,
                alias: "punctuation"
              }
            }
          },
          "quoted-literal-block": {
            pattern: /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
            inside: {
              "literal-block-punctuation": {
                pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
                alias: "punctuation"
              }
            }
          },
          "list-bullet": {
            pattern: /(^\s*)(?:[*+\-\u2022\u2023\u2043]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
            lookbehind: !0,
            alias: "punctuation"
          },
          "doctest-block": {
            pattern: /(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,
            lookbehind: !0,
            inside: { punctuation: /^>>>/ }
          },
          inline: [
            {
              pattern: /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
              lookbehind: !0,
              inside: {
                bold: { pattern: /(^\*\*).+(?=\*\*$)/, lookbehind: !0 },
                italic: { pattern: /(^\*).+(?=\*$)/, lookbehind: !0 },
                "inline-literal": {
                  pattern: /(^``).+(?=``$)/,
                  lookbehind: !0,
                  alias: "symbol"
                },
                role: {
                  pattern: /^:[^:]+:|:[^:]+:$/,
                  alias: "function",
                  inside: { punctuation: /^:|:$/ }
                },
                "interpreted-text": {
                  pattern: /(^`).+(?=`$)/,
                  lookbehind: !0,
                  alias: "attr-value"
                },
                substitution: {
                  pattern: /(^\|).+(?=\|$)/,
                  lookbehind: !0,
                  alias: "attr-value"
                },
                punctuation: /\*\*?|``?|\|/
              }
            }
          ],
          link: [
            {
              pattern: /\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
              alias: "string",
              inside: { punctuation: /^\[|\]_$/ }
            },
            {
              pattern: /(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
              alias: "string",
              inside: { punctuation: /^_?`|`$|`?_?_$/ }
            }
          ],
          punctuation: {
            pattern: /(^\s*)(?:\|(?= |$)|(?:---?|\u2014|\.\.|__)(?= )|\.\.$)/m,
            lookbehind: !0
          }
        };
      }
      (e.exports = a), (a.displayName = "rest"), (a.aliases = []);
    },
    "0Wr9": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.rust = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }
          ],
          string: [
            { pattern: /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/, greedy: !0 },
            { pattern: /b?"(?:\\.|[^\\\r\n"])*"/, greedy: !0 }
          ],
          char: {
            pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,
            alias: "string"
          },
          "lifetime-annotation": { pattern: /'[^\s>']+/, alias: "symbol" },
          keyword: /\b(?:abstract|alignof|as|async|await|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
          attribute: { pattern: /#!?\[.+?\]/, greedy: !0, alias: "attr-name" },
          function: [/\w+(?=\s*\()/, /\w+!(?=\s*\(|\[)/],
          "macro-rules": { pattern: /\w+!/, alias: "function" },
          number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
          "closure-params": {
            pattern: /\|[^|]*\|(?=\s*[{-])/,
            inside: { punctuation: /[|:,]/, operator: /[&*]/ }
          },
          punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
          operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
        };
      }
      (e.exports = a), (a.displayName = "rust"), (a.aliases = []);
    },
    "0iGP": function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function(n, a, o, r) {
                if (n.language === a) {
                  var i = (n.tokenStack = []);
                  (n.code = n.code.replace(o, function(e) {
                    if ("function" === typeof r && !r(e)) return e;
                    for (
                      var o, s = i.length;
                      -1 !== n.code.indexOf((o = t(a, s)));

                    )
                      ++s;
                    return (i[s] = e), o;
                  })),
                    (n.grammar = e.languages.markup);
                }
              }
            },
            tokenizePlaceholders: {
              value: function(n, a) {
                if (n.language === a && n.tokenStack) {
                  n.grammar = e.languages[a];
                  var o = 0,
                    r = Object.keys(n.tokenStack);
                  !(function i(s) {
                    for (var l = 0; l < s.length && !(o >= r.length); l++) {
                      var c = s[l];
                      if (
                        "string" === typeof c ||
                        (c.content && "string" === typeof c.content)
                      ) {
                        var d = r[o],
                          u = n.tokenStack[d],
                          p = "string" === typeof c ? c : c.content,
                          g = t(a, d),
                          m = p.indexOf(g);
                        if (m > -1) {
                          ++o;
                          var f = p.substring(0, m),
                            b = new e.Token(
                              a,
                              e.tokenize(u, n.grammar),
                              "language-" + a,
                              u
                            ),
                            h = p.substring(m + g.length),
                            E = [];
                          f && E.push.apply(E, i([f])),
                            E.push(b),
                            h && E.push.apply(E, i([h])),
                            "string" === typeof c
                              ? s.splice.apply(s, [l, 1].concat(E))
                              : (c.content = E);
                        }
                      } else c.content && i(c.content);
                    }
                    return s;
                  })(n.tokens);
                }
              }
            }
          });
        })(e);
      }
      (e.exports = a), (a.displayName = "markupTemplating"), (a.aliases = []);
    },
    "0tVQ": function(e, t, n) {
      n("FlQf"), n("VJsP"), (e.exports = n("WEpk").Array.from);
    },
    "1K8B": function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside[
              "attr-value"
            ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside.tag.inside[
              "class-name"
            ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ }
                }
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                script: {
                  pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?={)/,
                      alias: "punctuation"
                    },
                    rest: e.languages.jsx
                  },
                  alias: "language-javascript"
                }
              },
              e.languages.jsx.tag
            );
          var n = function(e) {
              return e
                ? "string" === typeof e
                  ? e
                  : "string" === typeof e.content
                  ? e.content
                  : e.content.map(n).join("")
                : "";
            },
            a = function(t) {
              for (var o = [], r = 0; r < t.length; r++) {
                var i = t[r],
                  s = !1;
                if (
                  ("string" !== typeof i &&
                    ("tag" === i.type &&
                    i.content[0] &&
                    "tag" === i.content[0].type
                      ? "</" === i.content[0].content[0].content
                        ? o.length > 0 &&
                          o[o.length - 1].tagName ===
                            n(i.content[0].content[1]) &&
                          o.pop()
                        : "/>" === i.content[i.content.length - 1].content ||
                          o.push({
                            tagName: n(i.content[0].content[1]),
                            openedBraces: 0
                          })
                      : o.length > 0 &&
                        "punctuation" === i.type &&
                        "{" === i.content
                      ? o[o.length - 1].openedBraces++
                      : o.length > 0 &&
                        o[o.length - 1].openedBraces > 0 &&
                        "punctuation" === i.type &&
                        "}" === i.content
                      ? o[o.length - 1].openedBraces--
                      : (s = !0)),
                  (s || "string" === typeof i) &&
                    o.length > 0 &&
                    0 === o[o.length - 1].openedBraces)
                ) {
                  var l = n(i);
                  r < t.length - 1 &&
                    ("string" === typeof t[r + 1] ||
                      "plain-text" === t[r + 1].type) &&
                    ((l += n(t[r + 1])), t.splice(r + 1, 1)),
                    r > 0 &&
                      ("string" === typeof t[r - 1] ||
                        "plain-text" === t[r - 1].type) &&
                      ((l = n(t[r - 1]) + l), t.splice(r - 1, 1), r--),
                    (t[r] = new e.Token("plain-text", l, null, l));
                }
                i.content && "string" !== typeof i.content && a(i.content);
              }
            };
          e.hooks.add("after-tokenize", function(e) {
            ("jsx" !== e.language && "tsx" !== e.language) || a(e.tokens);
          });
        })(e);
      }
      (e.exports = a), (a.displayName = "jsx"), (a.aliases = []);
    },
    "1MdW": function(e, t, n) {
      "use strict";
      var a = n("0iGP");
      function o(e) {
        e.register(a),
          (function(e) {
            (e.languages.php = e.languages.extend("clike", {
              keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
              boolean: { pattern: /\b(?:false|true)\b/i, alias: "constant" },
              constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
              }
            })),
              e.languages.insertBefore("php", "string", {
                "shell-comment": {
                  pattern: /(^|[^\\])#.*/,
                  lookbehind: !0,
                  alias: "comment"
                }
              }),
              e.languages.insertBefore("php", "comment", {
                delimiter: {
                  pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                  alias: "important"
                }
              }),
              e.languages.insertBefore("php", "keyword", {
                variable: /\$+(?:\w+\b|(?={))/i,
                package: {
                  pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ }
                }
              }),
              e.languages.insertBefore("php", "operator", {
                property: { pattern: /(->)[\w]+/, lookbehind: !0 }
              });
            var t = {
              pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
              lookbehind: !0,
              inside: { rest: e.languages.php }
            };
            e.languages.insertBefore("php", "string", {
              "nowdoc-string": {
                pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                greedy: !0,
                alias: "string",
                inside: {
                  delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: { punctuation: /^<<<'?|[';]$/ }
                  }
                }
              },
              "heredoc-string": {
                pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                greedy: !0,
                alias: "string",
                inside: {
                  delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: { punctuation: /^<<<"?|[";]$/ }
                  },
                  interpolation: t
                }
              },
              "single-quoted-string": {
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                greedy: !0,
                alias: "string"
              },
              "double-quoted-string": {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                alias: "string",
                inside: { interpolation: t }
              }
            }),
              delete e.languages.php.string,
              e.hooks.add("before-tokenize", function(t) {
                if (/<\?/.test(t.code)) {
                  e.languages["markup-templating"].buildPlaceholders(
                    t,
                    "php",
                    /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi
                  );
                }
              }),
              e.hooks.add("after-tokenize", function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "php");
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "php"), (o.aliases = []);
    },
    "1iAE": function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        var t = "string" === typeof e ? e.charCodeAt(0) : e;
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      };
    },
    "22HQ": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.ini = {
          comment: /^[ \t]*[;#].*$/m,
          selector: /^[ \t]*\[.*?\]/m,
          constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
          "attr-value": { pattern: /=.*/, inside: { punctuation: /^[=]/ } }
        };
      }
      (e.exports = a), (a.displayName = "ini"), (a.aliases = []);
    },
    "2PDY": function(e, t) {
      e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    },
    "31EH": function(e, t, n) {
      "use strict";
      var a = n("pr4O");
      function o(e) {
        e.register(a),
          (e.languages.bison = e.languages.extend("c", {})),
          e.languages.insertBefore("bison", "comment", {
            bison: {
              pattern: /^[\s\S]*?%%[\s\S]*?%%/,
              inside: {
                c: {
                  pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
                  inside: {
                    delimiter: { pattern: /^%?\{|%?\}$/, alias: "punctuation" },
                    "bison-variable": {
                      pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                      alias: "variable",
                      inside: { punctuation: /<|>/ }
                    },
                    rest: e.languages.c
                  }
                },
                comment: e.languages.c.comment,
                string: e.languages.c.string,
                property: /\S+(?=:)/,
                keyword: /%\w+/,
                number: {
                  pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
                  lookbehind: !0
                },
                punctuation: /%[%?]|[|:;\[\]<>]/
              }
            }
          });
      }
      (e.exports = o), (o.displayName = "bison"), (o.aliases = []);
    },
    "38Ti": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#fff",
          textShadow: "0 1px 1px #000",
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          direction: "ltr",
          textAlign: "left",
          wordSpacing: "normal",
          whiteSpace: "pre",
          wordWrap: "normal",
          lineHeight: "1.4",
          background: "none",
          border: "0",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "#fff",
          textShadow: "0 1px 1px #000",
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          direction: "ltr",
          textAlign: "left",
          wordSpacing: "normal",
          whiteSpace: "pre",
          wordWrap: "normal",
          lineHeight: "1.4",
          background: "#222",
          border: "0",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "15px",
          margin: "1em 0",
          overflow: "auto",
          MozBorderRadius: "8px",
          WebkitBorderRadius: "8px",
          borderRadius: "8px"
        },
        'pre[class*="language-"] code': {
          float: "left",
          padding: "0 15px 0 0"
        },
        ':not(pre) > code[class*="language-"]': {
          background: "#222",
          padding: "5px 10px",
          lineHeight: "1",
          MozBorderRadius: "3px",
          WebkitBorderRadius: "3px",
          borderRadius: "3px"
        },
        comment: { color: "#797979" },
        prolog: { color: "#797979" },
        doctype: { color: "#797979" },
        cdata: { color: "#797979" },
        selector: { color: "#fff" },
        operator: { color: "#fff" },
        punctuation: { color: "#fff" },
        namespace: { Opacity: ".7" },
        tag: { color: "#ffd893" },
        boolean: { color: "#ffd893" },
        atrule: { color: "#B0C975" },
        "attr-value": { color: "#B0C975" },
        hex: { color: "#B0C975" },
        string: { color: "#B0C975" },
        property: { color: "#c27628" },
        entity: { color: "#c27628", cursor: "help" },
        url: { color: "#c27628" },
        "attr-name": { color: "#c27628" },
        keyword: { color: "#c27628" },
        regex: { color: "#9B71C6" },
        function: { color: "#e5a638" },
        constant: { color: "#e5a638" },
        variable: { color: "#fdfba8" },
        number: { color: "#8799B0" },
        important: { color: "#E45734" },
        deliminator: { color: "#E45734" },
        "pre[data-line]": { position: "relative", padding: "1em 0 1em 3em" },
        ".line-highlight": {
          position: "absolute",
          left: "0",
          right: "0",
          marginTop: "1em",
          background: "rgba(255,255,255,.2)",
          pointerEvents: "none",
          lineHeight: "inherit",
          whiteSpace: "pre"
        },
        ".line-highlight:before": {
          content: "attr(data-start)",
          position: "absolute",
          top: ".3em",
          left: ".6em",
          minWidth: "1em",
          padding: "0 .5em",
          backgroundColor: "rgba(255,255,255,.3)",
          color: "#fff",
          font: "bold 65%/1.5 sans-serif",
          textAlign: "center",
          MozBorderRadius: "8px",
          WebkitBorderRadius: "8px",
          borderRadius: "8px",
          textShadow: "none"
        },
        ".line-highlight[data-end]:after": {
          content: "attr(data-end)",
          position: "absolute",
          top: "auto",
          left: ".6em",
          minWidth: "1em",
          padding: "0 .5em",
          backgroundColor: "rgba(255,255,255,.3)",
          color: "#fff",
          font: "bold 65%/1.5 sans-serif",
          textAlign: "center",
          MozBorderRadius: "8px",
          WebkitBorderRadius: "8px",
          borderRadius: "8px",
          textShadow: "none",
          bottom: ".4em"
        },
        ".line-numbers-rows": { margin: "0" },
        ".line-numbers-rows span": {
          paddingRight: "10px",
          borderRight: "3px #d9d336 solid"
        }
      };
    },
    "3DeZ": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.hsts = {
          directive: {
            pattern: /\b(?:max-age=|includeSubDomains|preload)/,
            alias: "keyword"
          },
          safe: { pattern: /\d{8,}/, alias: "selector" },
          unsafe: { pattern: /\d{1,7}/, alias: "function" }
        };
      }
      (e.exports = a), (a.displayName = "hsts"), (a.aliases = []);
    },
    "3niX": function(e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.flush = function() {
          var e = r.cssRules();
          return r.flush(), e;
        }),
        (t.default = void 0);
      var a,
        o = n("q1tI");
      var r = new ((a = n("SevZ")) && a.__esModule
          ? a
          : { default: a }
        ).default(),
        i = (function(e) {
          var t, n;
          function a(t) {
            var n;
            return ((n = e.call(this, t) || this).prevProps = {}), n;
          }
          (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (a.dynamic = function(e) {
              return e
                .map(function(e) {
                  var t = e[0],
                    n = e[1];
                  return r.computeId(t, n);
                })
                .join(" ");
            });
          var o = a.prototype;
          return (
            (o.shouldComponentUpdate = function(e) {
              return (
                this.props.id !== e.id ||
                String(this.props.dynamic) !== String(e.dynamic)
              );
            }),
            (o.componentWillUnmount = function() {
              r.remove(this.props);
            }),
            (o.render = function() {
              return (
                this.shouldComponentUpdate(this.prevProps) &&
                  (this.prevProps.id && r.remove(this.prevProps),
                  r.add(this.props),
                  (this.prevProps = this.props)),
                null
              );
            }),
            a
          );
        })(o.Component);
      t.default = i;
    },
    "3vSn": function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = (e.languages.powershell = {
              comment: [
                { pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
                { pattern: /(^|[^`])#.*/, lookbehind: !0 }
              ],
              string: [
                {
                  pattern: /"(?:`[\s\S]|[^`"])*"/,
                  greedy: !0,
                  inside: {
                    function: {
                      pattern: /(^|[^`])\$\((?:\$\(.*?\)|(?!\$\()[^\r\n)])*\)/,
                      lookbehind: !0,
                      inside: {}
                    }
                  }
                },
                { pattern: /'(?:[^']|'')*'/, greedy: !0 }
              ],
              namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
              boolean: /\$(?:true|false)\b/i,
              variable: /\$\w+\b/i,
              function: [
                /\b(?:Add-(?:Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(?:Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(?:Csv|Json|StringData)|Convert-Path|ConvertTo-(?:Csv|Html|Json|Xml)|Copy-(?:Item|ItemProperty)|Debug-Process|Disable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(?:Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(?:Custom|List|Table|Wide)|Get-(?:Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(?:Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(?:Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(?:Command|Object)|Move-(?:Item|ItemProperty)|New-(?:Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(?:Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(?:Job|PSSession)|Register-(?:EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(?:Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(?:Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(?:Computer|Service)|Restore-Computer|Resume-(?:Job|Service)|Save-Help|Select-(?:Object|String|Xml)|Send-MailMessage|Set-(?:Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(?:Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(?:Job|Process|Service|Sleep|Transaction)|Stop-(?:Computer|Job|Process|Service)|Suspend-(?:Job|Service)|Tee-Object|Test-(?:ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(?:Event|PSSessionConfiguration)|Update-(?:FormatData|Help|List|TypeData)|Use-Transaction|Wait-(?:Event|Job|Process)|Where-Object|Write-(?:Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i,
                /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
              ],
              keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
              operator: {
                pattern: /(\W?)(?:!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
                lookbehind: !0
              },
              punctuation: /[|{}[\];(),.]/
            }),
            n = t.string[0].inside;
          (n.boolean = t.boolean),
            (n.variable = t.variable),
            (n.function.inside = t);
        })(e);
      }
      (e.exports = a), (a.displayName = "powershell"), (a.aliases = []);
    },
    "4+h/": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#faf8f5",
          color: "#728fcb"
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#faf8f5",
          color: "#728fcb",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#faf8f5"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#faf8f5"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#faf8f5"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#faf8f5"
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#faf8f5"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#faf8f5"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#faf8f5"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#faf8f5"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#b6ad9a" },
        prolog: { color: "#b6ad9a" },
        doctype: { color: "#b6ad9a" },
        cdata: { color: "#b6ad9a" },
        punctuation: { color: "#b6ad9a" },
        namespace: { Opacity: ".7" },
        tag: { color: "#063289" },
        operator: { color: "#063289" },
        number: { color: "#063289" },
        property: { color: "#b29762" },
        function: { color: "#b29762" },
        "tag-id": { color: "#2d2006" },
        selector: { color: "#2d2006" },
        "atrule-id": { color: "#2d2006" },
        "code.language-javascript": { color: "#896724" },
        "attr-name": { color: "#896724" },
        "code.language-css": { color: "#728fcb" },
        "code.language-scss": { color: "#728fcb" },
        boolean: { color: "#728fcb" },
        string: { color: "#728fcb" },
        entity: { color: "#728fcb", cursor: "help" },
        url: { color: "#728fcb" },
        ".language-css .token.string": { color: "#728fcb" },
        ".language-scss .token.string": { color: "#728fcb" },
        ".style .token.string": { color: "#728fcb" },
        "attr-value": { color: "#728fcb" },
        keyword: { color: "#728fcb" },
        control: { color: "#728fcb" },
        directive: { color: "#728fcb" },
        unit: { color: "#728fcb" },
        statement: { color: "#728fcb" },
        regex: { color: "#728fcb" },
        atrule: { color: "#728fcb" },
        placeholder: { color: "#93abdc" },
        variable: { color: "#93abdc" },
        deleted: { textDecoration: "line-through" },
        inserted: {
          borderBottom: "1px dotted #2d2006",
          textDecoration: "none"
        },
        italic: { fontStyle: "italic" },
        important: { fontWeight: "bold", color: "#896724" },
        bold: { fontWeight: "bold" },
        "pre > code.highlight": {
          Outline: ".4em solid #896724",
          OutlineOffset: ".4em"
        },
        ".line-numbers .line-numbers-rows": { borderRightColor: "#ece8de" },
        ".line-numbers-rows > span:before": { color: "#cdc4b1" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"
        }
      };
    },
    "41kq": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.renpy = {
          comment: { pattern: /(^|[^\\])#.+/, lookbehind: !0 },
          string: {
            pattern: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2|(?:^#?(?:(?:[0-9a-fA-F]{2}){3}|(?:[0-9a-fA-F]){3})$)/m,
            greedy: !0
          },
          function: /[a-z_]\w*(?=\()/i,
          property: /\b(?:insensitive|idle|hover|selected_idle|selected_hover|background|position|alt|xpos|ypos|pos|xanchor|yanchor|anchor|xalign|yalign|align|xcenter|ycenter|xofsset|yoffset|ymaximum|maximum|xmaximum|xminimum|yminimum|minimum|xsize|ysizexysize|xfill|yfill|area|antialias|black_color|bold|caret|color|first_indent|font|size|italic|justify|kerning|language|layout|line_leading|line_overlap_split|line_spacing|min_width|newline_indent|outlines|rest_indent|ruby_style|slow_cps|slow_cps_multiplier|strikethrough|text_align|underline|hyperlink_functions|vertical|hinting|foreground|left_margin|xmargin|top_margin|bottom_margin|ymargin|left_padding|right_padding|xpadding|top_padding|bottom_padding|ypadding|size_group|child|hover_sound|activate_sound|mouse|focus_mask|keyboard_focus|bar_vertical|bar_invert|bar_resizing|left_gutter|right_gutter|top_gutter|bottom_gutter|left_bar|right_bar|top_bar|bottom_bar|thumb|thumb_shadow|thumb_offset|unscrollable|spacing|first_spacing|box_reverse|box_wrap|order_reverse|fit_first|ysize|thumbnail_width|thumbnail_height|help|text_ypos|text_xpos|idle_color|hover_color|selected_idle_color|selected_hover_color|insensitive_color|alpha|insensitive_background|hover_background|zorder|value|width|xadjustment|xanchoraround|xaround|xinitial|xoffset|xzoom|yadjustment|yanchoraround|yaround|yinitial|yzoom|zoom|ground|height|text_style|text_y_fudge|selected_insensitive|has_sound|has_music|has_voice|focus|hovered|image_style|length|minwidth|mousewheel|offset|prefix|radius|range|right_margin|rotate|rotate_pad|developer|screen_width|screen_height|window_title|name|version|windows_icon|default_fullscreen|default_text_cps|default_afm_time|main_menu_music|sample_sound|enter_sound|exit_sound|save_directory|enter_transition|exit_transition|intra_transition|main_game_transition|game_main_transition|end_splash_transition|end_game_transition|after_load_transition|window_show_transition|window_hide_transition|adv_nvl_transition|nvl_adv_transition|enter_yesno_transition|exit_yesno_transition|enter_replay_transition|exit_replay_transition|say_attribute_transition|directory_name|executable_name|include_update|window_icon|modal|google_play_key|google_play_salt|drag_name|drag_handle|draggable|dragged|droppable|dropped|narrator_menu|action|default_afm_enable|version_name|version_tuple|inside|fadeout|fadein|layers|layer_clipping|linear|scrollbars|side_xpos|side_ypos|side_spacing|edgescroll|drag_joined|drag_raise|drop_shadow|drop_shadow_color|subpixel|easein|easeout|time|crop|auto|update|get_installed_packages|can_update|UpdateVersion|Update|overlay_functions|translations|window_left_padding|show_side_image|show_two_window)\b/,
          tag: /\b(?:label|image|menu|[hv]box|frame|text|imagemap|imagebutton|bar|vbar|screen|textbutton|buttoscreenn|fixed|grid|input|key|mousearea|side|timer|viewport|window|hotspot|hotbar|self|button|drag|draggroup|tag|mm_menu_frame|nvl|block|parallel)\b|\$/,
          keyword: /\b(?:as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|yield|adjustment|alignaround|allow|angle|around|box_layout|cache|changed|child_size|clicked|clipping|corner1|corner2|default|delay|exclude|scope|slow|slow_abortable|slow_done|sound|style_group|substitute|suffix|transform_anchor|transpose|unhovered|config|theme|mm_root|gm_root|rounded_window|build|disabled_text|disabled|widget_selected|widget_text|widget_hover|widget|updater|behind|call|expression|hide|init|jump|onlayer|python|renpy|scene|set|show|transform|play|queue|stop|pause|define|window|repeat|contains|choice|on|function|event|animation|clockwise|counterclockwise|circles|knot|null|None|random|has|add|use|fade|dissolve|style|store|id|voice|center|left|right|less_rounded|music|movie|clear|persistent|ui)\b/,
          boolean: /\b(?:[Tt]rue|[Ff]alse)\b/,
          number: /(?:\b(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*)|\B\.\d+)(?:e[+-]?\d+)?j?/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at)\b/,
          punctuation: /[{}[\];(),.:]/
        };
      }
      (e.exports = a), (a.displayName = "renpy"), (a.aliases = []);
    },
    "4C0g": function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /\\\((?:[^()]|\([^()]*\))*\)/.source,
            n = RegExp(
              /"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g, t)
            ),
            a = {
              interpolation: {
                pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + t),
                lookbehind: !0,
                inside: {
                  content: {
                    pattern: /^(\\\()[\s\S]+(?=\)$)/,
                    lookbehind: !0,
                    inside: null
                  },
                  punctuation: /^\\\(|\)$/
                }
              }
            },
            o = (e.languages.jq = {
              comment: /#.*/,
              property: {
                pattern: RegExp(n.source + /(?=\s*:(?!:))/.source),
                greedy: !0,
                inside: a
              },
              string: { pattern: n, greedy: !0, inside: a },
              function: { pattern: /(\bdef\s+)[a-z_]\w+/i, lookbehind: !0 },
              variable: /\B\$\w+/,
              "property-literal": {
                pattern: /[a-z_]\w*(?=\s*:(?!:))/i,
                alias: "property"
              },
              keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
              boolean: /\b(?:true|false)\b/,
              number: /(?:\b\d+\.|\B\.)?\d+(?:[eE][+-]?\d+)?\b/,
              operator: [
                { pattern: /\|=?/, alias: "pipe" },
                /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|or|not)\b/
              ],
              "c-style-function": {
                pattern: /\b[a-z_]\w*(?=\s*\()/i,
                alias: "function"
              },
              punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
              dot: { pattern: /\./, alias: "important" }
            });
          a.interpolation.inside.content.inside = o;
        })(e);
      }
      (e.exports = a), (a.displayName = "jq"), (a.aliases = []);
    },
    "4UXz": function(e, t, n) {
      "use strict";
      var a = n("0iGP");
      function o(e) {
        e.register(a),
          (function(e) {
            var t = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              n = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;
            (e.languages.soy = {
              comment: [
                /\/\*[\s\S]*?\*\//,
                { pattern: /(\s)\/\/.*/, lookbehind: !0, greedy: !0 }
              ],
              "command-arg": {
                pattern: /({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
                lookbehind: !0,
                alias: "string",
                inside: { punctuation: /\./ }
              },
              parameter: {
                pattern: /({+\/?\s*@?param\??\s+)\.?[\w.]+/,
                lookbehind: !0,
                alias: "variable"
              },
              keyword: [
                {
                  pattern: /({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
                  lookbehind: !0
                },
                /\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/
              ],
              delimiter: { pattern: /^{+\/?|\/?}+$/, alias: "punctuation" },
              property: /\w+(?==)/,
              variable: {
                pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,
                inside: {
                  string: { pattern: t, greedy: !0 },
                  number: n,
                  punctuation: /[\[\].?]/
                }
              },
              string: { pattern: t, greedy: !0 },
              function: [
                /\w+(?=\()/,
                { pattern: /(\|[^\S\r\n]*)\w+/, lookbehind: !0 }
              ],
              boolean: /\b(?:true|false)\b/,
              number: n,
              operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
              punctuation: /[{}()\[\]|.,:]/
            }),
              e.hooks.add("before-tokenize", function(t) {
                var n = !1;
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "soy",
                  /{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g,
                  function(e) {
                    return (
                      "{/literal}" === e && (n = !1),
                      !n && ("{literal}" === e && (n = !0), !0)
                    );
                  }
                );
              }),
              e.hooks.add("after-tokenize", function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "soy");
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "soy"), (o.aliases = []);
    },
    "4zmH": function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.n4js = e.languages.extend("javascript", {
          keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
        })),
          e.languages.insertBefore("n4js", "constant", {
            annotation: { pattern: /@+\w+/, alias: "operator" }
          }),
          (e.languages.n4jsd = e.languages.n4js);
      }
      (e.exports = a), (a.displayName = "n4js"), (a.aliases = []);
    },
    "5/I5": function(e, t, n) {
      "use strict";
      var a = n("Zbb/");
      function o(e) {
        e.register(a),
          (e.languages.vbnet = e.languages.extend("basic", {
            keyword: /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDEC|CDBL|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEFAULT|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LINE INPUT|LET|LIB|LIKE|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPERATOR|OPEN|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHORT|SINGLE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SYNCLOCK|SWAP|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
            comment: [
              { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
              { pattern: /(^|[^\\:])'.*/, lookbehind: !0 }
            ]
          }));
      }
      (e.exports = o), (o.displayName = "vbnet"), (o.aliases = []);
    },
    "5YM3": function(e, t, n) {
      "use strict";
      (function(t) {
        var a = (function() {
          var e = "Prism" in t,
            n = e ? t.Prism : void 0;
          return function() {
            e ? (t.Prism = n) : delete t.Prism;
            (e = void 0), (n = void 0);
          };
        })();
        ("undefined" === typeof window
          ? "undefined" === typeof self
            ? {}
            : self
          : window
        ).Prism = { manual: !0, disableWorkerMessageHandler: !0 };
        var o = n("KSyo"),
          r = n("ZWk2"),
          i = n("X+ae"),
          s = n("Ox1z"),
          l = n("fwF+"),
          c = n("amLO"),
          d = n("H4ZV");
        a();
        var u = {}.hasOwnProperty;
        function p() {}
        p.prototype = i;
        var g = new p();
        function m(e) {
          if ("function" !== typeof e || !e.displayName)
            throw new Error(
              "Expected `function` for `grammar`, got `" + e + "`"
            );
          void 0 === g.languages[e.displayName] && e(g);
        }
        (e.exports = g),
          (g.highlight = function(e, t) {
            var n,
              a = i.highlight;
            if ("string" !== typeof e)
              throw new Error("Expected `string` for `value`, got `" + e + "`");
            if ("Object" === g.util.type(t)) (n = t), (t = null);
            else {
              if ("string" !== typeof t)
                throw new Error(
                  "Expected `string` for `name`, got `" + t + "`"
                );
              if (!u.call(g.languages, t))
                throw new Error(
                  "Unknown language: `" + t + "` is not registered"
                );
              n = g.languages[t];
            }
            return a.call(this, e, n, t);
          }),
          (g.register = m),
          (g.alias = function(e, t) {
            var n,
              a,
              o,
              r,
              i = g.languages,
              s = e;
            t && ((s = {})[e] = t);
            for (n in s)
              for (
                a = s[n],
                  o = (a = "string" === typeof a ? [a] : a).length,
                  r = -1;
                ++r < o;

              )
                i[a[r]] = i[n];
          }),
          (g.registered = function(e) {
            if ("string" !== typeof e)
              throw new Error(
                "Expected `string` for `language`, got `" + e + "`"
              );
            return u.call(g.languages, e);
          }),
          (g.listLanguages = function() {
            var e,
              t = g.languages,
              n = [];
            for (e in t) u.call(t, e) && "object" === typeof t[e] && n.push(e);
            return n;
          }),
          m(s),
          m(l),
          m(c),
          m(d),
          (g.util.encode = function(e) {
            return e;
          }),
          (g.Token.stringify = function(e, t, n) {
            var a;
            if ("string" === typeof e) return { type: "text", value: e };
            if ("Array" === g.util.type(e))
              return (function(e, t) {
                var n,
                  a = [],
                  o = e.length,
                  r = -1;
                for (; ++r < o; )
                  "" !== (n = e[r]) && null !== n && void 0 !== n && a.push(n);
                (r = -1), (o = a.length);
                for (; ++r < o; )
                  (n = a[r]), (a[r] = g.Token.stringify(n, t, a));
                return a;
              })(e, t);
            (a = {
              type: e.type,
              content: g.Token.stringify(e.content, t, n),
              tag: "span",
              classes: ["token", e.type],
              attributes: {},
              language: t,
              parent: n
            }),
              e.alias && (a.classes = a.classes.concat(e.alias));
            return (
              g.hooks.run("wrap", a),
              o(
                a.tag + "." + a.classes.join("."),
                (function(e) {
                  var t;
                  for (t in e) e[t] = r(e[t]);
                  return e;
                })(a.attributes),
                a.content
              )
            );
          });
      }.call(this, n("yLpj")));
    },
    "61xa": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "black",
          background: "none",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "black",
          background: "none",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          position: "relative",
          margin: ".5em 0",
          overflow: "visible",
          padding: "0",
          backgroundColor: "#fdfdfd",
          WebkitBoxSizing: "border-box",
          MozBoxSizing: "border-box",
          boxSizing: "border-box",
          marginBottom: "1em"
        },
        'pre[class*="language-"]>code': {
          position: "relative",
          borderLeft: "10px solid #358ccb",
          boxShadow: "-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",
          backgroundColor: "#fdfdfd",
          backgroundImage:
            "linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",
          backgroundSize: "3em 3em",
          backgroundOrigin: "content-box",
          backgroundAttachment: "local"
        },
        'code[class*="language"]': {
          maxHeight: "inherit",
          height: "inherit",
          padding: "0 1em",
          display: "block",
          overflow: "auto"
        },
        ':not(pre) > code[class*="language-"]': {
          backgroundColor: "#fdfdfd",
          WebkitBoxSizing: "border-box",
          MozBoxSizing: "border-box",
          boxSizing: "border-box",
          marginBottom: "1em",
          position: "relative",
          padding: ".2em",
          borderRadius: "0.3em",
          color: "#c92c2c",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          display: "inline",
          whiteSpace: "normal"
        },
        'pre[class*="language-"]:before': {
          content: "''",
          zIndex: "-2",
          display: "block",
          position: "absolute",
          bottom: "0.75em",
          left: "0.18em",
          width: "40%",
          height: "20%",
          maxHeight: "13em",
          boxShadow: "0px 13px 8px #979797",
          WebkitTransform: "rotate(-2deg)",
          MozTransform: "rotate(-2deg)",
          msTransform: "rotate(-2deg)",
          OTransform: "rotate(-2deg)",
          transform: "rotate(-2deg)"
        },
        'pre[class*="language-"]:after': {
          content: "''",
          zIndex: "-2",
          display: "block",
          position: "absolute",
          bottom: "0.75em",
          left: "auto",
          width: "40%",
          height: "20%",
          maxHeight: "13em",
          boxShadow: "0px 13px 8px #979797",
          WebkitTransform: "rotate(2deg)",
          MozTransform: "rotate(2deg)",
          msTransform: "rotate(2deg)",
          OTransform: "rotate(2deg)",
          transform: "rotate(2deg)",
          right: "0.75em"
        },
        ':not(pre) > code[class*="language-"]:after': {
          right: "0.75em",
          left: "auto",
          WebkitTransform: "rotate(2deg)",
          MozTransform: "rotate(2deg)",
          msTransform: "rotate(2deg)",
          OTransform: "rotate(2deg)",
          transform: "rotate(2deg)"
        },
        comment: { color: "#7D8B99" },
        "block-comment": { color: "#7D8B99" },
        prolog: { color: "#7D8B99" },
        doctype: { color: "#7D8B99" },
        cdata: { color: "#7D8B99" },
        punctuation: { color: "#5F6364" },
        property: { color: "#c92c2c" },
        tag: { color: "#c92c2c" },
        boolean: { color: "#c92c2c" },
        number: { color: "#c92c2c" },
        "function-name": { color: "#c92c2c" },
        constant: { color: "#c92c2c" },
        symbol: { color: "#c92c2c" },
        deleted: { color: "#c92c2c" },
        selector: { color: "#2f9c0a" },
        "attr-name": { color: "#2f9c0a" },
        string: { color: "#2f9c0a" },
        char: { color: "#2f9c0a" },
        function: { color: "#2f9c0a" },
        builtin: { color: "#2f9c0a" },
        inserted: { color: "#2f9c0a" },
        operator: { color: "#a67f59", background: "rgba(255, 255, 255, 0.5)" },
        entity: {
          color: "#a67f59",
          background: "rgba(255, 255, 255, 0.5)",
          cursor: "help"
        },
        url: { color: "#a67f59", background: "rgba(255, 255, 255, 0.5)" },
        variable: { color: "#a67f59", background: "rgba(255, 255, 255, 0.5)" },
        atrule: { color: "#1990b8" },
        "attr-value": { color: "#1990b8" },
        keyword: { color: "#1990b8" },
        "class-name": { color: "#1990b8" },
        regex: { color: "#e90" },
        important: { color: "#e90", fontWeight: "normal" },
        ".language-css .token.string": {
          color: "#a67f59",
          background: "rgba(255, 255, 255, 0.5)"
        },
        ".style .token.string": {
          color: "#a67f59",
          background: "rgba(255, 255, 255, 0.5)"
        },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" },
        ".namespace": { Opacity: ".7" },
        "tab:not(:empty):before": { color: "#e0d7d1" },
        "cr:before": { color: "#e0d7d1" },
        "lf:before": { color: "#e0d7d1" },
        'pre[class*="language-"].line-numbers.line-numbers': {
          paddingLeft: "0"
        },
        'pre[class*="language-"].line-numbers.line-numbers code': {
          paddingLeft: "3.8em"
        },
        'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows': {
          left: "0"
        },
        'pre[class*="language-"][data-line]': {
          paddingTop: "0",
          paddingBottom: "0",
          paddingLeft: "0"
        },
        "pre[data-line] code": { position: "relative", paddingLeft: "4em" },
        "pre .line-highlight": { marginTop: "0" }
      };
    },
    "6MAg": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "black",
          background: "none",
          textShadow: "0 1px white",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "black",
          background: "#f5f2f0",
          textShadow: "0 1px white",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#b3d4fc"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#b3d4fc"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#b3d4fc"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#b3d4fc"
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#b3d4fc"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#b3d4fc"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#b3d4fc"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#b3d4fc"
        },
        ':not(pre) > code[class*="language-"]': {
          background: "#f5f2f0",
          padding: ".1em",
          borderRadius: ".3em",
          whiteSpace: "normal"
        },
        comment: { color: "slategray" },
        prolog: { color: "slategray" },
        doctype: { color: "slategray" },
        cdata: { color: "slategray" },
        punctuation: { color: "#999" },
        ".namespace": { Opacity: ".7" },
        property: { color: "#905" },
        tag: { color: "#905" },
        boolean: { color: "#905" },
        number: { color: "#905" },
        constant: { color: "#905" },
        symbol: { color: "#905" },
        deleted: { color: "#905" },
        selector: { color: "#690" },
        "attr-name": { color: "#690" },
        string: { color: "#690" },
        char: { color: "#690" },
        builtin: { color: "#690" },
        inserted: { color: "#690" },
        operator: { color: "#9a6e3a", background: "hsla(0, 0%, 100%, .5)" },
        entity: {
          color: "#9a6e3a",
          background: "hsla(0, 0%, 100%, .5)",
          cursor: "help"
        },
        url: { color: "#9a6e3a", background: "hsla(0, 0%, 100%, .5)" },
        ".language-css .token.string": {
          color: "#9a6e3a",
          background: "hsla(0, 0%, 100%, .5)"
        },
        ".style .token.string": {
          color: "#9a6e3a",
          background: "hsla(0, 0%, 100%, .5)"
        },
        atrule: { color: "#07a" },
        "attr-value": { color: "#07a" },
        keyword: { color: "#07a" },
        function: { color: "#DD4A68" },
        "class-name": { color: "#DD4A68" },
        regex: { color: "#e90" },
        important: { color: "#e90", fontWeight: "bold" },
        variable: { color: "#e90" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" }
      };
    },
    "7+hk": function(e, t, n) {
      "use strict";
      var a = n("z2ZG"),
        o = n("du5t"),
        r = n("eAD1"),
        i = n("dXJL"),
        s = n("bHgY"),
        l = n("RXC2");
      e.exports = a([r, o, i, s, l]);
    },
    "80K2": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.arff = {
          comment: /%.*/,
          string: { pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          keyword: /@(?:attribute|data|end|relation)\b/i,
          number: /\b\d+(?:\.\d+)?\b/,
          punctuation: /[{},]/
        };
      }
      (e.exports = a), (a.displayName = "arff"), (a.aliases = []);
    },
    "8Kt/": function(e, t, n) {
      "use strict";
      var a = n("ttDY"),
        o = n("hfKm"),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      o(t, "__esModule", { value: !0 });
      var i = r(n("q1tI")),
        s = r(n("Xuae")),
        l = n("lwAK"),
        c = n("FYa8"),
        d = n("/0+H");
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width,minimum-scale=1,initial-scale=1"
              })
            ),
          t
        );
      }
      function p(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function(
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      t.defaultHead = u;
      var g = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        return e
          .reduce(function(e, t) {
            var n = i.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function() {
              var e = new a(),
                t = new a(),
                n = new a(),
                o = {};
              return function(r) {
                var i = !0;
                if (
                  r.key &&
                  "number" !== typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  var s = r.key.slice(r.key.indexOf("$") + 1);
                  e.has(s) ? (i = !1) : e.add(s);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    t.has(r.type) ? (i = !1) : t.add(r.type);
                    break;
                  case "meta":
                    for (var l = 0, c = g.length; l < c; l++) {
                      var d = g[l];
                      if (r.props.hasOwnProperty(d))
                        if ("charSet" === d) n.has(d) ? (i = !1) : n.add(d);
                        else {
                          var u = r.props[d],
                            p = o[d] || new a();
                          p.has(u) ? (i = !1) : (p.add(u), (o[d] = p));
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function(e, t) {
            var n = e.key || t;
            return i.default.cloneElement(e, { key: n });
          });
      }
      var f = s.default();
      function b(e) {
        var t = e.children;
        return i.default.createElement(
          l.AmpStateContext.Consumer,
          null,
          function(e) {
            return i.default.createElement(
              c.HeadManagerContext.Consumer,
              null,
              function(n) {
                return i.default.createElement(
                  f,
                  {
                    reduceComponentsToState: m,
                    handleStateChange: n,
                    inAmpMode: d.isInAmpMode(e)
                  },
                  t
                );
              }
            );
          }
        );
      }
      (b.rewind = f.rewind), (t.default = b);
    },
    "8OQS": function(e, t) {
      (e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++)
          (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    "8YJO": function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.jolie = e.languages.extend("clike", {
          keyword: /\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,
          builtin: /\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?l?/i,
          operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,
          symbol: /[|;@]/,
          punctuation: /[,.]/,
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          }
        })),
          delete e.languages.jolie["class-name"],
          e.languages.insertBefore("jolie", "keyword", {
            function: {
              pattern: /((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,
              lookbehind: !0
            },
            aggregates: {
              pattern: /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
              lookbehind: !0,
              inside: {
                withExtension: {
                  pattern: /\bwith\s+\w+/,
                  inside: { keyword: /\bwith\b/ }
                },
                function: { pattern: /\w+/ },
                punctuation: { pattern: /,/ }
              }
            },
            redirects: {
              pattern: /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
              lookbehind: !0,
              inside: {
                punctuation: { pattern: /,/ },
                function: { pattern: /\w+/ },
                symbol: { pattern: /=>/ }
              }
            }
          });
      }
      (e.exports = a), (a.displayName = "jolie"), (a.aliases = []);
    },
    "8iia": function(e, t, n) {
      var a = n("QMMT"),
        o = n("RRc/");
      e.exports = function(e) {
        return function() {
          if (a(this) != e) throw TypeError(e + "#toJSON isn't generic");
          return o(this);
        };
      };
    },
    "8oxB": function(e, t) {
      var n,
        a,
        o = (e.exports = {});
      function r() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === r || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          n = "function" === typeof setTimeout ? setTimeout : r;
        } catch (e) {
          n = r;
        }
        try {
          a = "function" === typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          a = i;
        }
      })();
      var l,
        c = [],
        d = !1,
        u = -1;
      function p() {
        d &&
          l &&
          ((d = !1), l.length ? (c = l.concat(c)) : (u = -1), c.length && g());
      }
      function g() {
        if (!d) {
          var e = s(p);
          d = !0;
          for (var t = c.length; t; ) {
            for (l = c, c = []; ++u < t; ) l && l[u].run();
            (u = -1), (t = c.length);
          }
          (l = null),
            (d = !1),
            (function(e) {
              if (a === clearTimeout) return clearTimeout(e);
              if ((a === i || !a) && clearTimeout)
                return (a = clearTimeout), clearTimeout(e);
              try {
                a(e);
              } catch (t) {
                try {
                  return a.call(null, e);
                } catch (t) {
                  return a.call(this, e);
                }
              }
            })(e);
        }
      }
      function m(e, t) {
        (this.fun = e), (this.array = t);
      }
      function f() {}
      (o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new m(e, t)), 1 !== c.length || d || s(g);
      }),
        (m.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = f),
        (o.addListener = f),
        (o.once = f),
        (o.off = f),
        (o.removeListener = f),
        (o.removeAllListeners = f),
        (o.emit = f),
        (o.prependListener = f),
        (o.prependOnceListener = f),
        (o.listeners = function(e) {
          return [];
        }),
        (o.binding = function(e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function() {
          return "/";
        }),
        (o.chdir = function(e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function() {
          return 0;
        });
    },
    9891: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#2a2d2a",
          color: "#687d68"
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#2a2d2a",
          color: "#687d68",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#435643"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#435643"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#435643"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#435643"
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#435643"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#435643"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#435643"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#435643"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#535f53" },
        prolog: { color: "#535f53" },
        doctype: { color: "#535f53" },
        cdata: { color: "#535f53" },
        punctuation: { color: "#535f53" },
        namespace: { Opacity: ".7" },
        tag: { color: "#a2b34d" },
        operator: { color: "#a2b34d" },
        number: { color: "#a2b34d" },
        property: { color: "#687d68" },
        function: { color: "#687d68" },
        "tag-id": { color: "#f0fff0" },
        selector: { color: "#f0fff0" },
        "atrule-id": { color: "#f0fff0" },
        "code.language-javascript": { color: "#b3d6b3" },
        "attr-name": { color: "#b3d6b3" },
        "code.language-css": { color: "#e5fb79" },
        "code.language-scss": { color: "#e5fb79" },
        boolean: { color: "#e5fb79" },
        string: { color: "#e5fb79" },
        entity: { color: "#e5fb79", cursor: "help" },
        url: { color: "#e5fb79" },
        ".language-css .token.string": { color: "#e5fb79" },
        ".language-scss .token.string": { color: "#e5fb79" },
        ".style .token.string": { color: "#e5fb79" },
        "attr-value": { color: "#e5fb79" },
        keyword: { color: "#e5fb79" },
        control: { color: "#e5fb79" },
        directive: { color: "#e5fb79" },
        unit: { color: "#e5fb79" },
        statement: { color: "#e5fb79" },
        regex: { color: "#e5fb79" },
        atrule: { color: "#e5fb79" },
        placeholder: { color: "#e5fb79" },
        variable: { color: "#e5fb79" },
        deleted: { textDecoration: "line-through" },
        inserted: {
          borderBottom: "1px dotted #f0fff0",
          textDecoration: "none"
        },
        italic: { fontStyle: "italic" },
        important: { fontWeight: "bold", color: "#b3d6b3" },
        bold: { fontWeight: "bold" },
        "pre > code.highlight": {
          Outline: ".4em solid #5c705c",
          OutlineOffset: ".4em"
        },
        ".line-numbers .line-numbers-rows": { borderRightColor: "#2c302c" },
        ".line-numbers-rows > span:before": { color: "#3b423b" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))"
        }
      };
    },
    "9B5k": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.liquid = {
          keyword: /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/,
          number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
          operator: {
            pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
            lookbehind: !0
          },
          function: {
            pattern: /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/,
            lookbehind: !0
          }
        };
      }
      (e.exports = a), (a.displayName = "liquid"), (a.aliases = []);
    },
    "9Fha": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.lolcode = {
          comment: [/\bOBTW\s+[\s\S]*?\s+TLDR\b/, /\bBTW.+/],
          string: {
            pattern: /"(?::.|[^"])*"/,
            inside: {
              variable: /:\{[^}]+\}/,
              symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/]
            },
            greedy: !0
          },
          number: /(?:\B-)?(?:\b\d+\.?\d*|\B\.\d+)/,
          symbol: {
            pattern: /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
            lookbehind: !0,
            inside: { keyword: /A(?=\s)/ }
          },
          label: {
            pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
            lookbehind: !0,
            alias: "string"
          },
          function: {
            pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,
            lookbehind: !0
          },
          keyword: [
            {
              pattern: /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
              lookbehind: !0
            },
            /'Z(?=\s|,|$)/
          ],
          boolean: { pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/, lookbehind: !0 },
          variable: { pattern: /(^|\s)IT(?=\s|,|$)/, lookbehind: !0 },
          operator: {
            pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
            lookbehind: !0
          },
          punctuation: /\.{3}|\u2026|,|!/
        };
      }
      (e.exports = a), (a.displayName = "lolcode"), (a.aliases = []);
    },
    "9kyW": function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
        return t >>> 0;
      };
    },
    AoEZ: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.nasm = {
          comment: /;.*$/m,
          string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          label: {
            pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
            lookbehind: !0,
            alias: "function"
          },
          keyword: [
            /\[?BITS (?:16|32|64)\]?/,
            { pattern: /(^\s*)section\s*[a-zA-Z.]+:?/im, lookbehind: !0 },
            /(?:extern|global)[^;\r\n]*/i,
            /(?:CPU|FLOAT|DEFAULT).*$/m
          ],
          register: {
            pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i,
            alias: "variable"
          },
          number: /(?:\b|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i,
          operator: /[\[\]*+\-\/%<>=&|$!]/
        };
      }
      (e.exports = a), (a.displayName = "nasm"), (a.aliases = []);
    },
    Azb4: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/;
          (e.languages.protobuf = e.languages.extend("clike", {
            "class-name": {
              pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
              lookbehind: !0
            },
            keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/
          })),
            e.languages.insertBefore("protobuf", "operator", {
              map: {
                pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,
                alias: "class-name",
                inside: { punctuation: /[<>.,]/, builtin: t }
              },
              builtin: t,
              "positional-class-name": {
                pattern: /(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,
                alias: "class-name",
                inside: { punctuation: /\./ }
              },
              annotation: {
                pattern: /(\[\s*)[A-Za-z_]\w*(?=\s*=)/,
                lookbehind: !0
              }
            });
        })(e);
      }
      (e.exports = a), (a.displayName = "protobuf"), (a.aliases = []);
    },
    B62i: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.livescript = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
            { pattern: /(^|[^\\])#.*/, lookbehind: !0 }
          ],
          "interpolated-string": {
            pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              variable: {
                pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
                lookbehind: !0
              },
              interpolation: {
                pattern: /(^|[^\\])#\{[^}]+\}/m,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^#\{|\}$/,
                    alias: "variable"
                  }
                }
              },
              string: /[\s\S]+/
            }
          },
          string: [
            { pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
            { pattern: /<\[[\s\S]*?\]>/, greedy: !0 },
            /\\[^\s,;\])}]+/
          ],
          regex: [
            {
              pattern: /\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,
              greedy: !0,
              inside: { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 } }
            },
            { pattern: /\/(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}/, greedy: !0 }
          ],
          keyword: {
            pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
            lookbehind: !0
          },
          "keyword-operator": {
            pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
            lookbehind: !0,
            alias: "operator"
          },
          boolean: {
            pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
            lookbehind: !0
          },
          argument: {
            pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
            lookbehind: !0,
            alias: "variable"
          },
          number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
          identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
          operator: [
            { pattern: /( )\.(?= )/, lookbehind: !0 },
            /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/
          ],
          punctuation: /[(){}\[\]|.,:;`]/
        }),
          (e.languages.livescript[
            "interpolated-string"
          ].inside.interpolation.inside.rest = e.languages.livescript);
      }
      (e.exports = a), (a.displayName = "livescript"), (a.aliases = []);
    },
    B9jh: function(e, t, n) {
      "use strict";
      var a = n("Wu5q"),
        o = n("n3ko");
      e.exports = n("raTm")(
        "Set",
        function(e) {
          return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function(e) {
            return a.def(o(this, "Set"), (e = 0 === e ? 0 : e), e);
          }
        },
        a
      );
    },
    BK6e: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.actionscript = e.languages.extend("javascript", {
          keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
        })),
          (e.languages.actionscript["class-name"].alias = "function"),
          e.languages.markup &&
            e.languages.insertBefore("actionscript", "string", {
              xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: !0,
                inside: { rest: e.languages.markup }
              }
            });
      }
      (e.exports = a), (a.displayName = "actionscript"), (a.aliases = []);
    },
    BWuY: function(e, t, n) {
      "use strict";
      var a = n("pr4O");
      function o(e) {
        e.register(a),
          (function(e) {
            e.languages.pure = {
              comment: [
                { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
                { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
                /#!.+/
              ],
              "inline-lang": {
                pattern: /%<[\s\S]+?%>/,
                greedy: !0,
                inside: {
                  lang: {
                    pattern: /(^%< *)-\*-.+?-\*-/,
                    lookbehind: !0,
                    alias: "comment"
                  },
                  delimiter: { pattern: /^%<.*|%>$/, alias: "punctuation" }
                }
              },
              string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 },
              number: {
                pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,
                lookbehind: !0
              },
              keyword: /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
              function: /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
              special: { pattern: /\b__[a-z]+__\b/i, alias: "builtin" },
              operator: /(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,
              punctuation: /[(){}\[\];,|]/
            };
            var t = /%< *-\*- *{lang}\d* *-\*-[\s\S]+?%>/.source;
            ["c", { lang: "c++", alias: "cpp" }, "fortran"].forEach(function(
              n
            ) {
              var a = n;
              if (
                ("string" !== typeof n && ((a = n.alias), (n = n.lang)),
                e.languages[a])
              ) {
                var o = {};
                (o["inline-lang-" + a] = {
                  pattern: RegExp(
                    t.replace(
                      "{lang}",
                      n.replace(/([.+*?\/\\(){}\[\]])/g, "\\$1")
                    ),
                    "i"
                  ),
                  inside: e.util.clone(e.languages.pure["inline-lang"].inside)
                }),
                  (o["inline-lang-" + a].inside.rest = e.util.clone(
                    e.languages[a]
                  )),
                  e.languages.insertBefore("pure", "inline-lang", o);
              }
            }),
              e.languages.c &&
                (e.languages.pure["inline-lang"].inside.rest = e.util.clone(
                  e.languages.c
                ));
          })(e);
      }
      (e.exports = o), (o.displayName = "pure"), (o.aliases = []);
    },
    C3kK: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.rip = {
          comment: /#.*/,
          keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
          builtin: /@|\bSystem\b/,
          boolean: /\b(?:true|false)\b/,
          date: /\b\d{4}-\d{2}-\d{2}\b/,
          time: /\b\d{2}:\d{2}:\d{2}\b/,
          datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
          character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
          regex: {
            pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0,
            greedy: !0
          },
          symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
          string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
          punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
          reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
        };
      }
      (e.exports = a), (a.displayName = "rip"), (a.aliases = []);
    },
    C7Ve: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#393A34",
          fontFamily:
            '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          fontSize: "0.95em",
          lineHeight: "1.2em",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "#393A34",
          fontFamily:
            '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          fontSize: "0.95em",
          lineHeight: "1.2em",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto",
          border: "1px solid #dddddd",
          backgroundColor: "white"
        },
        'pre[class*="language-"]::-moz-selection': { background: "#C1DEF1" },
        'pre[class*="language-"] ::-moz-selection': { background: "#C1DEF1" },
        'code[class*="language-"]::-moz-selection': { background: "#C1DEF1" },
        'code[class*="language-"] ::-moz-selection': { background: "#C1DEF1" },
        'pre[class*="language-"]::selection': { background: "#C1DEF1" },
        'pre[class*="language-"] ::selection': { background: "#C1DEF1" },
        'code[class*="language-"]::selection': { background: "#C1DEF1" },
        'code[class*="language-"] ::selection': { background: "#C1DEF1" },
        ':not(pre) > code[class*="language-"]': {
          padding: ".2em",
          paddingTop: "1px",
          paddingBottom: "1px",
          background: "#f8f8f8",
          border: "1px solid #dddddd"
        },
        comment: { color: "#008000", fontStyle: "italic" },
        prolog: { color: "#008000", fontStyle: "italic" },
        doctype: { color: "#008000", fontStyle: "italic" },
        cdata: { color: "#008000", fontStyle: "italic" },
        namespace: { Opacity: ".7" },
        string: { color: "#A31515" },
        punctuation: { color: "#393A34" },
        operator: { color: "#393A34" },
        url: { color: "#36acaa" },
        symbol: { color: "#36acaa" },
        number: { color: "#36acaa" },
        boolean: { color: "#36acaa" },
        variable: { color: "#36acaa" },
        constant: { color: "#36acaa" },
        inserted: { color: "#36acaa" },
        atrule: { color: "#0000ff" },
        keyword: { color: "#0000ff" },
        "attr-value": { color: "#0000ff" },
        ".language-autohotkey .token.selector": { color: "#0000ff" },
        ".language-json .token.boolean": { color: "#0000ff" },
        ".language-json .token.number": { color: "#0000ff" },
        'code[class*="language-css"]': { color: "#0000ff" },
        function: { color: "#393A34" },
        deleted: { color: "#9a050f" },
        ".language-autohotkey .token.tag": { color: "#9a050f" },
        selector: { color: "#800000" },
        ".language-autohotkey .token.keyword": { color: "#00009f" },
        important: { fontWeight: "bold" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" },
        "class-name": { color: "#2B91AF" },
        ".language-json .token.property": { color: "#2B91AF" },
        tag: { color: "#800000" },
        "attr-name": { color: "#ff0000" },
        property: { color: "#ff0000" },
        regex: { color: "#ff0000" },
        entity: { color: "#ff0000" },
        "directive.tag  .tag": { background: "#ffff00", color: "#393A34" },
        ".line-numbers .line-numbers-rows": { borderRightColor: "#a5a5a5" },
        ".line-numbers-rows > span:before": { color: "#2B91AF" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"
        }
      };
    },
    Crv7: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.haskell = {
          comment: {
            pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m,
            lookbehind: !0
          },
          char: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
          string: {
            pattern: /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
            greedy: !0
          },
          keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
          import_statement: {
            pattern: /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
            lookbehind: !0,
            inside: { keyword: /\b(?:import|qualified|as|hiding)\b/ }
          },
          builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
          number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
          operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][\w']*\.)*[_a-z][\w']*`/,
          hvariable: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
          constant: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
          punctuation: /[{}[\];(),.:]/
        }),
          (e.languages.hs = e.languages.haskell);
      }
      (e.exports = a), (a.displayName = "haskell"), (a.aliases = ["hs"]);
    },
    "D+1R": function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.css.selector = {
          pattern: e.languages.css.selector,
          inside: {
            "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: {
              pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
              greedy: !0,
              inside: {
                punctuation: /^\[|\]$/,
                "case-sensitivity": {
                  pattern: /(\s)[si]$/i,
                  lookbehind: !0,
                  alias: "keyword"
                },
                namespace: {
                  pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                  lookbehind: !0,
                  inside: { punctuation: /\|$/ }
                },
                attribute: {
                  pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
                  lookbehind: !0
                },
                value: [
                  /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                  { pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/, lookbehind: !0 }
                ],
                operator: /[|~*^$]?=/
              }
            },
            "n-th": [
              {
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: { number: /[\dn]+/, operator: /[+-]/ }
              },
              { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }
            ],
            punctuation: /[()]/
          }
        }),
          e.languages.insertBefore("css", "property", {
            variable: {
              pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
              lookbehind: !0
            }
          }),
          e.languages.insertBefore("css", "function", {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: /#[\da-f]{3,8}/i,
            entity: /\\[\da-f]{1,8}/i,
            unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 },
            number: /-?[\d.]+/
          });
      }
      (e.exports = a), (a.displayName = "cssExtras"), (a.aliases = []);
    },
    "D+Se": function(e, t, n) {
      "use strict";
      var a = n("1MdW");
      function o(e) {
        e.register(a),
          e.languages.insertBefore("php", "variable", {
            this: /\$this\b/,
            global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
            scope: {
              pattern: /\b[\w\\]+::/,
              inside: { keyword: /static|self|parent/, punctuation: /::|\\/ }
            }
          });
      }
      (e.exports = o), (o.displayName = "phpExtras"), (o.aliases = []);
    },
    D75M: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source,
            n = /(?:\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g, t),
            a = (e.languages.pascaligo = {
              comment: /\(\*[\s\S]+?\*\)|\/\/.*/,
              string: {
                pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
                greedy: !0
              },
              "class-name": [
                {
                  pattern: RegExp(
                    /(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g, n),
                    "i"
                  ),
                  lookbehind: !0,
                  inside: null
                },
                {
                  pattern: RegExp(
                    /<type>(?=\s+is\b)/.source.replace(/<type>/g, n),
                    "i"
                  ),
                  inside: null
                },
                {
                  pattern: RegExp(/(:\s*)<type>/.source.replace(/<type>/g, n)),
                  lookbehind: !0,
                  inside: null
                }
              ],
              keyword: {
                pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
                lookbehind: !0
              },
              boolean: {
                pattern: /(^|[^&])\b(?:True|False)\b/i,
                lookbehind: !0
              },
              builtin: {
                pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
                lookbehind: !0
              },
              function: /\w+(?=\s*\()/i,
              number: [
                /%[01]+|&[0-7]+|\$[a-f\d]+/i,
                /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i
              ],
              operator: /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
              punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/
            }),
            o = [
              "comment",
              "keyword",
              "builtin",
              "operator",
              "punctuation"
            ].reduce(function(e, t) {
              return (e[t] = a[t]), e;
            }, {});
          a["class-name"].forEach(function(e) {
            e.inside = o;
          });
        })(e);
      }
      (e.exports = a), (a.displayName = "pascaligo"), (a.aliases = []);
    },
    DPa0: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,
            n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
          (e.languages.java = e.languages.extend("clike", {
            "class-name": [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
            keyword: t,
            function: [
              e.languages.clike.function,
              { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 }
            ],
            number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
            operator: {
              pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
              lookbehind: !0
            }
          })),
            e.languages.insertBefore("java", "class-name", {
              annotation: {
                alias: "punctuation",
                pattern: /(^|[^.])@\w+/,
                lookbehind: !0
              },
              namespace: {
                pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
                lookbehind: !0,
                inside: { punctuation: /\./ }
              },
              generics: {
                pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
                inside: {
                  "class-name": n,
                  keyword: t,
                  punctuation: /[<>(),.:]/,
                  operator: /[?&|]/
                }
              }
            });
        })(e);
      }
      (e.exports = a), (a.displayName = "java"), (a.aliases = []);
    },
    DUvi: function(e, t, n) {
      "use strict";
      var a = n("bAF5"),
        o = n("dKIx"),
        r = n("qTn3");
      e.exports = function(e) {
        var t,
          n,
          i = e.space,
          s = e.mustUseProperty || [],
          l = e.attributes || {},
          c = e.properties,
          d = e.transform,
          u = {},
          p = {};
        for (t in c)
          (n = new r(t, d(l, t), c[t], i)),
            -1 !== s.indexOf(t) && (n.mustUseProperty = !0),
            (u[t] = n),
            (p[a(t)] = t),
            (p[a(n.attribute)] = t);
        return new o(u, p, i);
      };
    },
    Dhqu: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages["splunk-spl"] = {
          comment: /`comment\("(?:\\.|[^\\"])*"\)`/,
          string: { pattern: /"(?:\\.|[^\\"])*"/, greedy: !0 },
          keyword: /\b(?:abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|anomalydetection|append|appendcols|appendcsv|appendlookup|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|fieldformat|fields|fieldsummary|filldown|fillnull|findtypes|folderize|foreach|format|from|gauge|gentimes|geom|geomfilter|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kv|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|makeresults|map|mcollect|metadata|metasearch|meventcollect|mstats|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|sendemail|set|setfields|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|timewrap|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|union|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)\b/i,
          "operator-word": {
            pattern: /\b(?:and|as|by|not|or|xor)\b/i,
            alias: "operator"
          },
          function: /\w+(?=\s*\()/,
          property: /\w+(?=\s*=(?!=))/,
          date: {
            pattern: /\b\d{1,2}\/\d{1,2}\/\d{1,4}(?:(?::\d{1,2}){3})?\b/,
            alias: "number"
          },
          number: /\b\d+(?:\.\d+)?\b/,
          boolean: /\b(?:f|false|t|true)\b/i,
          operator: /[<>=]=?|[-+*/%|]/,
          punctuation: /[()[\],]/
        };
      }
      (e.exports = a), (a.displayName = "splunkSpl"), (a.aliases = []);
    },
    DxsT: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = (e.languages.javadoclike = {
            parameter: {
              pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
              lookbehind: !0
            },
            keyword: {
              pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
              lookbehind: !0
            },
            punctuation: /[{}]/
          });
          Object.defineProperty(t, "addSupport", {
            value: function(t, n) {
              "string" === typeof t && (t = [t]),
                t.forEach(function(t) {
                  !(function(t, n) {
                    var a = e.languages[t];
                    if (a) {
                      var o = a["doc-comment"];
                      if (!o) {
                        var r = {
                          "doc-comment": {
                            pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                            alias: "comment"
                          }
                        };
                        o = (a = e.languages.insertBefore(t, "comment", r))[
                          "doc-comment"
                        ];
                      }
                      if (
                        (o instanceof RegExp &&
                          (o = a["doc-comment"] = { pattern: o }),
                        Array.isArray(o))
                      )
                        for (var i = 0, s = o.length; i < s; i++)
                          o[i] instanceof RegExp && (o[i] = { pattern: o[i] }),
                            n(o[i]);
                      else n(o);
                    }
                  })(t, function(e) {
                    e.inside || (e.inside = {}), (e.inside.rest = n);
                  });
                });
            }
          }),
            t.addSupport(["java", "javascript", "php"], t);
        })(e);
      }
      (e.exports = a), (a.displayName = "javadoclike"), (a.aliases = []);
    },
    E4h5: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.dart = e.languages.extend("clike", {
          string: [
            { pattern: /r?("""|''')[\s\S]*?\1/, greedy: !0 },
            { pattern: /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
          ],
          keyword: [
            /\b(?:async|sync|yield)\*/,
            /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/
          ],
          operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
        })),
          e.languages.insertBefore("dart", "function", {
            metadata: { pattern: /@\w+/, alias: "symbol" }
          });
      }
      (e.exports = a), (a.displayName = "dart"), (a.aliases = []);
    },
    EGRD: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.csharp = e.languages.extend("clike", {
          keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
          string: [
            { pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
            { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/, greedy: !0 }
          ],
          "class-name": [
            {
              pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
              inside: { punctuation: /\./ }
            },
            {
              pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ }
            },
            {
              pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ }
            },
            {
              pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ }
            }
          ],
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,
          operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*/%&|^!=<>]=?/,
          punctuation: /\?\.?|::|[{}[\];(),.:]/
        })),
          e.languages.insertBefore("csharp", "class-name", {
            "generic-method": {
              pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
              inside: {
                function: /^\w+/,
                "class-name": {
                  pattern: /\b[A-Z]\w*(?:\.\w+)*\b/,
                  inside: { punctuation: /\./ }
                },
                keyword: e.languages.csharp.keyword,
                punctuation: /[<>(),.:]/
              }
            },
            preprocessor: {
              pattern: /(^\s*)#.*/m,
              lookbehind: !0,
              alias: "property",
              inside: {
                directive: {
                  pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                  lookbehind: !0,
                  alias: "keyword"
                }
              }
            }
          }),
          (e.languages.dotnet = e.languages.cs = e.languages.csharp);
      }
      (e.exports = a),
        (a.displayName = "csharp"),
        (a.aliases = ["dotnet", "cs"]);
    },
    ER9t: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
              lookbehind: !0
            }
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m }
              }
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n }
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 }
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important
              }
            }
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0
              }
            });
        })(e);
      }
      (e.exports = a), (a.displayName = "sass"), (a.aliases = []);
    },
    "F+rS": function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /(?:\([^|)]+\)|\[[^\]]+\]|\{[^}]+\})+/.source,
            n = {
              css: { pattern: /\{[^}]+\}/, inside: { rest: e.languages.css } },
              "class-id": {
                pattern: /(\()[^)]+(?=\))/,
                lookbehind: !0,
                alias: "attr-value"
              },
              lang: {
                pattern: /(\[)[^\]]+(?=\])/,
                lookbehind: !0,
                alias: "attr-value"
              },
              punctuation: /[\\\/]\d+|\S/
            },
            a = (e.languages.textile = e.languages.extend("markup", {
              phrase: {
                pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
                lookbehind: !0,
                inside: {
                  "block-tag": {
                    pattern: RegExp("^[a-z]\\w*(?:" + t + "|[<>=()])*\\."),
                    inside: {
                      modifier: {
                        pattern: RegExp(
                          "(^[a-z]\\w*)(?:" + t + "|[<>=()])+(?=\\.)"
                        ),
                        lookbehind: !0,
                        inside: n
                      },
                      tag: /^[a-z]\w*/,
                      punctuation: /\.$/
                    }
                  },
                  list: {
                    pattern: RegExp("^[*#]+(?:" + t + ")?\\s+.+", "m"),
                    inside: {
                      modifier: {
                        pattern: RegExp("(^[*#]+)" + t),
                        lookbehind: !0,
                        inside: n
                      },
                      punctuation: /^[*#]+/
                    }
                  },
                  table: {
                    pattern: RegExp(
                      "^(?:(?:" +
                        t +
                        "|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:" +
                        t +
                        "|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|",
                      "m"
                    ),
                    inside: {
                      modifier: {
                        pattern: RegExp(
                          "(^|\\|(?:\\r?\\n|\\r)?)(?:" +
                            t +
                            "|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"
                        ),
                        lookbehind: !0,
                        inside: n
                      },
                      punctuation: /\||^\./
                    }
                  },
                  inline: {
                    pattern: RegExp(
                      "(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:" + t + ")?.+?\\1"
                    ),
                    inside: {
                      bold: {
                        pattern: RegExp("(^(\\*\\*?)(?:" + t + ")?).+?(?=\\2)"),
                        lookbehind: !0
                      },
                      italic: {
                        pattern: RegExp("(^(__?)(?:" + t + ")?).+?(?=\\2)"),
                        lookbehind: !0
                      },
                      cite: {
                        pattern: RegExp("(^\\?\\?(?:" + t + ")?).+?(?=\\?\\?)"),
                        lookbehind: !0,
                        alias: "string"
                      },
                      code: {
                        pattern: RegExp("(^@(?:" + t + ")?).+?(?=@)"),
                        lookbehind: !0,
                        alias: "keyword"
                      },
                      inserted: {
                        pattern: RegExp("(^\\+(?:" + t + ")?).+?(?=\\+)"),
                        lookbehind: !0
                      },
                      deleted: {
                        pattern: RegExp("(^-(?:" + t + ")?).+?(?=-)"),
                        lookbehind: !0
                      },
                      span: {
                        pattern: RegExp("(^%(?:" + t + ")?).+?(?=%)"),
                        lookbehind: !0
                      },
                      modifier: {
                        pattern: RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])" + t),
                        lookbehind: !0,
                        inside: n
                      },
                      punctuation: /[*_%?@+\-^~]+/
                    }
                  },
                  "link-ref": {
                    pattern: /^\[[^\]]+\]\S+$/m,
                    inside: {
                      string: { pattern: /(\[)[^\]]+(?=\])/, lookbehind: !0 },
                      url: { pattern: /(\])\S+$/, lookbehind: !0 },
                      punctuation: /[\[\]]/
                    }
                  },
                  link: {
                    pattern: RegExp(
                      '"(?:' + t + ')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'
                    ),
                    inside: {
                      text: {
                        pattern: RegExp('(^"(?:' + t + ')?)[^"]+(?=")'),
                        lookbehind: !0
                      },
                      modifier: {
                        pattern: RegExp('(^")' + t),
                        lookbehind: !0,
                        inside: n
                      },
                      url: { pattern: /(:).+/, lookbehind: !0 },
                      punctuation: /[":]/
                    }
                  },
                  image: {
                    pattern: RegExp(
                      "!(?:" +
                        t +
                        "|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"
                    ),
                    inside: {
                      source: {
                        pattern: RegExp(
                          "(^!(?:" +
                            t +
                            "|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"
                        ),
                        lookbehind: !0,
                        alias: "url"
                      },
                      modifier: {
                        pattern: RegExp("(^!)(?:" + t + "|[<>=()])+"),
                        lookbehind: !0,
                        inside: n
                      },
                      url: { pattern: /(:).+/, lookbehind: !0 },
                      punctuation: /[!:]/
                    }
                  },
                  footnote: {
                    pattern: /\b\[\d+\]/,
                    alias: "comment",
                    inside: { punctuation: /\[|\]/ }
                  },
                  acronym: {
                    pattern: /\b[A-Z\d]+\([^)]+\)/,
                    inside: {
                      comment: { pattern: /(\()[^)]+(?=\))/, lookbehind: !0 },
                      punctuation: /[()]/
                    }
                  },
                  mark: {
                    pattern: /\b\((?:TM|R|C)\)/,
                    alias: "comment",
                    inside: { punctuation: /[()]/ }
                  }
                }
              }
            })),
            o = a.phrase.inside,
            r = {
              inline: o.inline,
              link: o.link,
              image: o.image,
              footnote: o.footnote,
              acronym: o.acronym,
              mark: o.mark
            };
          a.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
          var i = o.inline.inside;
          (i.bold.inside = r),
            (i.italic.inside = r),
            (i.inserted.inside = r),
            (i.deleted.inside = r),
            (i.span.inside = r);
          var s = o.table.inside;
          (s.inline = r.inline),
            (s.link = r.link),
            (s.image = r.image),
            (s.footnote = r.footnote),
            (s.acronym = r.acronym),
            (s.mark = r.mark);
        })(e);
      }
      (e.exports = a), (a.displayName = "textile"), (a.aliases = []);
    },
    F2b0: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.qore = e.languages.extend("clike", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,
            lookbehind: !0
          },
          string: { pattern: /("|')(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
          variable: /\$(?!\d)\w+\b/,
          keyword: /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
          number: /\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,
          boolean: /\b(?:true|false)\b/i,
          operator: {
            pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
            lookbehind: !0
          },
          function: /\$?\b(?!\d)\w+(?=\()/
        });
      }
      (e.exports = a), (a.displayName = "qore"), (a.aliases = []);
    },
    F6fn: function(e, t, n) {
      "use strict";
      var a = n("bAF5"),
        o = n("qTn3"),
        r = n("Ut8p"),
        i = "data";
      e.exports = function(e, t) {
        var n = a(t),
          p = t,
          g = r;
        if (n in e.normal) return e.property[e.normal[n]];
        n.length > 4 &&
          n.slice(0, 4) === i &&
          s.test(t) &&
          ("-" === t.charAt(4)
            ? (p = (function(e) {
                var t = e.slice(5).replace(l, u);
                return i + t.charAt(0).toUpperCase() + t.slice(1);
              })(t))
            : (t = (function(e) {
                var t = e.slice(4);
                if (l.test(t)) return e;
                "-" !== (t = t.replace(c, d)).charAt(0) && (t = "-" + t);
                return i + t;
              })(t)),
          (g = o));
        return new g(p, t);
      };
      var s = /^data[-\w.:]+$/i,
        l = /-[a-z]/g,
        c = /[A-Z]/g;
      function d(e) {
        return "-" + e.toLowerCase();
      }
      function u(e) {
        return e.charAt(1).toUpperCase();
      }
    },
    FDVF: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.haxe = e.languages.extend("clike", {
          string: {
            pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
                lookbehind: !0,
                inside: {
                  interpolation: { pattern: /^\$\w*/, alias: "variable" }
                }
              }
            }
          },
          keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
          operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
        })),
          e.languages.insertBefore("haxe", "class-name", {
            regex: { pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/, greedy: !0 }
          }),
          e.languages.insertBefore("haxe", "keyword", {
            preprocessor: { pattern: /#\w+/, alias: "builtin" },
            metadata: { pattern: /@:?\w+/, alias: "symbol" },
            reification: { pattern: /\$(?:\w+|(?=\{))/, alias: "variable" }
          }),
          (e.languages.haxe.string.inside.interpolation.inside.rest =
            e.languages.haxe),
          delete e.languages.haxe["class-name"];
      }
      (e.exports = a), (a.displayName = "haxe"), (a.aliases = []);
    },
    FWC9: function(e, t, n) {
      "use strict";
      var a = 0;
      function o() {
        return Math.pow(2, ++a);
      }
      (t.boolean = o()),
        (t.booleanish = o()),
        (t.overloadedBoolean = o()),
        (t.number = o()),
        (t.spaceSeparated = o()),
        (t.commaSeparated = o()),
        (t.commaOrSpaceSeparated = o());
    },
    G73E: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          e.languages.puppet = {
            heredoc: [
              {
                pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
                lookbehind: !0,
                alias: "string",
                inside: { punctuation: /(?=\S).*\S(?= *$)/ }
              },
              {
                pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
                lookbehind: !0,
                greedy: !0,
                alias: "string",
                inside: { punctuation: /(?=\S).*\S(?= *$)/ }
              },
              {
                pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
                alias: "string",
                inside: {
                  punctuation: { pattern: /(\().+?(?=\))/, lookbehind: !0 }
                }
              }
            ],
            "multiline-comment": {
              pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
              lookbehind: !0,
              greedy: !0,
              alias: "comment"
            },
            regex: {
              pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                "extended-regex": {
                  pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
                  inside: { comment: /#.*/ }
                }
              }
            },
            comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
            string: {
              pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,
              greedy: !0,
              inside: {
                "double-quoted": { pattern: /^"[\s\S]*"$/, inside: {} }
              }
            },
            variable: {
              pattern: /\$(?:::)?\w+(?:::\w+)*/,
              inside: { punctuation: /::/ }
            },
            "attr-name": /(?:\w+|\*)(?=\s*=>)/,
            function: [
              { pattern: /(\.)(?!\d)\w+/, lookbehind: !0 },
              /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/
            ],
            number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
            boolean: /\b(?:true|false)\b/,
            keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
            datatype: {
              pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
              alias: "symbol"
            },
            operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
            punctuation: /[\[\]{}().,;]|:+/
          };
          var t = [
            {
              pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
              lookbehind: !0,
              inside: {
                "short-variable": {
                  pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
                  lookbehind: !0,
                  alias: "variable",
                  inside: { punctuation: /::/ }
                },
                delimiter: { pattern: /^\$/, alias: "variable" },
                rest: e.languages.puppet
              }
            },
            {
              pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
              lookbehind: !0,
              alias: "variable",
              inside: { punctuation: /::/ }
            }
          ];
          (e.languages.puppet.heredoc[0].inside.interpolation = t),
            (e.languages.puppet.string.inside[
              "double-quoted"
            ].inside.interpolation = t);
        })(e);
      }
      (e.exports = a), (a.displayName = "puppet"), (a.aliases = []);
    },
    GVPn: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#393A34",
          fontFamily:
            '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          fontSize: "0.95em",
          lineHeight: "1.2em",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "#393A34",
          fontFamily:
            '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          fontSize: "0.95em",
          lineHeight: "1.2em",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto",
          border: "1px solid #dddddd",
          backgroundColor: "white"
        },
        'pre[class*="language-"]::-moz-selection': { background: "#b3d4fc" },
        'pre[class*="language-"] ::-moz-selection': { background: "#b3d4fc" },
        'code[class*="language-"]::-moz-selection': { background: "#b3d4fc" },
        'code[class*="language-"] ::-moz-selection': { background: "#b3d4fc" },
        'pre[class*="language-"]::selection': { background: "#b3d4fc" },
        'pre[class*="language-"] ::selection': { background: "#b3d4fc" },
        'code[class*="language-"]::selection': { background: "#b3d4fc" },
        'code[class*="language-"] ::selection': { background: "#b3d4fc" },
        ':not(pre) > code[class*="language-"]': {
          padding: ".2em",
          paddingTop: "1px",
          paddingBottom: "1px",
          background: "#f8f8f8",
          border: "1px solid #dddddd"
        },
        comment: { color: "#999988", fontStyle: "italic" },
        prolog: { color: "#999988", fontStyle: "italic" },
        doctype: { color: "#999988", fontStyle: "italic" },
        cdata: { color: "#999988", fontStyle: "italic" },
        namespace: { Opacity: ".7" },
        string: { color: "#e3116c" },
        "attr-value": { color: "#e3116c" },
        punctuation: { color: "#393A34" },
        operator: { color: "#393A34" },
        entity: { color: "#36acaa" },
        url: { color: "#36acaa" },
        symbol: { color: "#36acaa" },
        number: { color: "#36acaa" },
        boolean: { color: "#36acaa" },
        variable: { color: "#36acaa" },
        constant: { color: "#36acaa" },
        property: { color: "#36acaa" },
        regex: { color: "#36acaa" },
        inserted: { color: "#36acaa" },
        atrule: { color: "#00a4db" },
        keyword: { color: "#00a4db" },
        "attr-name": { color: "#00a4db" },
        ".language-autohotkey .token.selector": { color: "#00a4db" },
        function: { color: "#9a050f", fontWeight: "bold" },
        deleted: { color: "#9a050f" },
        ".language-autohotkey .token.tag": { color: "#9a050f" },
        tag: { color: "#00009f" },
        selector: { color: "#00009f" },
        ".language-autohotkey .token.keyword": { color: "#00009f" },
        important: { fontWeight: "bold" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" }
      };
    },
    Gdkm: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.keyman = {
          comment: /\bc\s.*/i,
          function: /\[\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*(?:[TKU]_[\w?]+|".+?"|'.+?')\s*\]/i,
          string: /("|').*?\1/,
          bold: [
            /&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,
            /\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i
          ],
          keyword: /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
          atrule: /\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
          number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
          operator: /[+>\\,()]/,
          tag: /\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i
        };
      }
      (e.exports = a), (a.displayName = "keyman"), (a.aliases = []);
    },
    GwKP: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages["dns-zone-file"] = {
          comment: /;.*/,
          string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 },
          variable: [
            { pattern: /(^\$ORIGIN[ \t]+)\S+/m, lookbehind: !0 },
            { pattern: /(^|\s)@(?=\s|$)/, lookbehind: !0 }
          ],
          keyword: /^\$(?:ORIGIN|INCLUDE|TTL)(?=\s|$)/m,
          class: {
            pattern: /(^|\s)(?:IN|CH|CS|HS)(?=\s|$)/,
            lookbehind: !0,
            alias: "keyword"
          },
          type: {
            pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
            lookbehind: !0,
            alias: "keyword"
          },
          punctuation: /[()]/
        }),
          (e.languages["dns-zone"] = e.languages["dns-zone-file"]);
      }
      (e.exports = a), (a.displayName = "dnsZoneFile"), (a.aliases = []);
    },
    H0fq: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "black",
          color: "white",
          boxShadow: "-.3em 0 0 .3em black, .3em 0 0 .3em black"
        },
        'pre[class*="language-"]': {
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: ".4em .8em",
          margin: ".5em 0",
          overflow: "auto",
          background:
            'url(\'data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>\')',
          backgroundSize: "1em 1em"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".2em",
          borderRadius: ".3em",
          boxShadow: "none",
          whiteSpace: "normal"
        },
        comment: { color: "#aaa" },
        prolog: { color: "#aaa" },
        doctype: { color: "#aaa" },
        cdata: { color: "#aaa" },
        punctuation: { color: "#999" },
        ".namespace": { Opacity: ".7" },
        property: { color: "#0cf" },
        tag: { color: "#0cf" },
        boolean: { color: "#0cf" },
        number: { color: "#0cf" },
        constant: { color: "#0cf" },
        symbol: { color: "#0cf" },
        selector: { color: "yellow" },
        "attr-name": { color: "yellow" },
        string: { color: "yellow" },
        char: { color: "yellow" },
        builtin: { color: "yellow" },
        operator: { color: "yellowgreen" },
        entity: { color: "yellowgreen", cursor: "help" },
        url: { color: "yellowgreen" },
        ".language-css .token.string": { color: "yellowgreen" },
        ".toke.variable": { color: "yellowgreen" },
        inserted: { color: "yellowgreen" },
        atrule: { color: "deeppink" },
        "attr-value": { color: "deeppink" },
        keyword: { color: "deeppink" },
        regex: { color: "orange" },
        important: { color: "orange", fontWeight: "bold" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" },
        deleted: { color: "red" }
      };
    },
    H4ZV: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.javascript = e.languages.extend("clike", {
          "class-name": [
            e.languages.clike["class-name"],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
              lookbehind: !0
            }
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0
            }
          ],
          number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
        })),
          (e.languages.javascript[
            "class-name"
          ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
          e.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
              lookbehind: !0,
              greedy: !0
            },
            "function-variable": {
              pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
              alias: "function"
            },
            parameter: [
              {
                pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                lookbehind: !0,
                inside: e.languages.javascript
              },
              {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                inside: e.languages.javascript
              },
              {
                pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: e.languages.javascript
              },
              {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: e.languages.javascript
              }
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
          }),
          e.languages.insertBefore("javascript", "string", {
            "template-string": {
              pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\${|}$/,
                      alias: "punctuation"
                    },
                    rest: e.languages.javascript
                  }
                },
                string: /[\s\S]+/
              }
            }
          }),
          e.languages.markup &&
            e.languages.markup.tag.addInlined("script", "javascript"),
          (e.languages.js = e.languages.javascript);
      }
      (e.exports = a), (a.displayName = "javascript"), (a.aliases = ["js"]);
    },
    HHXC: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access"
              ]
            }
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"]
              }
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: "class-name"
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }
              ]
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module"
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" }
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                lookbehind: !0
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0
              },
              dom: {
                pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: "variable"
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" }
            });
          for (
            var t = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access"
              ],
              n = 0;
            n < t.length;
            n++
          ) {
            var a = t[n],
              o = e.languages.javascript[a];
            "RegExp" === e.util.type(o) &&
              (o = e.languages.javascript[a] = { pattern: o });
            var r = o.inside || {};
            (o.inside = r), (r["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(e);
      }
      (e.exports = a), (a.displayName = "jsExtras"), (a.aliases = []);
    },
    HbD6: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#b9b5b8",
          fontFamily:
            '"Fira Mono", Menlo, Monaco, "Lucida Console","Courier New", Courier, monospace',
          fontSize: "16px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          wordSpacing: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          wordWrap: "break-word",
          background: "#322931"
        },
        'pre[class*="language-"]': {
          color: "#b9b5b8",
          fontFamily:
            '"Fira Mono", Menlo, Monaco, "Lucida Console","Courier New", Courier, monospace',
          fontSize: "16px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          wordSpacing: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          wordWrap: "break-word",
          background: "#322931",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#797379" },
        prolog: { color: "#797379" },
        doctype: { color: "#797379" },
        cdata: { color: "#797379" },
        punctuation: { color: "#b9b5b8" },
        ".namespace": { Opacity: ".7" },
        null: { color: "#fd8b19" },
        operator: { color: "#fd8b19" },
        boolean: { color: "#fd8b19" },
        number: { color: "#fd8b19" },
        property: { color: "#fdcc59" },
        tag: { color: "#1290bf" },
        string: { color: "#149b93" },
        selector: { color: "#c85e7c" },
        "attr-name": { color: "#fd8b19" },
        entity: { color: "#149b93", cursor: "help" },
        url: { color: "#149b93" },
        ".language-css .token.string": { color: "#149b93" },
        ".style .token.string": { color: "#149b93" },
        "attr-value": { color: "#8fc13e" },
        keyword: { color: "#8fc13e" },
        control: { color: "#8fc13e" },
        directive: { color: "#8fc13e" },
        unit: { color: "#8fc13e" },
        statement: { color: "#149b93" },
        regex: { color: "#149b93" },
        atrule: { color: "#149b93" },
        placeholder: { color: "#1290bf" },
        variable: { color: "#1290bf" },
        important: { color: "#dd464c", fontWeight: "bold" },
        "pre > code.highlight": {
          Outline: ".4em solid red",
          OutlineOffset: ".4em"
        }
      };
    },
    Hwnw: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          (e.languages.xquery = e.languages.extend("markup", {
            "xquery-comment": {
              pattern: /\(:[\s\S]*?:\)/,
              greedy: !0,
              alias: "comment"
            },
            string: { pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, greedy: !0 },
            extension: { pattern: /\(#.+?#\)/, alias: "symbol" },
            variable: /\$[\w-:]+/,
            axis: {
              pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
              lookbehind: !0,
              alias: "operator"
            },
            "keyword-operator": {
              pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
              lookbehind: !0,
              alias: "operator"
            },
            keyword: {
              pattern: /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
              lookbehind: !0
            },
            function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
            "xquery-element": {
              pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
              lookbehind: !0,
              alias: "tag"
            },
            "xquery-attribute": {
              pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
              lookbehind: !0,
              alias: "attr-name"
            },
            builtin: {
              pattern: /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
              lookbehind: !0
            },
            number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
            operator: [
              /[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,
              { pattern: /(\s)-(?=\s)/, lookbehind: !0 }
            ],
            punctuation: /[[\](){},;:/]/
          })),
            (e.languages.xquery.tag.pattern = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
            (e.languages.xquery.tag.inside[
              "attr-value"
            ].pattern = /=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i),
            (e.languages.xquery.tag.inside[
              "attr-value"
            ].inside.punctuation = /^="|"$/),
            (e.languages.xquery.tag.inside["attr-value"].inside.expression = {
              pattern: /{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/,
              inside: { rest: e.languages.xquery },
              alias: "language-xquery"
            });
          var t = function(e) {
              return "string" === typeof e
                ? e
                : "string" === typeof e.content
                ? e.content
                : e.content.map(t).join("");
            },
            n = function(a) {
              for (var o = [], r = 0; r < a.length; r++) {
                var i = a[r],
                  s = !1;
                if (
                  ("string" !== typeof i &&
                    ("tag" === i.type &&
                    i.content[0] &&
                    "tag" === i.content[0].type
                      ? "</" === i.content[0].content[0].content
                        ? o.length > 0 &&
                          o[o.length - 1].tagName ===
                            t(i.content[0].content[1]) &&
                          o.pop()
                        : "/>" === i.content[i.content.length - 1].content ||
                          o.push({
                            tagName: t(i.content[0].content[1]),
                            openedBraces: 0
                          })
                      : !(
                          o.length > 0 &&
                          "punctuation" === i.type &&
                          "{" === i.content
                        ) ||
                        (a[r + 1] &&
                          "punctuation" === a[r + 1].type &&
                          "{" === a[r + 1].content) ||
                        (a[r - 1] &&
                          "plain-text" === a[r - 1].type &&
                          "{" === a[r - 1].content)
                      ? o.length > 0 &&
                        o[o.length - 1].openedBraces > 0 &&
                        "punctuation" === i.type &&
                        "}" === i.content
                        ? o[o.length - 1].openedBraces--
                        : "comment" !== i.type && (s = !0)
                      : o[o.length - 1].openedBraces++),
                  (s || "string" === typeof i) &&
                    o.length > 0 &&
                    0 === o[o.length - 1].openedBraces)
                ) {
                  var l = t(i);
                  r < a.length - 1 &&
                    ("string" === typeof a[r + 1] ||
                      "plain-text" === a[r + 1].type) &&
                    ((l += t(a[r + 1])), a.splice(r + 1, 1)),
                    r > 0 &&
                      ("string" === typeof a[r - 1] ||
                        "plain-text" === a[r - 1].type) &&
                      ((l = t(a[r - 1]) + l), a.splice(r - 1, 1), r--),
                    /^\s+$/.test(l)
                      ? (a[r] = l)
                      : (a[r] = new e.Token("plain-text", l, null, l));
                }
                i.content && "string" !== typeof i.content && n(i.content);
              }
            };
          e.hooks.add("after-tokenize", function(e) {
            "xquery" === e.language && n(e.tokens);
          });
        })(e);
      }
      (e.exports = a), (a.displayName = "xquery"), (a.aliases = []);
    },
    IP1Z: function(e, t, n) {
      "use strict";
      var a = n("2faE"),
        o = n("rr1i");
      e.exports = function(e, t, n) {
        t in e ? a.f(e, t, o(0, n)) : (e[t] = n);
      };
    },
    J5yW: function(e, t, n) {
      "use strict";
      var a = n("1iAE"),
        o = n("ZONP");
      e.exports = function(e) {
        return a(e) || o(e);
      };
    },
    "JT+x": function(e, t, n) {
      "use strict";
      var a = n("0iGP"),
        o = n("SVLc");
      function r(e) {
        e.register(a),
          e.register(o),
          (function(e) {
            (e.languages.erb = e.languages.extend("ruby", {})),
              e.languages.insertBefore("erb", "comment", {
                delimiter: { pattern: /^<%=?|%>$/, alias: "punctuation" }
              }),
              e.hooks.add("before-tokenize", function(t) {
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "erb",
                  /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm
                );
              }),
              e.hooks.add("after-tokenize", function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "erb");
              });
          })(e);
      }
      (e.exports = r), (r.displayName = "erb"), (r.aliases = []);
    },
    JfXJ: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.properties = {
          comment: /^[ \t]*[#!].*$/m,
          "attr-value": {
            pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
            lookbehind: !0
          },
          "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m,
          punctuation: /[=:]/
        };
      }
      (e.exports = a), (a.displayName = "properties"), (a.aliases = []);
    },
    JidM: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.elm = {
          comment: /--.*|{-[\s\S]*?-}/,
          char: {
            pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
            greedy: !0
          },
          string: [
            { pattern: /"""[\s\S]*?"""/, greedy: !0 },
            {
              pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
              greedy: !0
            }
          ],
          import_statement: {
            pattern: /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+([A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
            inside: { keyword: /\b(?:import|as|exposing)\b/ }
          },
          keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
          builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
          number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
          operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
          hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
          constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
          punctuation: /[{}[\]|(),.:]/
        };
      }
      (e.exports = a), (a.displayName = "elm"), (a.aliases = []);
    },
    K5tb: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.nix = {
          comment: /\/\*[\s\S]*?\*\/|#.*/,
          string: {
            pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
                lookbehind: !0,
                inside: {
                  antiquotation: { pattern: /^\$(?=\{)/, alias: "variable" }
                }
              }
            }
          },
          url: [
            /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
            {
              pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
              lookbehind: !0
            }
          ],
          antiquotation: { pattern: /\$(?=\{)/, alias: "variable" },
          number: /\b\d+\b/,
          keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
          function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
          boolean: /\b(?:true|false)\b/,
          operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
          punctuation: /[{}()[\].,:;]/
        }),
          (e.languages.nix.string.inside.interpolation.inside.rest =
            e.languages.nix);
      }
      (e.exports = a), (a.displayName = "nix"), (a.aliases = []);
    },
    KSyo: function(e, t, n) {
      "use strict";
      e.exports = n("bFEn");
    },
    LMH6: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.tap = {
          fail: /not ok[^#{\n\r]*/,
          pass: /ok[^#{\n\r]*/,
          pragma: /pragma [+-][a-z]+/,
          bailout: /bail out!.*/i,
          version: /TAP version \d+/i,
          plan: /\d+\.\.\d+(?: +#.*)?/,
          subtest: { pattern: /# Subtest(?:: .*)?/, greedy: !0 },
          punctuation: /[{}]/,
          directive: /#.*/,
          yamlish: {
            pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
            lookbehind: !0,
            inside: e.languages.yaml,
            alias: "language-yaml"
          }
        };
      }
      (e.exports = a), (a.displayName = "tap"), (a.aliases = []);
    },
    LbkK: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.q = {
          string: /"(?:\\.|[^"\\\r\n])*"/,
          comment: [
            { pattern: /([\t )\]}])\/.*/, lookbehind: !0, greedy: !0 },
            {
              pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
              lookbehind: !0,
              greedy: !0
            },
            { pattern: /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m, greedy: !0 },
            { pattern: /^#!.+/m, greedy: !0 }
          ],
          symbol: /`(?::\S+|[\w.]*)/,
          datetime: {
            pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
            alias: "number"
          },
          number: /\b(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,
          keyword: /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
          adverb: { pattern: /['\/\\]:?|\beach\b/, alias: "function" },
          verb: {
            pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?_~=|$&#@^]):?/,
            alias: "operator"
          },
          punctuation: /[(){}\[\];.]/
        };
      }
      (e.exports = a), (a.displayName = "q"), (a.aliases = []);
    },
    LcBK: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.applescript = {
          comment: [/\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/, /--.+/, /#.+/],
          string: /"(?:\\.|[^"\\\r\n])*"/,
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i,
          operator: [
            /[&=\u2260\u2264\u2265*+\-\/\xf7^]|[<>]=?/,
            /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/
          ],
          keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
          class: {
            pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
            alias: "builtin"
          },
          punctuation: /[{}():,\xac\xab\xbb\u300a\u300b]/
        };
      }
      (e.exports = a), (a.displayName = "applescript"), (a.aliases = []);
    },
    M876: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.gcode = {
          comment: /;.*|\B\(.*?\)\B/,
          string: { pattern: /"(?:""|[^"])*"/, greedy: !0 },
          keyword: /\b[GM]\d+(?:\.\d+)?\b/,
          property: /\b[A-Z]/,
          checksum: { pattern: /\*\d+/, alias: "punctuation" },
          punctuation: /:/
        };
      }
      (e.exports = a), (a.displayName = "gcode"), (a.aliases = []);
    },
    "MU+u": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.verilog = {
          comment: /\/\/.*|\/\*[\s\S]*?\*\//,
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0
          },
          property: /\B\$\w+\b/,
          constant: /\B`\w+\b/,
          function: /\w+(?=\()/,
          keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
          important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
          number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
          operator: /[-+{}^~%*\/?=!<>&|]+/,
          punctuation: /[[\];(),.:]/
        };
      }
      (e.exports = a), (a.displayName = "verilog"), (a.aliases = []);
    },
    MVZn: function(e, t, n) {
      var a = n("lSNA");
      (e.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? Object(arguments[t]) : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function(t) {
              a(e, t, n[t]);
            });
        }
        return e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    MX0m: function(e, t, n) {
      e.exports = n("3niX");
    },
    MhsL: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.ebnf = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, greedy: !0 },
          special: {
            pattern: /\?[^?\r\n]*\?/,
            greedy: !0,
            alias: "class-name"
          },
          definition: {
            pattern: /^(\s*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
            lookbehind: !0,
            alias: ["rule", "keyword"]
          },
          rule: /[a-z]\w*(?:[ \t]+[a-z]\w*)*/i,
          punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
          operator: /[-=|*/!]/
        };
      }
      (e.exports = a), (a.displayName = "ebnf"), (a.aliases = []);
    },
    N4m7: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#c5c8c6",
          textShadow: "0 1px rgba(0, 0, 0, 0.3)",
          fontFamily:
            "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "#c5c8c6",
          textShadow: "0 1px rgba(0, 0, 0, 0.3)",
          fontFamily:
            "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto",
          borderRadius: "0.3em",
          background: "#1d1f21"
        },
        ':not(pre) > code[class*="language-"]': {
          background: "#1d1f21",
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#7C7C7C" },
        prolog: { color: "#7C7C7C" },
        doctype: { color: "#7C7C7C" },
        cdata: { color: "#7C7C7C" },
        punctuation: { color: "#c5c8c6" },
        ".namespace": { Opacity: ".7" },
        property: { color: "#96CBFE" },
        keyword: { color: "#96CBFE" },
        tag: { color: "#96CBFE" },
        "class-name": { color: "#FFFFB6", textDecoration: "underline" },
        boolean: { color: "#99CC99" },
        constant: { color: "#99CC99" },
        symbol: { color: "#f92672" },
        deleted: { color: "#f92672" },
        number: { color: "#FF73FD" },
        selector: { color: "#A8FF60" },
        "attr-name": { color: "#A8FF60" },
        string: { color: "#A8FF60" },
        char: { color: "#A8FF60" },
        builtin: { color: "#A8FF60" },
        inserted: { color: "#A8FF60" },
        variable: { color: "#C6C5FE" },
        operator: { color: "#EDEDED" },
        entity: { color: "#FFFFB6", cursor: "help" },
        url: { color: "#96CBFE" },
        ".language-css .token.string": { color: "#87C38A" },
        ".style .token.string": { color: "#87C38A" },
        atrule: { color: "#F9EE98" },
        "attr-value": { color: "#F9EE98" },
        function: { color: "#DAD085" },
        regex: { color: "#E9C062" },
        important: { color: "#fd971f", fontWeight: "bold" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" }
      };
    },
    Nmqu: function(e, t, n) {
      "use strict";
      var a = n("Qg97");
      function o(e) {
        e.register(a),
          (function(e) {
            var t = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
            e.languages.json5 = e.languages.extend("json", {
              property: [
                { pattern: RegExp(t.source + "(?=\\s*:)"), greedy: !0 },
                {
                  pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*:)/,
                  alias: "unquoted"
                }
              ],
              string: { pattern: t, greedy: !0 },
              number: /[+-]?(?:NaN|Infinity|0x[a-fA-F\d]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/
            });
          })(e);
      }
      (e.exports = o), (o.displayName = "json5"), (o.aliases = []);
    },
    "O/s9": function(e, t, n) {
      "use strict";
      var a = n("YHgv");
      function o(e) {
        e.register(a),
          (e.languages["t4-vb"] = e.languages["t4-templating"].createT4(
            "visual-basic"
          ));
      }
      (e.exports = o), (o.displayName = "t4Vb"), (o.aliases = []);
    },
    OniS: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
          function n(e, n) {
            return (
              (e = e.replace(/<inner>/g, t)),
              n && (e = e + "|" + e.replace(/_/g, "\\*")),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var a = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            o = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, a),
            r = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/
              .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + o + r + "(?:" + o + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + o + r + ")(?:" + o + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(a),
                        inside: e.languages.markdown
                      },
                      punctuation: /\|/
                    }
                  },
                  "table-line": {
                    pattern: RegExp("^(" + o + ")" + r + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ }
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + o + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(a),
                        alias: "important",
                        inside: e.languages.markdown
                      },
                      punctuation: /\|/
                    }
                  }
                }
              },
              code: [
                {
                  pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
                  lookbehind: !0,
                  alias: "keyword"
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: "keyword" },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                      lookbehind: !0
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/
                  }
                }
              ],
              title: [
                {
                  pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ }
                },
                {
                  pattern: /(^\s*)#+.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ }
                }
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation"
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation"
              },
              "url-reference": {
                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/
                },
                alias: "url"
              },
              bold: {
                pattern: n(
                  /__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source,
                  !0
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {}
                  },
                  punctuation: /\*\*|__/
                }
              },
              italic: {
                pattern: n(
                  /_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source,
                  !0
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {}
                  },
                  punctuation: /[*_]/
                }
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source, !1),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {}
                  },
                  punctuation: /~~?/
                }
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/
                    .source,
                  !1
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  content: {
                    pattern: /(^!?\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {}
                  },
                  string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ }
                }
              }
            }),
            ["url", "bold", "italic", "strike"].forEach(function(t) {
              ["url", "bold", "italic", "strike"].forEach(function(n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n]);
              });
            }),
            e.hooks.add("after-tokenize", function(e) {
              ("markdown" !== e.language && "md" !== e.language) ||
                (function e(t) {
                  if (t && "string" !== typeof t)
                    for (var n = 0, a = t.length; n < a; n++) {
                      var o = t[n];
                      if ("code" === o.type) {
                        var r = o.content[1],
                          i = o.content[3];
                        if (
                          r &&
                          i &&
                          "code-language" === r.type &&
                          "code-block" === i.type &&
                          "string" === typeof r.content
                        ) {
                          var s =
                            "language-" +
                            r.content
                              .trim()
                              .split(/\s+/)[0]
                              .toLowerCase();
                          i.alias
                            ? "string" === typeof i.alias
                              ? (i.alias = [i.alias, s])
                              : i.alias.push(s)
                            : (i.alias = [s]);
                        }
                      } else e(o.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function(t) {
              if ("code-block" === t.type) {
                for (var n = "", a = 0, o = t.classes.length; a < o; a++) {
                  var r = t.classes[a],
                    i = /language-(.+)/.exec(r);
                  if (i) {
                    n = i[1];
                    break;
                  }
                }
                var s = e.languages[n];
                if (s) {
                  var l = t.content.value
                    .replace(/&lt;/g, "<")
                    .replace(/&amp;/g, "&");
                  t.content = e.highlight(l, s, n);
                } else if (n && "none" !== n && e.plugins.autoloader) {
                  var c =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = c),
                    e.plugins.autoloader.loadLanguages(n, function() {
                      var t = document.getElementById(c);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(e);
      }
      (e.exports = a), (a.displayName = "markdown"), (a.aliases = ["md"]);
    },
    Ox1z: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.markup = {
          comment: /<!--[\s\S]*?-->/,
          prolog: /<\?[\s\S]+?\?>/,
          doctype: /<!DOCTYPE[\s\S]+?>/i,
          cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
          tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
              },
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: {
                  punctuation: [
                    /^=/,
                    { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }
                  ]
                }
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ }
              }
            }
          },
          entity: /&#?[\da-z]{1,8};/i
        }),
          (e.languages.markup.tag.inside["attr-value"].inside.entity =
            e.languages.markup.entity),
          e.hooks.add("wrap", function(e) {
            "entity" === e.type &&
              (e.attributes.title = e.content.value.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(e.languages.markup.tag, "addInlined", {
            value: function(t, n) {
              var a = {};
              (a["language-" + n] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: e.languages[n]
              }),
                (a.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var o = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: a
                }
              };
              o["language-" + n] = {
                pattern: /[\s\S]+/,
                inside: e.languages[n]
              };
              var r = {};
              (r[t] = {
                pattern: RegExp(
                  /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    t
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: o
              }),
                e.languages.insertBefore("markup", "cdata", r);
            }
          }),
          (e.languages.xml = e.languages.extend("markup", {})),
          (e.languages.html = e.languages.markup),
          (e.languages.mathml = e.languages.markup),
          (e.languages.svg = e.languages.markup);
      }
      (e.exports = a),
        (a.displayName = "markup"),
        (a.aliases = ["xml", "html", "mathml", "svg"]);
    },
    P1pa: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.vala = e.languages.extend("clike", {
          "class-name": [
            {
              pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w+)/,
              inside: { punctuation: /\./ }
            },
            {
              pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ }
            },
            {
              pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ }
            },
            {
              pattern: /((?:\b(?:class|interface|new|struct|enum)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ }
            }
          ],
          constant: /\b[A-Z0-9_]+\b/,
          function: /\w+(?=\s*\()/,
          keyword: /\b(?:bool|char|double|float|null|size_t|ssize_t|string|unichar|void|int|int8|int16|int32|int64|long|short|uchar|uint|uint8|uint16|uint32|uint64|ulong|ushort|class|delegate|enum|errordomain|interface|namespace|struct|break|continue|do|for|foreach|return|while|else|if|switch|assert|case|default|abstract|const|dynamic|ensures|extern|inline|internal|override|private|protected|public|requires|signal|static|virtual|volatile|weak|async|owned|unowned|try|catch|finally|throw|as|base|construct|delete|get|in|is|lock|new|out|params|ref|sizeof|set|this|throws|typeof|using|value|var|yield)\b/i,
          number: /(?:\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,
          operator: /\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,
          punctuation: /[{}[\];(),.:]/
        })),
          e.languages.insertBefore("vala", "string", {
            "raw-string": {
              pattern: /"""[\s\S]*?"""/,
              greedy: !0,
              alias: "string"
            },
            "template-string": {
              pattern: /@"[\s\S]*?"/,
              greedy: !0,
              inside: {
                interpolation: {
                  pattern: /\$(?:\([^)]*\)|[a-zA-Z]\w*)/,
                  inside: {
                    delimiter: { pattern: /^\$\(?|\)$/, alias: "punctuation" },
                    rest: e.languages.vala
                  }
                },
                string: /[\s\S]+/
              }
            }
          }),
          e.languages.insertBefore("vala", "keyword", {
            regex: {
              pattern: /\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*($|[\r\n,.;})\]]))/,
              greedy: !0
            }
          });
      }
      (e.exports = a), (a.displayName = "vala"), (a.aliases = []);
    },
    PCRY: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "white",
          background: "none",
          textShadow: "0 -.1em .2em black",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "white",
          background: "hsl(30, 20%, 25%)",
          textShadow: "0 -.1em .2em black",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto",
          border: ".3em solid hsl(30, 20%, 40%)",
          borderRadius: ".5em",
          boxShadow: "1px 1px .5em black inset"
        },
        ':not(pre) > code[class*="language-"]': {
          background: "hsl(30, 20%, 25%)",
          padding: ".15em .2em .05em",
          borderRadius: ".3em",
          border: ".13em solid hsl(30, 20%, 40%)",
          boxShadow: "1px 1px .3em -.1em black inset",
          whiteSpace: "normal"
        },
        comment: { color: "hsl(30, 20%, 50%)" },
        prolog: { color: "hsl(30, 20%, 50%)" },
        doctype: { color: "hsl(30, 20%, 50%)" },
        cdata: { color: "hsl(30, 20%, 50%)" },
        punctuation: { Opacity: ".7" },
        ".namespace": { Opacity: ".7" },
        property: { color: "hsl(350, 40%, 70%)" },
        tag: { color: "hsl(350, 40%, 70%)" },
        boolean: { color: "hsl(350, 40%, 70%)" },
        number: { color: "hsl(350, 40%, 70%)" },
        constant: { color: "hsl(350, 40%, 70%)" },
        symbol: { color: "hsl(350, 40%, 70%)" },
        selector: { color: "hsl(75, 70%, 60%)" },
        "attr-name": { color: "hsl(75, 70%, 60%)" },
        string: { color: "hsl(75, 70%, 60%)" },
        char: { color: "hsl(75, 70%, 60%)" },
        builtin: { color: "hsl(75, 70%, 60%)" },
        inserted: { color: "hsl(75, 70%, 60%)" },
        operator: { color: "hsl(40, 90%, 60%)" },
        entity: { color: "hsl(40, 90%, 60%)", cursor: "help" },
        url: { color: "hsl(40, 90%, 60%)" },
        ".language-css .token.string": { color: "hsl(40, 90%, 60%)" },
        ".style .token.string": { color: "hsl(40, 90%, 60%)" },
        variable: { color: "hsl(40, 90%, 60%)" },
        atrule: { color: "hsl(350, 40%, 70%)" },
        "attr-value": { color: "hsl(350, 40%, 70%)" },
        keyword: { color: "hsl(350, 40%, 70%)" },
        regex: { color: "#e90" },
        important: { color: "#e90", fontWeight: "bold" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" },
        deleted: { color: "red" }
      };
    },
    PQJW: function(e, t, n) {
      var a = n("d04V"),
        o = n("yLu3");
      e.exports = function(e) {
        if (
          o(Object(e)) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return a(e);
      };
    },
    Q4s5: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.fortran = {
          "quoted-number": {
            pattern: /[BOZ](['"])[A-F0-9]+\1/i,
            alias: "number"
          },
          string: {
            pattern: /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/,
            inside: {
              comment: { pattern: /(&(?:\r\n?|\n)\s*)!.*/, lookbehind: !0 }
            }
          },
          comment: { pattern: /!.*/, greedy: !0 },
          boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
          number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
          keyword: [
            /\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i,
            /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,
            /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,
            /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i
          ],
          operator: [
            /\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i,
            { pattern: /(^|(?!\().)\/(?!\))/, lookbehind: !0 }
          ],
          punctuation: /\(\/|\/\)|[(),;:&]/
        };
      }
      (e.exports = a), (a.displayName = "fortran"), (a.aliases = []);
    },
    QILm: function(e, t, n) {
      var a = n("8OQS");
      (e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = a(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    QchW: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          for (
            var t = /\((?:[^();"#\\]|\\[\s\S]|;.*|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/
                .source,
              n = 0;
            n < 5;
            n++
          )
            t = t.replace(/<expr>/g, t);
          t = t.replace(/<expr>/g, /[^\s\S]/.source);
          var a = (e.languages.lilypond = {
            comment: /%(?:(?!\{).*|\{[\s\S]*?%\})/,
            "embedded-scheme": {
              pattern: RegExp(
                /(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(
                  /<expr>/g,
                  t
                ),
                "m"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                scheme: {
                  pattern: /^(#)[\s\S]+$/,
                  lookbehind: !0,
                  alias: "language-scheme",
                  inside: {
                    "embedded-lilypond": {
                      pattern: /#\{[\s\S]*?#\}/,
                      greedy: !0,
                      inside: {
                        punctuation: /^#\{|#\}$/,
                        lilypond: {
                          pattern: /[\s\S]+/,
                          alias: "language-lilypond",
                          inside: null
                        }
                      }
                    },
                    rest: e.languages.scheme
                  }
                },
                punctuation: /#/
              }
            },
            string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: !0 },
            "class-name": { pattern: /(\\new\s+)[\w-]+/, lookbehind: !0 },
            keyword: {
              pattern: /\\[a-z][-\w]*/i,
              inside: { punctuation: /^\\/ }
            },
            operator: /[=|]|<<|>>/,
            punctuation: {
              pattern: /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,
              lookbehind: !0
            },
            number: /\b\d+(?:\/\d+)?\b/
          });
          (a["embedded-scheme"].inside.scheme.inside[
            "embedded-lilypond"
          ].inside.lilypond.inside = a),
            (e.languages.ly = a);
        })(e);
      }
      (e.exports = a), (a.displayName = "lilypond"), (a.aliases = []);
    },
    Qg97: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" }
        };
      }
      (e.exports = a), (a.displayName = "json"), (a.aliases = []);
    },
    QovY: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.javastacktrace = {
          summary: {
            pattern: /^[\t ]*(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?:\:.*)?$/m,
            inside: {
              keyword: {
                pattern: /^(\s*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
                lookbehind: !0
              },
              string: { pattern: /^(\s*)"[^"]*"/, lookbehind: !0 },
              exceptions: {
                pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
                lookbehind: !0,
                inside: {
                  "class-name": /[\w$]+(?=$|:)/,
                  namespace: /[a-z]\w*/,
                  punctuation: /[.:]/
                }
              },
              message: {
                pattern: /(:\s*)\S.*/,
                lookbehind: !0,
                alias: "string"
              },
              punctuation: /[:]/
            }
          },
          "stack-frame": {
            pattern: /^[\t ]*at [\w$.]+(?:<init>)?\([^()]*\)/m,
            inside: {
              keyword: { pattern: /^(\s*)at/, lookbehind: !0 },
              source: [
                {
                  pattern: /(\()\w+.\w+:\d+(?=\))/,
                  lookbehind: !0,
                  inside: {
                    file: /^\w+\.\w+/,
                    punctuation: /:/,
                    "line-number": { pattern: /\d+/, alias: "number" }
                  }
                },
                {
                  pattern: /(\()[^()]*(?=\))/,
                  lookbehind: !0,
                  inside: { keyword: /^(?:Unknown Source|Native Method)$/ }
                }
              ],
              "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
              function: /(?:<init>|[\w$]+)(?=\()/,
              namespace: /[a-z]\w*/,
              punctuation: /[.()]/
            }
          },
          more: {
            pattern: /^[\t ]*\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
            inside: {
              punctuation: /\.{3}/,
              number: /\d+/,
              keyword: /\b[a-z]+(?: [a-z]+)*\b/
            }
          }
        };
      }
      (e.exports = a), (a.displayName = "javastacktrace"), (a.aliases = []);
    },
    R4va: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.perl = {
          comment: [
            { pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m, lookbehind: !0 },
            { pattern: /(^|[^\\$])#.*/, lookbehind: !0 }
          ],
          string: [
            {
              pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
              greedy: !0
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
              greedy: !0
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
              greedy: !0
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
              greedy: !0
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
              greedy: !0
            },
            {
              pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
              greedy: !0
            },
            { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
            { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 }
          ],
          regex: [
            {
              pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
              greedy: !0
            },
            {
              pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
              greedy: !0
            },
            {
              pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
              greedy: !0
            },
            {
              pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
              greedy: !0
            },
            {
              pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
              greedy: !0
            },
            {
              pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
              greedy: !0
            }
          ],
          variable: [
            /[&*$@%]\{\^[A-Z]+\}/,
            /[&*$@%]\^[A-Z_]/,
            /[&*$@%]#?(?=\{)/,
            /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i,
            /[&*$@%]\d+/,
            /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
          ],
          filehandle: { pattern: /<(?![<=])\S*>|\b_\b/, alias: "symbol" },
          vstring: {
            pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
            alias: "string"
          },
          function: { pattern: /sub [a-z0-9_]+/i, inside: { keyword: /sub/ } },
          keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
          number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
          operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
          punctuation: /[{}[\];(),:]/
        };
      }
      (e.exports = a), (a.displayName = "perl"), (a.aliases = []);
    },
    "RRc/": function(e, t, n) {
      var a = n("oioR");
      e.exports = function(e, t) {
        var n = [];
        return a(e, !1, n.push, n, t), n;
      };
    },
    RU3K: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            a = t.inside.interpolation,
            o = a.inside["interpolation-punctuation"],
            r = a.pattern.source;
          function i(t, a) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + a + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t }
                }
              };
          }
          function s(e, t) {
            return "___" + t.toUpperCase() + "_" + e + "___";
          }
          function l(t, n, a) {
            var o = { code: t, grammar: n, language: a };
            return (
              e.hooks.run("before-tokenize", o),
              (o.tokens = e.tokenize(o.code, o.grammar)),
              e.hooks.run("after-tokenize", o),
              o.tokens
            );
          }
          function c(t) {
            var n = {};
            n["interpolation-punctuation"] = o;
            var r = e.tokenize(t, n);
            if (3 === r.length) {
              var i = [1, 1];
              i.push.apply(i, l(r[1], e.languages.javascript, "javascript")),
                r.splice.apply(r, i);
            }
            return new e.Token("interpolation", r, a.alias, t);
          }
          function d(t, n, a) {
            var o = e.tokenize(t, {
                interpolation: { pattern: RegExp(r), lookbehind: !0 }
              }),
              i = 0,
              d = {},
              u = l(
                o
                  .map(function(e) {
                    if ("string" === typeof e) return e;
                    for (
                      var n, o = e.content;
                      -1 !== t.indexOf((n = s(i++, a)));

                    );
                    return (d[n] = o), n;
                  })
                  .join(""),
                n,
                a
              ),
              p = Object.keys(d);
            return (
              (i = 0),
              (function e(t) {
                for (var n = 0; n < t.length; n++) {
                  if (i >= p.length) return;
                  var a = t[n];
                  if ("string" === typeof a || "string" === typeof a.content) {
                    var o = p[i],
                      r = "string" === typeof a ? a : a.content,
                      s = r.indexOf(o);
                    if (-1 !== s) {
                      ++i;
                      var l = r.substring(0, s),
                        u = c(d[o]),
                        g = r.substring(s + o.length),
                        m = [];
                      if ((l && m.push(l), m.push(u), g)) {
                        var f = [g];
                        e(f), m.push.apply(m, f);
                      }
                      "string" === typeof a
                        ? (t.splice.apply(t, [n, 1].concat(m)),
                          (n += m.length - 1))
                        : (a.content = m);
                    }
                  } else {
                    var b = a.content;
                    Array.isArray(b) ? e(b) : e([b]);
                  }
                }
              })(u),
              new e.Token(a, u, "language-" + a, t)
            );
          }
          e.languages.javascript["template-string"] = [
            i(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i("svg", /\bsvg/.source),
            i("markdown", /\b(?:md|markdown)/.source),
            i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            t
          ].filter(Boolean);
          var u = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0
          };
          function p(e) {
            return "string" === typeof e
              ? e
              : Array.isArray(e)
              ? e.map(p).join("")
              : p(e.content);
          }
          e.hooks.add("after-tokenize", function(t) {
            t.language in u &&
              (function t(n) {
                for (var a = 0, o = n.length; a < o; a++) {
                  var r = n[a];
                  if ("string" !== typeof r) {
                    var i = r.content;
                    if (Array.isArray(i))
                      if ("template-string" === r.type) {
                        var s = i[1];
                        if (
                          3 === i.length &&
                          "string" !== typeof s &&
                          "embedded-code" === s.type
                        ) {
                          var l = p(s),
                            c = s.alias,
                            u = Array.isArray(c) ? c[0] : c,
                            g = e.languages[u];
                          if (!g) continue;
                          i[1] = d(l, g, u);
                        }
                      } else t(i);
                    else "string" !== typeof i && t([i]);
                  }
                }
              })(t.tokens);
          });
        })(e);
      }
      (e.exports = a), (a.displayName = "jsTemplates"), (a.aliases = []);
    },
    RXC2: function(e, t, n) {
      "use strict";
      var a = n("FWC9"),
        o = n("DUvi"),
        r = n("y3WP"),
        i = a.boolean,
        s = a.overloadedBoolean,
        l = a.booleanish,
        c = a.number,
        d = a.spaceSeparated,
        u = a.commaSeparated;
      e.exports = o({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv"
        },
        transform: r,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: u,
          acceptCharset: d,
          accessKey: d,
          action: null,
          allow: null,
          allowFullScreen: i,
          allowPaymentRequest: i,
          allowUserMedia: i,
          alt: null,
          as: null,
          async: i,
          autoCapitalize: null,
          autoComplete: d,
          autoFocus: i,
          autoPlay: i,
          capture: i,
          charSet: null,
          checked: i,
          cite: null,
          className: d,
          cols: c,
          colSpan: null,
          content: null,
          contentEditable: l,
          controls: i,
          controlsList: d,
          coords: c | u,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: i,
          defer: i,
          dir: null,
          dirName: null,
          disabled: i,
          download: s,
          draggable: l,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: i,
          formTarget: null,
          headers: d,
          height: c,
          hidden: i,
          high: c,
          href: null,
          hrefLang: null,
          htmlFor: d,
          httpEquiv: d,
          id: null,
          imageSizes: null,
          imageSrcSet: u,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: i,
          itemId: null,
          itemProp: d,
          itemRef: d,
          itemScope: i,
          itemType: d,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: i,
          low: c,
          manifest: null,
          max: null,
          maxLength: c,
          media: null,
          method: null,
          min: null,
          minLength: c,
          multiple: i,
          muted: i,
          name: null,
          nonce: null,
          noModule: i,
          noValidate: i,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: i,
          optimum: c,
          pattern: null,
          ping: d,
          placeholder: null,
          playsInline: i,
          poster: null,
          preload: null,
          readOnly: i,
          referrerPolicy: null,
          rel: d,
          required: i,
          reversed: i,
          rows: c,
          rowSpan: c,
          sandbox: d,
          scope: null,
          scoped: i,
          seamless: i,
          selected: i,
          shape: null,
          size: c,
          sizes: null,
          slot: null,
          span: c,
          spellCheck: l,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: u,
          start: c,
          step: null,
          style: null,
          tabIndex: c,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: i,
          useMap: null,
          value: l,
          width: c,
          wrap: null,
          align: null,
          aLink: null,
          archive: d,
          axis: null,
          background: null,
          bgColor: null,
          border: c,
          borderColor: null,
          bottomMargin: c,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: i,
          declare: i,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: c,
          leftMargin: c,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: c,
          marginWidth: c,
          noResize: i,
          noHref: i,
          noShade: i,
          noWrap: i,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: c,
          rules: null,
          scheme: null,
          scrolling: l,
          standby: null,
          summary: null,
          text: null,
          topMargin: c,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: c,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: i,
          disableRemotePlayback: i,
          prefix: null,
          property: null,
          results: c,
          security: null,
          unselectable: null
        }
      });
    },
    RcLD: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.processing = e.languages.extend("clike", {
          keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
          operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
        })),
          e.languages.insertBefore("processing", "number", {
            constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
            type: {
              pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
              alias: "variable"
            }
          }),
          (e.languages.processing.function.pattern = /\w+(?=\s*\()/),
          (e.languages.processing["class-name"].alias = "variable");
      }
      (e.exports = a), (a.displayName = "processing"), (a.aliases = []);
    },
    RoP8: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/
                    ],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/
                  }
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ }
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant"
                    }
                  }
                },
                /\$(?:\w+|[#?*!@$])/
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
            };
          e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function"
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function" }
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant"
                }
              },
              alias: "variable",
              lookbehind: !0
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: n
              },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0
              },
              {
                pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                greedy: !0,
                inside: n
              }
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: n.variable,
            function: {
              pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0
            },
            keyword: {
              pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0
            },
            builtin: {
              pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name"
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
              lookbehind: !0
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" }
              }
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0
            }
          };
          for (
            var a = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number"
              ],
              o = n.variable[1].inside,
              r = 0;
            r < a.length;
            r++
          )
            o[a[r]] = e.languages.bash[a[r]];
          e.languages.shell = e.languages.bash;
        })(e);
      }
      (e.exports = a), (a.displayName = "bash"), (a.aliases = ["shell"]);
    },
    SNVr: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages["visual-basic"] = {
          comment: {
            pattern: /(?:['\u2018\u2019]|REM\b).*/i,
            inside: { keyword: /^REM/i }
          },
          directive: {
            pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
            alias: "comment",
            greedy: !0
          },
          string: {
            pattern: /\$?["\u201c\u201d](?:["\u201c\u201d]{2}|[^"\u201c\u201d])*["\u201c\u201d]C?/i,
            greedy: !0
          },
          date: {
            pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))[^\S\r\n]*#/i,
            alias: "builtin"
          },
          number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
          boolean: /\b(?:True|False|Nothing)\b/i,
          keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
          operator: [
            /[+\-*/\\^<=>&#@$%!]/,
            { pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/, lookbehind: !0 }
          ],
          punctuation: /[{}().,:?]/
        }),
          (e.languages.vb = e.languages["visual-basic"]);
      }
      (e.exports = a), (a.displayName = "visualBasic"), (a.aliases = []);
    },
    SVLc: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          e.languages.ruby = e.languages.extend("clike", {
            comment: [
              /#.*/,
              { pattern: /^=begin\s[\s\S]*?^=end/m, greedy: !0 }
            ],
            keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
          });
          var t = {
            pattern: /#\{[^}]+\}/,
            inside: {
              delimiter: { pattern: /^#\{|\}$/, alias: "tag" },
              rest: e.languages.ruby
            }
          };
          delete e.languages.ruby.function,
            e.languages.insertBefore("ruby", "keyword", {
              regex: [
                {
                  pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t }
                },
                {
                  pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t }
                },
                {
                  pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t }
                },
                {
                  pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t }
                },
                {
                  pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
                  greedy: !0,
                  inside: { interpolation: t }
                },
                {
                  pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
                  lookbehind: !0,
                  greedy: !0
                }
              ],
              variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
              symbol: {
                pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
                lookbehind: !0
              },
              "method-definition": {
                pattern: /(\bdef\s+)[\w.]+/,
                lookbehind: !0,
                inside: { function: /\w+$/, rest: e.languages.ruby }
              }
            }),
            e.languages.insertBefore("ruby", "number", {
              builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
              constant: /\b[A-Z]\w*(?:[?!]|\b)/
            }),
            (e.languages.ruby.string = [
              {
                pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                greedy: !0,
                inside: { interpolation: t }
              },
              {
                pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
                greedy: !0,
                inside: { interpolation: t }
              },
              {
                pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
                greedy: !0,
                inside: { interpolation: t }
              },
              {
                pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
                greedy: !0,
                inside: { interpolation: t }
              },
              {
                pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
                greedy: !0,
                inside: { interpolation: t }
              },
              {
                pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
                inside: { interpolation: t }
              }
            ]),
            (e.languages.rb = e.languages.ruby);
        })(e);
      }
      (e.exports = a), (a.displayName = "ruby"), (a.aliases = ["rb"]);
    },
    SevZ: function(e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.default = void 0);
      var a = r(n("9kyW")),
        o = r(n("bVZc"));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = (function() {
        function e(e) {
          var t = void 0 === e ? {} : e,
            n = t.styleSheet,
            a = void 0 === n ? null : n,
            r = t.optimizeForSpeed,
            i = void 0 !== r && r,
            s = t.isBrowser,
            l = void 0 === s ? "undefined" !== typeof window : s;
          (this._sheet =
            a || new o.default({ name: "styled-jsx", optimizeForSpeed: i })),
            this._sheet.inject(),
            a &&
              "boolean" === typeof i &&
              (this._sheet.setOptimizeForSpeed(i),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = l),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector());
        }
        var t = e.prototype;
        return (
          (t.add = function(e) {
            var t = this;
            void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function(e, t) {
                    return (e[t] = 0), e;
                  },
                  {}
                )));
            var n = this.getIdAndRules(e),
              a = n.styleId,
              o = n.rules;
            if (a in this._instancesCounts) this._instancesCounts[a] += 1;
            else {
              var r = o
                .map(function(e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function(e) {
                  return -1 !== e;
                });
              (this._indices[a] = r), (this._instancesCounts[a] = 1);
            }
          }),
          (t.remove = function(e) {
            var t = this,
              n = this.getIdAndRules(e).styleId;
            if (
              ((function(e, t) {
                if (!e) throw new Error("StyleSheetRegistry: " + t + ".");
              })(n in this._instancesCounts, "styleId: `" + n + "` not found"),
              (this._instancesCounts[n] -= 1),
              this._instancesCounts[n] < 1)
            ) {
              var a = this._fromServer && this._fromServer[n];
              a
                ? (a.parentNode.removeChild(a), delete this._fromServer[n])
                : (this._indices[n].forEach(function(e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[n]),
                delete this._instancesCounts[n];
            }
          }),
          (t.update = function(e, t) {
            this.add(t), this.remove(e);
          }),
          (t.flush = function() {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector());
          }),
          (t.cssRules = function() {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function(t) {
                    return [t, e._fromServer[t]];
                  })
                : [],
              n = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function(t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function(e) {
                        return n[e].cssText;
                      })
                      .join(e._optimizeForSpeed ? "" : "\n")
                  ];
                })
                .filter(function(e) {
                  return Boolean(e[1]);
                })
            );
          }),
          (t.createComputeId = function() {
            var e = {};
            return function(t, n) {
              if (!n) return "jsx-" + t;
              var o = String(n),
                r = t + o;
              return (
                e[r] || (e[r] = "jsx-" + (0, a.default)(t + "-" + o)), e[r]
              );
            };
          }),
          (t.createComputeSelector = function(e) {
            void 0 === e && (e = /__jsx-style-dynamic-selector/g);
            var t = {};
            return function(n, a) {
              this._isBrowser || (a = a.replace(/\/style/gi, "\\/style"));
              var o = n + a;
              return t[o] || (t[o] = a.replace(e, n)), t[o];
            };
          }),
          (t.getIdAndRules = function(e) {
            var t = this,
              n = e.children,
              a = e.dynamic,
              o = e.id;
            if (a) {
              var r = this.computeId(o, a);
              return {
                styleId: r,
                rules: Array.isArray(n)
                  ? n.map(function(e) {
                      return t.computeSelector(r, e);
                    })
                  : [this.computeSelector(r, n)]
              };
            }
            return {
              styleId: this.computeId(o),
              rules: Array.isArray(n) ? n : [n]
            };
          }),
          (t.selectFromServer = function() {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function(e, t) {
                return (e[t.id.slice(2)] = t), e;
              }, {});
          }),
          e
        );
      })();
      t.default = i;
    },
    Skso: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.ichigojam = {
          comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
          string: {
            pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
            greedy: !0
          },
          number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
          keyword: /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
          function: /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
          label: /(?:\B@[^\s]+)/i,
          operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
          punctuation: /[\[,;:()\]]/
        };
      }
      (e.exports = a), (a.displayName = "ichigojam"), (a.aliases = []);
    },
    SlDd: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.monkey = {
          string: /"[^"\r\n]*"/,
          comment: [
            { pattern: /^#Rem\s+[\s\S]*?^#End/im, greedy: !0 },
            { pattern: /'.+/, greedy: !0 }
          ],
          preprocessor: {
            pattern: /(^[ \t]*)#.+/m,
            lookbehind: !0,
            alias: "comment"
          },
          function: /\w+(?=\()/,
          "type-char": {
            pattern: /(\w)[?%#$]/,
            lookbehind: !0,
            alias: "variable"
          },
          number: {
            pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
            lookbehind: !0
          },
          keyword: /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
          operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
          punctuation: /[.,:;()\[\]]/
        };
      }
      (e.exports = a), (a.displayName = "monkey"), (a.aliases = []);
    },
    SvWi: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.hcl = {
          comment: /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
          heredoc: {
            pattern: /<<-?(\w+)[\s\S]*?^\s*\1/m,
            greedy: !0,
            alias: "string"
          },
          keyword: [
            {
              pattern: /(?:resource|data)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+{)/i,
              inside: {
                type: {
                  pattern: /(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,
                  lookbehind: !0,
                  alias: "variable"
                }
              }
            },
            {
              pattern: /(?:provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?={)/i,
              inside: {
                type: {
                  pattern: /(provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,
                  lookbehind: !0,
                  alias: "variable"
                }
              }
            },
            { pattern: /[\w-]+(?=\s+{)/ }
          ],
          property: [
            /[\w-\.]+(?=\s*=(?!=))/,
            /"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/
          ],
          string: {
            pattern: /"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,
                lookbehind: !0,
                inside: {
                  type: {
                    pattern: /(\b(?:terraform|var|self|count|module|path|data|local)\b\.)[\w\*]+/i,
                    lookbehind: !0,
                    alias: "variable"
                  },
                  keyword: /\b(?:terraform|var|self|count|module|path|data|local)\b/i,
                  function: /\w+(?=\()/,
                  string: { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0 },
                  number: /\b0x[\da-f]+|\d+\.?\d*(?:e[+-]?\d+)?/i,
                  punctuation: /[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/
                }
              }
            }
          },
          number: /\b0x[\da-f]+|\d+\.?\d*(?:e[+-]?\d+)?/i,
          boolean: /\b(?:true|false)\b/i,
          punctuation: /[=\[\]{}]/
        };
      }
      (e.exports = a), (a.displayName = "hcl"), (a.aliases = []);
    },
    T09G: function(e, t, n) {
      "use strict";
      var a = n("1K8B"),
        o = n("WUdu");
      function r(e) {
        e.register(a), e.register(o);
        var t = e.util.clone(e.languages.typescript);
        e.languages.tsx = e.languages.extend("jsx", t);
      }
      (e.exports = r), (r.displayName = "tsx"), (r.aliases = []);
    },
    TTG4: function(e, t, n) {
      "use strict";
      (t.parse = function(e) {
        var t = String(e || a).trim();
        return t === a ? [] : t.split(r);
      }),
        (t.stringify = function(e) {
          return e.join(o).trim();
        });
      var a = "",
        o = " ",
        r = /[ \t\n\r\f]+/g;
    },
    Tauu: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#a9b7c6",
          fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "#a9b7c6",
          fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto",
          background: "#2b2b2b"
        },
        'pre[class*="language-"]::-moz-selection': {
          color: "inherit",
          background: "rgba(33,66,131,.85)"
        },
        'pre[class*="language-"] ::-moz-selection': {
          color: "inherit",
          background: "rgba(33,66,131,.85)"
        },
        'code[class*="language-"]::-moz-selection': {
          color: "inherit",
          background: "rgba(33,66,131,.85)"
        },
        'code[class*="language-"] ::-moz-selection': {
          color: "inherit",
          background: "rgba(33,66,131,.85)"
        },
        'pre[class*="language-"]::selection': {
          color: "inherit",
          background: "rgba(33,66,131,.85)"
        },
        'pre[class*="language-"] ::selection': {
          color: "inherit",
          background: "rgba(33,66,131,.85)"
        },
        'code[class*="language-"]::selection': {
          color: "inherit",
          background: "rgba(33,66,131,.85)"
        },
        'code[class*="language-"] ::selection': {
          color: "inherit",
          background: "rgba(33,66,131,.85)"
        },
        ':not(pre) > code[class*="language-"]': {
          background: "#2b2b2b",
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#808080" },
        prolog: { color: "#808080" },
        cdata: { color: "#808080" },
        delimiter: { color: "#cc7832" },
        boolean: { color: "#cc7832" },
        keyword: { color: "#cc7832" },
        selector: { color: "#cc7832" },
        important: { color: "#cc7832" },
        atrule: { color: "#cc7832" },
        operator: { color: "#a9b7c6" },
        punctuation: { color: "#a9b7c6" },
        "attr-name": { color: "#a9b7c6" },
        tag: { color: "#e8bf6a" },
        "tag .punctuation": { color: "#e8bf6a" },
        doctype: { color: "#e8bf6a" },
        builtin: { color: "#e8bf6a" },
        entity: { color: "#6897bb" },
        number: { color: "#6897bb" },
        symbol: { color: "#6897bb" },
        property: { color: "#9876aa" },
        constant: { color: "#9876aa" },
        variable: { color: "#9876aa" },
        string: { color: "#6a8759" },
        char: { color: "#6a8759" },
        "attr-value": { color: "#a5c261" },
        "attr-value .punctuation": { color: "#a5c261" },
        "attr-value .punctuation:first-child": { color: "#a9b7c6" },
        url: { color: "#287bde", textDecoration: "underline" },
        function: { color: "#ffc66d" },
        regex: { background: "#364135" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" },
        inserted: { background: "#294436" },
        deleted: { background: "#484a4a" },
        "code.language-css .token.property": { color: "#a9b7c6" },
        "code.language-css .token.property + .token.punctuation": {
          color: "#a9b7c6"
        },
        "code.language-css .token.id": { color: "#ffc66d" },
        "code.language-css .token.selector > .token.class": {
          color: "#ffc66d"
        },
        "code.language-css .token.selector > .token.attribute": {
          color: "#ffc66d"
        },
        "code.language-css .token.selector > .token.pseudo-class": {
          color: "#ffc66d"
        },
        "code.language-css .token.selector > .token.pseudo-element": {
          color: "#ffc66d"
        }
      };
    },
    TbGu: function(e, t, n) {
      var a = n("fGSI"),
        o = n("PQJW"),
        r = n("2PDY");
      e.exports = function(e) {
        return a(e) || o(e) || r();
      };
    },
    TqRt: function(e, t) {
      (e.exports = function(e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    U6jy: function(e, t) {
      e.exports = function() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          var a = arguments[t];
          for (var o in a) n.call(a, o) && (e[o] = a[o]);
        }
        return e;
      };
      var n = Object.prototype.hasOwnProperty;
    },
    UO0u: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.tcl = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          string: {
            pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
            greedy: !0
          },
          variable: [
            { pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/, lookbehind: !0 },
            { pattern: /(\$){[^}]+}/, lookbehind: !0 },
            {
              pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
              lookbehind: !0
            }
          ],
          function: { pattern: /(^\s*proc[ \t]+)[^\s]+/m, lookbehind: !0 },
          builtin: [
            {
              pattern: /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
              lookbehind: !0
            },
            /\b(?:elseif|else)\b/
          ],
          scope: {
            pattern: /(^\s*)(?:global|upvar|variable)\b/m,
            lookbehind: !0,
            alias: "constant"
          },
          keyword: {
            pattern: /(^\s*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
            lookbehind: !0
          },
          operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
          punctuation: /[{}()\[\]]/
        };
      }
      (e.exports = a), (a.displayName = "tcl"), (a.aliases = []);
    },
    Ukos: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = "(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\.|[^\\\\\"\r\n])*\")";
          e.languages.toml = {
            comment: { pattern: /#.*/, greedy: !0 },
            table: {
              pattern: RegExp(
                "(^\\s*\\[\\s*(?:\\[\\s*)?)" +
                  t +
                  "(?:\\s*\\.\\s*" +
                  t +
                  ")*(?=\\s*\\])",
                "m"
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "class-name"
            },
            key: {
              pattern: RegExp(
                "(^\\s*|[{,]\\s*)" + t + "(?:\\s*\\.\\s*" + t + ")*(?=\\s*=)",
                "m"
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "property"
            },
            string: {
              pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
              greedy: !0
            },
            date: [
              {
                pattern: /\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?/i,
                alias: "number"
              },
              { pattern: /\d{2}:\d{2}:\d{2}(?:\.\d+)?/i, alias: "number" }
            ],
            number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?(?:inf|nan)\b/,
            boolean: /\b(?:true|false)\b/,
            punctuation: /[.,=[\]{}]/
          };
        })(e);
      }
      (e.exports = a), (a.displayName = "toml"), (a.aliases = []);
    },
    Ut8p: function(e, t, n) {
      "use strict";
      e.exports = o;
      var a = o.prototype;
      function o(e, t) {
        (this.property = e), (this.attribute = t);
      }
      (a.space = null),
        (a.attribute = null),
        (a.property = null),
        (a.boolean = !1),
        (a.booleanish = !1),
        (a.overloadedBoolean = !1),
        (a.number = !1),
        (a.commaSeparated = !1),
        (a.spaceSeparated = !1),
        (a.commaOrSpaceSeparated = !1),
        (a.mustUseProperty = !1),
        (a.defined = !1);
    },
    "V+O7": function(e, t, n) {
      n("aPfg")("Set");
    },
    VJsP: function(e, t, n) {
      "use strict";
      var a = n("2GTP"),
        o = n("Y7ZC"),
        r = n("JB68"),
        i = n("sNwI"),
        s = n("NwJ3"),
        l = n("tEej"),
        c = n("IP1Z"),
        d = n("fNZA");
      o(
        o.S +
          o.F *
            !n("TuGD")(function(e) {
              Array.from(e);
            }),
        "Array",
        {
          from: function(e) {
            var t,
              n,
              o,
              u,
              p = r(e),
              g = "function" == typeof this ? this : Array,
              m = arguments.length,
              f = m > 1 ? arguments[1] : void 0,
              b = void 0 !== f,
              h = 0,
              E = d(p);
            if (
              (b && (f = a(f, m > 2 ? arguments[2] : void 0, 2)),
              void 0 == E || (g == Array && s(E)))
            )
              for (n = new g((t = l(p.length))); t > h; h++)
                c(n, h, b ? f(p[h], h) : p[h]);
            else
              for (u = E.call(p), n = new g(); !(o = u.next()).done; h++)
                c(n, h, b ? i(u, f, [o.value, h], !0) : o.value);
            return (n.length = h), n;
          }
        }
      );
    },
    VOTz: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.lua = {
          comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
          string: {
            pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
            greedy: !0
          },
          number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
          keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
          function: /(?!\d)\w+(?=\s*(?:[({]))/,
          operator: [
            /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
            { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 }
          ],
          punctuation: /[\[\](){},;]|\.+|:+/
        };
      }
      (e.exports = a), (a.displayName = "lua"), (a.aliases = []);
    },
    VvBV: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.swift = e.languages.extend("clike", {
          string: {
            pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                inside: {
                  delimiter: { pattern: /^\\\(|\)$/, alias: "variable" }
                }
              }
            }
          },
          keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
          number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
          constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
          atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
          builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
        })),
          (e.languages.swift.string.inside.interpolation.inside.rest =
            e.languages.swift);
      }
      (e.exports = a), (a.displayName = "swift"), (a.aliases = []);
    },
    WUdu: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.typescript = e.languages.extend("javascript", {
          keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
          builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
        })),
          (e.languages.ts = e.languages.typescript);
      }
      (e.exports = a), (a.displayName = "typescript"), (a.aliases = ["ts"]);
    },
    WVFU: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#f8f8f2",
          background: "none",
          textShadow: "0 1px rgba(0, 0, 0, 0.3)",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "#f8f8f2",
          background: "#272822",
          textShadow: "0 1px rgba(0, 0, 0, 0.3)",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto",
          borderRadius: "0.3em"
        },
        ':not(pre) > code[class*="language-"]': {
          background: "#272822",
          padding: ".1em",
          borderRadius: ".3em",
          whiteSpace: "normal"
        },
        comment: { color: "slategray" },
        prolog: { color: "slategray" },
        doctype: { color: "slategray" },
        cdata: { color: "slategray" },
        punctuation: { color: "#f8f8f2" },
        ".namespace": { Opacity: ".7" },
        property: { color: "#f92672" },
        tag: { color: "#f92672" },
        constant: { color: "#f92672" },
        symbol: { color: "#f92672" },
        deleted: { color: "#f92672" },
        boolean: { color: "#ae81ff" },
        number: { color: "#ae81ff" },
        selector: { color: "#a6e22e" },
        "attr-name": { color: "#a6e22e" },
        string: { color: "#a6e22e" },
        char: { color: "#a6e22e" },
        builtin: { color: "#a6e22e" },
        inserted: { color: "#a6e22e" },
        operator: { color: "#f8f8f2" },
        entity: { color: "#f8f8f2", cursor: "help" },
        url: { color: "#f8f8f2" },
        ".language-css .token.string": { color: "#f8f8f2" },
        ".style .token.string": { color: "#f8f8f2" },
        variable: { color: "#f8f8f2" },
        atrule: { color: "#e6db74" },
        "attr-value": { color: "#e6db74" },
        function: { color: "#e6db74" },
        "class-name": { color: "#e6db74" },
        keyword: { color: "#66d9ef" },
        regex: { color: "#fd971f" },
        important: { color: "#fd971f", fontWeight: "bold" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" }
      };
    },
    Wm63: function(e, t, n) {
      "use strict";
      var a = n("0iGP");
      function o(e) {
        e.register(a),
          (function(e) {
            e.languages.django = {
              comment: /^{#[\s\S]*?#}$/,
              tag: {
                pattern: /(^{%[+-]?\s*)\w+/,
                lookbehind: !0,
                alias: "keyword"
              },
              delimiter: {
                pattern: /^{[{%][+-]?|[+-]?[}%]}$/,
                alias: "punctuation"
              },
              string: {
                pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                greedy: !0
              },
              filter: { pattern: /(\|)\w+/, lookbehind: !0, alias: "function" },
              test: {
                pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
                lookbehind: !0,
                alias: "function"
              },
              function: /\b[a-z_]\w+(?=\s*\()/i,
              keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
              operator: /[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
              number: /\b\d+(?:\.\d+)?\b/,
              boolean: /[Tt]rue|[Ff]alse|[Nn]one/,
              variable: /\b\w+?\b/,
              punctuation: /[{}[\](),.:;]/
            };
            var t = /{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g,
              n = e.languages["markup-templating"];
            e.hooks.add("before-tokenize", function(e) {
              n.buildPlaceholders(e, "django", t);
            }),
              e.hooks.add("after-tokenize", function(e) {
                n.tokenizePlaceholders(e, "django");
              }),
              (e.languages.jinja2 = e.languages.django),
              e.hooks.add("before-tokenize", function(e) {
                n.buildPlaceholders(e, "jinja2", t);
              }),
              e.hooks.add("after-tokenize", function(e) {
                n.tokenizePlaceholders(e, "jinja2");
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "django"), (o.aliases = ["jinja2"]);
    },
    WtKE: function(e, t, n) {
      "use strict";
      var a,
        o = 59;
      e.exports = function(e) {
        var t,
          n = "&" + e + ";";
        if (
          (((a = a || document.createElement("i")).innerHTML = n),
          (t = a.textContent).charCodeAt(t.length - 1) === o && "semi" !== e)
        )
          return !1;
        return t !== n && t;
      };
    },
    Wu5q: function(e, t, n) {
      "use strict";
      var a = n("2faE").f,
        o = n("oVml"),
        r = n("XJU/"),
        i = n("2GTP"),
        s = n("EXMj"),
        l = n("oioR"),
        c = n("MPFp"),
        d = n("UO39"),
        u = n("TJWN"),
        p = n("jmDH"),
        g = n("6/1s").fastKey,
        m = n("n3ko"),
        f = p ? "_s" : "size",
        b = function(e, t) {
          var n,
            a = g(t);
          if ("F" !== a) return e._i[a];
          for (n = e._f; n; n = n.n) if (n.k == t) return n;
        };
      e.exports = {
        getConstructor: function(e, t, n, c) {
          var d = e(function(e, a) {
            s(e, d, t, "_i"),
              (e._t = t),
              (e._i = o(null)),
              (e._f = void 0),
              (e._l = void 0),
              (e[f] = 0),
              void 0 != a && l(a, n, e[c], e);
          });
          return (
            r(d.prototype, {
              clear: function() {
                for (var e = m(this, t), n = e._i, a = e._f; a; a = a.n)
                  (a.r = !0), a.p && (a.p = a.p.n = void 0), delete n[a.i];
                (e._f = e._l = void 0), (e[f] = 0);
              },
              delete: function(e) {
                var n = m(this, t),
                  a = b(n, e);
                if (a) {
                  var o = a.n,
                    r = a.p;
                  delete n._i[a.i],
                    (a.r = !0),
                    r && (r.n = o),
                    o && (o.p = r),
                    n._f == a && (n._f = o),
                    n._l == a && (n._l = r),
                    n[f]--;
                }
                return !!a;
              },
              forEach: function(e) {
                m(this, t);
                for (
                  var n,
                    a = i(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (n = n ? n.n : this._f);

                )
                  for (a(n.v, n.k, this); n && n.r; ) n = n.p;
              },
              has: function(e) {
                return !!b(m(this, t), e);
              }
            }),
            p &&
              a(d.prototype, "size", {
                get: function() {
                  return m(this, t)[f];
                }
              }),
            d
          );
        },
        def: function(e, t, n) {
          var a,
            o,
            r = b(e, t);
          return (
            r
              ? (r.v = n)
              : ((e._l = r = {
                  i: (o = g(t, !0)),
                  k: t,
                  v: n,
                  p: (a = e._l),
                  n: void 0,
                  r: !1
                }),
                e._f || (e._f = r),
                a && (a.n = r),
                e[f]++,
                "F" !== o && (e._i[o] = r)),
            e
          );
        },
        getEntry: b,
        setStrong: function(e, t, n) {
          c(
            e,
            t,
            function(e, n) {
              (this._t = m(e, t)), (this._k = n), (this._l = void 0);
            },
            function() {
              for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
              return this._t && (this._l = t = t ? t.n : this._t._f)
                ? d(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v])
                : ((this._t = void 0), d(1));
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            u(t);
        }
      };
    },
    "X+ae": function(e, t, n) {
      (function(t) {
        var n = (function(e) {
          var t = /\blang(?:uage)?-([\w-]+)\b/i,
            n = 0,
            a = {
              manual: e.Prism && e.Prism.manual,
              disableWorkerMessageHandler:
                e.Prism && e.Prism.disableWorkerMessageHandler,
              util: {
                encode: function(e) {
                  return e instanceof o
                    ? new o(e.type, a.util.encode(e.content), e.alias)
                    : Array.isArray(e)
                    ? e.map(a.util.encode)
                    : e
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function(e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function(e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                    e.__id
                  );
                },
                clone: function e(t, n) {
                  var o,
                    r,
                    i = a.util.type(t);
                  switch (((n = n || {}), i)) {
                    case "Object":
                      if (((r = a.util.objId(t)), n[r])) return n[r];
                      for (var s in ((o = {}), (n[r] = o), t))
                        t.hasOwnProperty(s) && (o[s] = e(t[s], n));
                      return o;
                    case "Array":
                      return (
                        (r = a.util.objId(t)),
                        n[r]
                          ? n[r]
                          : ((o = []),
                            (n[r] = o),
                            t.forEach(function(t, a) {
                              o[a] = e(t, n);
                            }),
                            o)
                      );
                    default:
                      return t;
                  }
                }
              },
              languages: {
                extend: function(e, t) {
                  var n = a.util.clone(a.languages[e]);
                  for (var o in t) n[o] = t[o];
                  return n;
                },
                insertBefore: function(e, t, n, o) {
                  var r = (o = o || a.languages)[e],
                    i = {};
                  for (var s in r)
                    if (r.hasOwnProperty(s)) {
                      if (s == t)
                        for (var l in n) n.hasOwnProperty(l) && (i[l] = n[l]);
                      n.hasOwnProperty(s) || (i[s] = r[s]);
                    }
                  var c = o[e];
                  return (
                    (o[e] = i),
                    a.languages.DFS(a.languages, function(t, n) {
                      n === c && t != e && (this[t] = i);
                    }),
                    i
                  );
                },
                DFS: function e(t, n, o, r) {
                  r = r || {};
                  var i = a.util.objId;
                  for (var s in t)
                    if (t.hasOwnProperty(s)) {
                      n.call(t, s, t[s], o || s);
                      var l = t[s],
                        c = a.util.type(l);
                      "Object" !== c || r[i(l)]
                        ? "Array" !== c ||
                          r[i(l)] ||
                          ((r[i(l)] = !0), e(l, n, s, r))
                        : ((r[i(l)] = !0), e(l, n, null, r));
                    }
                }
              },
              plugins: {},
              highlightAll: function(e, t) {
                a.highlightAllUnder(document, e, t);
              },
              highlightAllUnder: function(e, t, n) {
                var o = {
                  callback: n,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                a.hooks.run("before-highlightall", o);
                for (
                  var r, i = e.querySelectorAll(o.selector), s = 0;
                  (r = i[s++]);

                )
                  a.highlightElement(r, !0 === t, o.callback);
              },
              highlightElement: function(n, o, r) {
                for (var i, s = "none", l = n; l && !t.test(l.className); )
                  l = l.parentNode;
                l &&
                  ((s = (l.className.match(t) || [, "none"])[1].toLowerCase()),
                  (i = a.languages[s])),
                  (n.className =
                    n.className.replace(t, "").replace(/\s+/g, " ") +
                    " language-" +
                    s),
                  n.parentNode &&
                    ((l = n.parentNode),
                    /pre/i.test(l.nodeName) &&
                      (l.className =
                        l.className.replace(t, "").replace(/\s+/g, " ") +
                        " language-" +
                        s));
                var c = {
                    element: n,
                    language: s,
                    grammar: i,
                    code: n.textContent
                  },
                  d = function(e) {
                    (c.highlightedCode = e),
                      a.hooks.run("before-insert", c),
                      (c.element.innerHTML = c.highlightedCode),
                      a.hooks.run("after-highlight", c),
                      a.hooks.run("complete", c),
                      r && r.call(c.element);
                  };
                if ((a.hooks.run("before-sanity-check", c), c.code))
                  if ((a.hooks.run("before-highlight", c), c.grammar))
                    if (o && e.Worker) {
                      var u = new Worker(a.filename);
                      (u.onmessage = function(e) {
                        d(e.data);
                      }),
                        u.postMessage(
                          JSON.stringify({
                            language: c.language,
                            code: c.code,
                            immediateClose: !0
                          })
                        );
                    } else d(a.highlight(c.code, c.grammar, c.language));
                  else d(a.util.encode(c.code));
                else a.hooks.run("complete", c);
              },
              highlight: function(e, t, n) {
                var r = { code: e, grammar: t, language: n };
                return (
                  a.hooks.run("before-tokenize", r),
                  (r.tokens = a.tokenize(r.code, r.grammar)),
                  a.hooks.run("after-tokenize", r),
                  o.stringify(a.util.encode(r.tokens), r.language)
                );
              },
              matchGrammar: function(e, t, n, r, i, s, l) {
                for (var c in n)
                  if (n.hasOwnProperty(c) && n[c]) {
                    if (c == l) return;
                    var d = n[c];
                    d = "Array" === a.util.type(d) ? d : [d];
                    for (var u = 0; u < d.length; ++u) {
                      var p = d[u],
                        g = p.inside,
                        m = !!p.lookbehind,
                        f = !!p.greedy,
                        b = 0,
                        h = p.alias;
                      if (f && !p.pattern.global) {
                        var E = p.pattern.toString().match(/[imuy]*$/)[0];
                        p.pattern = RegExp(p.pattern.source, E + "g");
                      }
                      p = p.pattern || p;
                      for (
                        var S = r, _ = i;
                        S < t.length;
                        _ += t[S].length, ++S
                      ) {
                        var y = t[S];
                        if (t.length > e.length) return;
                        if (!(y instanceof o)) {
                          if (f && S != t.length - 1) {
                            if (((p.lastIndex = _), !(v = p.exec(e)))) break;
                            for (
                              var A = v.index + (m ? v[1].length : 0),
                                T = v.index + v[0].length,
                                R = S,
                                I = _,
                                N = t.length;
                              R < N &&
                              (I < T || (!t[R].type && !t[R - 1].greedy));
                              ++R
                            )
                              A >= (I += t[R].length) && (++S, (_ = I));
                            if (t[S] instanceof o) continue;
                            (w = R - S), (y = e.slice(_, I)), (v.index -= _);
                          } else {
                            p.lastIndex = 0;
                            var v = p.exec(y),
                              w = 1;
                          }
                          if (v) {
                            m && (b = v[1] ? v[1].length : 0);
                            T = (A = v.index + b) + (v = v[0].slice(b)).length;
                            var k = y.slice(0, A),
                              C = y.slice(T),
                              O = [S, w];
                            k && (++S, (_ += k.length), O.push(k));
                            var x = new o(c, g ? a.tokenize(v, g) : v, h, v, f);
                            if (
                              (O.push(x),
                              C && O.push(C),
                              Array.prototype.splice.apply(t, O),
                              1 != w && a.matchGrammar(e, t, n, S, _, !0, c),
                              s)
                            )
                              break;
                          } else if (s) break;
                        }
                      }
                    }
                  }
              },
              tokenize: function(e, t) {
                var n = [e],
                  o = t.rest;
                if (o) {
                  for (var r in o) t[r] = o[r];
                  delete t.rest;
                }
                return a.matchGrammar(e, n, t, 0, 0, !1), n;
              },
              hooks: {
                all: {},
                add: function(e, t) {
                  var n = a.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function(e, t) {
                  var n = a.hooks.all[e];
                  if (n && n.length) for (var o, r = 0; (o = n[r++]); ) o(t);
                }
              },
              Token: o
            };
          function o(e, t, n, a, o) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (a || "").length),
              (this.greedy = !!o);
          }
          if (
            ((e.Prism = a),
            (o.stringify = function(e, t) {
              if ("string" == typeof e) return e;
              if (Array.isArray(e))
                return e
                  .map(function(e) {
                    return o.stringify(e, t);
                  })
                  .join("");
              var n = {
                type: e.type,
                content: o.stringify(e.content, t),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: t
              };
              if (e.alias) {
                var r = Array.isArray(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(n.classes, r);
              }
              a.hooks.run("wrap", n);
              var i = Object.keys(n.attributes)
                .map(function(e) {
                  return (
                    e +
                    '="' +
                    (n.attributes[e] || "").replace(/"/g, "&quot;") +
                    '"'
                  );
                })
                .join(" ");
              return (
                "<" +
                n.tag +
                ' class="' +
                n.classes.join(" ") +
                '"' +
                (i ? " " + i : "") +
                ">" +
                n.content +
                "</" +
                n.tag +
                ">"
              );
            }),
            !e.document)
          )
            return e.addEventListener
              ? (a.disableWorkerMessageHandler ||
                  e.addEventListener(
                    "message",
                    function(t) {
                      var n = JSON.parse(t.data),
                        o = n.language,
                        r = n.code,
                        i = n.immediateClose;
                      e.postMessage(a.highlight(r, a.languages[o], o)),
                        i && e.close();
                    },
                    !1
                  ),
                a)
              : a;
          var r =
            document.currentScript ||
            [].slice.call(document.getElementsByTagName("script")).pop();
          return (
            r &&
              ((a.filename = r.src),
              a.manual ||
                r.hasAttribute("data-manual") ||
                ("loading" !== document.readyState
                  ? window.requestAnimationFrame
                    ? window.requestAnimationFrame(a.highlightAll)
                    : window.setTimeout(a.highlightAll, 16)
                  : document.addEventListener(
                      "DOMContentLoaded",
                      a.highlightAll
                    ))),
            a
          );
        })(
          "undefined" !== typeof window
            ? window
            : "undefined" !== typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {}
        );
        e.exports && (e.exports = n), "undefined" !== typeof t && (t.Prism = n);
      }.call(this, n("yLpj")));
    },
    XDzI: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.io = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
            { pattern: /(^|[^\\])#.*/, lookbehind: !0 }
          ],
          "triple-quoted-string": {
            pattern: /"""(?:\\[\s\S]|(?!""")[^\\])*"""/,
            greedy: !0,
            alias: "string"
          },
          string: { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
          keyword: /\b(?:activate|activeCoroCount|asString|block|break|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getSlot|getEnvironmentVariable|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|call|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,
          builtin: /\b(?:Array|AudioDevice|AudioMixer|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Regex|SGML|SGMLElement|SGMLParser|SQLite|Server|Sequence|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink|Random|BigNum|Sequence)\b/,
          boolean: /\b(?:true|false|nil)\b/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?/i,
          operator: /[=!*/%+-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|(\b(?:return|and|or|not)\b)|@@?|\?\??|\.\./,
          punctuation: /[{}[\];(),.:]/
        };
      }
      (e.exports = a), (a.displayName = "io"), (a.aliases = []);
    },
    XnOg: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.clojure = {
          comment: /;+.*/,
          string: /"(?:\\.|[^\\"\r\n])*"/,
          operator: /(?:::|[:|'])\b[a-z][\w*+!?-]*\b/i,
          keyword: {
            pattern: /([^\w+*'?-])(?:def|if|do|let|\.\.|quote|var|->>|->|fn|loop|recur|throw|try|monitor-enter|\.|new|set!|def\-|defn|defn\-|defmacro|defmulti|defmethod|defstruct|defonce|declare|definline|definterface|defprotocol|==|defrecord|>=|deftype|<=|defproject|ns|\*|\+|\-|\/|<|=|>|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|conj|cons|constantly|cond|if-not|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|deref|difference|disj|dissoc|distinct|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|for|fnseq|frest|gensym|get-proxy-class|get|hash-map|hash-set|identical\?|identity|if-let|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|line-seq|list\*|list|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|time|to-array|to-array-2d|tree-seq|true\?|union|up|update-proxy|val|vals|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[^\w+*'?-])/,
            lookbehind: !0
          },
          boolean: /\b(?:true|false|nil)\b/,
          number: /\b[0-9A-Fa-f]+\b/,
          punctuation: /[{}\[\](),]/
        };
      }
      (e.exports = a), (a.displayName = "clojure"), (a.aliases = []);
    },
    Xuae: function(e, t, n) {
      "use strict";
      var a = n("/HRN"),
        o = n("ZDA2"),
        r = n("/+P4"),
        i = n("K47E"),
        s = n("WaGi"),
        l = n("N9n2"),
        c = n("TbGu"),
        d = n("ttDY");
      n("hfKm")(t, "__esModule", { value: !0 });
      var u = n("q1tI"),
        p = !1;
      t.default = function() {
        var e,
          t = new d();
        function n(n) {
          (e = n.props.reduceComponentsToState(c(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function(c) {
          function d(e) {
            var s;
            return (
              a(this, d),
              (s = o(this, r(d).call(this, e))),
              p && (t.add(i(s)), n(i(s))),
              s
            );
          }
          return (
            l(d, c),
            s(d, null, [
              {
                key: "rewind",
                value: function() {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                }
              }
            ]),
            s(d, [
              {
                key: "componentDidMount",
                value: function() {
                  t.add(this), n(this);
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  n(this);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  t.delete(this), n(this);
                }
              },
              {
                key: "render",
                value: function() {
                  return null;
                }
              }
            ]),
            d
          );
        })(u.Component);
      };
    },
    "Y+Mq": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#24242e",
          color: "#767693"
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#24242e",
          color: "#767693",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#5151e6"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#5151e6"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#5151e6"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#5151e6"
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#5151e6"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#5151e6"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#5151e6"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#5151e6"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#5b5b76" },
        prolog: { color: "#5b5b76" },
        doctype: { color: "#5b5b76" },
        cdata: { color: "#5b5b76" },
        punctuation: { color: "#5b5b76" },
        namespace: { Opacity: ".7" },
        tag: { color: "#dd672c" },
        operator: { color: "#dd672c" },
        number: { color: "#dd672c" },
        property: { color: "#767693" },
        function: { color: "#767693" },
        "tag-id": { color: "#ebebff" },
        selector: { color: "#ebebff" },
        "atrule-id": { color: "#ebebff" },
        "code.language-javascript": { color: "#aaaaca" },
        "attr-name": { color: "#aaaaca" },
        "code.language-css": { color: "#fe8c52" },
        "code.language-scss": { color: "#fe8c52" },
        boolean: { color: "#fe8c52" },
        string: { color: "#fe8c52" },
        entity: { color: "#fe8c52", cursor: "help" },
        url: { color: "#fe8c52" },
        ".language-css .token.string": { color: "#fe8c52" },
        ".language-scss .token.string": { color: "#fe8c52" },
        ".style .token.string": { color: "#fe8c52" },
        "attr-value": { color: "#fe8c52" },
        keyword: { color: "#fe8c52" },
        control: { color: "#fe8c52" },
        directive: { color: "#fe8c52" },
        unit: { color: "#fe8c52" },
        statement: { color: "#fe8c52" },
        regex: { color: "#fe8c52" },
        atrule: { color: "#fe8c52" },
        placeholder: { color: "#fe8c52" },
        variable: { color: "#fe8c52" },
        deleted: { textDecoration: "line-through" },
        inserted: {
          borderBottom: "1px dotted #ebebff",
          textDecoration: "none"
        },
        italic: { fontStyle: "italic" },
        important: { fontWeight: "bold", color: "#aaaaca" },
        bold: { fontWeight: "bold" },
        "pre > code.highlight": {
          Outline: ".4em solid #7676f4",
          OutlineOffset: ".4em"
        },
        ".line-numbers .line-numbers-rows": { borderRightColor: "#262631" },
        ".line-numbers-rows > span:before": { color: "#393949" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))"
        }
      };
    },
    YHgv: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          function t(e, t, n) {
            return {
              pattern: RegExp("<#" + e + "[\\s\\S]*?#>"),
              alias: "block",
              inside: {
                delimiter: {
                  pattern: RegExp("^<#" + e + "|#>$"),
                  alias: "important"
                },
                content: { pattern: /[\s\S]+/, inside: t, alias: n }
              }
            };
          }
          e.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
            value: function(n) {
              var a = e.languages[n],
                o = "language-" + n;
              return {
                block: {
                  pattern: /<#[\s\S]+?#>/,
                  inside: {
                    directive: t("@", {
                      "attr-value": {
                        pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                        inside: { punctuation: /^=|^["']|["']$/ }
                      },
                      keyword: /\w+(?=\s)/,
                      "attr-name": /\w+/
                    }),
                    expression: t("=", a, o),
                    "class-feature": t("\\+", a, o),
                    standard: t("", a, o)
                  }
                }
              };
            }
          });
        })(e);
      }
      (e.exports = a), (a.displayName = "t4Templating"), (a.aliases = []);
    },
    YiBN: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m }
          },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m
        };
      }
      (e.exports = a), (a.displayName = "git"), (a.aliases = []);
    },
    Z87L: function(e) {
      e.exports = JSON.parse(
        '{"0":"\ufffd","128":"\u20ac","130":"\u201a","131":"\u0192","132":"\u201e","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02c6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017d","145":"\u2018","146":"\u2019","147":"\u201c","148":"\u201d","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02dc","153":"\u2122","154":"\u0161","155":"\u203a","156":"\u0153","158":"\u017e","159":"\u0178"}'
      );
    },
    ZKMX: function(e, t, n) {
      "use strict";
      var a = n("0iGP");
      function o(e) {
        e.register(a),
          (function(e) {
            (e.languages.ejs = {
              delimiter: {
                pattern: /^<%[-_=]?|[-_]?%>$/,
                alias: "punctuation"
              },
              comment: /^#[\s\S]*/,
              "language-javascript": {
                pattern: /[\s\S]+/,
                inside: e.languages.javascript
              }
            }),
              e.hooks.add("before-tokenize", function(t) {
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "ejs",
                  /<%(?!%)[\s\S]+?%>/g
                );
              }),
              e.hooks.add("after-tokenize", function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "ejs");
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "ejs"), (o.aliases = []);
    },
    ZONP: function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        var t = "string" === typeof e ? e.charCodeAt(0) : e;
        return t >= 48 && t <= 57;
      };
    },
    ZWk2: function(e, t, n) {
      "use strict";
      var a = n("m2n9"),
        o = n("Z87L"),
        r = n("ZONP"),
        i = n("fjrl"),
        s = n("J5yW"),
        l = n("WtKE");
      e.exports = function(e, t) {
        var n,
          r,
          i = {};
        t || (t = {});
        for (r in p) (n = t[r]), (i[r] = null === n || void 0 === n ? p[r] : n);
        (i.position.indent || i.position.start) &&
          ((i.indent = i.position.indent || []),
          (i.position = i.position.start));
        return (function(e, t) {
          var n,
            r,
            i,
            p,
            U,
            G,
            z,
            H,
            W,
            j,
            V,
            Y,
            $,
            K,
            q,
            X,
            Z,
            Q,
            J,
            ee = t.additional,
            te = t.nonTerminated,
            ne = t.text,
            ae = t.reference,
            oe = t.warning,
            re = t.textContext,
            ie = t.referenceContext,
            se = t.warningContext,
            le = t.position,
            ce = t.indent || [],
            de = e.length,
            ue = 0,
            pe = -1,
            ge = le.column || 1,
            me = le.line || 1,
            fe = "",
            be = [];
          "string" === typeof ee && (ee = ee.charCodeAt(0));
          (X = Ee()),
            (H = oe
              ? function(e, t) {
                  var n = Ee();
                  (n.column += t), (n.offset += t), oe.call(se, F[e], n, e);
                }
              : u),
            ue--,
            de++;
          for (; ++ue < de; )
            if ((U === m && (ge = ce[pe] || 1), (U = e.charCodeAt(ue)) === h)) {
              if (
                (z = e.charCodeAt(ue + 1)) === g ||
                z === m ||
                z === f ||
                z === b ||
                z === h ||
                z === S ||
                z !== z ||
                (ee && z === ee)
              ) {
                (fe += d(U)), ge++;
                continue;
              }
              for (
                Y = $ = ue + 1,
                  J = $,
                  z === y
                    ? ((J = ++Y),
                      (z = e.charCodeAt(J)) === A || z === T
                        ? ((K = N), (J = ++Y))
                        : (K = v))
                    : (K = I),
                  n = "",
                  V = "",
                  p = "",
                  q = k[K],
                  J--;
                ++J < de && ((z = e.charCodeAt(J)), q(z));

              )
                (p += d(z)), K === I && c.call(a, p) && ((n = p), (V = a[p]));
              (i = e.charCodeAt(J) === E) &&
                (J++, (r = K === I && l(p)) && ((n = p), (V = r))),
                (Q = 1 + J - $),
                (i || te) &&
                  (p
                    ? K === I
                      ? (i && !V
                          ? H(D, 1)
                          : (n !== p &&
                              ((J = Y + n.length), (Q = 1 + J - Y), (i = !1)),
                            i ||
                              ((W = n ? C : x),
                              t.attribute
                                ? (z = e.charCodeAt(J)) === _
                                  ? (H(W, Q), (V = null))
                                  : s(z)
                                  ? (V = null)
                                  : H(W, Q)
                                : H(W, Q))),
                        (G = V))
                      : (i || H(O, Q),
                        (G = parseInt(p, w[K])),
                        ((he = G) >= 55296 && he <= 57343) || he > 1114111
                          ? (H(P, Q), (G = d(R)))
                          : G in o
                          ? (H(M, Q), (G = o[G]))
                          : ((j = ""),
                            B(G) && H(M, Q),
                            G > 65535 &&
                              ((j += d(((G -= 65536) >>> 10) | 55296)),
                              (G = 56320 | (1023 & G))),
                            (G = j + d(G))))
                    : K !== I && H(L, Q)),
                G
                  ? (Se(),
                    (X = Ee()),
                    (ue = J - 1),
                    (ge += J - $ + 1),
                    be.push(G),
                    (Z = Ee()).offset++,
                    ae &&
                      ae.call(ie, G, { start: X, end: Z }, e.slice($ - 1, J)),
                    (X = Z))
                  : ((p = e.slice($ - 1, J)),
                    (fe += p),
                    (ge += p.length),
                    (ue = J - 1));
            } else
              10 === U && (me++, pe++, (ge = 0)),
                U === U ? ((fe += d(U)), ge++) : Se();
          var he;
          return be.join("");
          function Ee() {
            return { line: me, column: ge, offset: ue + (le.offset || 0) };
          }
          function Se() {
            fe &&
              (be.push(fe),
              ne && ne.call(re, fe, { start: X, end: Ee() }),
              (fe = ""));
          }
        })(e, i);
      };
      var c = {}.hasOwnProperty,
        d = String.fromCharCode,
        u = Function.prototype,
        p = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0
        },
        g = 9,
        m = 10,
        f = 12,
        b = 32,
        h = 38,
        E = 59,
        S = 60,
        _ = 61,
        y = 35,
        A = 88,
        T = 120,
        R = 65533,
        I = "named",
        N = "hexadecimal",
        v = "decimal",
        w = {};
      (w[N] = 16), (w[v] = 10);
      var k = {};
      (k[I] = s), (k[v] = r), (k[N] = i);
      var C = 1,
        O = 2,
        x = 3,
        L = 4,
        D = 5,
        M = 6,
        P = 7,
        F = {};
      function B(e) {
        return (
          (e >= 1 && e <= 8) ||
          11 === e ||
          (e >= 13 && e <= 31) ||
          (e >= 127 && e <= 159) ||
          (e >= 64976 && e <= 65007) ||
          65535 === (65535 & e) ||
          65534 === (65535 & e)
        );
      }
      (F[C] = "Named character references must be terminated by a semicolon"),
        (F[O] =
          "Numeric character references must be terminated by a semicolon"),
        (F[x] = "Named character references cannot be empty"),
        (F[L] = "Numeric character references cannot be empty"),
        (F[D] = "Named character references must be known"),
        (F[M] = "Numeric character references cannot be disallowed"),
        (F[P] =
          "Numeric character references cannot be outside the permissible Unicode range");
    },
    ZZii: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = {
            url: /url\((["']?).*?\1\)/i,
            string: {
              pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
              greedy: !0
            },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
              pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
              lookbehind: !0
            },
            hexcode: /#[\da-f]{3,6}/i,
            number: /\b\d+(?:\.\d+)?%?/,
            boolean: /\b(?:true|false)\b/,
            operator: [
              /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
            ],
            punctuation: /[{}()\[\];:,]/
          };
          (t.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: {
              delimiter: { pattern: /^{|}$/, alias: "punctuation" },
              rest: t
            }
          }),
            (t.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: t }
            }),
            (e.languages.stylus = {
              comment: {
                pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
              },
              "atrule-declaration": {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: t }
              },
              "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: t }
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: t }
              },
              "property-declaration": {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: t.interpolation }
                  },
                  rest: t
                }
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: { interpolation: t.interpolation, punctuation: /[{},]/ }
              },
              func: t.func,
              string: t.string,
              interpolation: t.interpolation,
              punctuation: /[{}()\[\];:.]/
            });
        })(e);
      }
      (e.exports = a), (a.displayName = "stylus"), (a.aliases = []);
    },
    "Zbb/": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.basic = {
          comment: { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
          string: {
            pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
            greedy: !0
          },
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
          keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
          function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
          operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
          punctuation: /[,;:()]/
        };
      }
      (e.exports = a), (a.displayName = "basic"), (a.aliases = []);
    },
    ZpVt: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          (e.languages.flow = e.languages.extend("javascript", {})),
            e.languages.insertBefore("flow", "keyword", {
              type: [
                {
                  pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
                  alias: "tag"
                }
              ]
            }),
            (e.languages.flow[
              "function-variable"
            ].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i),
            delete e.languages.flow.parameter,
            e.languages.insertBefore("flow", "operator", {
              "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" }
            }),
            Array.isArray(e.languages.flow.keyword) ||
              (e.languages.flow.keyword = [e.languages.flow.keyword]),
            e.languages.flow.keyword.unshift(
              {
                pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
                lookbehind: !0
              },
              {
                pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                lookbehind: !0
              }
            );
        })(e);
      }
      (e.exports = a), (a.displayName = "flow"), (a.aliases = []);
    },
    Zyy6: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: "variable" };
          (e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n }
              }
            ],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" }
          })),
            e.languages.insertBefore("coffeescript", "comment", {
              "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment"
              },
              "block-regex": {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: "regex",
                inside: { comment: t, interpolation: n }
              }
            }),
            e.languages.insertBefore("coffeescript", "string", {
              "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: "punctuation" },
                  rest: e.languages.javascript
                }
              },
              "multiline-string": [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: "string",
                  inside: { interpolation: n }
                }
              ]
            }),
            e.languages.insertBefore("coffeescript", "keyword", {
              property: /(?!\d)\w+(?=\s*:(?!:))/
            }),
            delete e.languages.coffeescript["template-string"],
            (e.languages.coffee = e.languages.coffeescript);
        })(e);
      }
      (e.exports = a),
        (a.displayName = "coffeescript"),
        (a.aliases = ["coffee"]);
    },
    ZzRc: function(e, t, n) {
      "use strict";
      var a = n("DxsT");
      function o(e) {
        e.register(a),
          (function(e) {
            var t = e.languages.javascript,
              n = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source,
              a = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)";
            (e.languages.jsdoc = e.languages.extend("javadoclike", {
              parameter: {
                pattern: RegExp(a + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
                lookbehind: !0,
                inside: { punctuation: /\./ }
              }
            })),
              e.languages.insertBefore("jsdoc", "keyword", {
                "optional-parameter": {
                  pattern: RegExp(
                    a + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source
                  ),
                  lookbehind: !0,
                  inside: {
                    parameter: {
                      pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                      lookbehind: !0,
                      inside: { punctuation: /\./ }
                    },
                    code: {
                      pattern: /(=)[\s\S]*(?=\]$)/,
                      lookbehind: !0,
                      inside: t,
                      alias: "language-javascript"
                    },
                    punctuation: /[=[\]]/
                  }
                },
                "class-name": [
                  {
                    pattern: RegExp("(@[a-z]+\\s+)" + n),
                    lookbehind: !0,
                    inside: { punctuation: /[.,:?=<>|{}()[\]]/ }
                  },
                  {
                    pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
                    lookbehind: !0,
                    inside: { punctuation: /\./ }
                  }
                ],
                example: {
                  pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                  lookbehind: !0,
                  inside: {
                    code: {
                      pattern: /^(\s*(?:\*\s*)?).+$/m,
                      lookbehind: !0,
                      inside: t,
                      alias: "language-javascript"
                    }
                  }
                }
              }),
              e.languages.javadoclike.addSupport(
                "javascript",
                e.languages.jsdoc
              );
          })(e);
      }
      (e.exports = o), (o.displayName = "jsdoc"), (o.aliases = []);
    },
    a8JZ: function(e, t, n) {
      "use strict";
      var a = n("5YM3");
      (e.exports = a),
        a.register(n("h9ot")),
        a.register(n("k268")),
        a.register(n("BK6e")),
        a.register(n("rQez")),
        a.register(n("c0d7")),
        a.register(n("+KGI")),
        a.register(n("LcBK")),
        a.register(n("hQuw")),
        a.register(n("80K2")),
        a.register(n("flTx")),
        a.register(n("ex7v")),
        a.register(n("cirD")),
        a.register(n("r77y")),
        a.register(n("h6Os")),
        a.register(n("RoP8")),
        a.register(n("Zbb/")),
        a.register(n("kJUM")),
        a.register(n("31EH")),
        a.register(n("tGK9")),
        a.register(n("czuR")),
        a.register(n("yBwc")),
        a.register(n("pr4O")),
        a.register(n("oHmT")),
        a.register(n("XnOg")),
        a.register(n("vXix")),
        a.register(n("Zyy6")),
        a.register(n("rDFf")),
        a.register(n("rFnP")),
        a.register(n("EGRD")),
        a.register(n("xkx2")),
        a.register(n("D+1R")),
        a.register(n("mX3B")),
        a.register(n("E4h5")),
        a.register(n("q9H2")),
        a.register(n("Wm63")),
        a.register(n("GwKP")),
        a.register(n("cJKJ")),
        a.register(n("MhsL")),
        a.register(n("+4XU")),
        a.register(n("ZKMX")),
        a.register(n("oBNv")),
        a.register(n("JidM")),
        a.register(n("JT+x")),
        a.register(n("cKbU")),
        a.register(n("ZpVt")),
        a.register(n("Q4s5")),
        a.register(n("mKfl")),
        a.register(n("M876")),
        a.register(n("qseY")),
        a.register(n("kCZm")),
        a.register(n("YiBN")),
        a.register(n("v/up")),
        a.register(n("jeZe")),
        a.register(n("cbKp")),
        a.register(n("phHE")),
        a.register(n("keYo")),
        a.register(n("wlav")),
        a.register(n("jgXz")),
        a.register(n("Crv7")),
        a.register(n("FDVF")),
        a.register(n("SvWi")),
        a.register(n("dj8l")),
        a.register(n("3DeZ")),
        a.register(n("qu84")),
        a.register(n("Skso")),
        a.register(n("tYeQ")),
        a.register(n("hGJt")),
        a.register(n("22HQ")),
        a.register(n("XDzI")),
        a.register(n("fNCr")),
        a.register(n("DPa0")),
        a.register(n("agnA")),
        a.register(n("DxsT")),
        a.register(n("QovY")),
        a.register(n("8YJO")),
        a.register(n("4C0g")),
        a.register(n("HHXC")),
        a.register(n("RU3K")),
        a.register(n("ZzRc")),
        a.register(n("Qg97")),
        a.register(n("Nmqu")),
        a.register(n("cjGb")),
        a.register(n("1K8B")),
        a.register(n("tnne")),
        a.register(n("Gdkm")),
        a.register(n("fnZc")),
        a.register(n("hvS6")),
        a.register(n("hR/J")),
        a.register(n("QchW")),
        a.register(n("9B5k")),
        a.register(n("v/u2")),
        a.register(n("B62i")),
        a.register(n("9Fha")),
        a.register(n("VOTz")),
        a.register(n("p+MO")),
        a.register(n("OniS")),
        a.register(n("0iGP")),
        a.register(n("vY5V")),
        a.register(n("zDxY")),
        a.register(n("lKmu")),
        a.register(n("SlDd")),
        a.register(n("xxdG")),
        a.register(n("4zmH")),
        a.register(n("o9nR")),
        a.register(n("AoEZ")),
        a.register(n("aUvw")),
        a.register(n("tBDx")),
        a.register(n("K5tb")),
        a.register(n("iY0B")),
        a.register(n("sFmL")),
        a.register(n("v6/A")),
        a.register(n("ul/r")),
        a.register(n("zwFG")),
        a.register(n("mNGm")),
        a.register(n("fu6h")),
        a.register(n("bSdp")),
        a.register(n("D75M")),
        a.register(n("sBZc")),
        a.register(n("R4va")),
        a.register(n("D+Se")),
        a.register(n("1MdW")),
        a.register(n("rfLa")),
        a.register(n("dnS0")),
        a.register(n("3vSn")),
        a.register(n("RcLD")),
        a.register(n("ebaj")),
        a.register(n("JfXJ")),
        a.register(n("Azb4")),
        a.register(n("npx2")),
        a.register(n("G73E")),
        a.register(n("BWuY")),
        a.register(n("piw0")),
        a.register(n("LbkK")),
        a.register(n("F2b0")),
        a.register(n("tQ4h")),
        a.register(n("vSYx")),
        a.register(n("pJgR")),
        a.register(n("41kq")),
        a.register(n("0HCD")),
        a.register(n("C3kK")),
        a.register(n("oTt7")),
        a.register(n("SVLc")),
        a.register(n("0Wr9")),
        a.register(n("oV7L")),
        a.register(n("ER9t")),
        a.register(n("qcbc")),
        a.register(n("zFKg")),
        a.register(n("vCn/")),
        a.register(n("orAT")),
        a.register(n("dLlz")),
        a.register(n("sYQe")),
        a.register(n("4UXz")),
        a.register(n("Dhqu")),
        a.register(n("uFsh")),
        a.register(n("ZZii")),
        a.register(n("VvBV")),
        a.register(n("kk9f")),
        a.register(n("YHgv")),
        a.register(n("O/s9")),
        a.register(n("LMH6")),
        a.register(n("UO0u")),
        a.register(n("F+rS")),
        a.register(n("Ukos")),
        a.register(n("T09G")),
        a.register(n("xdbo")),
        a.register(n("dQnZ")),
        a.register(n("WUdu")),
        a.register(n("P1pa")),
        a.register(n("5/I5")),
        a.register(n("xwQe")),
        a.register(n("MU+u")),
        a.register(n("+E/D")),
        a.register(n("m+qi")),
        a.register(n("SNVr")),
        a.register(n("aKgD")),
        a.register(n("rxUy")),
        a.register(n("jCh7")),
        a.register(n("057u")),
        a.register(n("Hwnw")),
        a.register(n("uBZG"));
    },
    aKgD: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ }
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/
        };
      }
      (e.exports = a), (a.displayName = "wasm"), (a.aliases = []);
    },
    aUvw: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.nginx = e.languages.extend("clike", {
          comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 },
          keyword: /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|events|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types|ssl_session_tickets|ssl_stapling|ssl_stapling_verify|ssl_ecdh_curve|ssl_trusted_certificate|more_set_headers|ssl_early_data)\b/i
        })),
          e.languages.insertBefore("nginx", "keyword", {
            variable: /\$[a-z_]+/i
          });
      }
      (e.exports = a), (a.displayName = "nginx"), (a.aliases = []);
    },
    agnA: function(e, t, n) {
      "use strict";
      var a = n("DxsT");
      function o(e) {
        e.register(a),
          (function(e) {
            var t = {
              code: {
                pattern: /(^(\s*(?:\*\s*)*)).*[^*\s].+$/m,
                lookbehind: !0,
                inside: e.languages.java,
                alias: "language-java"
              }
            };
            (e.languages.javadoc = e.languages.extend("javadoclike", {})),
              e.languages.insertBefore("javadoc", "keyword", {
                "class-name": [
                  {
                    pattern: /(@(?:exception|throws|see|link|linkplain|value)\s+(?:[a-z\d]+\.)*)[A-Z](?:\w*[a-z]\w*)?(?:\.[A-Z](?:\w*[a-z]\w*)?)*/,
                    lookbehind: !0,
                    inside: { punctuation: /\./ }
                  },
                  {
                    pattern: /(@param\s+)<[A-Z]\w*>/,
                    lookbehind: !0,
                    inside: { punctuation: /[.<>]/ }
                  }
                ],
                namespace: {
                  pattern: /(@(?:exception|throws|see|link|linkplain)\s+)(?:[a-z\d]+\.)+/,
                  lookbehind: !0,
                  inside: { punctuation: /\./ }
                },
                "code-section": [
                  {
                    pattern: /(\{@code\s+)(?:[^{}]|\{[^{}]*\})+?(?=\s*\})/,
                    lookbehind: !0,
                    inside: t
                  },
                  {
                    pattern: /(<(code|tt)>\s*)[\s\S]+?(?=\s*<\/\2>)/,
                    lookbehind: !0,
                    inside: t
                  }
                ],
                tag: e.languages.markup.tag
              }),
              e.languages.javadoclike.addSupport("java", e.languages.javadoc);
          })(e);
      }
      (e.exports = o), (o.displayName = "javadoc"), (o.aliases = []);
    },
    amLO: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ }
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/
        };
      }
      (e.exports = a), (a.displayName = "clike"), (a.aliases = []);
    },
    b9um: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          MozTabSize: "2",
          OTabSize: "2",
          tabSize: "2",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          whiteSpace: "pre-wrap",
          wordWrap: "normal",
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: "14px",
          color: "#76d9e6",
          textShadow: "none"
        },
        'pre[class*="language-"]': {
          MozTabSize: "2",
          OTabSize: "2",
          tabSize: "2",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          whiteSpace: "pre-wrap",
          wordWrap: "normal",
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: "14px",
          color: "#76d9e6",
          textShadow: "none",
          background: "#2a2a2a",
          padding: "15px",
          borderRadius: "4px",
          border: "1px solid #e1e1e8",
          overflow: "auto",
          position: "relative"
        },
        ':not(pre)>code[class*="language-"]': {
          background: "#2a2a2a",
          padding: "0.15em 0.2em 0.05em",
          borderRadius: ".3em",
          border: "0.13em solid #7a6652",
          boxShadow: "1px 1px 0.3em -0.1em #000 inset"
        },
        'pre[class*="language-"] code': { whiteSpace: "pre", display: "block" },
        namespace: { Opacity: ".7" },
        comment: { color: "#6f705e" },
        prolog: { color: "#6f705e" },
        doctype: { color: "#6f705e" },
        cdata: { color: "#6f705e" },
        operator: { color: "#a77afe" },
        boolean: { color: "#a77afe" },
        number: { color: "#a77afe" },
        "attr-name": { color: "#e6d06c" },
        string: { color: "#e6d06c" },
        entity: { color: "#e6d06c", cursor: "help" },
        url: { color: "#e6d06c" },
        ".language-css .token.string": { color: "#e6d06c" },
        ".style .token.string": { color: "#e6d06c" },
        selector: { color: "#a6e22d" },
        inserted: { color: "#a6e22d" },
        atrule: { color: "#ef3b7d" },
        "attr-value": { color: "#ef3b7d" },
        keyword: { color: "#ef3b7d" },
        important: { color: "#ef3b7d", fontWeight: "bold" },
        deleted: { color: "#ef3b7d" },
        regex: { color: "#76d9e6" },
        statement: { color: "#76d9e6", fontWeight: "bold" },
        placeholder: { color: "#fff" },
        variable: { color: "#fff" },
        bold: { fontWeight: "bold" },
        punctuation: { color: "#bebec5" },
        italic: { fontStyle: "italic" },
        "code.language-markup": { color: "#f9f9f9" },
        "code.language-markup .token.tag": { color: "#ef3b7d" },
        "code.language-markup .token.attr-name": { color: "#a6e22d" },
        "code.language-markup .token.attr-value": { color: "#e6d06c" },
        "code.language-markup .token.style": { color: "#76d9e6" },
        "code.language-markup .token.script": { color: "#76d9e6" },
        "code.language-markup .token.script .token.keyword": {
          color: "#76d9e6"
        },
        'pre[class*="language-"][data-line]': {
          position: "relative",
          padding: "1em 0 1em 3em"
        },
        "pre[data-line] .line-highlight": {
          position: "absolute",
          left: "0",
          right: "0",
          padding: "0",
          marginTop: "1em",
          background: "rgba(255, 255, 255, 0.08)",
          pointerEvents: "none",
          lineHeight: "inherit",
          whiteSpace: "pre"
        },
        "pre[data-line] .line-highlight:before": {
          content: "attr(data-start)",
          position: "absolute",
          top: ".4em",
          left: ".6em",
          minWidth: "1em",
          padding: "0.2em 0.5em",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          color: "black",
          font: "bold 65%/1 sans-serif",
          height: "1em",
          lineHeight: "1em",
          textAlign: "center",
          borderRadius: "999px",
          textShadow: "none",
          boxShadow: "0 1px 1px rgba(255, 255, 255, 0.7)"
        },
        "pre[data-line] .line-highlight[data-end]:after": {
          content: "attr(data-end)",
          position: "absolute",
          top: "auto",
          left: ".6em",
          minWidth: "1em",
          padding: "0.2em 0.5em",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          color: "black",
          font: "bold 65%/1 sans-serif",
          height: "1em",
          lineHeight: "1em",
          textAlign: "center",
          borderRadius: "999px",
          textShadow: "none",
          boxShadow: "0 1px 1px rgba(255, 255, 255, 0.7)",
          bottom: ".4em"
        }
      };
    },
    bAF5: function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        return e.toLowerCase();
      };
    },
    bFEn: function(e, t, n) {
      "use strict";
      var a = n("7+hk"),
        o = n("rS7C")(a, "div");
      (o.displayName = "html"), (e.exports = o);
    },
    bHgY: function(e, t, n) {
      "use strict";
      var a = n("FWC9"),
        o = n("DUvi"),
        r = a.booleanish,
        i = a.number,
        s = a.spaceSeparated;
      e.exports = o({
        transform: function(e, t) {
          return "role" === t ? t : "aria-" + t.slice(4).toLowerCase();
        },
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: r,
          ariaAutoComplete: null,
          ariaBusy: r,
          ariaChecked: r,
          ariaColCount: i,
          ariaColIndex: i,
          ariaColSpan: i,
          ariaControls: s,
          ariaCurrent: null,
          ariaDescribedBy: s,
          ariaDetails: null,
          ariaDisabled: r,
          ariaDropEffect: s,
          ariaErrorMessage: null,
          ariaExpanded: r,
          ariaFlowTo: s,
          ariaGrabbed: r,
          ariaHasPopup: null,
          ariaHidden: r,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: s,
          ariaLevel: i,
          ariaLive: null,
          ariaModal: r,
          ariaMultiLine: r,
          ariaMultiSelectable: r,
          ariaOrientation: null,
          ariaOwns: s,
          ariaPlaceholder: null,
          ariaPosInSet: i,
          ariaPressed: r,
          ariaReadOnly: r,
          ariaRelevant: null,
          ariaRequired: r,
          ariaRoleDescription: s,
          ariaRowCount: i,
          ariaRowIndex: i,
          ariaRowSpan: i,
          ariaSelected: r,
          ariaSetSize: i,
          ariaSort: null,
          ariaValueMax: i,
          ariaValueMin: i,
          ariaValueNow: i,
          ariaValueText: null,
          role: null
        }
      });
    },
    bSdp: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.pascal = {
          comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
          string: {
            pattern: /(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
            greedy: !0
          },
          keyword: [
            {
              pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
              lookbehind: !0
            },
            {
              pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
              lookbehind: !0
            },
            {
              pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
              lookbehind: !0
            },
            {
              pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
              lookbehind: !0
            }
          ],
          number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
          operator: [
            /\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i,
            {
              pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
              lookbehind: !0
            }
          ],
          punctuation: /\(\.|\.\)|[()\[\]:;,.]/
        }),
          (e.languages.objectpascal = e.languages.pascal);
      }
      (e.exports = a),
        (a.displayName = "pascal"),
        (a.aliases = ["objectpascal"]);
    },
    bVZc: function(e, t, n) {
      "use strict";
      (function(e) {
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        (t.__esModule = !0), (t.default = void 0);
        var a = "undefined" !== typeof e && e.env && !0,
          o = function(e) {
            return "[object String]" === Object.prototype.toString.call(e);
          },
          r = (function() {
            function e(e) {
              var t = void 0 === e ? {} : e,
                n = t.name,
                r = void 0 === n ? "stylesheet" : n,
                s = t.optimizeForSpeed,
                l = void 0 === s ? a : s,
                c = t.isBrowser,
                d = void 0 === c ? "undefined" !== typeof window : c;
              i(o(r), "`name` must be a string"),
                (this._name = r),
                (this._deletedRulePlaceholder =
                  "#" + r + "-deleted-rule____{}"),
                i(
                  "boolean" === typeof l,
                  "`optimizeForSpeed` must be a boolean"
                ),
                (this._optimizeForSpeed = l),
                (this._isBrowser = d),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0);
              var u =
                this._isBrowser &&
                document.querySelector('meta[property="csp-nonce"]');
              this._nonce = u ? u.getAttribute("content") : null;
            }
            var t,
              r,
              s,
              l = e.prototype;
            return (
              (l.setOptimizeForSpeed = function(e) {
                i(
                  "boolean" === typeof e,
                  "`setOptimizeForSpeed` accepts a boolean"
                ),
                  i(
                    0 === this._rulesCount,
                    "optimizeForSpeed cannot be when rules have already been inserted"
                  ),
                  this.flush(),
                  (this._optimizeForSpeed = e),
                  this.inject();
              }),
              (l.isOptimizeForSpeed = function() {
                return this._optimizeForSpeed;
              }),
              (l.inject = function() {
                var e = this;
                if (
                  (i(!this._injected, "sheet already injected"),
                  (this._injected = !0),
                  this._isBrowser && this._optimizeForSpeed)
                )
                  return (
                    (this._tags[0] = this.makeStyleTag(this._name)),
                    (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                    void (
                      this._optimizeForSpeed ||
                      (a ||
                        console.warn(
                          "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                        ),
                      this.flush(),
                      (this._injected = !0))
                    )
                  );
                this._serverSheet = {
                  cssRules: [],
                  insertRule: function(t, n) {
                    return (
                      "number" === typeof n
                        ? (e._serverSheet.cssRules[n] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      n
                    );
                  },
                  deleteRule: function(t) {
                    e._serverSheet.cssRules[t] = null;
                  }
                };
              }),
              (l.getSheetForTag = function(e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t];
              }),
              (l.getSheet = function() {
                return this.getSheetForTag(this._tags[this._tags.length - 1]);
              }),
              (l.insertRule = function(e, t) {
                if (
                  (i(o(e), "`insertRule` accepts only strings"),
                  !this._isBrowser)
                )
                  return (
                    "number" !== typeof t &&
                      (t = this._serverSheet.cssRules.length),
                    this._serverSheet.insertRule(e, t),
                    this._rulesCount++
                  );
                if (this._optimizeForSpeed) {
                  var n = this.getSheet();
                  "number" !== typeof t && (t = n.cssRules.length);
                  try {
                    n.insertRule(e, t);
                  } catch (s) {
                    return (
                      a ||
                        console.warn(
                          "StyleSheet: illegal rule: \n\n" +
                            e +
                            "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                        ),
                      -1
                    );
                  }
                } else {
                  var r = this._tags[t];
                  this._tags.push(this.makeStyleTag(this._name, e, r));
                }
                return this._rulesCount++;
              }),
              (l.replaceRule = function(e, t) {
                if (this._optimizeForSpeed || !this._isBrowser) {
                  var n = this._isBrowser ? this.getSheet() : this._serverSheet;
                  if (
                    (t.trim() || (t = this._deletedRulePlaceholder),
                    !n.cssRules[e])
                  )
                    return e;
                  n.deleteRule(e);
                  try {
                    n.insertRule(t, e);
                  } catch (r) {
                    a ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          t +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                      n.insertRule(this._deletedRulePlaceholder, e);
                  }
                } else {
                  var o = this._tags[e];
                  i(o, "old rule at index `" + e + "` not found"),
                    (o.textContent = t);
                }
                return e;
              }),
              (l.deleteRule = function(e) {
                if (this._isBrowser)
                  if (this._optimizeForSpeed) this.replaceRule(e, "");
                  else {
                    var t = this._tags[e];
                    i(t, "rule at index `" + e + "` not found"),
                      t.parentNode.removeChild(t),
                      (this._tags[e] = null);
                  }
                else this._serverSheet.deleteRule(e);
              }),
              (l.flush = function() {
                (this._injected = !1),
                  (this._rulesCount = 0),
                  this._isBrowser
                    ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e);
                      }),
                      (this._tags = []))
                    : (this._serverSheet.cssRules = []);
              }),
              (l.cssRules = function() {
                var e = this;
                return this._isBrowser
                  ? this._tags.reduce(function(t, n) {
                      return (
                        n
                          ? (t = t.concat(
                              Array.prototype.map.call(
                                e.getSheetForTag(n).cssRules,
                                function(t) {
                                  return t.cssText === e._deletedRulePlaceholder
                                    ? null
                                    : t;
                                }
                              )
                            ))
                          : t.push(null),
                        t
                      );
                    }, [])
                  : this._serverSheet.cssRules;
              }),
              (l.makeStyleTag = function(e, t, n) {
                t &&
                  i(
                    o(t),
                    "makeStyleTag acceps only strings as second parameter"
                  );
                var a = document.createElement("style");
                this._nonce && a.setAttribute("nonce", this._nonce),
                  (a.type = "text/css"),
                  a.setAttribute("data-" + e, ""),
                  t && a.appendChild(document.createTextNode(t));
                var r =
                  document.head || document.getElementsByTagName("head")[0];
                return n ? r.insertBefore(a, n) : r.appendChild(a), a;
              }),
              (t = e),
              (r = [
                {
                  key: "length",
                  get: function() {
                    return this._rulesCount;
                  }
                }
              ]) && n(t.prototype, r),
              s && n(t, s),
              e
            );
          })();
        function i(e, t) {
          if (!e) throw new Error("StyleSheet: " + t + ".");
        }
        t.default = r;
      }.call(this, n("8oxB")));
    },
    c0d7: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.apacheconf = {
          comment: /#.*/,
          "directive-inline": {
            pattern: /(^\s*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
            lookbehind: !0,
            alias: "property"
          },
          "directive-block": {
            pattern: /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b *.*>/i,
            inside: {
              "directive-block": {
                pattern: /^<\/?\w+/,
                inside: { punctuation: /^<\/?/ },
                alias: "tag"
              },
              "directive-block-parameter": {
                pattern: /.*[^>]/,
                inside: {
                  punctuation: /:/,
                  string: {
                    pattern: /("|').*\1/,
                    inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ }
                  }
                },
                alias: "attr-value"
              },
              punctuation: />/
            },
            alias: "tag"
          },
          "directive-flags": { pattern: /\[(?:\w,?)+\]/, alias: "keyword" },
          string: {
            pattern: /("|').*\1/,
            inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ }
          },
          variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
          regex: /\^?.*\$|\^.*\$?/
        };
      }
      (e.exports = a), (a.displayName = "apacheconf"), (a.aliases = []);
    },
    c2c2: function(e, t, n) {
      "use strict";
      var a = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "coy", {
          enumerable: !0,
          get: function() {
            return o.default;
          }
        }),
        Object.defineProperty(t, "dark", {
          enumerable: !0,
          get: function() {
            return r.default;
          }
        }),
        Object.defineProperty(t, "funky", {
          enumerable: !0,
          get: function() {
            return i.default;
          }
        }),
        Object.defineProperty(t, "okaidia", {
          enumerable: !0,
          get: function() {
            return s.default;
          }
        }),
        Object.defineProperty(t, "solarizedlight", {
          enumerable: !0,
          get: function() {
            return l.default;
          }
        }),
        Object.defineProperty(t, "tomorrow", {
          enumerable: !0,
          get: function() {
            return c.default;
          }
        }),
        Object.defineProperty(t, "twilight", {
          enumerable: !0,
          get: function() {
            return d.default;
          }
        }),
        Object.defineProperty(t, "prism", {
          enumerable: !0,
          get: function() {
            return u.default;
          }
        }),
        Object.defineProperty(t, "atomDark", {
          enumerable: !0,
          get: function() {
            return p.default;
          }
        }),
        Object.defineProperty(t, "base16AteliersulphurpoolLight", {
          enumerable: !0,
          get: function() {
            return g.default;
          }
        }),
        Object.defineProperty(t, "cb", {
          enumerable: !0,
          get: function() {
            return m.default;
          }
        }),
        Object.defineProperty(t, "darcula", {
          enumerable: !0,
          get: function() {
            return f.default;
          }
        }),
        Object.defineProperty(t, "duotoneDark", {
          enumerable: !0,
          get: function() {
            return b.default;
          }
        }),
        Object.defineProperty(t, "duotoneEarth", {
          enumerable: !0,
          get: function() {
            return h.default;
          }
        }),
        Object.defineProperty(t, "duotoneForest", {
          enumerable: !0,
          get: function() {
            return E.default;
          }
        }),
        Object.defineProperty(t, "duotoneLight", {
          enumerable: !0,
          get: function() {
            return S.default;
          }
        }),
        Object.defineProperty(t, "duotoneSea", {
          enumerable: !0,
          get: function() {
            return _.default;
          }
        }),
        Object.defineProperty(t, "duotoneSpace", {
          enumerable: !0,
          get: function() {
            return y.default;
          }
        }),
        Object.defineProperty(t, "ghcolors", {
          enumerable: !0,
          get: function() {
            return A.default;
          }
        }),
        Object.defineProperty(t, "hopscotch", {
          enumerable: !0,
          get: function() {
            return T.default;
          }
        }),
        Object.defineProperty(t, "pojoaque", {
          enumerable: !0,
          get: function() {
            return R.default;
          }
        }),
        Object.defineProperty(t, "vs", {
          enumerable: !0,
          get: function() {
            return I.default;
          }
        }),
        Object.defineProperty(t, "xonokai", {
          enumerable: !0,
          get: function() {
            return N.default;
          }
        });
      var o = a(n("61xa")),
        r = a(n("PCRY")),
        i = a(n("H0fq")),
        s = a(n("WVFU")),
        l = a(n("fL8H")),
        c = a(n("wGQB")),
        d = a(n("iy38")),
        u = a(n("6MAg")),
        p = a(n("N4m7")),
        g = a(n("mAwW")),
        m = a(n("38Ti")),
        f = a(n("Tauu")),
        b = a(n("007m")),
        h = a(n("kWEd")),
        E = a(n("9891")),
        S = a(n("4+h/")),
        _ = a(n("++Eq")),
        y = a(n("Y+Mq")),
        A = a(n("GVPn")),
        T = a(n("HbD6")),
        R = a(n("fe/W")),
        I = a(n("C7Ve")),
        N = a(n("b9um"));
    },
    cJKJ: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.docker = {
          keyword: {
            pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
            lookbehind: !0
          },
          string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
          comment: /#.*/,
          punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
        }),
          (e.languages.dockerfile = e.languages.docker);
      }
      (e.exports = a), (a.displayName = "docker"), (a.aliases = ["dockerfile"]);
    },
    cKbU: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.erlang = {
          comment: /%.+/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          "quoted-function": {
            pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
            alias: "function"
          },
          "quoted-atom": { pattern: /'(?:\\.|[^\\'\r\n])+'/, alias: "atom" },
          boolean: /\b(?:true|false)\b/,
          keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
          number: [
            /\$\\?./,
            /\d+#[a-z0-9]+/i,
            /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i
          ],
          function: /\b[a-z][\w@]*(?=\()/,
          variable: {
            pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
            lookbehind: !0
          },
          operator: [
            /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
            { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
            { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 }
          ],
          atom: /\b[a-z][\w@]*/,
          punctuation: /[()[\]{}:;,.#|]|<<|>>/
        };
      }
      (e.exports = a), (a.displayName = "erlang"), (a.aliases = []);
    },
    cbKp: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.go = e.languages.extend("clike", {
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          string: { pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 }
        })),
          delete e.languages.go["class-name"];
      }
      (e.exports = a), (a.displayName = "go"), (a.aliases = []);
    },
    cirD: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.aspnet = e.languages.extend("markup", {
          "page-directive tag": {
            pattern: /<%\s*@.*%>/i,
            inside: {
              "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
              rest: e.languages.markup.tag.inside
            }
          },
          "directive tag": {
            pattern: /<%.*%>/i,
            inside: {
              "directive tag": /<%\s*?[$=%#:]{0,2}|%>/i,
              rest: e.languages.csharp
            }
          }
        })),
          (e.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
          e.languages.insertBefore(
            "inside",
            "punctuation",
            { "directive tag": e.languages.aspnet["directive tag"] },
            e.languages.aspnet.tag.inside["attr-value"]
          ),
          e.languages.insertBefore("aspnet", "comment", {
            "asp comment": /<%--[\s\S]*?--%>/
          }),
          e.languages.insertBefore(
            "aspnet",
            e.languages.javascript ? "script" : "tag",
            {
              "asp script": {
                pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: e.languages.csharp || {}
              }
            }
          );
      }
      (e.exports = a), (a.displayName = "aspnet"), (a.aliases = []);
    },
    cjGb: function(e, t, n) {
      "use strict";
      var a = n("Qg97");
      function o(e) {
        e.register(a),
          (e.languages.jsonp = e.languages.extend("json", {
            punctuation: /[{}[\]();,.]/
          })),
          e.languages.insertBefore("jsonp", "punctuation", {
            function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/
          });
      }
      (e.exports = o), (o.displayName = "jsonp"), (o.aliases = []);
    },
    czuR: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.brainfuck = {
          pointer: { pattern: /<|>/, alias: "keyword" },
          increment: { pattern: /\+/, alias: "inserted" },
          decrement: { pattern: /-/, alias: "deleted" },
          branching: { pattern: /\[|\]/, alias: "important" },
          operator: /[.,]/,
          comment: /\S+/
        };
      }
      (e.exports = a), (a.displayName = "brainfuck"), (a.aliases = []);
    },
    d04V: function(e, t, n) {
      e.exports = n("0tVQ");
    },
    dKIx: function(e, t, n) {
      "use strict";
      e.exports = o;
      var a = o.prototype;
      function o(e, t, n) {
        (this.property = e), (this.normal = t), n && (this.space = n);
      }
      (a.space = null), (a.normal = {}), (a.property = {});
    },
    dL40: function(e, t, n) {
      var a = n("Y7ZC");
      a(a.P + a.R, "Set", { toJSON: n("8iia")("Set") });
    },
    dLlz: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.smalltalk = {
          comment: /"(?:""|[^"])*"/,
          string: /'(?:''|[^'])*'/,
          symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
          "block-arguments": {
            pattern: /(\[\s*):[^\[|]*\|/,
            lookbehind: !0,
            inside: { variable: /:[\da-z]+/i, punctuation: /\|/ }
          },
          "temporary-variables": {
            pattern: /\|[^|]+\|/,
            inside: { variable: /[\da-z]+/i, punctuation: /\|/ }
          },
          keyword: /\b(?:nil|true|false|self|super|new)\b/,
          character: { pattern: /\$./, alias: "string" },
          number: [
            /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
            /\b\d+(?:\.\d+)?(?:e-?\d+)?/
          ],
          operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
          punctuation: /[.;:?\[\](){}]/
        };
      }
      (e.exports = a), (a.displayName = "smalltalk"), (a.aliases = []);
    },
    dQnZ: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.twig = {
          comment: /\{#[\s\S]*?#\}/,
          tag: {
            pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
            inside: {
              ld: {
                pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
                inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ }
              },
              rd: { pattern: /-?(?:%\}|\}\})$/, inside: { punctuation: /.+/ } },
              string: {
                pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                inside: { punctuation: /^['"]|['"]$/ }
              },
              keyword: /\b(?:even|if|odd)\b/,
              boolean: /\b(?:true|false|null)\b/,
              number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
              operator: [
                {
                  pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                  lookbehind: !0
                },
                /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
              ],
              property: /\b[a-zA-Z_]\w*\b/,
              punctuation: /[()\[\]{}:.,]/
            }
          },
          other: { pattern: /\S(?:[\s\S]*\S)?/, inside: e.languages.markup }
        };
      }
      (e.exports = a), (a.displayName = "twig"), (a.aliases = []);
    },
    dXJL: function(e, t, n) {
      "use strict";
      var a = n("DUvi"),
        o = n("y3WP");
      e.exports = a({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: o,
        properties: { xmlns: null, xmlnsXLink: null }
      });
    },
    dj8l: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.hpkp = {
          directive: {
            pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
            alias: "keyword"
          },
          safe: { pattern: /\d{7,}/, alias: "selector" },
          unsafe: { pattern: /\d{1,6}/, alias: "function" }
        };
      }
      (e.exports = a), (a.displayName = "hpkp"), (a.aliases = []);
    },
    dnS0: function(e, t, n) {
      "use strict";
      var a = n("uFsh");
      function o(e) {
        e.register(a),
          (function(e) {
            var t = (e.languages.plsql = e.languages.extend("sql", {
                comment: [/\/\*[\s\S]*?\*\//, /--.*/]
              })),
              n = t.keyword;
            Array.isArray(n) || (n = t.keyword = [n]),
              n.unshift(
                /\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i
              );
            var a = t.operator;
            Array.isArray(a) || (a = t.operator = [a]), a.unshift(/:=/);
          })(e);
      }
      (e.exports = o), (o.displayName = "plsql"), (o.aliases = []);
    },
    du5t: function(e, t, n) {
      "use strict";
      var a = n("DUvi");
      e.exports = a({
        space: "xlink",
        transform: function(e, t) {
          return "xlink:" + t.slice(5).toLowerCase();
        },
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null
        }
      });
    },
    eAD1: function(e, t, n) {
      "use strict";
      var a = n("DUvi");
      e.exports = a({
        space: "xml",
        transform: function(e, t) {
          return "xml:" + t.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
      });
    },
    ebaj: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.prolog = {
          comment: [/%.+/, /\/\*[\s\S]*?\*\//],
          string: {
            pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
          variable: /\b[A-Z_]\w*/,
          function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
          number: /\b\d+\.?\d*/,
          operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
          punctuation: /[(){}\[\],]/
        };
      }
      (e.exports = a), (a.displayName = "prolog"), (a.aliases = []);
    },
    ex7v: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.asm6502 = {
          comment: /;.*/,
          directive: { pattern: /\.\w+(?= )/, alias: "keyword" },
          string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          opcode: {
            pattern: /\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA)\b/,
            alias: "property"
          },
          hexnumber: { pattern: /#?\$[\da-f]{2,4}/i, alias: "string" },
          binarynumber: { pattern: /#?%[01]+/, alias: "string" },
          decimalnumber: { pattern: /#?\d+/, alias: "string" },
          register: { pattern: /\b[xya]\b/i, alias: "variable" }
        };
      }
      (e.exports = a), (a.displayName = "asm6502"), (a.aliases = []);
    },
    fGSI: function(e, t, n) {
      var a = n("p0XB");
      e.exports = function(e) {
        if (a(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t];
          return n;
        }
      };
    },
    fL8H: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#657b83",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "#657b83",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto",
          borderRadius: "0.3em",
          backgroundColor: "#fdf6e3"
        },
        'pre[class*="language-"]::-moz-selection': { background: "#073642" },
        'pre[class*="language-"] ::-moz-selection': { background: "#073642" },
        'code[class*="language-"]::-moz-selection': { background: "#073642" },
        'code[class*="language-"] ::-moz-selection': { background: "#073642" },
        'pre[class*="language-"]::selection': { background: "#073642" },
        'pre[class*="language-"] ::selection': { background: "#073642" },
        'code[class*="language-"]::selection': { background: "#073642" },
        'code[class*="language-"] ::selection': { background: "#073642" },
        ':not(pre) > code[class*="language-"]': {
          backgroundColor: "#fdf6e3",
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#93a1a1" },
        prolog: { color: "#93a1a1" },
        doctype: { color: "#93a1a1" },
        cdata: { color: "#93a1a1" },
        punctuation: { color: "#586e75" },
        ".namespace": { Opacity: ".7" },
        property: { color: "#268bd2" },
        tag: { color: "#268bd2" },
        boolean: { color: "#268bd2" },
        number: { color: "#268bd2" },
        constant: { color: "#268bd2" },
        symbol: { color: "#268bd2" },
        deleted: { color: "#268bd2" },
        selector: { color: "#2aa198" },
        "attr-name": { color: "#2aa198" },
        string: { color: "#2aa198" },
        char: { color: "#2aa198" },
        builtin: { color: "#2aa198" },
        url: { color: "#2aa198" },
        inserted: { color: "#2aa198" },
        entity: { color: "#657b83", background: "#eee8d5", cursor: "help" },
        atrule: { color: "#859900" },
        "attr-value": { color: "#859900" },
        keyword: { color: "#859900" },
        function: { color: "#b58900" },
        "class-name": { color: "#b58900" },
        regex: { color: "#cb4b16" },
        important: { color: "#cb4b16", fontWeight: "bold" },
        variable: { color: "#cb4b16" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" }
      };
    },
    fNCr: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.j = {
          comment: /\bNB\..*/,
          string: { pattern: /'(?:''|[^'\r\n])*'/, greedy: !0 },
          keyword: /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
          verb: {
            pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
            alias: "keyword"
          },
          number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,
          adverb: { pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/, alias: "builtin" },
          operator: /[=a][.:]|_\./,
          conjunction: {
            pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
            alias: "variable"
          },
          punctuation: /[()]/
        };
      }
      (e.exports = a), (a.displayName = "j"), (a.aliases = []);
    },
    "fe/W": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          wordWrap: "break-word",
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: "15px",
          lineHeight: "1.5",
          color: "#dccf8f",
          textShadow: "0"
        },
        'pre[class*="language-"]': {
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          wordWrap: "break-word",
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: "15px",
          lineHeight: "1.5",
          color: "#DCCF8F",
          textShadow: "0",
          borderRadius: "5px",
          border: "1px solid #000",
          background:
            "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
          padding: "12px",
          overflow: "auto"
        },
        ':not(pre) > code[class*="language-"]': {
          borderRadius: "5px",
          border: "1px solid #000",
          color: "#DCCF8F",
          background:
            "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
          padding: "2px 6px"
        },
        namespace: { Opacity: ".7" },
        comment: { color: "#586e75", fontStyle: "italic" },
        prolog: { color: "#586e75", fontStyle: "italic" },
        doctype: { color: "#586e75", fontStyle: "italic" },
        cdata: { color: "#586e75", fontStyle: "italic" },
        number: { color: "#b89859" },
        string: { color: "#468966" },
        char: { color: "#468966" },
        builtin: { color: "#468966" },
        inserted: { color: "#468966" },
        "attr-name": { color: "#b89859" },
        operator: { color: "#dccf8f" },
        entity: { color: "#dccf8f", cursor: "help" },
        url: { color: "#dccf8f" },
        ".language-css .token.string": { color: "#dccf8f" },
        ".style .token.string": { color: "#dccf8f" },
        selector: { color: "#859900" },
        regex: { color: "#859900" },
        atrule: { color: "#cb4b16" },
        keyword: { color: "#cb4b16" },
        "attr-value": { color: "#468966" },
        function: { color: "#b58900" },
        variable: { color: "#b58900" },
        placeholder: { color: "#b58900" },
        property: { color: "#b89859" },
        tag: { color: "#ffb03b" },
        boolean: { color: "#b89859" },
        constant: { color: "#b89859" },
        symbol: { color: "#b89859" },
        important: { color: "#dc322f" },
        statement: { color: "#dc322f" },
        deleted: { color: "#dc322f" },
        punctuation: { color: "#dccf8f" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" }
      };
    },
    fjrl: function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        var t = "string" === typeof e ? e.charCodeAt(0) : e;
        return (
          (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57)
        );
      };
    },
    flTx: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = {
              pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,
              lookbehind: !0,
              inside: {
                quoted: {
                  pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
                  inside: { punctuation: /^[$`]|[$`]$/ }
                },
                interpreted: {
                  pattern: /'(?:[^'\\]|\\.)*'/,
                  inside: { punctuation: /^'|'$/ }
                },
                string: /"(?:[^"\\]|\\.)*"/,
                variable: /\w+(?==)/,
                punctuation: /^\[|\]$|,/,
                operator: /=/,
                "attr-value": /(?!^\s+$).+/
              }
            },
            n = (e.languages.asciidoc = {
              "comment-block": {
                pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
                alias: "comment"
              },
              table: {
                pattern: /^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,
                inside: {
                  specifiers: {
                    pattern: /(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,
                    alias: "attr-value"
                  },
                  punctuation: { pattern: /(^|[^\\])[|!]=*/, lookbehind: !0 }
                }
              },
              "passthrough-block": {
                pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                inside: { punctuation: /^\++|\++$/ }
              },
              "literal-block": {
                pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                inside: { punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/ }
              },
              "other-block": {
                pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                inside: { punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/ }
              },
              "list-punctuation": {
                pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
                lookbehind: !0,
                alias: "punctuation"
              },
              "list-label": {
                pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
                lookbehind: !0,
                alias: "symbol"
              },
              "indented-block": {
                pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
                lookbehind: !0
              },
              comment: /^\/\/.*/m,
              title: {
                pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,
                alias: "important",
                inside: { punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/ }
              },
              "attribute-entry": {
                pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
                alias: "tag"
              },
              attributes: t,
              hr: { pattern: /^'{3,}$/m, alias: "punctuation" },
              "page-break": { pattern: /^<{3,}$/m, alias: "punctuation" },
              admonition: {
                pattern: /^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,
                alias: "keyword"
              },
              callout: [
                {
                  pattern: /(^[ \t]*)<?\d*>/m,
                  lookbehind: !0,
                  alias: "symbol"
                },
                { pattern: /<\d+>/, alias: "symbol" }
              ],
              macro: {
                pattern: /\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                inside: {
                  function: /^[a-z\d-]+(?=:)/,
                  punctuation: /^::?/,
                  attributes: {
                    pattern: /(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                    inside: t.inside
                  }
                }
              },
              inline: {
                pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?: ['`]|.)+?(?:(?:\r?\n|\r)(?: ['`]|.)+?)*['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
                lookbehind: !0,
                inside: {
                  attributes: t,
                  url: {
                    pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
                    inside: { punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/ }
                  },
                  "attribute-ref": {
                    pattern: /^\{.+\}$/,
                    inside: {
                      variable: {
                        pattern: /(^\{)[a-z\d,+_-]+/,
                        lookbehind: !0
                      },
                      operator: /^[=?!#%@$]|!(?=[:}])/,
                      punctuation: /^\{|\}$|::?/
                    }
                  },
                  italic: {
                    pattern: /^(['_])[\s\S]+\1$/,
                    inside: { punctuation: /^(?:''?|__?)|(?:''?|__?)$/ }
                  },
                  bold: {
                    pattern: /^\*[\s\S]+\*$/,
                    inside: { punctuation: /^\*\*?|\*\*?$/ }
                  },
                  punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
                }
              },
              replacement: { pattern: /\((?:C|TM|R)\)/, alias: "builtin" },
              entity: /&#?[\da-z]{1,8};/i,
              "line-continuation": {
                pattern: /(^| )\+$/m,
                lookbehind: !0,
                alias: "punctuation"
              }
            });
          function a(e) {
            for (var t = {}, a = 0, o = (e = e.split(" ")).length; a < o; a++)
              t[e[a]] = n[e[a]];
            return t;
          }
          (t.inside.interpreted.inside.rest = a(
            "macro inline replacement entity"
          )),
            (n["passthrough-block"].inside.rest = a("macro")),
            (n["literal-block"].inside.rest = a("callout")),
            (n.table.inside.rest = a(
              "comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"
            )),
            (n["other-block"].inside.rest = a(
              "table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"
            )),
            (n.title.inside.rest = a("macro inline replacement entity")),
            e.hooks.add("wrap", function(e) {
              "entity" === e.type &&
                (e.attributes.title = e.content.value.replace(/&amp;/, "&"));
            }),
            (e.languages.adoc = e.languages.asciidoc);
        })(e);
      }
      (e.exports = a), (a.displayName = "asciidoc"), (a.aliases = ["adoc"]);
    },
    fnZc: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          (e.languages.kotlin = e.languages.extend("clike", {
            keyword: {
              pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
              lookbehind: !0
            },
            function: [
              /\w+(?=\s*\()/,
              { pattern: /(\.)\w+(?=\s*\{)/, lookbehind: !0 }
            ],
            number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
            operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
          })),
            delete e.languages.kotlin["class-name"],
            e.languages.insertBefore("kotlin", "string", {
              "raw-string": { pattern: /("""|''')[\s\S]*?\1/, alias: "string" }
            }),
            e.languages.insertBefore("kotlin", "keyword", {
              annotation: {
                pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                alias: "builtin"
              }
            }),
            e.languages.insertBefore("kotlin", "function", {
              label: { pattern: /\w+@|@\w+/, alias: "symbol" }
            });
          var t = [
            {
              pattern: /\$\{[^}]+\}/,
              inside: {
                delimiter: { pattern: /^\$\{|\}$/, alias: "variable" },
                rest: e.languages.kotlin
              }
            },
            { pattern: /\$\w+/, alias: "variable" }
          ];
          e.languages.kotlin.string.inside = e.languages.kotlin[
            "raw-string"
          ].inside = { interpolation: t };
        })(e);
      }
      (e.exports = a), (a.displayName = "kotlin"), (a.aliases = []);
    },
    fu6h: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = (e.languages.parser = e.languages.extend("markup", {
            keyword: {
              pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
              lookbehind: !0
            },
            variable: {
              pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
              lookbehind: !0,
              inside: { punctuation: /\.|:+/ }
            },
            function: {
              pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
              lookbehind: !0,
              inside: {
                keyword: { pattern: /(^@)(?:GET_|SET_)/, lookbehind: !0 },
                punctuation: /\.|:+/
              }
            },
            escape: {
              pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
              alias: "builtin"
            },
            punctuation: /[\[\](){};]/
          }));
          (t = e.languages.insertBefore("parser", "keyword", {
            "parser-comment": {
              pattern: /(\s)#.*/,
              lookbehind: !0,
              alias: "comment"
            },
            expression: {
              pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
              greedy: !0,
              lookbehind: !0,
              inside: {
                string: {
                  pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
                  lookbehind: !0
                },
                keyword: t.keyword,
                variable: t.variable,
                function: t.function,
                boolean: /\b(?:true|false)\b/,
                number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
                escape: t.escape,
                operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
                punctuation: t.punctuation
              }
            }
          })),
            (t = e.languages.insertBefore(
              "inside",
              "punctuation",
              {
                expression: t.expression,
                keyword: t.keyword,
                variable: t.variable,
                function: t.function,
                escape: t.escape,
                "parser-punctuation": {
                  pattern: t.punctuation,
                  alias: "punctuation"
                }
              },
              t.tag.inside["attr-value"]
            ));
        })(e);
      }
      (e.exports = a), (a.displayName = "parser"), (a.aliases = []);
    },
    "fwF+": function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
              inside: { rule: /@[\w-]+/ }
            },
            url: {
              pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
              inside: { function: /^url/i, punctuation: /^\(|\)$/ }
            },
            selector: RegExp(
              "[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"
            ),
            string: { pattern: t, greedy: !0 },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                "style-attr": {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    "attr-name": {
                      pattern: /^\s*style/i,
                      inside: n.tag.inside
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": { pattern: /.+/i, inside: e.languages.css }
                  },
                  alias: "language-css"
                }
              },
              n.tag
            ));
        })(e);
      }
      (e.exports = a), (a.displayName = "css"), (a.aliases = []);
    },
    h6Os: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.autoit = {
          comment: [
            /;.*/,
            {
              pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
              lookbehind: !0
            }
          ],
          url: {
            pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
            lookbehind: !0
          },
          string: {
            pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
            greedy: !0,
            inside: { variable: /([%$@])\w+\1/ }
          },
          directive: {
            pattern: /(^\s*)#\w+/m,
            lookbehind: !0,
            alias: "keyword"
          },
          function: /\b\w+(?=\()/,
          variable: /[$@]\w+/,
          keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
          number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
          boolean: /\b(?:True|False)\b/i,
          operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
          punctuation: /[\[\]().,:]/
        };
      }
      (e.exports = a), (a.displayName = "autoit"), (a.aliases = []);
    },
    h9ot: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.abap = {
          comment: /^\*.*/m,
          string: /(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          "string-template": {
            pattern: /([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/,
            lookbehind: !0,
            alias: "string"
          },
          "eol-comment": {
            pattern: /(^|\s)".*/m,
            lookbehind: !0,
            alias: "comment"
          },
          keyword: {
            pattern: /(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,
            lookbehind: !0
          },
          number: /\b\d+\b/,
          operator: {
            pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,
            lookbehind: !0
          },
          "string-operator": {
            pattern: /(\s)&&?(?=\s)/,
            lookbehind: !0,
            alias: "keyword"
          },
          "token-operator": [
            {
              pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/,
              lookbehind: !0,
              alias: "punctuation"
            },
            { pattern: /[|{}]/, alias: "punctuation" }
          ],
          punctuation: /[,.:()]/
        };
      }
      (e.exports = a), (a.displayName = "abap"), (a.aliases = []);
    },
    hGJt: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.inform7 = {
          string: {
            pattern: /"[^"]*"/,
            inside: {
              substitution: {
                pattern: /\[[^\]]+\]/,
                inside: {
                  delimiter: { pattern: /\[|\]/, alias: "punctuation" }
                }
              }
            }
          },
          comment: { pattern: /\[[^\]]+\]/, greedy: !0 },
          title: {
            pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,
            alias: "important"
          },
          number: {
            pattern: /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
            lookbehind: !0
          },
          verb: {
            pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
            lookbehind: !0,
            alias: "operator"
          },
          keyword: {
            pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
            lookbehind: !0
          },
          property: {
            pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
            lookbehind: !0,
            alias: "symbol"
          },
          position: {
            pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
            lookbehind: !0,
            alias: "keyword"
          },
          type: {
            pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
            lookbehind: !0,
            alias: "variable"
          },
          punctuation: /[.,:;(){}]/
        }),
          (e.languages.inform7.string.inside.substitution.inside.rest =
            e.languages.inform7),
          (e.languages.inform7.string.inside.substitution.inside.rest.text = {
            pattern: /\S(?:\s*\S)*/,
            alias: "comment"
          });
      }
      (e.exports = a), (a.displayName = "inform7"), (a.aliases = []);
    },
    hQuw: function(e, t, n) {
      "use strict";
      var a = n("rDFf");
      function o(e) {
        e.register(a),
          (e.languages.arduino = e.languages.extend("cpp", {
            keyword: /\b(?:setup|if|else|while|do|for|return|in|instanceof|default|function|loop|goto|switch|case|new|try|throw|catch|finally|null|break|continue|boolean|bool|void|byte|word|string|String|array|int|long|integer|double)\b/,
            builtin: /\b(?:KeyboardController|MouseController|SoftwareSerial|EthernetServer|EthernetClient|LiquidCrystal|LiquidCrystal_I2C|RobotControl|GSMVoiceCall|EthernetUDP|EsploraTFT|HttpClient|RobotMotor|WiFiClient|GSMScanner|FileSystem|Scheduler|GSMServer|YunClient|YunServer|IPAddress|GSMClient|GSMModem|Keyboard|Ethernet|Console|GSMBand|Esplora|Stepper|Process|WiFiUDP|GSM_SMS|Mailbox|USBHost|Firmata|PImage|Client|Server|GSMPIN|FileIO|Bridge|Serial|EEPROM|Stream|Mouse|Audio|Servo|File|Task|GPRS|WiFi|Wire|TFT|GSM|SPI|SD|runShellCommandAsynchronously|analogWriteResolution|retrieveCallingNumber|printFirmwareVersion|analogReadResolution|sendDigitalPortPair|noListenOnLocalhost|readJoystickButton|setFirmwareVersion|readJoystickSwitch|scrollDisplayRight|getVoiceCallStatus|scrollDisplayLeft|writeMicroseconds|delayMicroseconds|beginTransmission|getSignalStrength|runAsynchronously|getAsynchronously|listenOnLocalhost|getCurrentCarrier|readAccelerometer|messageAvailable|sendDigitalPorts|lineFollowConfig|countryNameWrite|runShellCommand|readStringUntil|rewindDirectory|readTemperature|setClockDivider|readLightSensor|endTransmission|analogReference|detachInterrupt|countryNameRead|attachInterrupt|encryptionType|readBytesUntil|robotNameWrite|readMicrophone|robotNameRead|cityNameWrite|userNameWrite|readJoystickY|readJoystickX|mouseReleased|openNextFile|scanNetworks|noInterrupts|digitalWrite|beginSpeaker|mousePressed|isActionDone|mouseDragged|displayLogos|noAutoscroll|addParameter|remoteNumber|getModifiers|keyboardRead|userNameRead|waitContinue|processInput|parseCommand|printVersion|readNetworks|writeMessage|blinkVersion|cityNameRead|readMessage|setDataMode|parsePacket|isListening|setBitOrder|beginPacket|isDirectory|motorsWrite|drawCompass|digitalRead|clearScreen|serialEvent|rightToLeft|setTextSize|leftToRight|requestFrom|keyReleased|compassRead|analogWrite|interrupts|WiFiServer|disconnect|playMelody|parseFloat|autoscroll|getPINUsed|setPINUsed|setTimeout|sendAnalog|readSlider|analogRead|beginWrite|createChar|motorsStop|keyPressed|tempoWrite|readButton|subnetMask|debugPrint|macAddress|writeGreen|randomSeed|attachGPRS|readString|sendString|remotePort|releaseAll|mouseMoved|background|getXChange|getYChange|answerCall|getResult|voiceCall|endPacket|constrain|getSocket|writeJSON|getButton|available|connected|findUntil|readBytes|exitValue|readGreen|writeBlue|startLoop|IPAddress|isPressed|sendSysex|pauseMode|gatewayIP|setCursor|getOemKey|tuneWrite|noDisplay|loadImage|switchPIN|onRequest|onReceive|changePIN|playFile|noBuffer|parseInt|overflow|checkPIN|knobRead|beginTFT|bitClear|updateIR|bitWrite|position|writeRGB|highByte|writeRed|setSpeed|readBlue|noStroke|remoteIP|transfer|shutdown|hangCall|beginSMS|endWrite|attached|maintain|noCursor|checkReg|checkPUK|shiftOut|isValid|shiftIn|pulseIn|connect|println|localIP|pinMode|getIMEI|display|noBlink|process|getBand|running|beginSD|drawBMP|lowByte|setBand|release|bitRead|prepare|pointTo|readRed|setMode|noFill|remove|listen|stroke|detach|attach|noTone|exists|buffer|height|bitSet|circle|config|cursor|random|IRread|setDNS|endSMS|getKey|micros|millis|begin|print|write|ready|flush|width|isPIN|blink|clear|press|mkdir|rmdir|close|point|yield|image|BSSID|click|delay|read|text|move|peek|beep|rect|line|open|seek|fill|size|turn|stop|home|find|step|tone|sqrt|RSSI|SSID|end|bit|tan|cos|sin|pow|map|abs|max|min|get|run|put)\b/,
            constant: /\b(?:DIGITAL_MESSAGE|FIRMATA_STRING|ANALOG_MESSAGE|REPORT_DIGITAL|REPORT_ANALOG|INPUT_PULLUP|SET_PIN_MODE|INTERNAL2V56|SYSTEM_RESET|LED_BUILTIN|INTERNAL1V1|SYSEX_START|INTERNAL|EXTERNAL|DEFAULT|OUTPUT|INPUT|HIGH|LOW)\b/
          }));
      }
      (e.exports = o), (o.displayName = "arduino"), (o.aliases = []);
    },
    "hR/J": function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.less = e.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }
          ],
          atrule: {
            pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
            inside: { punctuation: /[:()]/ }
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ }
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/
        })),
          e.languages.insertBefore("less", "property", {
            variable: [
              { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
              /@@?[\w-]+/
            ],
            "mixin-usage": {
              pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
              lookbehind: !0,
              alias: "function"
            }
          });
      }
      (e.exports = a), (a.displayName = "less"), (a.aliases = []);
    },
    hvS6: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
            n = { "equation-command": { pattern: t, alias: "regex" } };
          (e.languages.latex = {
            comment: /%.*/m,
            cdata: {
              pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
              lookbehind: !0
            },
            equation: [
              {
                pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
                inside: n,
                alias: "string"
              },
              {
                pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
                lookbehind: !0,
                inside: n,
                alias: "string"
              }
            ],
            keyword: {
              pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
              lookbehind: !0
            },
            url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
            headline: {
              pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
              lookbehind: !0,
              alias: "class-name"
            },
            function: { pattern: t, alias: "selector" },
            punctuation: /[[\]{}&]/
          }),
            (e.languages.tex = e.languages.latex),
            (e.languages.context = e.languages.latex);
        })(e);
      }
      (e.exports = a),
        (a.displayName = "latex"),
        (a.aliases = ["tex", "context"]);
    },
    iY0B: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.nsis = {
          comment: {
            pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|[#;].*)/,
            lookbehind: !0
          },
          string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          keyword: {
            pattern: /(^\s*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(?:Font|Gradient|Image)|BrandingText|BringToFront|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DlgItem|DLLVersion(?:Local)?|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(?:Dialogs|Exec)|NSISdl|OutFile|Page(?:Callbacks)?|PE(?:DllCharacteristics|SubsysVer)|Pop|Push|Quit|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle)\b/m,
            lookbehind: !0
          },
          property: /\b(?:admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK((CR|CU|LM)(32|64)?|DD|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,
          constant: /\${[\w\.:\^-]+}|\$\([\w\.:\^-]+\)/i,
          variable: /\$\w+/i,
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
          operator: /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,
          punctuation: /[{}[\];(),.:]/,
          important: {
            pattern: /(^\s*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,
            lookbehind: !0
          }
        };
      }
      (e.exports = a), (a.displayName = "nsis"), (a.aliases = []);
    },
    iy38: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "white",
          background: "none",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          textShadow: "0 -.1em .2em black",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "white",
          background: "hsl(0, 0%, 8%)",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          textShadow: "0 -.1em .2em black",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          borderRadius: ".5em",
          border: ".3em solid hsl(0, 0%, 33%)",
          boxShadow: "1px 1px .5em black inset",
          margin: ".5em 0",
          overflow: "auto",
          padding: "1em"
        },
        ':not(pre) > code[class*="language-"]': {
          background: "hsl(0, 0%, 8%)",
          borderRadius: ".3em",
          border: ".13em solid hsl(0, 0%, 33%)",
          boxShadow: "1px 1px .3em -.1em black inset",
          padding: ".15em .2em .05em",
          whiteSpace: "normal"
        },
        'pre[class*="language-"]::-moz-selection': {
          background: "hsla(0, 0%, 93%, 0.15)",
          textShadow: "none"
        },
        'pre[class*="language-"]::selection': {
          background: "hsla(0, 0%, 93%, 0.15)",
          textShadow: "none"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "hsla(0, 0%, 93%, 0.15)"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "hsla(0, 0%, 93%, 0.15)"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "hsla(0, 0%, 93%, 0.15)"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "hsla(0, 0%, 93%, 0.15)"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "hsla(0, 0%, 93%, 0.15)"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "hsla(0, 0%, 93%, 0.15)"
        },
        comment: { color: "hsl(0, 0%, 47%)" },
        prolog: { color: "hsl(0, 0%, 47%)" },
        doctype: { color: "hsl(0, 0%, 47%)" },
        cdata: { color: "hsl(0, 0%, 47%)" },
        punctuation: { Opacity: ".7" },
        ".namespace": { Opacity: ".7" },
        tag: { color: "hsl(14, 58%, 55%)" },
        boolean: { color: "hsl(14, 58%, 55%)" },
        number: { color: "hsl(14, 58%, 55%)" },
        deleted: { color: "hsl(14, 58%, 55%)" },
        keyword: { color: "hsl(53, 89%, 79%)" },
        property: { color: "hsl(53, 89%, 79%)" },
        selector: { color: "hsl(53, 89%, 79%)" },
        constant: { color: "hsl(53, 89%, 79%)" },
        symbol: { color: "hsl(53, 89%, 79%)" },
        builtin: { color: "hsl(53, 89%, 79%)" },
        "attr-name": { color: "hsl(76, 21%, 52%)" },
        "attr-value": { color: "hsl(76, 21%, 52%)" },
        string: { color: "hsl(76, 21%, 52%)" },
        char: { color: "hsl(76, 21%, 52%)" },
        operator: { color: "hsl(76, 21%, 52%)" },
        entity: { color: "hsl(76, 21%, 52%)", cursor: "help" },
        url: { color: "hsl(76, 21%, 52%)" },
        ".language-css .token.string": { color: "hsl(76, 21%, 52%)" },
        ".style .token.string": { color: "hsl(76, 21%, 52%)" },
        variable: { color: "hsl(76, 21%, 52%)" },
        inserted: { color: "hsl(76, 21%, 52%)" },
        atrule: { color: "hsl(218, 22%, 55%)" },
        regex: { color: "hsl(42, 75%, 65%)" },
        important: { color: "hsl(42, 75%, 65%)", fontWeight: "bold" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" },
        "pre[data-line]": { padding: "1em 0 1em 3em", position: "relative" },
        ".language-markup .token.tag": { color: "hsl(33, 33%, 52%)" },
        ".language-markup .token.attr-name": { color: "hsl(33, 33%, 52%)" },
        ".language-markup .token.punctuation": { color: "hsl(33, 33%, 52%)" },
        "": { position: "relative", zIndex: "1" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))",
          borderBottom: "1px dashed hsl(0, 0%, 33%)",
          borderTop: "1px dashed hsl(0, 0%, 33%)",
          left: "0",
          lineHeight: "inherit",
          marginTop: "0.75em",
          padding: "inherit 0",
          pointerEvents: "none",
          position: "absolute",
          right: "0",
          whiteSpace: "pre",
          zIndex: "0"
        },
        ".line-highlight:before": {
          backgroundColor: "hsl(215, 15%, 59%)",
          borderRadius: "999px",
          boxShadow: "0 1px white",
          color: "hsl(24, 20%, 95%)",
          content: "attr(data-start)",
          font: "bold 65%/1.5 sans-serif",
          left: ".6em",
          minWidth: "1em",
          padding: "0 .5em",
          position: "absolute",
          textAlign: "center",
          textShadow: "none",
          top: ".4em",
          verticalAlign: ".3em"
        },
        ".line-highlight[data-end]:after": {
          backgroundColor: "hsl(215, 15%, 59%)",
          borderRadius: "999px",
          boxShadow: "0 1px white",
          color: "hsl(24, 20%, 95%)",
          content: "attr(data-end)",
          font: "bold 65%/1.5 sans-serif",
          left: ".6em",
          minWidth: "1em",
          padding: "0 .5em",
          position: "absolute",
          textAlign: "center",
          textShadow: "none",
          top: "auto",
          verticalAlign: ".3em",
          bottom: ".4em"
        }
      };
    },
    jCh7: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          (e.languages.xeora = e.languages.extend("markup", {
            constant: {
              pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
              inside: { punctuation: { pattern: /\$/ } }
            },
            variable: {
              pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
              inside: {
                punctuation: { pattern: /[$.]/ },
                operator: { pattern: /#+|[-+*~=^@]/ }
              }
            },
            "function-inline": {
              pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?\$/,
              inside: {
                variable: {
                  pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
                  inside: {
                    punctuation: { pattern: /[,.|]/ },
                    operator: { pattern: /#+|[-+*~=^@]/ }
                  }
                },
                punctuation: { pattern: /\$\w:|[$:?.,|]/ }
              },
              alias: "function"
            },
            "function-block": {
              pattern: /\$XF:{[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?}:XF\$/,
              inside: { punctuation: { pattern: /[$:{}?.,|]/ } },
              alias: "function"
            },
            "directive-inline": {
              pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\/\w.]+\$/,
              inside: {
                punctuation: {
                  pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
                  inside: { tag: { pattern: /#\d/ } }
                }
              },
              alias: "function"
            },
            "directive-block-open": {
              pattern: /\$\w+:{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\w.]+:{(![A-Z]+)?/,
              inside: {
                punctuation: {
                  pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
                  inside: { tag: { pattern: /#\d/ } }
                },
                attribute: {
                  pattern: /![A-Z]+$/,
                  inside: { punctuation: { pattern: /!/ } },
                  alias: "keyword"
                }
              },
              alias: "function"
            },
            "directive-block-separator": {
              pattern: /}:[-\w.]+:{/,
              inside: { punctuation: { pattern: /[:{}]/ } },
              alias: "function"
            },
            "directive-block-close": {
              pattern: /}:[-\w.]+\$/,
              inside: { punctuation: { pattern: /[:{}$]/ } },
              alias: "function"
            }
          })),
            e.languages.insertBefore(
              "inside",
              "punctuation",
              {
                variable: e.languages.xeora["function-inline"].inside.variable
              },
              e.languages.xeora["function-block"]
            ),
            (e.languages.xeoracube = e.languages.xeora);
        })(e);
      }
      (e.exports = a), (a.displayName = "xeora"), (a.aliases = ["xeoracube"]);
    },
    jeZe: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.gamemakerlanguage = e.languages.gml = e.languages.extend(
          "clike",
          {
            number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
            keyword: /\b(?:if|else|switch|case|default|break|for|repeat|while|do|until|continue|exit|return|globalvar|var|enum)\b/,
            operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at|xor|not)\b/,
            constant: /\b(self|other|all|noone|global|local|undefined|pointer_(?:invalid|null)|action_(?:stop|restart|continue|reverse)|pi|GM_build_date|GM_version|timezone_(?:local|utc)|gamespeed_(?:fps|microseconds)|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|pre|post)|keypress|keyrelease|trigger|(?:left|right|middle|no)_button|(?:left|right|middle)_press|(?:left|right|middle)_release|mouse_(?:enter|leave|wheel_up|wheel_down)|global_(?:left|right|middle)_button|global_(?:left|right|middle)_press|global_(?:left|right|middle)_release|joystick(?:1|2)_(?:left|right|up|down|button1|button2|button3|button4|button5|button6|button7|button8)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|step_(?:normal|begin|end)|gui|gui_begin|gui_end)|vk_(?:nokey|anykey|enter|return|shift|control|alt|escape|space|backspace|tab|pause|printscreen|left|right|up|down|home|end|delete|insert|pageup|pagedown|f\d|numpad\d|divide|multiply|subtract|add|decimal|lshift|lcontrol|lalt|rshift|rcontrol|ralt)|mb_(?:any|none|left|right|middle)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|purple|red|silver|teal|white|yellow|orange)|fa_(?:left|center|right|top|middle|bottom|readonly|hidden|sysfile|volumeid|directory|archive)|pr_(?:pointlist|linelist|linestrip|trianglelist|trianglestrip|trianglefan)|bm_(?:complex|normal|add|max|subtract|zero|one|src_colour|inv_src_colour|src_color|inv_src_color|src_alpha|inv_src_alpha|dest_alpha|inv_dest_alpha|dest_colour|inv_dest_colour|dest_color|inv_dest_color|src_alpha_sat)|audio_(?:falloff_(?:none|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|exponent_distance|exponent_distance_clamped)|old_system|new_system|mono|stereo|3d)|cr_(?:default|none|arrow|cross|beam|size_nesw|size_ns|size_nwse|size_we|uparrow|hourglass|drag|appstart|handpoint|size_all)|spritespeed_framesper(?:second|gameframe)|asset_(?:object|unknown|sprite|sound|room|path|script|font|timeline|tiles|shader)|ds_type_(?:map|list|stack|queue|grid|priority)|ef_(?:explosion|ring|ellipse|firework|smoke|smokeup|star|spark|flare|cloud|rain|snow)|pt_shape_(?:pixel|disk|square|line|star|circle|ring|sphere|flare|spark|explosion|cloud|smoke|snow)|ps_(?:distr|shape)_(?:linear|gaussian|invgaussian|rectangle|ellipse|diamond|line)|ty_(?:real|string)|dll_(?:cdel|cdecl|stdcall)|matrix_(?:view|projection|world)|os_(?:win32|windows|macosx|ios|android|linux|unknown|winphone|win8native|psvita|ps4|xboxone|ps3|uwp)|browser_(?:not_a_browser|unknown|ie|firefox|chrome|safari|safari_mobile|opera|tizen|windows_store|ie_mobile)|device_ios_(?:unknown|iphone|iphone_retina|ipad|ipad_retina|iphone5|iphone6|iphone6plus)|device_(?:emulator|tablet)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|of_challenge_(?:win|lose|tie)|leaderboard_type_(?:number|time_mins_secs)|cmpfunc_(?:never|less|equal|lessequal|greater|notequal|greaterequal|always)|cull_(?:noculling|clockwise|counterclockwise)|lighttype_(?:dir|point)|iap_(?:ev_storeload|ev_product|ev_purchase|ev_consume|ev_restore|storeload_ok|storeload_failed|status_uninitialised|status_unavailable|status_loading|status_available|status_processing|status_restoring|failed|unavailable|available|purchased|canceled|refunded)|fb_login_(?:default|fallback_to_webview|no_fallback_to_webview|forcing_webview|use_system_account|forcing_safari)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|reaction_force_x|reaction_force_y|reaction_torque|motor_speed|angle|motor_torque|max_motor_torque|translation|speed|motor_force|max_motor_force|length_1|length_2|damping_ratio|frequency|lower_angle_limit|upper_angle_limit|angle_limits|max_length|max_torque|max_force)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_particle_flag_(?:water|zombie|wall|spring|elastic|viscous|powder|tensile|colourmixing|colormixing)|phy_particle_group_flag_(?:solid|rigid)|phy_particle_data_flag_(?:typeflags|position|velocity|colour|color|category)|achievement_(?:our_info|friends_info|leaderboard_info|info|filter_(?:all_players|friends_only|favorites_only)|type_challenge|type_score_challenge|pic_loaded|show_(?:ui|profile|leaderboard|achievement|bank|friend_picker|purchase_prompt))|network_(?:socket_(?:tcp|udp|bluetooth)|type_(?:connect|disconnect|data|non_blocking_connect)|config_(?:connect_timeout|use_non_blocking_socket|enable_reliable_udp|disable_reliable_udp))|buffer_(?:fixed|grow|wrap|fast|vbuffer|network|u8|s8|u16|s16|u32|s32|u64|f16|f32|f64|bool|text|string|seek_start|seek_relative|seek_end|generalerror|outofspace|outofbounds|invalidtype)|gp_(?:face\d|shoulderl|shoulderr|shoulderlb|shoulderrb|select|start|stickl|stickr|padu|padd|padl|padr|axislh|axislv|axisrh|axisrv)|ov_(?:friends|community|players|settings|gamegroup|achievements)|lb_sort_(?:none|ascending|descending)|lb_disp_(?:none|numeric|time_sec|time_ms)|ugc_(?:result_success|filetype_(?:community|microtrans)|visibility_(?:public|friends_only|private)|query_RankedBy(?:Vote|PublicationDate|Trend|NumTimesReported|TotalVotesAsc|VotesUp|TextSearch)|query_(?:AcceptedForGameRankedByAcceptanceDate|FavoritedByFriendsRankedByPublicationDate|CreatedByFriendsRankedByPublicationDate|NotYetRated)|sortorder_CreationOrder(?:Desc|Asc)|sortorder_(?:TitleAsc|LastUpdatedDesc|SubscriptionDateDesc|VoteScoreDesc|ForModeration)|list_(?:Published|VotedOn|VotedUp|VotedDown|WillVoteLater|Favorited|Subscribed|UsedOrPlayed|Followed)|match_(?:Items|Items_Mtx|Items_ReadyToUse|Collections|Artwork|Videos|Screenshots|AllGuides|WebGuides|IntegratedGuides|UsableInGame|ControllerBindings))|vertex_usage_(?:position|colour|color|normal|texcoord|textcoord|blendweight|blendindices|psize|tangent|binormal|fog|depth|sample)|vertex_type_(?:float\d|colour|color|ubyte4)|layerelementtype_(?:undefined|background|instance|oldtilemap|sprite|tilemap|particlesystem|tile)|tile_(?:rotate|flip|mirror|index_mask)|input_type|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|(obj|scr|spr|rm)\w+)\b/,
            variable: /\b(x|y|(?:x|y)(?:previous|start)|(?:h|v)speed|direction|speed|friction|gravity|gravity_direction|path_(?:index|position|positionprevious|speed|scale|orientation|endaction)|object_index|id|solid|persistent|mask_index|instance_(?:count|id)|alarm|timeline_(?:index|position|speed|running|loop)|visible|sprite_(?:index|width|height|xoffset|yoffset)|image_(?:number|index|speed|depth|xscale|yscale|angle|alpha|blend)|bbox_(?:left|right|top|bottom)|layer|phy_(?:rotation|(?:position|linear_velocity|speed|com|collision|col_normal)_(?:x|y)|angular_(?:velocity|damping)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|working_directory|webgl_enabled|view_(?:(?:y|x|w|h)view|(?:y|x|w|h)port|(?:v|h)(?:speed|border)|visible|surface_id|object|enabled|current|angle)|undefined|transition_(?:steps|kind|color)|temp_directory|show_(?:score|lives|health)|secure_mode|score|room_(?:width|speed|persistent|last|height|first|caption)|room|pointer_(?:null|invalid)|os_(?:version|type|device|browser)|mouse_(?:y|x|lastbutton|button)|lives|keyboard_(?:string|lastkey|lastchar|key)|iap_data|health|gamemaker_(?:version|registered|pro)|game_(?:save|project|display)_(?:id|name)|fps_real|fps|event_(?:type|object|number|action)|error_(?:occurred|last)|display_aa|delta_time|debug_mode|cursor_sprite|current_(?:year|weekday|time|second|month|minute|hour|day)|caption_(?:score|lives|health)|browser_(?:width|height)|background_(?:yscale|y|xscale|x|width|vtiled|vspeed|visible|showcolour|showcolor|index|htiled|hspeed|height|foreground|colour|color|blend|alpha)|async_load|application_surface|argument(?:_relitive|_count|\d)|argument|global|local|self|other)\b/
          }
        );
      }
      (e.exports = a), (a.displayName = "gml"), (a.aliases = []);
    },
    jgXz: function(e, t, n) {
      "use strict";
      var a = n("0iGP");
      function o(e) {
        e.register(a),
          (function(e) {
            (e.languages.handlebars = {
              comment: /\{\{![\s\S]*?\}\}/,
              delimiter: {
                pattern: /^\{\{\{?|\}\}\}?$/i,
                alias: "punctuation"
              },
              string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
              number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
              boolean: /\b(?:true|false)\b/,
              block: {
                pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
                lookbehind: !0,
                alias: "keyword"
              },
              brackets: {
                pattern: /\[[^\]]+\]/,
                inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ }
              },
              punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
              variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
            }),
              e.hooks.add("before-tokenize", function(t) {
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "handlebars",
                  /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
                );
              }),
              e.hooks.add("after-tokenize", function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(
                  t,
                  "handlebars"
                );
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "handlebars"), (o.aliases = []);
    },
    k268: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t =
            "(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";
          e.languages.abnf = {
            comment: /;.*/,
            string: {
              pattern: /(?:%[is])?"[^"\n\r]*"/,
              greedy: !0,
              inside: { punctuation: /^%[is]/ }
            },
            range: {
              pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
              alias: "number"
            },
            terminal: {
              pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
              alias: "number"
            },
            repetition: {
              pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
              lookbehind: !0,
              alias: "operator"
            },
            definition: {
              pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^>\r\n]*>)(?=\s*=)/m,
              lookbehind: !0,
              alias: "keyword",
              inside: { punctuation: /<|>/ }
            },
            "core-rule": {
              pattern: RegExp(
                "(?:(^|[^<\\w-])" + t + "|<" + t + ">)(?![\\w-])",
                "i"
              ),
              lookbehind: !0,
              alias: ["rule", "constant"],
              inside: { punctuation: /<|>/ }
            },
            rule: {
              pattern: /(^|[^<\w-])[a-z][\w-]*|<[^>\r\n]*>/i,
              lookbehind: !0,
              inside: { punctuation: /<|>/ }
            },
            operator: /=\/?|\//,
            punctuation: /[()\[\]]/
          };
        })(e);
      }
      (e.exports = a), (a.displayName = "abnf"), (a.aliases = []);
    },
    kCZm: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.gherkin = {
          pystring: { pattern: /("""|''')[\s\S]+?\1/, alias: "string" },
          comment: { pattern: /((?:^|\r?\n|\r)[ \t]*)#.*/, lookbehind: !0 },
          tag: { pattern: /((?:^|\r?\n|\r)[ \t]*)@\S*/, lookbehind: !0 },
          feature: {
            pattern: /((?:^|\r?\n|\r)[ \t]*)(?:Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Caracter\xedstica|Egenskab|Egenskap|Eiginleiki|Feature|F\u012b\u010da|Fitur|Fonctionnalit\xe9|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Func\u0163ionalitate|Func\u021bionalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalit\u0101te|Funkcionalnost|Funkcja|Funksie|Funktionalit\xe4t|Funktionalit\xe9it|Funzionalit\xe0|Hwaet|Hw\xe6t|Jellemz\u0151|Karakteristik|laH|Lastnost|Mak|Mogucnost|Mogu\u0107nost|Moznosti|Mo\u017enosti|OH HAI|Omadus|Ominaisuus|Osobina|\xd6zellik|perbogh|poQbogh malja'|Potrzeba biznesowa|Po\u017eadavek|Po\u017eiadavka|Pretty much|Qap|Qu'meH 'ut|Savyb\u0117|T\xednh n\u0103ng|Trajto|Vermo\xeb|Vlastnos\u0165|W\u0142a\u015bciwo\u015b\u0107|Zna\u010dilnost|\u0394\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1|\u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1|\u041c\u043e\u0433\u0443\u045b\u043d\u043e\u0441\u0442|\u041c\u04e9\u043c\u043a\u0438\u043d\u043b\u0435\u043a|\u041e\u0441\u043e\u0431\u0438\u043d\u0430|\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e|\u04ae\u0437\u0435\u043d\u0447\u04d9\u043b\u0435\u043a\u043b\u0435\u043b\u0435\u043a|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442|\u0424\u0443\u043d\u043a\u0446\u0438\u044f|\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b|\u05ea\u05db\u05d5\u05e0\u05d4|\u062e\u0627\u0635\u064a\u0629|\u062e\u0635\u0648\u0635\u06cc\u062a|\u0635\u0644\u0627\u062d\u06cc\u062a|\u06a9\u0627\u0631\u0648\u0628\u0627\u0631 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a|\u0648\u0650\u06cc\u0698\u06af\u06cc|\u0930\u0942\u092a \u0932\u0947\u0916|\u0a16\u0a3e\u0a38\u0a40\u0a05\u0a24|\u0a28\u0a15\u0a36 \u0a28\u0a41\u0a39\u0a3e\u0a30|\u0a2e\u0a41\u0a39\u0a3e\u0a02\u0a26\u0a30\u0a3e|\u0c17\u0c41\u0c23\u0c2e\u0c41|\u0cb9\u0cc6\u0c9a\u0ccd\u0c9a\u0cb3|\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e32\u0e07\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08|\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16|\u0e42\u0e04\u0e23\u0e07\u0e2b\u0e25\u0e31\u0e01|\uae30\ub2a5|\u30d5\u30a3\u30fc\u30c1\u30e3|\u529f\u80fd|\u6a5f\u80fd):(?:[^:]+(?:\r?\n|\r|$))*/,
            lookbehind: !0,
            inside: {
              important: { pattern: /(:)[^\r\n]+/, lookbehind: !0 },
              keyword: /[^:\r\n]+:/
            }
          },
          scenario: {
            pattern: /((?:^|\r?\n|\r)[ \t]*)(?:Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|\xc6r|Agtergrond|All y'all|Antecedentes|Antecedents|Atbur\xf0ar\xe1s|Atbur\xf0ar\xe1sir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|B\u1ed1i c\u1ea3nh|Cefndir|Cenario|Cen\xe1rio|Cenario de Fundo|Cen\xe1rio de Fundo|Cenarios|Cen\xe1rios|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|D\xe6mi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delinea\xe7\xe3o do Cen\xe1rio|Dis is what went down|D\u1eef li\u1ec7u|Dyagram senaryo|Dyagram Senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cen\xe1rio|Examples|EXAMPLZ|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgat\xf3k\xf6nyv|Forgat\xf3k\xf6nyv v\xe1zlat|Fundo|Ge\xe7mi\u015f|ghantoH|Grundlage|Hannergrond|H\xe1tt\xe9r|Heave to|Istorik|Juhtumid|Keadaan|Khung k\u1ecbch b\u1ea3n|Khung t\xecnh hu\u1ed1ng|K\u1ecbch b\u1ea3n|Koncept|Konsep skenario|Kont\xe8ks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut|lut chovnatlh|lutmey|L\xfdsing Atbur\xf0ar\xe1sar|L\xfdsing D\xe6ma|Menggariskan Senario|MISHUN|MISHUN SRSLY|mo'|N\xe1\u010drt Scen\xe1ra|N\xe1\u010drt Sc\xe9n\xe1\u0159e|N\xe1\u010drt Scen\xe1ru|Oris scenarija|\xd6rnekler|Osnova|Osnova Scen\xe1ra|Osnova sc\xe9n\xe1\u0159e|Osnutek|Ozadje|Paraugs|Pavyzd\u017eiai|P\xe9ld\xe1k|Piem\u0113ri|Plan du sc\xe9nario|Plan du Sc\xe9nario|Plan senaryo|Plan Senaryo|Plang vum Szenario|Pozad\xed|Pozadie|Pozadina|Pr\xedklady|P\u0159\xedklady|Primer|Primeri|Primjeri|Przyk\u0142ady|Raamstsenaarium|Reckon it's like|Rerefons|Scen\xe1r|Sc\xe9n\xe1\u0159|Scenarie|Scenarij|Scenarijai|Scenarijaus \u0161ablonas|Scenariji|Scen\u0101rijs|Scen\u0101rijs p\u0113c parauga|Scenarijus|Scenario|Sc\xe9nario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se \xf0e|Se the|Se \xfee|Senario|Senaryo|Senaryo deskripsyon|Senaryo Deskripsyon|Senaryo tasla\u011f\u0131|Shiver me timbers|Situ\u0101cija|Situai|Situasie|Situasie Uiteensetting|Skenario|Skenario konsep|Skica|Structura scenariu|Structur\u0103 scenariu|Struktura scenarija|Stsenaarium|Swa|Swa hwaer swa|Swa hw\xe6r swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|T\xecnh hu\u1ed1ng|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo\-ho\-ho|You'll wanna|Za\u0142o\u017cenia|\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1|\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03a3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03b1|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03bf|\u03a5\u03c0\u03cc\u03b2\u03b1\u03b8\u03c1\u03bf|\u041a\u0435\u0440\u0435\u0448|\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442|\u041a\u043e\u043d\u0446\u0435\u043f\u0442|\u041c\u0438\u0441\u0430\u043b\u043b\u0430\u0440|\u041c\u0438\u0441\u043e\u043b\u043b\u0430\u0440|\u041e\u0441\u043d\u043e\u0432\u0430|\u041f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0430|\u041f\u043e\u0437\u0430\u0434\u0438\u043d\u0430|\u041f\u0440\u0435\u0434\u0438\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0435\u0434\u044b\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438|\u041f\u0440\u0438\u043c\u0435\u0440|\u041f\u0440\u0438\u043c\u0435\u0440\u0438|\u041f\u0440\u0438\u043c\u0435\u0440\u044b|\u0420\u0430\u043c\u043a\u0430 \u043d\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u0421\u043a\u0438\u0446\u0430|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0430|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0456\u044e|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0441\u0438|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439\u043d\u044b\u04a3 \u0442\u04e9\u0437\u0435\u043b\u0435\u0448\u0435|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0438|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u043e|\u0421\u0446\u0435\u043d\u0430\u0440\u0456\u0439|\u0422\u0430\u0440\u0438\u0445|\u04ae\u0440\u043d\u04d9\u043a\u043b\u04d9\u0440|\u05d3\u05d5\u05d2\u05de\u05d0\u05d5\u05ea|\u05e8\u05e7\u05e2|\u05ea\u05d1\u05e0\u05d9\u05ea \u05ea\u05e8\u05d7\u05d9\u05e9|\u05ea\u05e8\u05d7\u05d9\u05e9|\u0627\u0644\u062e\u0644\u0641\u064a\u0629|\u0627\u0644\u06af\u0648\u06cc \u0633\u0646\u0627\u0631\u06cc\u0648|\u0627\u0645\u062b\u0644\u0629|\u067e\u0633 \u0645\u0646\u0638\u0631|\u0632\u0645\u06cc\u0646\u0647|\u0633\u0646\u0627\u0631\u06cc\u0648|\u0633\u064a\u0646\u0627\u0631\u064a\u0648|\u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0645\u062e\u0637\u0637|\u0645\u062b\u0627\u0644\u06cc\u06ba|\u0645\u0646\u0638\u0631 \u0646\u0627\u0645\u06d2 \u06a9\u0627 \u062e\u0627\u06a9\u06c1|\u0645\u0646\u0638\u0631\u0646\u0627\u0645\u06c1|\u0646\u0645\u0648\u0646\u0647 \u0647\u0627|\u0909\u0926\u093e\u0939\u0930\u0923|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f \u0930\u0942\u092a\u0930\u0947\u0916\u093e|\u092a\u0943\u0937\u094d\u0920\u092d\u0942\u092e\u093f|\u0a09\u0a26\u0a3e\u0a39\u0a30\u0a28\u0a3e\u0a02|\u0a2a\u0a1f\u0a15\u0a25\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a22\u0a3e\u0a02\u0a1a\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a30\u0a42\u0a2a \u0a30\u0a47\u0a16\u0a3e|\u0a2a\u0a3f\u0a1b\u0a4b\u0a15\u0a5c|\u0c09\u0c26\u0c3e\u0c39\u0c30\u0c23\u0c32\u0c41|\u0c15\u0c25\u0c28\u0c02|\u0c28\u0c47\u0c2a\u0c25\u0c4d\u0c2f\u0c02|\u0c38\u0c28\u0c4d\u0c28\u0c3f\u0c35\u0c47\u0c36\u0c02|\u0c89\u0ca6\u0cbe\u0cb9\u0cb0\u0ca3\u0cc6\u0c97\u0cb3\u0cc1|\u0c95\u0ca5\u0cbe\u0cb8\u0cbe\u0cb0\u0cbe\u0c82\u0cb6|\u0cb5\u0cbf\u0cb5\u0cb0\u0ca3\u0cc6|\u0cb9\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6\u0cb2\u0cc6|\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14|\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\ubc30\uacbd|\uc2dc\ub098\ub9ac\uc624|\uc2dc\ub098\ub9ac\uc624 \uac1c\uc694|\uc608|\u30b5\u30f3\u30d7\u30eb|\u30b7\u30ca\u30ea\u30aa|\u30b7\u30ca\u30ea\u30aa\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8|\u30c6\u30f3\u30d7\u30ec|\u4f8b|\u4f8b\u5b50|\u5267\u672c|\u5267\u672c\u5927\u7eb2|\u5287\u672c|\u5287\u672c\u5927\u7db1|\u573a\u666f|\u573a\u666f\u5927\u7eb2|\u5834\u666f|\u5834\u666f\u5927\u7db1|\u80cc\u666f):[^:\r\n]*/,
            lookbehind: !0,
            inside: {
              important: { pattern: /(:)[^\r\n]*/, lookbehind: !0 },
              keyword: /[^:\r\n]+:/
            }
          },
          "table-body": {
            pattern: /((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)+/,
            lookbehind: !0,
            inside: {
              outline: { pattern: /<[^>]+?>/, alias: "variable" },
              td: { pattern: /\s*[^\s|][^|]*/, alias: "string" },
              punctuation: /\|/
            }
          },
          "table-head": {
            pattern: /(?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*/,
            inside: {
              th: { pattern: /\s*[^\s|][^|]*/, alias: "variable" },
              punctuation: /\|/
            }
          },
          atrule: {
            pattern: /((?:\r?\n|\r)[ \t]+)(?:'ach|'a|'ej|7|a|A tak\xe9|A taktie\u017e|A tie\u017e|A z\xe1rove\u0148|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|At\xe8s|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Bi\u1ebft|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|C\xe2nd|Cando|Cand|Ce|Cuando|\u010ce|\xd0a \xf0e|\xd0a|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Da\u0163i fiind|Da\u021bi fiind|Dato|DEN|Den youse gotta|Dengan|De|Diberi|Diyelim ki|Donada|Donat|Donita\u0135o|Do|Dun|Duota|\xd0urh|Eeldades|Ef|E\u011fer ki|Entao|Ent\xe3o|Ent\xf3n|Entonces|En|Epi|E|\xc9s|Etant donn\xe9e|Etant donn\xe9|Et|\xc9tant donn\xe9es|\xc9tant donn\xe9e|\xc9tant donn\xe9|Etant donn\xe9es|Etant donn\xe9s|\xc9tant donn\xe9s|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Je\u015bli|Je\u017celi|Kadar|Kada|Kad|Kai|Kaj|Kdy\u017e|Ke\u010f|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|L\xe8 sa a|L\xe8|Logo|Lorsqu'<|Lorsque|m\xe4|Maar|Mais|Maj\u0105c|Majd|Maka|Manawa|Mas|Ma|Menawa|Men|Mutta|Nalikaning|Nalika|Nanging|N\xe5r|N\xe4r|Nato|Nh\u01b0ng|Niin|Njuk|O zaman|Og|Och|Oletetaan|Onda|Ond|Oraz|Pak|Pero|Per\xf2|Podano|Pokia\u013e|Pokud|Potem|Potom|Privzeto|Pryd|qaSDI'|Quando|Quand|Quan|S\xe5|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|\u015ei|\u0218i|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Th\xec|Thurh|Toda|Too right|ugeholl|Und|Un|V\xe0|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za p\u0159edpokladu|Zadani|Zadano|Zadan|Zadate|Zadato|Zak\u0142adaj\u0105c|Zaradi|Zatati|\xdea \xfee|\xdea|\xde\xe1|\xdeegar|\xdeurh|\u0391\u03bb\u03bb\u03ac|\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5|\u039a\u03b1\u03b9|\u038c\u03c4\u03b1\u03bd|\u03a4\u03cc\u03c4\u03b5|\u0410 \u0442\u0430\u043a\u043e\u0436|\u0410\u0433\u0430\u0440|\u0410\u043b\u0435|\u0410\u043b\u0438|\u0410\u043c\u043c\u043e|\u0410|\u04d8\u0433\u04d9\u0440|\u04d8\u0439\u0442\u0438\u043a|\u04d8\u043c\u043c\u0430|\u0411\u0438\u0440\u043e\u043a|\u0412\u0430|\u0412\u04d9|\u0414\u0430\u0434\u0435\u043d\u043e|\u0414\u0430\u043d\u043e|\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c|\u0415\u0441\u043b\u0438|\u0417\u0430\u0434\u0430\u0442\u0435|\u0417\u0430\u0434\u0430\u0442\u0438|\u0417\u0430\u0434\u0430\u0442\u043e|\u0418|\u0406|\u041a \u0442\u043e\u043c\u0443 \u0436\u0435|\u041a\u0430\u0434\u0430|\u041a\u0430\u0434|\u041a\u043e\u0433\u0430\u0442\u043e|\u041a\u043e\u0433\u0434\u0430|\u041a\u043e\u043b\u0438|\u041b\u04d9\u043a\u0438\u043d|\u041b\u0435\u043a\u0438\u043d|\u041d\u04d9\u0442\u0438\u0497\u04d9\u0434\u04d9|\u041d\u0435\u0445\u0430\u0439|\u041d\u043e|\u041e\u043d\u0434\u0430|\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e, \u0449\u043e|\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e|\u041f\u0443\u0441\u0442\u044c|\u0422\u0430\u043a\u0436\u0435|\u0422\u0430|\u0422\u043e\u0433\u0434\u0430|\u0422\u043e\u0434\u0456|\u0422\u043e|\u0423\u043d\u0434\u0430|\u04ba\u04d9\u043c|\u042f\u043a\u0449\u043e|\u05d0\u05d1\u05dc|\u05d0\u05d6\u05d9|\u05d0\u05d6|\u05d1\u05d4\u05d9\u05e0\u05ea\u05df|\u05d5\u05d2\u05dd|\u05db\u05d0\u05e9\u05e8|\u0622\u0646\u06af\u0627\u0647|\u0627\u0630\u0627\u064b|\u0627\u06af\u0631|\u0627\u0645\u0627|\u0627\u0648\u0631|\u0628\u0627 \u0641\u0631\u0636|\u0628\u0627\u0644\u0641\u0631\u0636|\u0628\u0641\u0631\u0636|\u067e\u06be\u0631|\u062a\u0628|\u062b\u0645|\u062c\u0628|\u0639\u0646\u062f\u0645\u0627|\u0641\u0631\u0636 \u06a9\u06cc\u0627|\u0644\u0643\u0646|\u0644\u06cc\u06a9\u0646|\u0645\u062a\u0649|\u0647\u0646\u06af\u0627\u0645\u06cc|\u0648|\u0905\u0917\u0930|\u0914\u0930|\u0915\u0926\u093e|\u0915\u093f\u0928\u094d\u0924\u0941|\u091a\u0942\u0902\u0915\u093f|\u091c\u092c|\u0924\u0925\u093e|\u0924\u0926\u093e|\u0924\u092c|\u092a\u0930\u0928\u094d\u0924\u0941|\u092a\u0930|\u092f\u0926\u093f|\u0a05\u0a24\u0a47|\u0a1c\u0a26\u0a4b\u0a02|\u0a1c\u0a3f\u0a35\u0a47\u0a02 \u0a15\u0a3f|\u0a1c\u0a47\u0a15\u0a30|\u0a24\u0a26|\u0a2a\u0a30|\u0c05\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41|\u0c08 \u0c2a\u0c30\u0c3f\u0c38\u0c4d\u0c25\u0c3f\u0c24\u0c3f\u0c32\u0c4b|\u0c15\u0c3e\u0c28\u0c3f|\u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c2c\u0c21\u0c3f\u0c28\u0c26\u0c3f|\u0c2e\u0c30\u0c3f\u0c2f\u0c41|\u0c86\u0ca6\u0cb0\u0cc6|\u0ca8\u0c82\u0ca4\u0cb0|\u0ca8\u0cbf\u0cd5\u0ca1\u0cbf\u0ca6|\u0cae\u0ca4\u0ccd\u0ca4\u0cc1|\u0cb8\u0ccd\u0ca5\u0cbf\u0ca4\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1|\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e43\u0e2b\u0e49|\u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19|\u0e41\u0e15\u0e48|\u0e40\u0e21\u0e37\u0e48\u0e2d|\u0e41\u0e25\u0e30|\uadf8\ub7ec\uba74<|\uadf8\ub9ac\uace0<|\ub2e8<|\ub9cc\uc57d<|\ub9cc\uc77c<|\uba3c\uc800<|\uc870\uac74<|\ud558\uc9c0\ub9cc<|\u304b\u3064<|\u3057\u304b\u3057<|\u305f\u3060\u3057<|\u306a\u3089\u3070<|\u3082\u3057<|\u4e26\u4e14<|\u4f46\u3057<|\u4f46\u662f<|\u5047\u5982<|\u5047\u5b9a<|\u5047\u8a2d<|\u5047\u8bbe<|\u524d\u63d0<|\u540c\u65f6<|\u540c\u6642<|\u5e76\u4e14<|\u5f53<|\u7576<|\u800c\u4e14<|\u90a3\u4e48<|\u90a3\u9ebc<)(?=[ \t]+)/,
            lookbehind: !0
          },
          string: {
            pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
            inside: { outline: { pattern: /<[^>]+?>/, alias: "variable" } }
          },
          outline: { pattern: /<[^>]+?>/, alias: "variable" }
        };
      }
      (e.exports = a), (a.displayName = "gherkin"), (a.aliases = []);
    },
    kJUM: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = /%%?[~:\w]+%?|!\S+!/,
            n = {
              pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
              alias: "attr-name",
              inside: { punctuation: /:/ }
            },
            a = /"[^"]*"/,
            o = /(?:\b|-)\d+\b/;
          e.languages.batch = {
            comment: [
              /^::.*/m,
              {
                pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                lookbehind: !0
              }
            ],
            label: { pattern: /^:.*/m, alias: "property" },
            command: [
              {
                pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
                lookbehind: !0,
                inside: {
                  keyword: /^for\b|\b(?:in|do)\b/i,
                  string: a,
                  parameter: n,
                  variable: t,
                  number: o,
                  punctuation: /[()',]/
                }
              },
              {
                pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
                lookbehind: !0,
                inside: {
                  keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
                  string: a,
                  parameter: n,
                  variable: t,
                  number: o,
                  operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
                }
              },
              {
                pattern: /((?:^|[&()])[ \t]*)else\b/im,
                lookbehind: !0,
                inside: { keyword: /^else\b/i }
              },
              {
                pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                inside: {
                  keyword: /^set\b/i,
                  string: a,
                  parameter: n,
                  variable: [t, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                  number: o,
                  operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                  punctuation: /[()',]/
                }
              },
              {
                pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                inside: {
                  keyword: /^\w+\b/i,
                  string: a,
                  parameter: n,
                  label: {
                    pattern: /(^\s*):\S+/m,
                    lookbehind: !0,
                    alias: "property"
                  },
                  variable: t,
                  number: o,
                  operator: /\^/
                }
              }
            ],
            operator: /[&@]/,
            punctuation: /[()']/
          };
        })(e);
      }
      (e.exports = a), (a.displayName = "batch"), (a.aliases = []);
    },
    kWEd: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#322d29",
          color: "#88786d"
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#322d29",
          color: "#88786d",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#6f5849"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#6f5849"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#6f5849"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#6f5849"
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#6f5849"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#6f5849"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#6f5849"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#6f5849"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#6a5f58" },
        prolog: { color: "#6a5f58" },
        doctype: { color: "#6a5f58" },
        cdata: { color: "#6a5f58" },
        punctuation: { color: "#6a5f58" },
        namespace: { Opacity: ".7" },
        tag: { color: "#bfa05a" },
        operator: { color: "#bfa05a" },
        number: { color: "#bfa05a" },
        property: { color: "#88786d" },
        function: { color: "#88786d" },
        "tag-id": { color: "#fff3eb" },
        selector: { color: "#fff3eb" },
        "atrule-id": { color: "#fff3eb" },
        "code.language-javascript": { color: "#a48774" },
        "attr-name": { color: "#a48774" },
        "code.language-css": { color: "#fcc440" },
        "code.language-scss": { color: "#fcc440" },
        boolean: { color: "#fcc440" },
        string: { color: "#fcc440" },
        entity: { color: "#fcc440", cursor: "help" },
        url: { color: "#fcc440" },
        ".language-css .token.string": { color: "#fcc440" },
        ".language-scss .token.string": { color: "#fcc440" },
        ".style .token.string": { color: "#fcc440" },
        "attr-value": { color: "#fcc440" },
        keyword: { color: "#fcc440" },
        control: { color: "#fcc440" },
        directive: { color: "#fcc440" },
        unit: { color: "#fcc440" },
        statement: { color: "#fcc440" },
        regex: { color: "#fcc440" },
        atrule: { color: "#fcc440" },
        placeholder: { color: "#fcc440" },
        variable: { color: "#fcc440" },
        deleted: { textDecoration: "line-through" },
        inserted: {
          borderBottom: "1px dotted #fff3eb",
          textDecoration: "none"
        },
        italic: { fontStyle: "italic" },
        important: { fontWeight: "bold", color: "#a48774" },
        bold: { fontWeight: "bold" },
        "pre > code.highlight": {
          Outline: ".4em solid #816d5f",
          OutlineOffset: ".4em"
        },
        ".line-numbers .line-numbers-rows": { borderRightColor: "#35302b" },
        ".line-numbers-rows > span:before": { color: "#46403d" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))"
        }
      };
    },
    keYo: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.groovy = e.languages.extend("clike", {
          keyword: /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
          string: [
            {
              pattern: /("""|''')[\s\S]*?\1|(?:\$\/)(?:\$\/\$|[\s\S])*?\/\$/,
              greedy: !0
            },
            { pattern: /(["'\/])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
          ],
          number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
          operator: {
            pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
            lookbehind: !0
          },
          punctuation: /\.+|[{}[\];(),:$]/
        })),
          e.languages.insertBefore("groovy", "string", {
            shebang: { pattern: /#!.+/, alias: "comment" }
          }),
          e.languages.insertBefore("groovy", "punctuation", {
            "spock-block": /\b(?:setup|given|when|then|and|cleanup|expect|where):/
          }),
          e.languages.insertBefore("groovy", "function", {
            annotation: {
              alias: "punctuation",
              pattern: /(^|[^.])@\w+/,
              lookbehind: !0
            }
          }),
          e.hooks.add("wrap", function(t) {
            if ("groovy" === t.language && "string" === t.type) {
              var n = t.content.value[0];
              if ("'" != n) {
                var a = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;
                "$" === n && (a = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),
                  (t.content.value = t.content.value
                    .replace(/&lt;/g, "<")
                    .replace(/&amp;/g, "&")),
                  (t.content = e.highlight(t.content.value, {
                    expression: {
                      pattern: a,
                      lookbehind: !0,
                      inside: e.languages.groovy
                    }
                  })),
                  t.classes.push("/" === n ? "regex" : "gstring");
              }
            }
          });
      }
      (e.exports = a), (a.displayName = "groovy"), (a.aliases = []);
    },
    kk9f: function(e, t, n) {
      "use strict";
      var a = n("YHgv");
      function o(e) {
        e.register(a),
          (e.languages.t4 = e.languages["t4-cs"] = e.languages[
            "t4-templating"
          ].createT4("csharp"));
      }
      (e.exports = o), (o.displayName = "t4Cs"), (o.aliases = []);
    },
    lKmu: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.mizar = {
          comment: /::.+/,
          keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
          parameter: { pattern: /\$(?:10|\d)/, alias: "variable" },
          variable: /\w+(?=:)/,
          number: /(?:\b|-)\d+\b/,
          operator: /\.\.\.|->|&|\.?=/,
          punctuation: /\(#|#\)|[,:;\[\](){}]/
        };
      }
      (e.exports = a), (a.displayName = "mizar"), (a.aliases = []);
    },
    lSNA: function(e, t) {
      (e.exports = function(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    lwAK: function(e, t, n) {
      "use strict";
      var a = n("hfKm"),
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          };
      a(t, "__esModule", { value: !0 });
      var r = o(n("q1tI"));
      t.AmpStateContext = r.createContext({});
    },
    "m+qi": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.vim = {
          string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
          comment: /".*/,
          function: /\w+(?=\()/,
          keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
          builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
          number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
          operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
          punctuation: /[{}[\](),;:]/
        };
      }
      (e.exports = a), (a.displayName = "vim"), (a.aliases = []);
    },
    m2n9: function(e) {
      e.exports = JSON.parse(
        '{"AElig":"\xc6","AMP":"&","Aacute":"\xc1","Acirc":"\xc2","Agrave":"\xc0","Aring":"\xc5","Atilde":"\xc3","Auml":"\xc4","COPY":"\xa9","Ccedil":"\xc7","ETH":"\xd0","Eacute":"\xc9","Ecirc":"\xca","Egrave":"\xc8","Euml":"\xcb","GT":">","Iacute":"\xcd","Icirc":"\xce","Igrave":"\xcc","Iuml":"\xcf","LT":"<","Ntilde":"\xd1","Oacute":"\xd3","Ocirc":"\xd4","Ograve":"\xd2","Oslash":"\xd8","Otilde":"\xd5","Ouml":"\xd6","QUOT":"\\"","REG":"\xae","THORN":"\xde","Uacute":"\xda","Ucirc":"\xdb","Ugrave":"\xd9","Uuml":"\xdc","Yacute":"\xdd","aacute":"\xe1","acirc":"\xe2","acute":"\xb4","aelig":"\xe6","agrave":"\xe0","amp":"&","aring":"\xe5","atilde":"\xe3","auml":"\xe4","brvbar":"\xa6","ccedil":"\xe7","cedil":"\xb8","cent":"\xa2","copy":"\xa9","curren":"\xa4","deg":"\xb0","divide":"\xf7","eacute":"\xe9","ecirc":"\xea","egrave":"\xe8","eth":"\xf0","euml":"\xeb","frac12":"\xbd","frac14":"\xbc","frac34":"\xbe","gt":">","iacute":"\xed","icirc":"\xee","iexcl":"\xa1","igrave":"\xec","iquest":"\xbf","iuml":"\xef","laquo":"\xab","lt":"<","macr":"\xaf","micro":"\xb5","middot":"\xb7","nbsp":"\xa0","not":"\xac","ntilde":"\xf1","oacute":"\xf3","ocirc":"\xf4","ograve":"\xf2","ordf":"\xaa","ordm":"\xba","oslash":"\xf8","otilde":"\xf5","ouml":"\xf6","para":"\xb6","plusmn":"\xb1","pound":"\xa3","quot":"\\"","raquo":"\xbb","reg":"\xae","sect":"\xa7","shy":"\xad","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","szlig":"\xdf","thorn":"\xfe","times":"\xd7","uacute":"\xfa","ucirc":"\xfb","ugrave":"\xf9","uml":"\xa8","uuml":"\xfc","yacute":"\xfd","yen":"\xa5","yuml":"\xff"}'
      );
    },
    mAwW: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#f5f7ff",
          color: "#5e6687"
        },
        'pre[class*="language-"]': {
          fontFamily:
            'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
          fontSize: "14px",
          lineHeight: "1.375",
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          background: "#f5f7ff",
          color: "#5e6687",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        'pre[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#dfe2f1"
        },
        'pre[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#dfe2f1"
        },
        'code[class*="language-"]::-moz-selection': {
          textShadow: "none",
          background: "#dfe2f1"
        },
        'code[class*="language-"] ::-moz-selection': {
          textShadow: "none",
          background: "#dfe2f1"
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#dfe2f1"
        },
        'pre[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#dfe2f1"
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#dfe2f1"
        },
        'code[class*="language-"] ::selection': {
          textShadow: "none",
          background: "#dfe2f1"
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em",
          borderRadius: ".3em"
        },
        comment: { color: "#898ea4" },
        prolog: { color: "#898ea4" },
        doctype: { color: "#898ea4" },
        cdata: { color: "#898ea4" },
        punctuation: { color: "#5e6687" },
        namespace: { Opacity: ".7" },
        operator: { color: "#c76b29" },
        boolean: { color: "#c76b29" },
        number: { color: "#c76b29" },
        property: { color: "#c08b30" },
        tag: { color: "#3d8fd1" },
        string: { color: "#22a2c9" },
        selector: { color: "#6679cc" },
        "attr-name": { color: "#c76b29" },
        entity: { color: "#22a2c9", cursor: "help" },
        url: { color: "#22a2c9" },
        ".language-css .token.string": { color: "#22a2c9" },
        ".style .token.string": { color: "#22a2c9" },
        "attr-value": { color: "#ac9739" },
        keyword: { color: "#ac9739" },
        control: { color: "#ac9739" },
        directive: { color: "#ac9739" },
        unit: { color: "#ac9739" },
        statement: { color: "#22a2c9" },
        regex: { color: "#22a2c9" },
        atrule: { color: "#22a2c9" },
        placeholder: { color: "#3d8fd1" },
        variable: { color: "#3d8fd1" },
        deleted: { textDecoration: "line-through" },
        inserted: {
          borderBottom: "1px dotted #202746",
          textDecoration: "none"
        },
        italic: { fontStyle: "italic" },
        important: { fontWeight: "bold", color: "#c94922" },
        bold: { fontWeight: "bold" },
        "pre > code.highlight": {
          Outline: "0.4em solid #c94922",
          OutlineOffset: ".4em"
        },
        ".line-numbers .line-numbers-rows": { borderRightColor: "#dfe2f1" },
        ".line-numbers-rows > span:before": { color: "#979db4" },
        ".line-highlight": {
          background:
            "linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))"
        }
      };
    },
    mKfl: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.fsharp = e.languages.extend("clike", {
          comment: [
            { pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }
          ],
          string: {
            pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
            greedy: !0
          },
          "class-name": {
            pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
            lookbehind: !0,
            inside: { operator: /->|\*/, punctuation: /\./ }
          },
          keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
          number: [
            /\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,
            /\b0b[01]+(?:y|uy)?\b/,
            /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
            /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/
          ],
          operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
        })),
          e.languages.insertBefore("fsharp", "keyword", {
            preprocessor: {
              pattern: /^[^\r\n\S]*#.*/m,
              alias: "property",
              inside: {
                directive: {
                  pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,
                  lookbehind: !0,
                  alias: "keyword"
                }
              }
            }
          }),
          e.languages.insertBefore("fsharp", "punctuation", {
            "computation-expression": {
              pattern: /[_a-z]\w*(?=\s*\{)/i,
              alias: "keyword"
            }
          }),
          e.languages.insertBefore("fsharp", "string", {
            annotation: {
              pattern: /\[<.+?>\]/,
              inside: {
                punctuation: /^\[<|>\]$/,
                "class-name": {
                  pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
                  lookbehind: !0
                },
                "annotation-content": {
                  pattern: /[\s\S]+/,
                  inside: e.languages.fsharp
                }
              }
            }
          });
      }
      (e.exports = a), (a.displayName = "fsharp"), (a.aliases = []);
    },
    mNGm: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.parigp = {
          comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
          string: { pattern: /"(?:[^"\\\r\n]|\\.)*"/, greedy: !0 },
          keyword: (function() {
            var e = [
              "breakpoint",
              "break",
              "dbg_down",
              "dbg_err",
              "dbg_up",
              "dbg_x",
              "forcomposite",
              "fordiv",
              "forell",
              "forpart",
              "forprime",
              "forstep",
              "forsubgroup",
              "forvec",
              "for",
              "iferr",
              "if",
              "local",
              "my",
              "next",
              "return",
              "until",
              "while"
            ];
            return (
              (e = e
                .map(function(e) {
                  return e.split("").join(" *");
                })
                .join("|")),
              RegExp("\\b(?:" + e + ")\\b")
            );
          })(),
          function: /\w[\w ]*?(?= *\()/,
          number: {
            pattern: /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
            lookbehind: !0
          },
          operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
          punctuation: /[\[\]{}().,:;|]/
        };
      }
      (e.exports = a), (a.displayName = "parigp"), (a.aliases = []);
    },
    mX3B: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.d = e.languages.extend("clike", {
          string: [
            /\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/,
            /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/,
            /\bq"([_a-zA-Z][_a-zA-Z\d]*)(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\1"/,
            /\bq"(.)[\s\S]*?\1"/,
            /'(?:\\'|\\?[^']+)'/,
            /(["`])(?:\\[\s\S]|(?!\1)[^\\])*\1[cwd]?/
          ],
          number: [
            /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i,
            {
              pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,
              lookbehind: !0
            }
          ],
          keyword: /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
          operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
        })),
          (e.languages.d.comment = [
            /^\s*#!.+/,
            {
              pattern: /(^|[^\\])\/\+(?:\/\+[\s\S]*?\+\/|[\s\S])*?\+\//,
              lookbehind: !0
            }
          ].concat(e.languages.d.comment)),
          e.languages.insertBefore("d", "comment", {
            "token-string": {
              pattern: /\bq\{(?:\{[^}]*\}|[^}])*\}/,
              alias: "string"
            }
          }),
          e.languages.insertBefore("d", "keyword", { property: /\B@\w*/ }),
          e.languages.insertBefore("d", "function", {
            register: {
              pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
              alias: "variable"
            }
          });
      }
      (e.exports = a), (a.displayName = "d"), (a.aliases = []);
    },
    npx2: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          e.languages.pug = {
            comment: {
              pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
              lookbehind: !0
            },
            "multiline-script": {
              pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0,
              inside: { rest: e.languages.javascript }
            },
            filter: {
              pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0,
              inside: {
                "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }
              }
            },
            "multiline-plain-text": {
              pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0
            },
            markup: {
              pattern: /(^[\t ]*)<.+/m,
              lookbehind: !0,
              inside: { rest: e.languages.markup }
            },
            doctype: {
              pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
              lookbehind: !0
            },
            "flow-control": {
              pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
              lookbehind: !0,
              inside: {
                each: {
                  pattern: /^each .+? in\b/,
                  inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ }
                },
                branch: {
                  pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                  alias: "keyword"
                },
                rest: e.languages.javascript
              }
            },
            keyword: {
              pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
              lookbehind: !0
            },
            mixin: [
              {
                pattern: /(^[\t ]*)mixin .+/m,
                lookbehind: !0,
                inside: {
                  keyword: /^mixin/,
                  function: /\w+(?=\s*\(|\s*$)/,
                  punctuation: /[(),.]/
                }
              },
              {
                pattern: /(^[\t ]*)\+.+/m,
                lookbehind: !0,
                inside: {
                  name: { pattern: /^\+\w+/, alias: "function" },
                  rest: e.languages.javascript
                }
              }
            ],
            script: {
              pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
              lookbehind: !0,
              inside: { rest: e.languages.javascript }
            },
            "plain-text": {
              pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
              lookbehind: !0
            },
            tag: {
              pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
              lookbehind: !0,
              inside: {
                attributes: [
                  {
                    pattern: /&[^(]+\([^)]+\)/,
                    inside: { rest: e.languages.javascript }
                  },
                  {
                    pattern: /\([^)]+\)/,
                    inside: {
                      "attr-value": {
                        pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                        lookbehind: !0,
                        inside: { rest: e.languages.javascript }
                      },
                      "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                      punctuation: /[!=(),]+/
                    }
                  }
                ],
                punctuation: /:/
              }
            },
            code: [
              {
                pattern: /(^[\t ]*(?:-|!?=)).+/m,
                lookbehind: !0,
                inside: { rest: e.languages.javascript }
              }
            ],
            punctuation: /[.\-!=|]+/
          };
          for (
            var t = /(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/
                .source,
              n = [
                { filter: "atpl", language: "twig" },
                { filter: "coffee", language: "coffeescript" },
                "ejs",
                "handlebars",
                "less",
                "livescript",
                "markdown",
                { filter: "sass", language: "scss" },
                "stylus"
              ],
              a = {},
              o = 0,
              r = n.length;
            o < r;
            o++
          ) {
            var i = n[o];
            (i = "string" === typeof i ? { filter: i, language: i } : i),
              e.languages[i.language] &&
                (a["filter-" + i.filter] = {
                  pattern: RegExp(t.replace("{{filter_name}}", i.filter), "m"),
                  lookbehind: !0,
                  inside: {
                    "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
                    rest: e.languages[i.language]
                  }
                });
          }
          e.languages.insertBefore("pug", "filter", a);
        })(e);
      }
      (e.exports = a), (a.displayName = "pug"), (a.aliases = []);
    },
    o9nR: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages["nand2tetris-hdl"] = {
          comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          keyword: /\b(?:CHIP|IN|OUT|PARTS|BUILTIN|CLOCKED)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /[A-Za-z][A-Za-z0-9]*(?=\()/,
          number: /\b\d+\b/,
          operator: /=|\.\./,
          punctuation: /[{}[\];(),:]/
        };
      }
      (e.exports = a), (a.displayName = "nand2tetrisHdl"), (a.aliases = []);
    },
    oBNv: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.elixir = {
          comment: /#.*/m,
          regex: {
            pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
            greedy: !0
          },
          string: [
            {
              pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
              greedy: !0,
              inside: {}
            },
            { pattern: /("""|''')[\s\S]*?\1/, greedy: !0, inside: {} },
            {
              pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
              inside: {}
            }
          ],
          atom: { pattern: /(^|[^:]):\w+/, lookbehind: !0, alias: "symbol" },
          "attr-name": /\w+:(?!:)/,
          capture: {
            pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
            lookbehind: !0,
            alias: "function"
          },
          argument: {
            pattern: /(^|[^&])&\d+/,
            lookbehind: !0,
            alias: "variable"
          },
          attribute: { pattern: /@\w+/, alias: "variable" },
          number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
          keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
          boolean: /\b(?:true|false|nil)\b/,
          operator: [
            /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
            { pattern: /([^<])<(?!<)/, lookbehind: !0 },
            { pattern: /([^>])>(?!>)/, lookbehind: !0 }
          ],
          punctuation: /<<|>>|[.,%\[\]{}()]/
        }),
          e.languages.elixir.string.forEach(function(t) {
            t.inside = {
              interpolation: {
                pattern: /#\{[^}]+\}/,
                inside: {
                  delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
                  rest: e.languages.elixir
                }
              }
            };
          });
      }
      (e.exports = a), (a.displayName = "elixir"), (a.aliases = []);
    },
    oHmT: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.cil = {
          comment: /\/\/.*/,
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          directive: {
            pattern: /(^|\W)\.[a-z]+(?=\s)/,
            lookbehind: !0,
            alias: "class-name"
          },
          variable: /\[[\w\.]+\]/,
          keyword: /\b(?:abstract|ansi|assembly|auto|autochar|beforefieldinit|bool|bstr|byvalstr|catch|char|cil|class|currency|date|decimal|default|enum|error|explicit|extends|extern|famandassem|family|famorassem|final(?:ly)?|float32|float64|hidebysig|iant|idispatch|implements|import|initonly|instance|u?int(?:8|16|32|64)?|interface|iunknown|literal|lpstr|lpstruct|lptstr|lpwstr|managed|method|native(?:Type)?|nested|newslot|object(?:ref)?|pinvokeimpl|private|privatescope|public|reqsecobj|rtspecialname|runtime|sealed|sequential|serializable|specialname|static|string|struct|syschar|tbstr|unicode|unmanagedexp|unsigned|value(?:type)?|variant|virtual|void)\b/,
          function: /\b(?:(?:constrained|unaligned|volatile|readonly|tail|no)\.)?(?:conv\.(?:[iu][1248]?|ovf\.[iu][1248]?(?:\.un)?|r\.un|r4|r8)|ldc\.(?:i4(?:\.[0-9]+|\.[mM]1|\.s)?|i8|r4|r8)|ldelem(?:\.[iu][1248]?|\.r[48]|\.ref|a)?|ldind\.(?:[iu][1248]?|r[48]|ref)|stelem\.?(?:i[1248]?|r[48]|ref)?|stind\.(i[1248]?|r[48]|ref)?|end(?:fault|filter|finally)|ldarg(?:\.[0-3s]|a(?:\.s)?)?|ldloc(?:\.[0-9]+|\.s)?|sub(?:\.ovf(?:\.un)?)?|mul(?:\.ovf(?:\.un)?)?|add(?:\.ovf(?:\.un)?)?|stloc(?:\.[0-3s])?|refany(?:type|val)|blt(?:\.un)?(?:\.s)?|ble(?:\.un)?(?:\.s)?|bgt(?:\.un)?(?:\.s)?|bge(?:\.un)?(?:\.s)?|unbox(?:\.any)?|init(?:blk|obj)|call(?:i|virt)?|brfalse(?:\.s)?|bne\.un(?:\.s)?|ldloca(?:\.s)?|brzero(?:\.s)?|brtrue(?:\.s)?|brnull(?:\.s)?|brinst(?:\.s)?|starg(?:\.s)?|leave(?:\.s)?|shr(?:\.un)?|rem(?:\.un)?|div(?:\.un)?|clt(?:\.un)?|alignment|ldvirtftn|castclass|beq(?:\.s)?|mkrefany|localloc|ckfinite|rethrow|ldtoken|ldsflda|cgt\.un|arglist|switch|stsfld|sizeof|newobj|newarr|ldsfld|ldnull|ldflda|isinst|throw|stobj|stloc|stfld|ldstr|ldobj|ldlen|ldftn|ldfld|cpobj|cpblk|break|br\.s|xor|shl|ret|pop|not|nop|neg|jmp|dup|clt|cgt|ceq|box|and|or|br)\b/,
          boolean: /\b(?:true|false)\b/,
          number: /\b-?(?:0x[0-9a-fA-F]+|[0-9]+)(?:\.[0-9a-fA-F]+)?\b/i,
          punctuation: /[{}[\];(),:=]|IL_[0-9A-Za-z]+/
        };
      }
      (e.exports = a), (a.displayName = "cil"), (a.aliases = []);
    },
    oTt7: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.roboconf = {
          comment: /#.*/,
          keyword: {
            pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
            lookbehind: !0
          },
          component: { pattern: /[\w-]+(?=[ \t]*\{)/, alias: "variable" },
          property: /[\w.-]+(?=[ \t]*:)/,
          value: {
            pattern: /(=[ \t]*)[^,;]+/,
            lookbehind: !0,
            alias: "attr-value"
          },
          optional: { pattern: /\(optional\)/, alias: "builtin" },
          wildcard: { pattern: /(\.)\*/, lookbehind: !0, alias: "operator" },
          punctuation: /[{},.;:=]/
        };
      }
      (e.exports = a), (a.displayName = "roboconf"), (a.aliases = []);
    },
    oV7L: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.sas = {
          datalines: {
            pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
            alias: "string",
            inside: {
              keyword: {
                pattern: /^(\s*)(?:(?:data)?lines|cards)/i,
                lookbehind: !0
              },
              punctuation: /;/
            }
          },
          comment: [
            { pattern: /(^\s*|;\s*)\*.*;/m, lookbehind: !0 },
            /\/\*[\s\S]+?\*\//
          ],
          datetime: { pattern: /'[^']+'(?:dt?|t)\b/i, alias: "number" },
          string: { pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, greedy: !0 },
          keyword: /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then|libname|set|output|options)\b/i,
          number: /\b(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
          operator: /\*\*?|\|\|?|!!?|\xa6\xa6?|<[>=]?|>[<=]?|[-+\/=&]|[~\xac^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
          punctuation: /[$%@.(){}\[\];,\\]/
        };
      }
      (e.exports = a), (a.displayName = "sas"), (a.aliases = []);
    },
    orAT: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages["shell-session"] = {
          command: {
            pattern: /\$(?:[^\r\n'"<]|(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1|((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*(?:\r\n?|\n)(?:[\s\S])*?(?:\r\n?|\n)\3)+/,
            inside: {
              bash: {
                pattern: /(\$\s*)[\s\S]+/,
                lookbehind: !0,
                alias: "language-bash",
                inside: e.languages.bash
              },
              sh: { pattern: /^\$/, alias: "important" }
            }
          },
          output: { pattern: /.(?:.*(?:\r\n?|\n|.$))*/ }
        };
      }
      (e.exports = a), (a.displayName = "shellSession"), (a.aliases = []);
    },
    "p+MO": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/ }
          },
          variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0
            }
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/
        };
      }
      (e.exports = a), (a.displayName = "makefile"), (a.aliases = []);
    },
    pJgR: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          var t = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" },
            n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,
            a = /\\[wsd]|\.|\\p{[^{}]+}/i,
            o = "(?:[^\\\\-]|" + n.source + ")",
            r = RegExp(o + "-" + o),
            i = {
              pattern: /(<|')[^<>']+(?=[>']$)/,
              lookbehind: !0,
              alias: "variable"
            },
            s = [
              /\\(?![123][0-7]{2})[1-9]/,
              { pattern: /\\k<[^<>']+>/, inside: { "group-name": i } }
            ];
          (e.languages.regex = {
            charset: {
              pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
              lookbehind: !0,
              inside: {
                "charset-negation": { pattern: /(^\[)\^/, lookbehind: !0 },
                "charset-punctuation": /^\[|\]$/,
                range: {
                  pattern: r,
                  inside: { escape: n, "range-punctuation": /-/ }
                },
                "special-escape": t,
                charclass: a,
                backreference: s,
                escape: n
              }
            },
            "special-escape": t,
            charclass: a,
            backreference: s,
            anchor: /[$^]|\\[ABbGZz]/,
            escape: n,
            group: [
              {
                pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                inside: { "group-name": i }
              },
              /\)/
            ],
            quantifier: /[+*?]|\{(?:\d+,?\d*)\}/,
            alternation: /\|/
          }),
            [
              "actionscript",
              "coffescript",
              "flow",
              "javascript",
              "typescript",
              "vala"
            ].forEach(function(t) {
              var n = e.languages[t];
              n &&
                (n.regex.inside = {
                  "regex-flags": /[a-z]+$/,
                  "regex-delimiter": /^\/|\/$/,
                  "language-regex": {
                    pattern: /[\s\S]+/,
                    inside: e.languages.regex
                  }
                });
            });
        })(e);
      }
      (e.exports = a), (a.displayName = "regex"), (a.aliases = []);
    },
    pVnL: function(e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          n.apply(this, arguments)
        );
      }
      (e.exports = n),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    phHE: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.graphql = {
          comment: /#.*/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0
          },
          "class-name": {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
            lookbehind: !0
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function"
          },
          keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
          operator: /[!=|]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
        };
      }
      (e.exports = a), (a.displayName = "graphql"), (a.aliases = []);
    },
    piw0: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          "string-interpolation": {
            pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation"
                  },
                  rest: null
                }
              },
              string: /[\s\S]+/
            }
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
            greedy: !0,
            alias: "string"
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/i,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ }
          },
          keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/
        }),
          (e.languages.python[
            "string-interpolation"
          ].inside.interpolation.inside.rest = e.languages.python),
          (e.languages.py = e.languages.python);
      }
      (e.exports = a), (a.displayName = "python"), (a.aliases = ["py"]);
    },
    pr4O: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.c = e.languages.extend("clike", {
          "class-name": {
            pattern: /(\b(?:enum|struct)\s+)\w+/,
            lookbehind: !0
          },
          keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
          number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
        })),
          e.languages.insertBefore("c", "string", {
            macro: {
              pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
              lookbehind: !0,
              alias: "property",
              inside: {
                string: {
                  pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                  lookbehind: !0
                },
                directive: {
                  pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                  lookbehind: !0,
                  alias: "keyword"
                }
              }
            },
            constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
          }),
          delete e.languages.c.boolean;
      }
      (e.exports = a), (a.displayName = "c"), (a.aliases = []);
    },
    q9H2: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m]
          };
          var t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!"
          };
          Object.keys(t).forEach(function(n) {
            var a = t[n],
              o = [];
            /^\w+$/.test(n) || o.push(/\w+/.exec(n)[0]),
              "diff" === n && o.push("bold"),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  "^(?:[" + a + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                  "m"
                ),
                alias: o
              });
          }),
            Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
        })(e);
      }
      (e.exports = a), (a.displayName = "diff"), (a.aliases = []);
    },
    qTn3: function(e, t, n) {
      "use strict";
      var a = n("Ut8p"),
        o = n("FWC9");
      (e.exports = s), (s.prototype = new a()), (s.prototype.defined = !0);
      var r = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated"
        ],
        i = r.length;
      function s(e, t, n, s) {
        var c,
          d = -1;
        for (l(this, "space", s), a.call(this, e, t); ++d < i; )
          l(this, (c = r[d]), (n & o[c]) === o[c]);
      }
      function l(e, t, n) {
        n && (e[t] = n);
      }
    },
    qcbc: function(e, t, n) {
      "use strict";
      var a = n("DPa0");
      function o(e) {
        e.register(a),
          (e.languages.scala = e.languages.extend("java", {
            keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
            string: [
              { pattern: /"""[\s\S]*?"""/, greedy: !0 },
              { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
            ],
            builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
            number: /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,
            symbol: /'[^\d\s\\]\w*/
          })),
          delete e.languages.scala["class-name"],
          delete e.languages.scala.function;
      }
      (e.exports = o), (o.displayName = "scala"), (o.aliases = []);
    },
    qseY: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.gedcom = {
          "line-value": {
            pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
            lookbehind: !0,
            inside: {
              pointer: {
                pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
                alias: "variable"
              }
            }
          },
          tag: {
            pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
            lookbehind: !0,
            alias: "string"
          },
          level: { pattern: /(^\s*)\d+/m, lookbehind: !0, alias: "number" },
          pointer: {
            pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
            alias: "variable"
          }
        };
      }
      (e.exports = a), (a.displayName = "gedcom"), (a.aliases = []);
    },
    qu84: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          e.languages.http = {
            "request-line": {
              pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
              inside: {
                property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
                "attr-name": /:\w+/
              }
            },
            "response-status": {
              pattern: /^HTTP\/1.[01] \d+.*/m,
              inside: {
                property: { pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0 }
              }
            },
            "header-name": { pattern: /^[\w-]+:(?=.)/m, alias: "keyword" }
          };
          var t,
            n = e.languages,
            a = {
              "application/javascript": n.javascript,
              "application/json": n.json || n.javascript,
              "application/xml": n.xml,
              "text/xml": n.xml,
              "text/html": n.html,
              "text/css": n.css
            },
            o = { "application/json": !0, "application/xml": !0 };
          function r(e) {
            var t = e.replace(/^[a-z]+\//, "");
            return (
              "(?:" +
              e +
              "|" +
              ("\\w+/(?:[\\w.-]+\\+)+" + t + "(?![+\\w.-])") +
              ")"
            );
          }
          for (var i in a)
            if (a[i]) {
              t = t || {};
              var s = o[i] ? r(i) : i;
              t[i] = {
                pattern: RegExp(
                  "(content-type:\\s*" +
                    s +
                    "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*",
                  "i"
                ),
                lookbehind: !0,
                inside: { rest: a[i] }
              };
            }
          t && e.languages.insertBefore("http", "header-name", t);
        })(e);
      }
      (e.exports = a), (a.displayName = "http"), (a.aliases = []);
    },
    r3IV: function(e, t, n) {
      "use strict";
      e.exports = function(e, t) {
        var n,
          o,
          r,
          i = e || "",
          s = t || "div",
          l = {},
          c = 0;
        for (; c < i.length; )
          (a.lastIndex = c),
            (r = a.exec(i)),
            (n = i.slice(c, r ? r.index : i.length)) &&
              (o
                ? "#" === o
                  ? (l.id = n)
                  : l.className
                  ? l.className.push(n)
                  : (l.className = [n])
                : (s = n),
              (c += n.length)),
            r && ((o = r[0]), c++);
        return { type: "element", tagName: s, properties: l, children: [] };
      };
      var a = /[#.]/g;
    },
    r77y: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.autohotkey = {
          comment: {
            pattern: /(^[^";\n]*("[^"\n]*?"[^"\n]*?)*)(?:;.*$|^\s*\/\*[\s\S]*\n\*\/)/m,
            lookbehind: !0
          },
          string: /"(?:[^"\n\r]|"")*"/m,
          function: /[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+?(?=\()/m,
          tag: /^[ \t]*[^\s:]+?(?=:(?:[^:]|$))/m,
          variable: /%\w+%/,
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
          operator: /\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,
          punctuation: /[{}[\]():,]/,
          boolean: /\b(?:true|false)\b/,
          selector: /\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,
          constant: /\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_formatfloat|a_formatinteger|a_gui|a_guievent|a_guicontrol|a_guicontrolevent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|programfiles|a_programfiles|a_programs|a_programscommon|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel)\b/i,
          builtin: /\b(?:abs|acos|asc|asin|atan|ceil|chr|class|cos|dllcall|exp|fileexist|Fileopen|floor|il_add|il_create|il_destroy|instr|substr|isfunc|islabel|IsObject|ln|log|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|onmessage|numget|numput|registercallback|regexmatch|regexreplace|round|sin|tan|sqrt|strlen|sb_seticon|sb_setparts|sb_settext|strsplit|tv_add|tv_delete|tv_getchild|tv_getcount|tv_getnext|tv_get|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__New|__Call|__Get|__Set)\b/i,
          symbol: /\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,
          important: /#\b(?:AllowSameLineComments|ClipboardTimeout|CommentFlag|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InstallKeybdHook|InstallMouseHook|KeyHistory|LTrim|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|WinActivateForce)\b/i,
          keyword: /\b(?:Abort|AboveNormal|Add|ahk_class|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Region|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|TryAgain|Type|UnCheck|underline|Unicode|Unlock|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i
        };
      }
      (e.exports = a), (a.displayName = "autohotkey"), (a.aliases = []);
    },
    rDFf: function(e, t, n) {
      "use strict";
      var a = n("pr4O");
      function o(e) {
        e.register(a),
          (e.languages.cpp = e.languages.extend("c", {
            "class-name": {
              pattern: /(\b(?:class|enum|struct)\s+)\w+/,
              lookbehind: !0
            },
            keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            number: {
              pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
              greedy: !0
            },
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:true|false)\b/
          })),
          e.languages.insertBefore("cpp", "string", {
            "raw-string": {
              pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
              alias: "string",
              greedy: !0
            }
          });
      }
      (e.exports = o), (o.displayName = "cpp"), (o.aliases = []);
    },
    rFnP: function(e, t, n) {
      "use strict";
      var a = n("SVLc");
      function o(e) {
        e.register(a),
          (function(e) {
            (e.languages.crystal = e.languages.extend("ruby", {
              keyword: [
                /\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,
                { pattern: /(\.\s*)(?:is_a|responds_to)\?/, lookbehind: !0 }
              ],
              number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
            })),
              e.languages.insertBefore("crystal", "string", {
                attribute: {
                  pattern: /@\[.+?\]/,
                  alias: "attr-name",
                  inside: {
                    delimiter: { pattern: /^@\[|\]$/, alias: "tag" },
                    rest: e.languages.crystal
                  }
                },
                expansion: [
                  {
                    pattern: /\{\{.+?\}\}/,
                    inside: {
                      delimiter: { pattern: /^\{\{|\}\}$/, alias: "tag" },
                      rest: e.languages.crystal
                    }
                  },
                  {
                    pattern: /\{%.+?%\}/,
                    inside: {
                      delimiter: { pattern: /^\{%|%\}$/, alias: "tag" },
                      rest: e.languages.crystal
                    }
                  }
                ]
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "crystal"), (o.aliases = []);
    },
    rQez: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.ada = {
          comment: /--.*/,
          string: /"(?:""|[^"\r\f\n])*"/i,
          number: [
            {
              pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
            },
            {
              pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
            }
          ],
          "attr-name": /\b'\w+/i,
          keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
          boolean: /\b(?:true|false)\b/i,
          operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
          punctuation: /\.\.?|[,;():]/,
          char: /'.'/,
          variable: /\b[a-z](?:[_a-z\d])*\b/i
        };
      }
      (e.exports = a), (a.displayName = "ada"), (a.aliases = []);
    },
    rS7C: function(e, t, n) {
      "use strict";
      var a = n("F6fn"),
        o = n("bAF5"),
        r = n("r3IV"),
        i = n("TTG4").parse,
        s = n("vfP8").parse;
      e.exports = function(e, t, n) {
        var o = n
          ? (function(e) {
              var t,
                n = e.length,
                a = -1,
                o = {};
              for (; ++a < n; ) (t = e[a]), (o[t.toLowerCase()] = t);
              return o;
            })(n)
          : null;
        return function(e, n) {
          var a,
            i = r(e, t),
            s = Array.prototype.slice.call(arguments, 2),
            c = i.tagName.toLowerCase();
          (i.tagName = o && l.call(o, c) ? o[c] : c),
            n &&
              (function(e, t) {
                return (
                  "string" === typeof e ||
                  "length" in e ||
                  (function(e, t) {
                    var n = t.type;
                    if ("input" === e || !n || "string" !== typeof n) return !1;
                    if (
                      "object" === typeof t.children &&
                      "length" in t.children
                    )
                      return !0;
                    if (((n = n.toLowerCase()), "button" === e))
                      return (
                        "menu" !== n &&
                        "submit" !== n &&
                        "reset" !== n &&
                        "button" !== n
                      );
                    return "value" in t;
                  })(t.tagName, e)
                );
              })(n, i) &&
              (s.unshift(n), (n = null));
          if (n) for (a in n) d(i.properties, a, n[a]);
          (function e(t, n) {
            var a, o;
            if ("string" === typeof n || "number" === typeof n)
              return void t.push({ type: "text", value: String(n) });
            if ("object" === typeof n && "length" in n) {
              for (a = -1, o = n.length; ++a < o; ) e(t, n[a]);
              return;
            }
            if ("object" !== typeof n || !("type" in n))
              throw new Error(
                "Expected node, nodes, or string, got `" + n + "`"
              );
            t.push(n);
          })(i.children, s),
            "template" === i.tagName &&
              ((i.content = { type: "root", children: i.children }),
              (i.children = []));
          return i;
        };
        function d(t, n, o) {
          var r, l, d;
          null !== o &&
            void 0 !== o &&
            o === o &&
            ((l = (r = a(e, n)).property),
            "string" === typeof (d = o) &&
              (r.spaceSeparated
                ? (d = i(d))
                : r.commaSeparated
                ? (d = s(d))
                : r.commaOrSpaceSeparated && (d = i(s(d).join(" ")))),
            "style" === l &&
              "string" !== typeof o &&
              (d = (function(e) {
                var t,
                  n = [];
                for (t in e) n.push([t, e[t]].join(": "));
                return n.join("; ");
              })(d)),
            "className" === l && t.className && (d = t.className.concat(d)),
            (t[l] = (function(e, t, n) {
              var a, o, r;
              if ("object" !== typeof n || !("length" in n)) return c(e, t, n);
              (o = n.length), (a = -1), (r = []);
              for (; ++a < o; ) r[a] = c(e, t, n[a]);
              return r;
            })(r, l, d)));
        }
      };
      var l = {}.hasOwnProperty;
      function c(e, t, n) {
        var a = n;
        return (
          e.number || e.positiveNumber
            ? isNaN(a) || "" === a || (a = Number(a))
            : (e.boolean || e.overloadedBoolean) &&
              ("string" !== typeof a ||
                ("" !== a && o(n) !== o(t)) ||
                (a = !0)),
          a
        );
      }
    },
    rfLa: function(e, t, n) {
      "use strict";
      var a = n("DxsT");
      function o(e) {
        e.register(a),
          (function(e) {
            var t = /(?:[a-zA-Z]\w*|[|\\[\]])+/.source;
            (e.languages.phpdoc = e.languages.extend("javadoclike", {
              parameter: {
                pattern: RegExp(
                  "(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" +
                    t +
                    "\\s+)?)\\$\\w+"
                ),
                lookbehind: !0
              }
            })),
              e.languages.insertBefore("phpdoc", "keyword", {
                "class-name": [
                  {
                    pattern: RegExp(
                      "(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" +
                        t
                    ),
                    lookbehind: !0,
                    inside: {
                      keyword: /\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,
                      punctuation: /[|\\[\]()]/
                    }
                  }
                ]
              }),
              e.languages.javadoclike.addSupport("php", e.languages.phpdoc);
          })(e);
      }
      (e.exports = o), (o.displayName = "phpdoc"), (o.aliases = []);
    },
    rxUy: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.wiki = e.languages.extend("markup", {
          "block-comment": {
            pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
            lookbehind: !0,
            alias: "comment"
          },
          heading: {
            pattern: /^(=+).+?\1/m,
            inside: { punctuation: /^=+|=+$/, important: /.+/ }
          },
          emphasis: {
            pattern: /('{2,5}).+?\1/,
            inside: {
              "bold italic": { pattern: /(''''').+?(?=\1)/, lookbehind: !0 },
              bold: { pattern: /(''')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
              italic: { pattern: /('')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
              punctuation: /^''+|''+$/
            }
          },
          hr: { pattern: /^-{4,}/m, alias: "punctuation" },
          url: [
            /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i,
            /\[\[.+?\]\]|\[.+?\]/
          ],
          variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
          symbol: [/^#redirect/im, /~{3,5}/],
          "table-tag": {
            pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
            lookbehind: !0,
            inside: {
              "table-bar": { pattern: /\|$/, alias: "punctuation" },
              rest: e.languages.markup.tag.inside
            }
          },
          punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
        })),
          e.languages.insertBefore("wiki", "tag", {
            nowiki: {
              pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
              inside: {
                tag: {
                  pattern: /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
                  inside: e.languages.markup.tag.inside
                }
              }
            }
          });
      }
      (e.exports = a), (a.displayName = "wiki"), (a.aliases = []);
    },
    sBZc: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.pcaxis = {
          string: /"[^"]*"/,
          keyword: {
            pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              keyword: /^[-A-Z\d]+/,
              language: {
                pattern: /^(\s*)\[[-\w]+\]/,
                lookbehind: !0,
                inside: { punctuation: /^\[|\]$/, property: /[-\w]+/ }
              },
              "sub-key": {
                pattern: /^(\s*)[\s\S]+/,
                lookbehind: !0,
                inside: {
                  parameter: { pattern: /"[^"]*"/, alias: "property" },
                  punctuation: /^\(|\)$|,/
                }
              }
            }
          },
          operator: /=/,
          tlist: {
            pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,
            greedy: !0,
            inside: {
              function: /^TLIST/,
              property: { pattern: /^(\s*\(\s*)\w+/, lookbehind: !0 },
              string: /"[^"]*"/,
              punctuation: /[(),]/,
              operator: /-/
            }
          },
          punctuation: /[;,]/,
          number: { pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/, lookbehind: !0 },
          boolean: /YES|NO/
        }),
          (e.languages.px = e.languages.pcaxis);
      }
      (e.exports = a), (a.displayName = "pcaxis"), (a.aliases = ["px"]);
    },
    sFmL: function(e, t, n) {
      "use strict";
      var a = n("pr4O");
      function o(e) {
        e.register(a),
          (e.languages.objectivec = e.languages.extend("c", {
            keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
            string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
          })),
          delete e.languages.objectivec["class-name"];
      }
      (e.exports = o), (o.displayName = "objectivec"), (o.aliases = []);
    },
    sYQe: function(e, t, n) {
      "use strict";
      var a = n("0iGP");
      function o(e) {
        e.register(a),
          (function(e) {
            (e.languages.smarty = {
              comment: /\{\*[\s\S]*?\*\}/,
              delimiter: { pattern: /^\{|\}$/i, alias: "punctuation" },
              string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
              number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
              variable: [
                /\$(?!\d)\w+/,
                /#(?!\d)\w+#/,
                { pattern: /(\.|->)(?!\d)\w+/, lookbehind: !0 },
                { pattern: /(\[)(?!\d)\w+(?=\])/, lookbehind: !0 }
              ],
              function: [
                { pattern: /(\|\s*)@?(?!\d)\w+/, lookbehind: !0 },
                /^\/?(?!\d)\w+/,
                /(?!\d)\w+(?=\()/
              ],
              "attr-name": {
                pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
                inside: {
                  variable: { pattern: /(=\s*)(?!\d)\w+/, lookbehind: !0 },
                  operator: /=/
                }
              },
              punctuation: [/[\[\]().,:`]|->/],
              operator: [
                /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
                /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
                /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/
              ],
              keyword: /\b(?:false|off|on|no|true|yes)\b/
            }),
              e.hooks.add("before-tokenize", function(t) {
                var n = !1;
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "smarty",
                  /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,
                  function(e) {
                    return (
                      "{/literal}" === e && (n = !1),
                      !n && ("{literal}" === e && (n = !0), !0)
                    );
                  }
                );
              }),
              e.hooks.add("after-tokenize", function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(
                  t,
                  "smarty"
                );
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "smarty"), (o.aliases = []);
    },
    tBDx: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.nim = {
          comment: /#.*/,
          string: {
            pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
            greedy: !0
          },
          number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
          keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
          function: {
            pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
            inside: { operator: /\*$/ }
          },
          ignore: { pattern: /`[^`\r\n]+`/, inside: { punctuation: /`/ } },
          operator: {
            pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
            lookbehind: !0
          },
          punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
        };
      }
      (e.exports = a), (a.displayName = "nim"), (a.aliases = []);
    },
    tGK9: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.bnf = {
          string: { pattern: /"[^\r\n"]*"|'[^\r\n']*'/ },
          definition: {
            pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
            alias: ["rule", "keyword"],
            inside: { punctuation: /^<|>$/ }
          },
          rule: { pattern: /<[^<>\r\n\t]+>/, inside: { punctuation: /^<|>$/ } },
          operator: /::=|[|()[\]{}*+?]|\.{3}/
        }),
          (e.languages.rbnf = e.languages.bnf);
      }
      (e.exports = a), (a.displayName = "bnf"), (a.aliases = ["rbnf"]);
    },
    tQ4h: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.r = {
          comment: /#.*/,
          string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          "percent-operator": { pattern: /%[^%\s]*%/, alias: "operator" },
          boolean: /\b(?:TRUE|FALSE)\b/,
          ellipsis: /\.\.(?:\.|\d+)/,
          number: [
            /\b(?:NaN|Inf)\b/,
            /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
          ],
          keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
          operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
          punctuation: /[(){}\[\],;]/
        };
      }
      (e.exports = a), (a.displayName = "r"), (a.aliases = []);
    },
    tYeQ: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.icon = {
          comment: /#.*/,
          string: {
            pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,
            greedy: !0
          },
          number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
          "builtin-keyword": {
            pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
            alias: "variable"
          },
          directive: { pattern: /\$\w+/, alias: "builtin" },
          keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
          function: /(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
          operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
          punctuation: /[\[\](){},;]/
        };
      }
      (e.exports = a), (a.displayName = "icon"), (a.aliases = []);
    },
    tnne: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.julia = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          string: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2/,
          keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
          boolean: /\b(?:true|false)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?/i,
          operator: /[-+*^%\xf7&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~\u2260\u2264\u2265]/,
          punctuation: /[{}[\];(),.:]/,
          constant: /\b(?:(?:NaN|Inf)(?:16|32|64)?)\b/
        };
      }
      (e.exports = a), (a.displayName = "julia"), (a.aliases = []);
    },
    ttDY: function(e, t, n) {
      e.exports = n("+iuc");
    },
    uBZG: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.yaml = {
          scalar: {
            pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
            lookbehind: !0,
            alias: "string"
          },
          comment: /#.*/,
          key: {
            pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
            lookbehind: !0,
            alias: "atrule"
          },
          directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important"
          },
          datetime: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
            lookbehind: !0,
            alias: "number"
          },
          boolean: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important"
          },
          null: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important"
          },
          string: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
            lookbehind: !0,
            greedy: !0
          },
          number: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0
          },
          tag: /![^\s]+/,
          important: /[&*][\w]+/,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
        }),
          (e.languages.yml = e.languages.yaml);
      }
      (e.exports = a), (a.displayName = "yaml"), (a.aliases = ["yml"]);
    },
    uFsh: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/
        };
      }
      (e.exports = a), (a.displayName = "sql"), (a.aliases = []);
    },
    uUdh: function(e, t, n) {
      "use strict";
      var a = n("QILm"),
        o = n.n(a),
        r = n("pVnL"),
        i = n.n(r),
        s = n("q1tI"),
        l = n.n(s),
        c = n("MVZn"),
        d = n.n(c);
      function u(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0;
        return e.reduce(function(e, t) {
          return d()({}, e, n[t]);
        }, t);
      }
      function p(e) {
        return e.join(" ");
      }
      function g(e) {
        var t = e.node,
          n = e.stylesheet,
          a = e.style,
          o = void 0 === a ? {} : a,
          r = e.useInlineStyles,
          s = e.key,
          c = t.properties,
          m = t.type,
          f = t.tagName,
          b = t.value;
        if ("text" === m) return b;
        if (f) {
          var h = (function(e, t) {
              var n = 0;
              return function(a) {
                return (
                  (n += 1),
                  a.map(function(a, o) {
                    return g({
                      node: a,
                      stylesheet: e,
                      useInlineStyles: t,
                      key: "code-segment-".concat(n, "-").concat(o)
                    });
                  })
                );
              };
            })(n, r),
            E =
              r &&
              c.className &&
              c.className.filter(function(e) {
                return !n[e];
              }),
            S = E && E.length ? E : void 0,
            _ = r
              ? d()(
                  {},
                  c,
                  { className: S && p(S) },
                  { style: u(c.className, Object.assign({}, c.style, o), n) }
                )
              : d()({}, c, { className: p(c.className) }),
            y = h(t.children);
          return l.a.createElement(f, i()({ key: s }, _), y);
        }
      }
      var m = /\n/g;
      function f(e) {
        var t = e.codeString,
          n = e.codeStyle,
          a = e.containerProps,
          o = void 0 === a ? {} : a,
          r = e.numberProps,
          s = e.startingLineNumber;
        return (
          (o.style = o.style || { float: "left", paddingRight: "10px" }),
          l.a.createElement(
            "code",
            i()({}, o, { style: Object.assign({}, n, o.style) }),
            (function(e) {
              var t = e.lines,
                n = e.startingLineNumber,
                a = e.numberProps,
                o = void 0 === a ? {} : a;
              return t.map(function(e, t) {
                var a = t + n,
                  r = "function" === typeof o ? o(a) : o;
                return l.a.createElement(
                  "span",
                  i()(
                    {
                      key: "line-".concat(t),
                      className: "react-syntax-highlighter-line-number"
                    },
                    r
                  ),
                  "".concat(a, "\n")
                );
              });
            })({
              lines: t.replace(/\n$/, "").split("\n"),
              numberProps: r,
              startingLineNumber: s
            })
          )
        );
      }
      function b(e) {
        var t = e.children,
          n = e.lineNumber,
          a = e.lineProps,
          o = e.className,
          r = void 0 === o ? [] : o,
          i = ("function" === typeof a ? a(n) : a) || {};
        return (
          (i.className = i.className ? r.concat(i.className) : r),
          { type: "element", tagName: "span", properties: i, children: t }
        );
      }
      function h(e, t) {
        for (
          var n = (function e(t) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [],
                  o = 0;
                o < t.length;
                o++
              ) {
                var r = t[o];
                if ("text" === r.type)
                  a.push(b({ children: [r], className: n }));
                else if (r.children) {
                  var i = n.concat(r.properties.className);
                  a = a.concat(e(r.children, i));
                }
              }
              return a;
            })(e.value),
            a = [],
            o = -1,
            r = 0,
            i = function() {
              var e = n[r],
                i = e.children[0].value;
              if (i.match(m)) {
                var s = i.split("\n");
                s.forEach(function(i, l) {
                  var c = a.length + 1,
                    d = { type: "text", value: "".concat(i, "\n") };
                  if (0 === l) {
                    var u = n
                      .slice(o + 1, r)
                      .concat(
                        b({ children: [d], className: e.properties.className })
                      );
                    a.push(b({ children: u, lineNumber: c, lineProps: t }));
                  } else if (l === s.length - 1) {
                    if (n[r + 1] && n[r + 1].children && n[r + 1].children[0]) {
                      var p = b({
                        children: [{ type: "text", value: "".concat(i) }],
                        className: e.properties.className
                      });
                      n.splice(r + 1, 0, p);
                    } else
                      a.push(
                        b({
                          children: [d],
                          lineNumber: c,
                          lineProps: t,
                          className: e.properties.className
                        })
                      );
                  } else
                    a.push(
                      b({
                        children: [d],
                        lineNumber: c,
                        lineProps: t,
                        className: e.properties.className
                      })
                    );
                }),
                  (o = r);
              }
              r++;
            };
          r < n.length;

        )
          i();
        if (o !== n.length - 1) {
          var s = n.slice(o + 1, n.length);
          s &&
            s.length &&
            a.push(b({ children: s, lineNumber: a.length + 1, lineProps: t }));
        }
        return a;
      }
      function E(e) {
        var t = e.rows,
          n = e.stylesheet,
          a = e.useInlineStyles;
        return t.map(function(e, t) {
          return g({
            node: e,
            stylesheet: n,
            useInlineStyles: a,
            key: "code-segement".concat(t)
          });
        });
      }
      var S,
        _,
        y = n("a8JZ"),
        A =
          ((S = n.n(y).a),
          (_ = {
            'code[class*="language-"]': {
              color: "black",
              background: "none",
              textShadow: "0 1px white",
              fontFamily:
                "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
              textAlign: "left",
              whiteSpace: "pre",
              wordSpacing: "normal",
              wordBreak: "normal",
              wordWrap: "normal",
              lineHeight: "1.5",
              MozTabSize: "4",
              OTabSize: "4",
              tabSize: "4",
              WebkitHyphens: "none",
              MozHyphens: "none",
              msHyphens: "none",
              hyphens: "none"
            },
            'pre[class*="language-"]': {
              color: "black",
              background: "#f5f2f0",
              textShadow: "0 1px white",
              fontFamily:
                "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
              textAlign: "left",
              whiteSpace: "pre",
              wordSpacing: "normal",
              wordBreak: "normal",
              wordWrap: "normal",
              lineHeight: "1.5",
              MozTabSize: "4",
              OTabSize: "4",
              tabSize: "4",
              WebkitHyphens: "none",
              MozHyphens: "none",
              msHyphens: "none",
              hyphens: "none",
              padding: "1em",
              margin: ".5em 0",
              overflow: "auto"
            },
            'pre[class*="language-"]::-moz-selection': {
              textShadow: "none",
              background: "#b3d4fc"
            },
            'pre[class*="language-"] ::-moz-selection': {
              textShadow: "none",
              background: "#b3d4fc"
            },
            'code[class*="language-"]::-moz-selection': {
              textShadow: "none",
              background: "#b3d4fc"
            },
            'code[class*="language-"] ::-moz-selection': {
              textShadow: "none",
              background: "#b3d4fc"
            },
            'pre[class*="language-"]::selection': {
              textShadow: "none",
              background: "#b3d4fc"
            },
            'pre[class*="language-"] ::selection': {
              textShadow: "none",
              background: "#b3d4fc"
            },
            'code[class*="language-"]::selection': {
              textShadow: "none",
              background: "#b3d4fc"
            },
            'code[class*="language-"] ::selection': {
              textShadow: "none",
              background: "#b3d4fc"
            },
            ':not(pre) > code[class*="language-"]': {
              background: "#f5f2f0",
              padding: ".1em",
              borderRadius: ".3em",
              whiteSpace: "normal"
            },
            comment: { color: "slategray" },
            prolog: { color: "slategray" },
            doctype: { color: "slategray" },
            cdata: { color: "slategray" },
            punctuation: { color: "#999" },
            ".namespace": { Opacity: ".7" },
            property: { color: "#905" },
            tag: { color: "#905" },
            boolean: { color: "#905" },
            number: { color: "#905" },
            constant: { color: "#905" },
            symbol: { color: "#905" },
            deleted: { color: "#905" },
            selector: { color: "#690" },
            "attr-name": { color: "#690" },
            string: { color: "#690" },
            char: { color: "#690" },
            builtin: { color: "#690" },
            inserted: { color: "#690" },
            operator: { color: "#9a6e3a", background: "hsla(0, 0%, 100%, .5)" },
            entity: {
              color: "#9a6e3a",
              background: "hsla(0, 0%, 100%, .5)",
              cursor: "help"
            },
            url: { color: "#9a6e3a", background: "hsla(0, 0%, 100%, .5)" },
            ".language-css .token.string": {
              color: "#9a6e3a",
              background: "hsla(0, 0%, 100%, .5)"
            },
            ".style .token.string": {
              color: "#9a6e3a",
              background: "hsla(0, 0%, 100%, .5)"
            },
            atrule: { color: "#07a" },
            "attr-value": { color: "#07a" },
            keyword: { color: "#07a" },
            function: { color: "#DD4A68" },
            "class-name": { color: "#DD4A68" },
            regex: { color: "#e90" },
            important: { color: "#e90", fontWeight: "bold" },
            variable: { color: "#e90" },
            bold: { fontWeight: "bold" },
            italic: { fontStyle: "italic" }
          }),
          function(e) {
            var t = e.language,
              n = e.children,
              a = e.style,
              r = void 0 === a ? _ : a,
              i = e.customStyle,
              s = void 0 === i ? {} : i,
              c = e.codeTagProps,
              d = void 0 === c ? { style: r['code[class*="language-"]'] } : c,
              u = e.useInlineStyles,
              p = void 0 === u || u,
              g = e.showLineNumbers,
              m = void 0 !== g && g,
              b = e.startingLineNumber,
              y = void 0 === b ? 1 : b,
              A = e.lineNumberContainerProps,
              T = e.lineNumberProps,
              R = e.wrapLines,
              I = e.lineProps,
              N = void 0 === I ? {} : I,
              v = e.renderer,
              w = e.PreTag,
              k = void 0 === w ? "pre" : w,
              C = e.CodeTag,
              O = void 0 === C ? "code" : C,
              x = e.code,
              L = void 0 === x ? (Array.isArray(n) ? n[0] : n) : x,
              D = e.astGenerator,
              M = o()(e, [
                "language",
                "children",
                "style",
                "customStyle",
                "codeTagProps",
                "useInlineStyles",
                "showLineNumbers",
                "startingLineNumber",
                "lineNumberContainerProps",
                "lineNumberProps",
                "wrapLines",
                "lineProps",
                "renderer",
                "PreTag",
                "CodeTag",
                "code",
                "astGenerator"
              ]);
            D = D || S;
            var P = m
                ? l.a.createElement(f, {
                    containerProps: A,
                    codeStyle: d.style || {},
                    numberProps: T,
                    startingLineNumber: y,
                    codeString: L
                  })
                : null,
              F = r.hljs ||
                r['pre[class*="language-"]'] || { backgroundColor: "#fff" },
              B = p
                ? Object.assign({}, M, { style: Object.assign({}, F, s) })
                : Object.assign({}, M, { className: "hljs" });
            if (!D)
              return l.a.createElement(k, B, P, l.a.createElement(O, d, L));
            (R = !(!v || void 0 !== R) || R), (v = v || E);
            var U = [{ type: "text", value: L }],
              G = (function(e) {
                var t = e.astGenerator,
                  n = e.language,
                  a = e.code,
                  o = e.defaultCodeValue;
                if (t.getLanguage) {
                  var r = n && t.getLanguage(n);
                  return "text" === n
                    ? { value: o, language: "text" }
                    : r
                    ? t.highlight(n, a)
                    : t.highlightAuto(a);
                }
                try {
                  return n && "text" !== n
                    ? { value: t.highlight(a, n) }
                    : { value: o };
                } catch (i) {
                  return { value: o };
                }
              })({
                astGenerator: D,
                language: t,
                code: L,
                defaultCodeValue: U
              });
            null === G.language && (G.value = U);
            var z = R ? h(G, N) : G.value;
            return l.a.createElement(
              k,
              B,
              P,
              l.a.createElement(
                O,
                d,
                v({ rows: z, stylesheet: r, useInlineStyles: p })
              )
            );
          });
      A.supportedLanguages = [
        "abap",
        "actionscript",
        "ada",
        "apacheconf",
        "apl",
        "applescript",
        "arduino",
        "arff",
        "asciidoc",
        "asm6502",
        "aspnet",
        "autohotkey",
        "autoit",
        "bash",
        "basic",
        "batch",
        "bison",
        "brainfuck",
        "bro",
        "c",
        "clike",
        "clojure",
        "coffeescript",
        "cpp",
        "crystal",
        "csharp",
        "csp",
        "css-extras",
        "css",
        "d",
        "dart",
        "diff",
        "django",
        "docker",
        "eiffel",
        "elixir",
        "elm",
        "erb",
        "erlang",
        "flow",
        "fortran",
        "fsharp",
        "gedcom",
        "gherkin",
        "git",
        "glsl",
        "go",
        "graphql",
        "groovy",
        "haml",
        "handlebars",
        "haskell",
        "haxe",
        "hpkp",
        "hsts",
        "http",
        "ichigojam",
        "icon",
        "inform7",
        "ini",
        "io",
        "j",
        "java",
        "javascript",
        "jolie",
        "json",
        "jsx",
        "julia",
        "keyman",
        "kotlin",
        "latex",
        "less",
        "liquid",
        "lisp",
        "livescript",
        "lolcode",
        "lua",
        "makefile",
        "markdown",
        "markup-templating",
        "markup",
        "matlab",
        "mel",
        "mizar",
        "monkey",
        "n4js",
        "nasm",
        "nginx",
        "nim",
        "nix",
        "nsis",
        "objectivec",
        "ocaml",
        "opencl",
        "oz",
        "parigp",
        "parser",
        "pascal",
        "perl",
        "php-extras",
        "php",
        "plsql",
        "powershell",
        "processing",
        "prolog",
        "properties",
        "protobuf",
        "pug",
        "puppet",
        "pure",
        "python",
        "q",
        "qore",
        "r",
        "reason",
        "renpy",
        "rest",
        "rip",
        "roboconf",
        "ruby",
        "rust",
        "sas",
        "sass",
        "scala",
        "scheme",
        "scss",
        "smalltalk",
        "smarty",
        "soy",
        "sql",
        "stylus",
        "swift",
        "tap",
        "tcl",
        "textile",
        "tsx",
        "tt2",
        "twig",
        "typescript",
        "vbnet",
        "velocity",
        "verilog",
        "vhdl",
        "vim",
        "visual-basic",
        "wasm",
        "wiki",
        "xeora",
        "xojo",
        "xquery",
        "yaml"
      ];
      t.a = A;
    },
    "ul/r": function(e, t, n) {
      "use strict";
      var a = n("pr4O"),
        o = n("rDFf");
      function r(e) {
        e.register(a),
          e.register(o),
          (function(e) {
            e.languages.opencl = e.languages.extend("c", {
              keyword: /\b(?:__attribute__|(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|auto|break|case|cl_(?:image_format|mem_fence_flags)|clk_event_t|complex|const|continue|default|do|(?:float|double)(?:16(?:x(?:1|16|2|4|8))?|1x(?:1|16|2|4|8)|2(?:x(?:1|16|2|4|8))?|3|4(?:x(?:1|16|2|4|8))?|8(?:x(?:1|16|2|4|8))?)?|else|enum|event_t|extern|for|goto|(?:u?(?:char|short|int|long)|half|quad|bool)(?:2|3|4|8|16)?|if|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|imaginary|inline|intptr_t|ndrange_t|packed|pipe|ptrdiff_t|queue_t|register|reserve_id_t|restrict|return|sampler_t|signed|size_t|sizeof|static|struct|switch|typedef|uintptr_t|uniform|union|unsigned|void|volatile|while)\b/,
              "function-opencl-kernel": {
                pattern: /\b(?:abs(?:_diff)?|a?(?:cos|sin)(?:h|pi)?|add_sat|aligned|all|and|any|async(?:_work_group_copy|_work_group_strided_copy)?|atan(?:2?(?:pi)?|h)?|atom_(?:add|and|cmpxchg|dec|inc|max|min|or|sub|xchg|xor)|barrier|bitselect|cbrt|ceil|clamp|clz|copies|copysign|cross|degrees|distance|dot|endian|erf|erfc|exp(?:2|10)?|expm1|fabs|fast_(?:distance|length|normalize)|fdim|floor|fma|fmax|fmin|fract|frexp|fro|from|get_(?:global_(?:id|offset|size)|group_id|image_(?:channel_data_type|channel_order|depth|dim|height|width)|local(?:_id|_size)|num_groups|work_dim)|hadd|(?:half|native)_(?:cos|divide|exp(?:2|10)?|log(?:2|10)?|powr|recip|r?sqrt|sin|tan)|hypot|ilogb|is(?:equal|finite|greater(?:equal)?|inf|less(?:equal|greater)?|nan|normal|notequal|(?:un)?ordered)|ldexp|length|lgamma|lgamma_r|log(?:b|1p|2|10)?|mad(?:24|_hi|_sat)?|max|mem(?:_fence)?|min|mix|modf|mul24|mul_hi|nan|nextafter|normalize|pow[nr]?|prefetch|radians|read_(?:image)(?:f|h|u?i)|read_mem_fence|remainder|remquo|reqd_work_group_size|rhadd|rint|rootn|rotate|round|rsqrt|select|shuffle2?|sign|signbit|sincos|smoothstep|sqrt|step|sub_sat|tan|tanh|tanpi|tgamma|to|trunc|upsample|vec_(?:step|type_hint)|v(?:load|store)(?:_half)?(?:2|3|4|8|16)?|v(?:loada_half|storea?(?:_half)?)(?:2|3|4|8|16)?(?:_(?:rte|rtn|rtp|rtz))?|wait_group_events|work_group_size_hint|write_image(?:f|h|u?i)|write_mem_fence)\b/,
                alias: "function"
              },
              "constant-opencl-kernel": {
                pattern: /\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:LOCAL|GLOBAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT)_(?:DIG|EPSILON|MANT_DIG|(?:MIN|MAX)(?:(?:_10)?_EXP)?)|FLT_RADIX|HUGE_VALF|INFINITY|(?:INT|LONG|SCHAR|SHRT|UCHAR|UINT|ULONG)_(?:MAX|MIN)|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN(?:2|10)|LOG(?:10|2)E?|PI[24]?|SQRT(?:1_2|2))|NAN)\b/,
                alias: "constant"
              }
            });
            var t = {
              "type-opencl-host": {
                pattern: /\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|short|int|long)|float|double)(?:2|3|4|8|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,
                alias: "keyword"
              },
              "boolean-opencl-host": {
                pattern: /\bCL_(?:TRUE|FALSE)\b/,
                alias: "boolean"
              },
              "constant-opencl-host": {
                pattern: /\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BGRA|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|R|RA|READ_(?:ONLY|WRITE)_CACHE|RG|RGB|RGBA|RGBx|RGx|RUNNING|Rx|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:16|24|8|_101010|_101010_2)|UNORM_SHORT_(?:555|565)|VERSION_(?:1_0|1_1|1_2|2_0|2_1)|sBGRA|sRGB|sRGBA|sRGBx)\b/,
                alias: "constant"
              },
              "function-opencl-host": {
                pattern: /\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image2D|Image3D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|Kernel|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,
                alias: "function"
              }
            };
            e.languages.insertBefore("c", "keyword", t),
              (t["type-opencl-host-c++"] = {
                pattern: /\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image|Image1D|Image1DArray|Image1DBuffer|Image2D|Image2DArray|Image2DGL|Image3D|Image3DGL|ImageFormat|ImageGL|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|Sampler|SVMAllocator|SVMTraitAtomic|SVMTraitCoarse|SVMTraitFine|SVMTraitReadOnly|SVMTraitReadWrite|SVMTraitWriteOnly|UserEvent)\b/,
                alias: "keyword"
              }),
              e.languages.insertBefore("cpp", "keyword", t);
          })(e);
      }
      (e.exports = r), (r.displayName = "opencl"), (r.aliases = []);
    },
    "v/u2": function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          function t(e) {
            return RegExp("(\\()" + e + "(?=[\\s\\)])");
          }
          function n(e) {
            return RegExp("([\\s([])" + e + "(?=[\\s)])");
          }
          var a = "[-+*/_~!@$%^=<>{}\\w]+",
            o = "(\\()",
            r = {
              heading: { pattern: /;;;.*/, alias: ["comment", "title"] },
              comment: /;.*/,
              string: {
                pattern: /"(?:[^"\\]|\\.)*"/,
                greedy: !0,
                inside: {
                  argument: /[-A-Z]+(?=[.,\s])/,
                  symbol: RegExp("`" + a + "'")
                }
              },
              "quoted-symbol": {
                pattern: RegExp("#?'" + a),
                alias: ["variable", "symbol"]
              },
              "lisp-property": { pattern: RegExp(":" + a), alias: "property" },
              splice: {
                pattern: RegExp(",@?" + a),
                alias: ["symbol", "variable"]
              },
              keyword: [
                {
                  pattern: RegExp(
                    o +
                      "(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)(?=\\s)"
                  ),
                  lookbehind: !0
                },
                {
                  pattern: RegExp(
                    o +
                      "(?:for|do|collect|return|finally|append|concat|in|by)(?=\\s)"
                  ),
                  lookbehind: !0
                }
              ],
              declare: {
                pattern: t("declare"),
                lookbehind: !0,
                alias: "keyword"
              },
              interactive: {
                pattern: t("interactive"),
                lookbehind: !0,
                alias: "keyword"
              },
              boolean: { pattern: n("(?:t|nil)"), lookbehind: !0 },
              number: { pattern: n("[-+]?\\d+(?:\\.\\d*)?"), lookbehind: !0 },
              defvar: {
                pattern: RegExp(o + "def(?:var|const|custom|group)\\s+" + a),
                lookbehind: !0,
                inside: { keyword: /^def[a-z]+/, variable: RegExp(a) }
              },
              defun: {
                pattern: RegExp(
                  o +
                    "(?:cl-)?(?:defun\\*?|defmacro)\\s+" +
                    a +
                    "\\s+\\([\\s\\S]*?\\)"
                ),
                lookbehind: !0,
                inside: {
                  keyword: /^(?:cl-)?def\S+/,
                  arguments: null,
                  function: { pattern: RegExp("(^\\s)" + a), lookbehind: !0 },
                  punctuation: /[()]/
                }
              },
              lambda: {
                pattern: RegExp(o + "lambda\\s+\\((?:&?" + a + "\\s*)*\\)"),
                lookbehind: !0,
                inside: {
                  keyword: /^lambda/,
                  arguments: null,
                  punctuation: /[()]/
                }
              },
              car: { pattern: RegExp(o + a), lookbehind: !0 },
              punctuation: [
                /(['`,]?\(|[)\[\]])/,
                { pattern: /(\s)\.(?=\s)/, lookbehind: !0 }
              ]
            },
            i = {
              "lisp-marker": RegExp("&[-+*/_~!@$%^=<>{}\\w]+"),
              rest: {
                argument: { pattern: RegExp(a), alias: "variable" },
                varform: {
                  pattern: RegExp(o + a + "\\s+\\S[\\s\\S]*(?=\\))"),
                  lookbehind: !0,
                  inside: {
                    string: r.string,
                    boolean: r.boolean,
                    number: r.number,
                    symbol: r.symbol,
                    punctuation: /[()]/
                  }
                }
              }
            },
            s = "\\S+(?:\\s+\\S+)*",
            l = {
              pattern: RegExp(o + "[\\s\\S]*(?=\\))"),
              lookbehind: !0,
              inside: {
                "rest-vars": {
                  pattern: RegExp("&(?:rest|body)\\s+" + s),
                  inside: i
                },
                "other-marker-vars": {
                  pattern: RegExp("&(?:optional|aux)\\s+" + s),
                  inside: i
                },
                keys: {
                  pattern: RegExp(
                    "&key\\s+" + s + "(?:\\s+&allow-other-keys)?"
                  ),
                  inside: i
                },
                argument: { pattern: RegExp(a), alias: "variable" },
                punctuation: /[()]/
              }
            };
          (r.lambda.inside.arguments = l),
            (r.defun.inside.arguments = e.util.clone(l)),
            (r.defun.inside.arguments.inside.sublist = l),
            (e.languages.lisp = r),
            (e.languages.elisp = r),
            (e.languages.emacs = r),
            (e.languages["emacs-lisp"] = r);
        })(e);
      }
      (e.exports = a), (a.displayName = "lisp"), (a.aliases = []);
    },
    "v/up": function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.glsl = e.languages.extend("clike", {
          comment: [/\/\*[\s\S]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/],
          number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
          keyword: /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
        })),
          e.languages.insertBefore("glsl", "comment", {
            preprocessor: {
              pattern: /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
              lookbehind: !0,
              alias: "builtin"
            }
          });
      }
      (e.exports = a), (a.displayName = "glsl"), (a.aliases = []);
    },
    "v6/A": function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0
            }
          ],
          number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
          type: { pattern: /\B['`]\w*/, alias: "variable" },
          directive: { pattern: /\B#\w+/, alias: "function" },
          keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
          punctuation: /[(){}\[\]|_.,:;]/
        };
      }
      (e.exports = a), (a.displayName = "ocaml"), (a.aliases = []);
    },
    "vCn/": function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.scss = e.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
          },
          atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ }
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
          },
          property: {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }
          }
        })),
          e.languages.insertBefore("scss", "atrule", {
            keyword: [
              /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
              { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }
            ]
          }),
          e.languages.insertBefore("scss", "important", {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
          }),
          e.languages.insertBefore("scss", "function", {
            placeholder: { pattern: /%[-\w]+/, alias: "selector" },
            statement: {
              pattern: /\B!(?:default|optional)\b/i,
              alias: "keyword"
            },
            boolean: /\b(?:true|false)\b/,
            null: { pattern: /\bnull\b/, alias: "keyword" },
            operator: {
              pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
              lookbehind: !0
            }
          }),
          (e.languages.scss.atrule.inside.rest = e.languages.scss);
      }
      (e.exports = a), (a.displayName = "scss"), (a.aliases = []);
    },
    vGni: function(e, t, n) {
      "use strict";
      e.exports = function(e, t) {
        return t in e ? e[t] : t;
      };
    },
    vSYx: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.reason = e.languages.extend("clike", {
          comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0
          },
          "class-name": /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
        })),
          e.languages.insertBefore("reason", "class-name", {
            character: {
              pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
              alias: "string"
            },
            constructor: {
              pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
              alias: "variable"
            },
            label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" }
          }),
          delete e.languages.reason.function;
      }
      (e.exports = a), (a.displayName = "reason"), (a.aliases = []);
    },
    vXix: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.cmake = {
          comment: /#.*/,
          string: {
            pattern: /"(?:[^\\"]|\\.)*"/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\${(?:[^{}$]|\${[^{}$]*})*}/,
                inside: { punctuation: /\${|}/, variable: /\w+/ }
              }
            }
          },
          variable: /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:CTEST_CUSTOM_(?:MAXIMUM_(?:(?:FAIL|PASS)ED_TEST_OUTPUT_SIZE|NUMBER_OF_(?:ERROR|WARNING)S)|ERROR_(?:P(?:OST|RE)_CONTEXT|EXCEPTION|MATCH)|P(?:OST|RE)_MEMCHECK|WARNING_(?:EXCEPTION|MATCH)|(?:MEMCHECK|TESTS)_IGNORE|P(?:OST|RE)_TEST|COVERAGE_EXCLUDE)|ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,
          property: /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ARCHIVE_OUTPUT_NAME|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEBUG_POSTFIX|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
          keyword: /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
          boolean: /\b(?:ON|OFF|TRUE|FALSE)\b/,
          namespace: /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/,
          operator: /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/,
          inserted: { pattern: /\b\w+::\w+\b/, alias: "class-name" },
          number: /\b\d+(?:\.\d+)*\b/,
          function: /\b[a-z_]\w*(?=\s*\()\b/i,
          punctuation: /[()>}]|\$[<{]/
        };
      }
      (e.exports = a), (a.displayName = "cmake"), (a.aliases = []);
    },
    vY5V: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.matlab = {
          comment: [/%\{[\s\S]*?\}%/, /%.+/],
          string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 },
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
          keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
          function: /(?!\d)\w+(?=\s*\()/,
          operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
          punctuation: /\.{3}|[.,;\[\](){}!]/
        };
      }
      (e.exports = a), (a.displayName = "matlab"), (a.aliases = []);
    },
    vfP8: function(e, t, n) {
      "use strict";
      (t.parse = function(e) {
        var t,
          n = [],
          o = String(e || r),
          i = o.indexOf(a),
          s = 0,
          l = !1;
        for (; !l; )
          -1 === i && ((i = o.length), (l = !0)),
            (!(t = o.slice(s, i).trim()) && l) || n.push(t),
            (s = i + 1),
            (i = o.indexOf(a, s));
        return n;
      }),
        (t.stringify = function(e, t) {
          var n = t || {},
            i = !1 === n.padLeft ? r : o,
            s = n.padRight ? o : r;
          e[e.length - 1] === r && (e = e.concat(r));
          return e.join(s + a + i).trim();
        });
      var a = ",",
        o = " ",
        r = "";
    },
    wGQB: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        'code[class*="language-"]': {
          color: "#ccc",
          background: "none",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none"
        },
        'pre[class*="language-"]': {
          color: "#ccc",
          background: "#2d2d2d",
          fontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        ':not(pre) > code[class*="language-"]': {
          background: "#2d2d2d",
          padding: ".1em",
          borderRadius: ".3em",
          whiteSpace: "normal"
        },
        comment: { color: "#999" },
        "block-comment": { color: "#999" },
        prolog: { color: "#999" },
        doctype: { color: "#999" },
        cdata: { color: "#999" },
        punctuation: { color: "#ccc" },
        tag: { color: "#e2777a" },
        "attr-name": { color: "#e2777a" },
        namespace: { color: "#e2777a" },
        deleted: { color: "#e2777a" },
        "function-name": { color: "#6196cc" },
        boolean: { color: "#f08d49" },
        number: { color: "#f08d49" },
        function: { color: "#f08d49" },
        property: { color: "#f8c555" },
        "class-name": { color: "#f8c555" },
        constant: { color: "#f8c555" },
        symbol: { color: "#f8c555" },
        selector: { color: "#cc99cd" },
        important: { color: "#cc99cd", fontWeight: "bold" },
        atrule: { color: "#cc99cd" },
        keyword: { color: "#cc99cd" },
        builtin: { color: "#cc99cd" },
        string: { color: "#7ec699" },
        char: { color: "#7ec699" },
        "attr-value": { color: "#7ec699" },
        regex: { color: "#7ec699" },
        variable: { color: "#7ec699" },
        operator: { color: "#67cdcc" },
        entity: { color: "#67cdcc", cursor: "help" },
        url: { color: "#67cdcc" },
        bold: { fontWeight: "bold" },
        italic: { fontStyle: "italic" },
        inserted: { color: "green" }
      };
    },
    wlav: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          e.languages.haml = {
            "multiline-comment": {
              pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
              lookbehind: !0,
              alias: "comment"
            },
            "multiline-code": [
              {
                pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby }
              },
              {
                pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby }
              }
            ],
            filter: {
              pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
              lookbehind: !0,
              inside: {
                "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }
              }
            },
            markup: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
              lookbehind: !0,
              inside: { rest: e.languages.markup }
            },
            doctype: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
              lookbehind: !0
            },
            tag: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
              lookbehind: !0,
              inside: {
                attributes: [
                  {
                    pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
                    lookbehind: !0,
                    inside: { rest: e.languages.ruby }
                  },
                  {
                    pattern: /\([^)]+\)/,
                    inside: {
                      "attr-value": {
                        pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                        lookbehind: !0
                      },
                      "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                      punctuation: /[=(),]/
                    }
                  },
                  { pattern: /\[[^\]]+\]/, inside: { rest: e.languages.ruby } }
                ],
                punctuation: /[<>]/
              }
            },
            code: {
              pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
              lookbehind: !0,
              inside: { rest: e.languages.ruby }
            },
            interpolation: {
              pattern: /#\{[^}]+\}/,
              inside: {
                delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
                rest: e.languages.ruby
              }
            },
            punctuation: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
              lookbehind: !0
            }
          };
          for (
            var t = [
                "css",
                { filter: "coffee", language: "coffeescript" },
                "erb",
                "javascript",
                "less",
                "markdown",
                "ruby",
                "scss",
                "textile"
              ],
              n = {},
              a = 0,
              o = t.length;
            a < o;
            a++
          ) {
            var r = t[a];
            (r = "string" === typeof r ? { filter: r, language: r } : r),
              e.languages[r.language] &&
                (n["filter-" + r.filter] = {
                  pattern: RegExp(
                    "((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+".replace(
                      "{{filter_name}}",
                      r.filter
                    )
                  ),
                  lookbehind: !0,
                  inside: {
                    "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
                    rest: e.languages[r.language]
                  }
                });
          }
          e.languages.insertBefore("haml", "filter", n);
        })(e);
      }
      (e.exports = a), (a.displayName = "haml"), (a.aliases = []);
    },
    xdbo: function(e, t, n) {
      "use strict";
      var a = n("0iGP");
      function o(e) {
        e.register(a),
          (function(e) {
            (e.languages.tt2 = e.languages.extend("clike", {
              comment: /#.*|\[%#[\s\S]*?%\]/,
              keyword: /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,
              punctuation: /[[\]{},()]/
            })),
              e.languages.insertBefore("tt2", "number", {
                operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,
                variable: {
                  pattern: /[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i
                }
              }),
              e.languages.insertBefore("tt2", "keyword", {
                delimiter: {
                  pattern: /^(?:\[%|%%)-?|-?%]$/,
                  alias: "punctuation"
                }
              }),
              e.languages.insertBefore("tt2", "string", {
                "single-quoted-string": {
                  pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
                  greedy: !0,
                  alias: "string"
                },
                "double-quoted-string": {
                  pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
                  greedy: !0,
                  alias: "string",
                  inside: {
                    variable: {
                      pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
                    }
                  }
                }
              }),
              delete e.languages.tt2.string,
              e.hooks.add("before-tokenize", function(t) {
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "tt2",
                  /\[%[\s\S]+?%\]/g
                );
              }),
              e.hooks.add("after-tokenize", function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "tt2");
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "tt2"), (o.aliases = []);
    },
    xkx2: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.csp = {
          directive: {
            pattern: /\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,
            alias: "keyword"
          },
          safe: {
            pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=/]+)'/,
            alias: "selector"
          },
          unsafe: {
            pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/,
            alias: "function"
          }
        };
      }
      (e.exports = a), (a.displayName = "csp"), (a.aliases = []);
    },
    xvv9: function(e, t, n) {
      n("cHUd")("Set");
    },
    xwQe: function(e, t, n) {
      "use strict";
      function a(e) {
        !(function(e) {
          e.languages.velocity = e.languages.extend("markup", {});
          var t = {
            variable: {
              pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,
              lookbehind: !0,
              inside: {}
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            number: /\b\d+\b/,
            boolean: /\b(?:true|false)\b/,
            operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
            punctuation: /[(){}[\]:,.]/
          };
          (t.variable.inside = {
            string: t.string,
            function: { pattern: /([^\w-])[a-z][\w-]*(?=\()/, lookbehind: !0 },
            number: t.number,
            boolean: t.boolean,
            punctuation: t.punctuation
          }),
            e.languages.insertBefore("velocity", "comment", {
              unparsed: {
                pattern: /(^|[^\\])#\[\[[\s\S]*?]]#/,
                lookbehind: !0,
                greedy: !0,
                inside: { punctuation: /^#\[\[|]]#$/ }
              },
              "velocity-comment": [
                {
                  pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
                  lookbehind: !0,
                  greedy: !0,
                  alias: "comment"
                },
                {
                  pattern: /(^|[^\\])##.*/,
                  lookbehind: !0,
                  greedy: !0,
                  alias: "comment"
                }
              ],
              directive: {
                pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
                lookbehind: !0,
                inside: {
                  keyword: {
                    pattern: /^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,
                    inside: { punctuation: /[{}]/ }
                  },
                  rest: t
                }
              },
              variable: t.variable
            }),
            (e.languages.velocity.tag.inside["attr-value"].inside.rest =
              e.languages.velocity);
        })(e);
      }
      (e.exports = a), (a.displayName = "velocity"), (a.aliases = []);
    },
    xxdG: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.n1ql = {
          comment: /\/\*[\s\S]*?(?:$|\*\/)/,
          parameter: /\$[\w.]+/,
          string: {
            pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\]|\1\1)*\1/,
            greedy: !0
          },
          identifier: { pattern: /`(?:\\[\s\S]|[^\\`]|``)*`/, greedy: !0 },
          function: /\b(?:ABS|ACOS|ARRAY_AGG|ARRAY_APPEND|ARRAY_AVG|ARRAY_CONCAT|ARRAY_CONTAINS|ARRAY_COUNT|ARRAY_DISTINCT|ARRAY_FLATTEN|ARRAY_IFNULL|ARRAY_INSERT|ARRAY_INTERSECT|ARRAY_LENGTH|ARRAY_MAX|ARRAY_MIN|ARRAY_POSITION|ARRAY_PREPEND|ARRAY_PUT|ARRAY_RANGE|ARRAY_REMOVE|ARRAY_REPEAT|ARRAY_REPLACE|ARRAY_REVERSE|ARRAY_SORT|ARRAY_STAR|ARRAY_SUM|ARRAY_SYMDIFF|ARRAY_SYMDIFFN|ARRAY_UNION|ASIN|ATAN|ATAN2|AVG|BASE64|BASE64_DECODE|BASE64_ENCODE|BITAND|BITCLEAR|BITNOT|BITOR|BITSET|BITSHIFT|BITTEST|BITXOR|CEIL|CLOCK_LOCAL|CLOCK_MILLIS|CLOCK_STR|CLOCK_TZ|CLOCK_UTC|CONTAINS|CONTAINS_TOKEN|CONTAINS_TOKEN_LIKE|CONTAINS_TOKEN_REGEXP|COS|COUNT|CURL|DATE_ADD_MILLIS|DATE_ADD_STR|DATE_DIFF_MILLIS|DATE_DIFF_STR|DATE_FORMAT_STR|DATE_PART_MILLIS|DATE_PART_STR|DATE_RANGE_MILLIS|DATE_RANGE_STR|DATE_TRUNC_MILLIS|DATE_TRUNC_STR|DECODE_JSON|DEGREES|DURATION_TO_STR|E|ENCODED_SIZE|ENCODE_JSON|EXP|FLOOR|GREATEST|HAS_TOKEN|IFINF|IFMISSING|IFMISSINGORNULL|IFNAN|IFNANORINF|IFNULL|INITCAP|ISARRAY|ISATOM|ISBOOLEAN|ISNUMBER|ISOBJECT|ISSTRING|IsBitSET|LEAST|LENGTH|LN|LOG|LOWER|LTRIM|MAX|META|MILLIS|MILLIS_TO_LOCAL|MILLIS_TO_STR|MILLIS_TO_TZ|MILLIS_TO_UTC|MILLIS_TO_ZONE_NAME|MIN|MISSINGIF|NANIF|NEGINFIF|NOW_LOCAL|NOW_MILLIS|NOW_STR|NOW_TZ|NOW_UTC|NULLIF|OBJECT_ADD|OBJECT_CONCAT|OBJECT_INNER_PAIRS|OBJECT_INNER_VALUES|OBJECT_LENGTH|OBJECT_NAMES|OBJECT_PAIRS|OBJECT_PUT|OBJECT_REMOVE|OBJECT_RENAME|OBJECT_REPLACE|OBJECT_UNWRAP|OBJECT_VALUES|PAIRS|PI|POLY_LENGTH|POSINFIF|POSITION|POWER|RADIANS|RANDOM|REGEXP_CONTAINS|REGEXP_LIKE|REGEXP_POSITION|REGEXP_REPLACE|REPEAT|REPLACE|REVERSE|ROUND|RTRIM|SIGN|SIN|SPLIT|SQRT|STR_TO_DURATION|STR_TO_MILLIS|STR_TO_TZ|STR_TO_UTC|STR_TO_ZONE_NAME|SUBSTR|SUFFIXES|SUM|TAN|TITLE|TOARRAY|TOATOM|TOBOOLEAN|TOKENS|TOKENS|TONUMBER|TOOBJECT|TOSTRING|TRIM|TRUNC|TYPE|UPPER|WEEKDAY_MILLIS|WEEKDAY_STR)(?=\s*\()/i,
          keyword: /\b(?:ALL|ALTER|ANALYZE|AS|ASC|BEGIN|BINARY|BOOLEAN|BREAK|BUCKET|BUILD|BY|CALL|CAST|CLUSTER|COLLATE|COLLECTION|COMMIT|CONNECT|CONTINUE|CORRELATE|COVER|CREATE|DATABASE|DATASET|DATASTORE|DECLARE|DECREMENT|DELETE|DERIVED|DESC|DESCRIBE|DISTINCT|DO|DROP|EACH|ELEMENT|EXCEPT|EXCLUDE|EXECUTE|EXPLAIN|FETCH|FLATTEN|FOR|FORCE|FROM|FUNCTION|GRANT|GROUP|GSI|HAVING|IF|IGNORE|ILIKE|INCLUDE|INCREMENT|INDEX|INFER|INLINE|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KEYS|KEYSPACE|KNOWN|LAST|LEFT|LET|LETTING|LIMIT|LSM|MAP|MAPPING|MATCHED|MATERIALIZED|MERGE|MINUS|MISSING|NAMESPACE|NEST|NULL|NUMBER|OBJECT|OFFSET|ON|OPTION|ORDER|OUTER|OVER|PARSE|PARTITION|PASSWORD|PATH|POOL|PREPARE|PRIMARY|PRIVATE|PRIVILEGE|PROCEDURE|PUBLIC|RAW|REALM|REDUCE|RENAME|RETURN|RETURNING|REVOKE|RIGHT|ROLE|ROLLBACK|SATISFIES|SCHEMA|SELECT|SELF|SEMI|SET|SHOW|SOME|START|STATISTICS|STRING|SYSTEM|TO|TRANSACTION|TRIGGER|TRUNCATE|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNSET|UPDATE|UPSERT|USE|USER|USING|VALIDATE|VALUE|VALUES|VIA|VIEW|WHERE|WHILE|WITH|WORK|XOR)\b/i,
          boolean: /\b(?:TRUE|FALSE)\b/i,
          number: /(?:\b\d+\.|\B\.)\d+e[+\-]?\d+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator: /[-+*\/=%]|!=|==?|\|\||<[>=]?|>=?|\b(?:AND|ANY|ARRAY|BETWEEN|CASE|ELSE|END|EVERY|EXISTS|FIRST|IN|LIKE|NOT|OR|THEN|VALUED|WHEN|WITHIN)\b/i,
          punctuation: /[;[\](),.{}:]/
        };
      }
      (e.exports = a), (a.displayName = "n1ql"), (a.aliases = []);
    },
    y3WP: function(e, t, n) {
      "use strict";
      var a = n("vGni");
      e.exports = function(e, t) {
        return a(e, t.toLowerCase());
      };
    },
    yBwc: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.bro = {
          comment: {
            pattern: /(^|[^\\$])#.*/,
            lookbehind: !0,
            inside: { italic: /\b(?:TODO|FIXME|XXX)\b/ }
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          boolean: /\b[TF]\b/,
          function: {
            pattern: /(?:function|hook|event) \w+(?:::\w+)?/,
            inside: { keyword: /^(?:function|hook|event)/ }
          },
          variable: {
            pattern: /(?:global|local) \w+/i,
            inside: { keyword: /(?:global|local)/ }
          },
          builtin: /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,
          constant: { pattern: /const \w+/i, inside: { keyword: /const/ } },
          keyword: /\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          punctuation: /[{}[\];(),.:]/
        };
      }
      (e.exports = a), (a.displayName = "bro"), (a.aliases = []);
    },
    z2ZG: function(e, t, n) {
      "use strict";
      var a = n("U6jy"),
        o = n("dKIx");
      e.exports = function(e) {
        var t,
          n,
          r = e.length,
          i = [],
          s = [],
          l = -1;
        for (; ++l < r; )
          (t = e[l]), i.push(t.property), s.push(t.normal), (n = t.space);
        return new o(a.apply(null, i), a.apply(null, s), n);
      };
    },
    zDxY: function(e, t, n) {
      "use strict";
      function a(e) {
        (e.languages.mel = {
          comment: /\/\/.*/,
          code: {
            pattern: /`(?:\\.|[^\\`\r\n])*`/,
            greedy: !0,
            alias: "italic",
            inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" } }
          },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          variable: /\$\w+/,
          number: /\b0x[\da-fA-F]+\b|\b\d+\.?\d*|\B\.\d+/,
          flag: { pattern: /-[^\d\W]\w*/, alias: "operator" },
          keyword: /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
          function: /\w+(?=\()|\b(?:about|abs|addAttr|addAttributeEditorNodeHelp|addDynamic|addNewShelfTab|addPP|addPanelCategory|addPrefixToName|advanceToNextDrivenKey|affectedNet|affects|aimConstraint|air|alias|aliasAttr|align|alignCtx|alignCurve|alignSurface|allViewFit|ambientLight|angle|angleBetween|animCone|animCurveEditor|animDisplay|animView|annotate|appendStringArray|applicationName|applyAttrPreset|applyTake|arcLenDimContext|arcLengthDimension|arclen|arrayMapper|art3dPaintCtx|artAttrCtx|artAttrPaintVertexCtx|artAttrSkinPaintCtx|artAttrTool|artBuildPaintMenu|artFluidAttrCtx|artPuttyCtx|artSelectCtx|artSetPaintCtx|artUserPaintCtx|assignCommand|assignInputDevice|assignViewportFactories|attachCurve|attachDeviceAttr|attachSurface|attrColorSliderGrp|attrCompatibility|attrControlGrp|attrEnumOptionMenu|attrEnumOptionMenuGrp|attrFieldGrp|attrFieldSliderGrp|attrNavigationControlGrp|attrPresetEditWin|attributeExists|attributeInfo|attributeMenu|attributeQuery|autoKeyframe|autoPlace|bakeClip|bakeFluidShading|bakePartialHistory|bakeResults|bakeSimulation|basename|basenameEx|batchRender|bessel|bevel|bevelPlus|binMembership|bindSkin|blend2|blendShape|blendShapeEditor|blendShapePanel|blendTwoAttr|blindDataType|boneLattice|boundary|boxDollyCtx|boxZoomCtx|bufferCurve|buildBookmarkMenu|buildKeyframeMenu|button|buttonManip|CBG|cacheFile|cacheFileCombine|cacheFileMerge|cacheFileTrack|camera|cameraView|canCreateManip|canvas|capitalizeString|catch|catchQuiet|ceil|changeSubdivComponentDisplayLevel|changeSubdivRegion|channelBox|character|characterMap|characterOutlineEditor|characterize|chdir|checkBox|checkBoxGrp|checkDefaultRenderGlobals|choice|circle|circularFillet|clamp|clear|clearCache|clip|clipEditor|clipEditorCurrentTimeCtx|clipSchedule|clipSchedulerOutliner|clipTrimBefore|closeCurve|closeSurface|cluster|cmdFileOutput|cmdScrollFieldExecuter|cmdScrollFieldReporter|cmdShell|coarsenSubdivSelectionList|collision|color|colorAtPoint|colorEditor|colorIndex|colorIndexSliderGrp|colorSliderButtonGrp|colorSliderGrp|columnLayout|commandEcho|commandLine|commandPort|compactHairSystem|componentEditor|compositingInterop|computePolysetVolume|condition|cone|confirmDialog|connectAttr|connectControl|connectDynamic|connectJoint|connectionInfo|constrain|constrainValue|constructionHistory|container|containsMultibyte|contextInfo|control|convertFromOldLayers|convertIffToPsd|convertLightmap|convertSolidTx|convertTessellation|convertUnit|copyArray|copyFlexor|copyKey|copySkinWeights|cos|cpButton|cpCache|cpClothSet|cpCollision|cpConstraint|cpConvClothToMesh|cpForces|cpGetSolverAttr|cpPanel|cpProperty|cpRigidCollisionFilter|cpSeam|cpSetEdit|cpSetSolverAttr|cpSolver|cpSolverTypes|cpTool|cpUpdateClothUVs|createDisplayLayer|createDrawCtx|createEditor|createLayeredPsdFile|createMotionField|createNewShelf|createNode|createRenderLayer|createSubdivRegion|cross|crossProduct|ctxAbort|ctxCompletion|ctxEditMode|ctxTraverse|currentCtx|currentTime|currentTimeCtx|currentUnit|curve|curveAddPtCtx|curveCVCtx|curveEPCtx|curveEditorCtx|curveIntersect|curveMoveEPCtx|curveOnSurface|curveSketchCtx|cutKey|cycleCheck|cylinder|dagPose|date|defaultLightListCheckBox|defaultNavigation|defineDataServer|defineVirtualDevice|deformer|deg_to_rad|delete|deleteAttr|deleteShadingGroupsAndMaterials|deleteShelfTab|deleteUI|deleteUnusedBrushes|delrandstr|detachCurve|detachDeviceAttr|detachSurface|deviceEditor|devicePanel|dgInfo|dgdirty|dgeval|dgtimer|dimWhen|directKeyCtx|directionalLight|dirmap|dirname|disable|disconnectAttr|disconnectJoint|diskCache|displacementToPoly|displayAffected|displayColor|displayCull|displayLevelOfDetail|displayPref|displayRGBColor|displaySmoothness|displayStats|displayString|displaySurface|distanceDimContext|distanceDimension|doBlur|dolly|dollyCtx|dopeSheetEditor|dot|dotProduct|doubleProfileBirailSurface|drag|dragAttrContext|draggerContext|dropoffLocator|duplicate|duplicateCurve|duplicateSurface|dynCache|dynControl|dynExport|dynExpression|dynGlobals|dynPaintEditor|dynParticleCtx|dynPref|dynRelEdPanel|dynRelEditor|dynamicLoad|editAttrLimits|editDisplayLayerGlobals|editDisplayLayerMembers|editRenderLayerAdjustment|editRenderLayerGlobals|editRenderLayerMembers|editor|editorTemplate|effector|emit|emitter|enableDevice|encodeString|endString|endsWith|env|equivalent|equivalentTol|erf|error|eval|evalDeferred|evalEcho|event|exactWorldBoundingBox|exclusiveLightCheckBox|exec|executeForEachObject|exists|exp|expression|expressionEditorListen|extendCurve|extendSurface|extrude|fcheck|fclose|feof|fflush|fgetline|fgetword|file|fileBrowserDialog|fileDialog|fileExtension|fileInfo|filetest|filletCurve|filter|filterCurve|filterExpand|filterStudioImport|findAllIntersections|findAnimCurves|findKeyframe|findMenuItem|findRelatedSkinCluster|finder|firstParentOf|fitBspline|flexor|floatEq|floatField|floatFieldGrp|floatScrollBar|floatSlider|floatSlider2|floatSliderButtonGrp|floatSliderGrp|floor|flow|fluidCacheInfo|fluidEmitter|fluidVoxelInfo|flushUndo|fmod|fontDialog|fopen|formLayout|format|fprint|frameLayout|fread|freeFormFillet|frewind|fromNativePath|fwrite|gamma|gauss|geometryConstraint|getApplicationVersionAsFloat|getAttr|getClassification|getDefaultBrush|getFileList|getFluidAttr|getInputDeviceRange|getMayaPanelTypes|getModifiers|getPanel|getParticleAttr|getPluginResource|getenv|getpid|glRender|glRenderEditor|globalStitch|gmatch|goal|gotoBindPose|grabColor|gradientControl|gradientControlNoAttr|graphDollyCtx|graphSelectContext|graphTrackCtx|gravity|grid|gridLayout|group|groupObjectsByName|HfAddAttractorToAS|HfAssignAS|HfBuildEqualMap|HfBuildFurFiles|HfBuildFurImages|HfCancelAFR|HfConnectASToHF|HfCreateAttractor|HfDeleteAS|HfEditAS|HfPerformCreateAS|HfRemoveAttractorFromAS|HfSelectAttached|HfSelectAttractors|HfUnAssignAS|hardenPointCurve|hardware|hardwareRenderPanel|headsUpDisplay|headsUpMessage|help|helpLine|hermite|hide|hilite|hitTest|hotBox|hotkey|hotkeyCheck|hsv_to_rgb|hudButton|hudSlider|hudSliderButton|hwReflectionMap|hwRender|hwRenderLoad|hyperGraph|hyperPanel|hyperShade|hypot|iconTextButton|iconTextCheckBox|iconTextRadioButton|iconTextRadioCollection|iconTextScrollList|iconTextStaticLabel|ikHandle|ikHandleCtx|ikHandleDisplayScale|ikSolver|ikSplineHandleCtx|ikSystem|ikSystemInfo|ikfkDisplayMethod|illustratorCurves|image|imfPlugins|inheritTransform|insertJoint|insertJointCtx|insertKeyCtx|insertKnotCurve|insertKnotSurface|instance|instanceable|instancer|intField|intFieldGrp|intScrollBar|intSlider|intSliderGrp|interToUI|internalVar|intersect|iprEngine|isAnimCurve|isConnected|isDirty|isParentOf|isSameObject|isTrue|isValidObjectName|isValidString|isValidUiName|isolateSelect|itemFilter|itemFilterAttr|itemFilterRender|itemFilterType|joint|jointCluster|jointCtx|jointDisplayScale|jointLattice|keyTangent|keyframe|keyframeOutliner|keyframeRegionCurrentTimeCtx|keyframeRegionDirectKeyCtx|keyframeRegionDollyCtx|keyframeRegionInsertKeyCtx|keyframeRegionMoveKeyCtx|keyframeRegionScaleKeyCtx|keyframeRegionSelectKeyCtx|keyframeRegionSetKeyCtx|keyframeRegionTrackCtx|keyframeStats|lassoContext|lattice|latticeDeformKeyCtx|launch|launchImageEditor|layerButton|layeredShaderPort|layeredTexturePort|layout|layoutDialog|lightList|lightListEditor|lightListPanel|lightlink|lineIntersection|linearPrecision|linstep|listAnimatable|listAttr|listCameras|listConnections|listDeviceAttachments|listHistory|listInputDeviceAxes|listInputDeviceButtons|listInputDevices|listMenuAnnotation|listNodeTypes|listPanelCategories|listRelatives|listSets|listTransforms|listUnselected|listerEditor|loadFluid|loadNewShelf|loadPlugin|loadPluginLanguageResources|loadPrefObjects|localizedPanelLabel|lockNode|loft|log|longNameOf|lookThru|ls|lsThroughFilter|lsType|lsUI|Mayatomr|mag|makeIdentity|makeLive|makePaintable|makeRoll|makeSingleSurface|makeTubeOn|makebot|manipMoveContext|manipMoveLimitsCtx|manipOptions|manipRotateContext|manipRotateLimitsCtx|manipScaleContext|manipScaleLimitsCtx|marker|match|max|memory|menu|menuBarLayout|menuEditor|menuItem|menuItemToShelf|menuSet|menuSetPref|messageLine|min|minimizeApp|mirrorJoint|modelCurrentTimeCtx|modelEditor|modelPanel|mouse|movIn|movOut|move|moveIKtoFK|moveKeyCtx|moveVertexAlongDirection|multiProfileBirailSurface|mute|nParticle|nameCommand|nameField|namespace|namespaceInfo|newPanelItems|newton|nodeCast|nodeIconButton|nodeOutliner|nodePreset|nodeType|noise|nonLinear|normalConstraint|normalize|nurbsBoolean|nurbsCopyUVSet|nurbsCube|nurbsEditUV|nurbsPlane|nurbsSelect|nurbsSquare|nurbsToPoly|nurbsToPolygonsPref|nurbsToSubdiv|nurbsToSubdivPref|nurbsUVSet|nurbsViewDirectionVector|objExists|objectCenter|objectLayer|objectType|objectTypeUI|obsoleteProc|oceanNurbsPreviewPlane|offsetCurve|offsetCurveOnSurface|offsetSurface|openGLExtension|openMayaPref|optionMenu|optionMenuGrp|optionVar|orbit|orbitCtx|orientConstraint|outlinerEditor|outlinerPanel|overrideModifier|paintEffectsDisplay|pairBlend|palettePort|paneLayout|panel|panelConfiguration|panelHistory|paramDimContext|paramDimension|paramLocator|parent|parentConstraint|particle|particleExists|particleInstancer|particleRenderInfo|partition|pasteKey|pathAnimation|pause|pclose|percent|performanceOptions|pfxstrokes|pickWalk|picture|pixelMove|planarSrf|plane|play|playbackOptions|playblast|plugAttr|plugNode|pluginInfo|pluginResourceUtil|pointConstraint|pointCurveConstraint|pointLight|pointMatrixMult|pointOnCurve|pointOnSurface|pointPosition|poleVectorConstraint|polyAppend|polyAppendFacetCtx|polyAppendVertex|polyAutoProjection|polyAverageNormal|polyAverageVertex|polyBevel|polyBlendColor|polyBlindData|polyBoolOp|polyBridgeEdge|polyCacheMonitor|polyCheck|polyChipOff|polyClipboard|polyCloseBorder|polyCollapseEdge|polyCollapseFacet|polyColorBlindData|polyColorDel|polyColorPerVertex|polyColorSet|polyCompare|polyCone|polyCopyUV|polyCrease|polyCreaseCtx|polyCreateFacet|polyCreateFacetCtx|polyCube|polyCut|polyCutCtx|polyCylinder|polyCylindricalProjection|polyDelEdge|polyDelFacet|polyDelVertex|polyDuplicateAndConnect|polyDuplicateEdge|polyEditUV|polyEditUVShell|polyEvaluate|polyExtrudeEdge|polyExtrudeFacet|polyExtrudeVertex|polyFlipEdge|polyFlipUV|polyForceUV|polyGeoSampler|polyHelix|polyInfo|polyInstallAction|polyLayoutUV|polyListComponentConversion|polyMapCut|polyMapDel|polyMapSew|polyMapSewMove|polyMergeEdge|polyMergeEdgeCtx|polyMergeFacet|polyMergeFacetCtx|polyMergeUV|polyMergeVertex|polyMirrorFace|polyMoveEdge|polyMoveFacet|polyMoveFacetUV|polyMoveUV|polyMoveVertex|polyNormal|polyNormalPerVertex|polyNormalizeUV|polyOptUvs|polyOptions|polyOutput|polyPipe|polyPlanarProjection|polyPlane|polyPlatonicSolid|polyPoke|polyPrimitive|polyPrism|polyProjection|polyPyramid|polyQuad|polyQueryBlindData|polyReduce|polySelect|polySelectConstraint|polySelectConstraintMonitor|polySelectCtx|polySelectEditCtx|polySeparate|polySetToFaceNormal|polySewEdge|polyShortestPathCtx|polySmooth|polySoftEdge|polySphere|polySphericalProjection|polySplit|polySplitCtx|polySplitEdge|polySplitRing|polySplitVertex|polyStraightenUVBorder|polySubdivideEdge|polySubdivideFacet|polyToSubdiv|polyTorus|polyTransfer|polyTriangulate|polyUVSet|polyUnite|polyWedgeFace|popen|popupMenu|pose|pow|preloadRefEd|print|progressBar|progressWindow|projFileViewer|projectCurve|projectTangent|projectionContext|projectionManip|promptDialog|propModCtx|propMove|psdChannelOutliner|psdEditTextureFile|psdExport|psdTextureFile|putenv|pwd|python|querySubdiv|quit|rad_to_deg|radial|radioButton|radioButtonGrp|radioCollection|radioMenuItemCollection|rampColorPort|rand|randomizeFollicles|randstate|rangeControl|readTake|rebuildCurve|rebuildSurface|recordAttr|recordDevice|redo|reference|referenceEdit|referenceQuery|refineSubdivSelectionList|refresh|refreshAE|registerPluginResource|rehash|reloadImage|removeJoint|removeMultiInstance|removePanelCategory|rename|renameAttr|renameSelectionList|renameUI|render|renderGlobalsNode|renderInfo|renderLayerButton|renderLayerParent|renderLayerPostProcess|renderLayerUnparent|renderManip|renderPartition|renderQualityNode|renderSettings|renderThumbnailUpdate|renderWindowEditor|renderWindowSelectContext|renderer|reorder|reorderDeformers|requires|reroot|resampleFluid|resetAE|resetPfxToPolyCamera|resetTool|resolutionNode|retarget|reverseCurve|reverseSurface|revolve|rgb_to_hsv|rigidBody|rigidSolver|roll|rollCtx|rootOf|rot|rotate|rotationInterpolation|roundConstantRadius|rowColumnLayout|rowLayout|runTimeCommand|runup|sampleImage|saveAllShelves|saveAttrPreset|saveFluid|saveImage|saveInitialState|saveMenu|savePrefObjects|savePrefs|saveShelf|saveToolSettings|scale|scaleBrushBrightness|scaleComponents|scaleConstraint|scaleKey|scaleKeyCtx|sceneEditor|sceneUIReplacement|scmh|scriptCtx|scriptEditorInfo|scriptJob|scriptNode|scriptTable|scriptToShelf|scriptedPanel|scriptedPanelType|scrollField|scrollLayout|sculpt|searchPathArray|seed|selLoadSettings|select|selectContext|selectCurveCV|selectKey|selectKeyCtx|selectKeyframeRegionCtx|selectMode|selectPref|selectPriority|selectType|selectedNodes|selectionConnection|separator|setAttr|setAttrEnumResource|setAttrMapping|setAttrNiceNameResource|setConstraintRestPosition|setDefaultShadingGroup|setDrivenKeyframe|setDynamic|setEditCtx|setEditor|setFluidAttr|setFocus|setInfinity|setInputDeviceMapping|setKeyCtx|setKeyPath|setKeyframe|setKeyframeBlendshapeTargetWts|setMenuMode|setNodeNiceNameResource|setNodeTypeFlag|setParent|setParticleAttr|setPfxToPolyCamera|setPluginResource|setProject|setStampDensity|setStartupMessage|setState|setToolTo|setUITemplate|setXformManip|sets|shadingConnection|shadingGeometryRelCtx|shadingLightRelCtx|shadingNetworkCompare|shadingNode|shapeCompare|shelfButton|shelfLayout|shelfTabLayout|shellField|shortNameOf|showHelp|showHidden|showManipCtx|showSelectionInTitle|showShadingGroupAttrEditor|showWindow|sign|simplify|sin|singleProfileBirailSurface|size|sizeBytes|skinCluster|skinPercent|smoothCurve|smoothTangentSurface|smoothstep|snap2to2|snapKey|snapMode|snapTogetherCtx|snapshot|soft|softMod|softModCtx|sort|sound|soundControl|source|spaceLocator|sphere|sphrand|spotLight|spotLightPreviewPort|spreadSheetEditor|spring|sqrt|squareSurface|srtContext|stackTrace|startString|startsWith|stitchAndExplodeShell|stitchSurface|stitchSurfacePoints|strcmp|stringArrayCatenate|stringArrayContains|stringArrayCount|stringArrayInsertAtIndex|stringArrayIntersector|stringArrayRemove|stringArrayRemoveAtIndex|stringArrayRemoveDuplicates|stringArrayRemoveExact|stringArrayToString|stringToStringArray|strip|stripPrefixFromName|stroke|subdAutoProjection|subdCleanTopology|subdCollapse|subdDuplicateAndConnect|subdEditUV|subdListComponentConversion|subdMapCut|subdMapSewMove|subdMatchTopology|subdMirror|subdToBlind|subdToPoly|subdTransferUVsToCache|subdiv|subdivCrease|subdivDisplaySmoothness|substitute|substituteAllString|substituteGeometry|substring|surface|surfaceSampler|surfaceShaderList|swatchDisplayPort|switchTable|symbolButton|symbolCheckBox|sysFile|system|tabLayout|tan|tangentConstraint|texLatticeDeformContext|texManipContext|texMoveContext|texMoveUVShellContext|texRotateContext|texScaleContext|texSelectContext|texSelectShortestPathCtx|texSmudgeUVContext|texWinToolCtx|text|textCurves|textField|textFieldButtonGrp|textFieldGrp|textManip|textScrollList|textToShelf|textureDisplacePlane|textureHairColor|texturePlacementContext|textureWindow|threadCount|threePointArcCtx|timeControl|timePort|timerX|toNativePath|toggle|toggleAxis|toggleWindowVisibility|tokenize|tokenizeList|tolerance|tolower|toolButton|toolCollection|toolDropped|toolHasOptions|toolPropertyWindow|torus|toupper|trace|track|trackCtx|transferAttributes|transformCompare|transformLimits|translator|trim|trunc|truncateFluidCache|truncateHairCache|tumble|tumbleCtx|turbulence|twoPointArcCtx|uiRes|uiTemplate|unassignInputDevice|undo|undoInfo|ungroup|uniform|unit|unloadPlugin|untangleUV|untitledFileName|untrim|upAxis|updateAE|userCtx|uvLink|uvSnapshot|validateShelfName|vectorize|view2dToolCtx|viewCamera|viewClipPlane|viewFit|viewHeadOn|viewLookAt|viewManip|viewPlace|viewSet|visor|volumeAxis|vortex|waitCursor|warning|webBrowser|webBrowserPrefs|whatIs|window|windowPref|wire|wireContext|workspace|wrinkle|wrinkleContext|writeTake|xbmLangPathList|xform)\b/,
          operator: [
            /\+[+=]?|-[-=]?|&&|\|\||[<>]=|[*\/!=]=?|[%^]/,
            { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
            { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 }
          ],
          punctuation: /<<|>>|[.,:;?\[\](){}]/
        }),
          (e.languages.mel.code.inside.rest = e.languages.mel);
      }
      (e.exports = a), (a.displayName = "mel"), (a.aliases = []);
    },
    zFKg: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.scheme = {
          comment: /;.*/,
          string: { pattern: /"(?:[^"\\]|\\.)*"|'[^()#'\s]+/, greedy: !0 },
          character: {
            pattern: /#\\(?:[ux][a-fA-F\d]+|[a-zA-Z]+|\S)/,
            alias: "string"
          },
          keyword: {
            pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/,
            lookbehind: !0
          },
          builtin: {
            pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/,
            lookbehind: !0
          },
          number: {
            pattern: /([\s()])[-+]?(?:\d+\/\d+|\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?)\b/,
            lookbehind: !0
          },
          boolean: /#[tf]/,
          operator: {
            pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=\s|$)/,
            lookbehind: !0
          },
          function: { pattern: /(\()[^()'\s]+(?=[()\s)]|$)/, lookbehind: !0 },
          punctuation: /[()']/
        };
      }
      (e.exports = a), (a.displayName = "scheme"), (a.aliases = []);
    },
    zwFG: function(e, t, n) {
      "use strict";
      function a(e) {
        e.languages.oz = {
          comment: /\/\*[\s\S]*?\*\/|%.*/,
          string: { pattern: /"(?:[^"\\]|\\[\s\S])*"/, greedy: !0 },
          atom: {
            pattern: /'(?:[^'\\]|\\[\s\S])*'/,
            greedy: !0,
            alias: "builtin"
          },
          keyword: /[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
          function: [
            /[a-z][A-Za-z\d]*(?=\()/,
            { pattern: /(\{)[A-Z][A-Za-z\d]*/, lookbehind: !0 }
          ],
          number: /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,
          variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
          "attr-name": /\w+(?=:)/,
          operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
          punctuation: /[\[\](){}.:;?]/
        };
      }
      (e.exports = a), (a.displayName = "oz"), (a.aliases = []);
    }
  }
]);
