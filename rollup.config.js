import babel from "rollup-plugin-babel";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import minify from "rollup-plugin-babel-minify";
import pkg from "./package.json";
import typescriptPlugin from "rollup-plugin-typescript";
import typescript from "typescript";

const path = require("path");
const APP_PATH = path.resolve(__dirname, "src/components/index.tsx");

export default {
  input: APP_PATH,
  output: [
    {
      file: pkg.module,
      format: "esm"
    },
    {
      file: pkg.main,
      format: "umd",
      name: "bundle"
    }
  ],
  external: ["react", "uuid"],
  plugins: [
    sizeSnapshot(),
    typescriptPlugin({ typescript }),
    babel({
      plugins: [
        "babel-plugin-transform-object-assign",
        "babel-plugin-external-helpers"
      ],
      exclude: "node_modules/**"
    }),
    minify()
  ]
};
