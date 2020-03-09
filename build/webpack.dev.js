const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const fileName = 'index'

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
      filename: fileName + '.html',
      chunks: fileName, // 公共文件必须在自己引用的js文件之前引用, 这里的common就是公共模块
      template: path.resolve(__dirname, '../examples/index.html'),
      inject: true
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, '../dist')
  }
};