const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
var nodeExternals = require("webpack-node-externals")

module.exports = {
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.bundle.js",
  },

  devServer: {
    port: 8080,
    watchContentBase: true,
    hot: true,
  },

  // externalsPresets: { node: true },
  // externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            dot: true,
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ESLintPlugin(),
  ],
}
