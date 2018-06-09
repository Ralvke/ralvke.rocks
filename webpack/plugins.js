const HtmlPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = mode => {
  const plugins = [
    new HtmlPlugin({template: "./src/index.html"})
  ]

  if (mode !== "development") {
    plugins.push(new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css"
    }))
  }

  return plugins
}
