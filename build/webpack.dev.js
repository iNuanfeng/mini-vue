const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, '../dist')
  }
};
