const plugins = require("./webpack/plugins.js")
const loaders = require("./webpack/loaders.js")
const {
  output,
  devTool,
  devServer,
  optimization,
} = require("./webpack/common.js")

module.exports = args => {
  const mode = args.mode || "development"

  return {
    mode,
    entry: {
      app: [
        "./src/styles/global.css",
        "./src/index.jsx"
      ]
    },
    resolve: {
      modules: ["src", "node_modules"],
      extensions: [".js", ".jsx"]
    },
    output: output(mode),
    devtool: devTool(mode),
    serve: devServer(mode),
    optimization: optimization(mode),
    plugins: plugins(mode),
    module: {
      rules: loaders(mode)
    }
  }
}
