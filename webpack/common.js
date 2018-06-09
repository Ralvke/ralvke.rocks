const {resolve} = require("path")

const output = mode => {
  const isDev = mode === "development"
  const filename = isDev ? "[name].js" : "[name].[chunkhash:8].js"

  return {
    filename,
    path: resolve("dist")
  }
}

const optimization = mode => {
  if (mode === "development") {
    return {}
  }

  return {
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      chunks: "all"
    }
  }
}

module.exports = {
  output,
  optimization
}
