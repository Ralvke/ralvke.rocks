const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const loaders = mode => [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.jsx$/,
    exclude: /node_modules/,
    use: ["babel-loader", "astroturf/loader"]
  },
  {
    test: /\.css$/,
    use: [
      mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
      "astroturf/css-loader",
      "postcss-loader"
    ]
  },
  {
    test: /\.svg$/,
    loader: "@svgr/webpack"
  },
  {
    test: /\.(png|jpg|gif|eot|ttf|woff|otf|woff2)$/,
    loader: "file-loader",
    options: {
      name: "[name].[hash:8].[ext]"
    }
  }
]

module.exports = loaders
