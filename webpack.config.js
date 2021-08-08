const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")
var nodeExternals = require("webpack-node-externals")

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js"
  },

  devServer: {
    port: 8080,
    watchContentBase: true,
  },


  externalsPresets: { "node": true }, 
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" }), new ESLintPlugin()]
}