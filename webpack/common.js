const {resolve} = require("path")
const convert = require("koa-connect")
const history = require("connect-history-api-fallback")
const TerserPlugin = require("terser-webpack-plugin")

const output = mode => {
  const isDev = mode === "development"
  const filename = isDev ? "[name].js" : "[name].[chunkhash:8].js"

  return {
    filename,
    publicPath: "/",
    path: resolve("dist")
  }
}

const devTool = mode => mode === "development" ? "source-map" : false

const devServer = () => ({
  port: 3200,
  host: "0.0.0.0",
  add: app => app.use(convert(history())),
})

const optimization = () => ({
  minimizer: [new TerserPlugin()],
  splitChunks: {
    chunks: "all",
    automaticNameDelimiter: "."
  },
  runtimeChunk: {
    name: "runtime"
  }
})

module.exports = {
  output,
  devTool,
  devServer,
  optimization,
}
