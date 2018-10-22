const HtmlPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const webpackPlugins = mode => {
  const plugins = [
    new HtmlPlugin({template: "./src/index.html"})
  ]

  if (mode === "production") {
    plugins.push(new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css"
    }))
  }

  return plugins
}

module.exports = webpackPlugins
