const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = mode => [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.(png|jpg|gif|eot|ttf|woff|otf|woff2)$/,
    loader: "file-loader",
    options: {name: "[name].[hash:8].[ext]"}
  },
  {
    test: /\.sss$/,
    use: [
      mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          minimize: mode === "production",
          sourceMap: mode === "development",
          localIdentName: "[name]__[local]__[hash:base64:8]"
        }
      },
      "postcss-loader"
    ]
  }
]
