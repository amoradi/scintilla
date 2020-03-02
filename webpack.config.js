const path = require("path");
const APP_PATH = path.resolve(__dirname, "src/components/index.tsx");

module.exports = {
  mode: "production",
  entry: APP_PATH,
  target: "node",
  output: {
    filename: "bundle.js",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "build")
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
