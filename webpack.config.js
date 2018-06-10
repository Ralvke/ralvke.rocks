const {output, optimization} = require("./webpack/common")
const plugins = require("./webpack/plugins")
const loaders = require("./webpack/loaders")

const history = require("connect-history-api-fallback")
const convert = require("koa-connect")

module.exports = env => {
  const {mode} = env

  return {
    mode,
    resolve: {
      modules: ["src", "node_modules"],
      extensions: [".js", ".jsx"]
    },
    serve: {
      port: 3200,
      host: "0.0.0.0",
      add: app => app.use(convert(history({})))
    },
    output: output(mode),
    plugins: plugins(mode),
    optimization: optimization(mode),
    module: {
      rules: loaders(mode)
    }
  }
}
