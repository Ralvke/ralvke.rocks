module.exports = {
  parser: "sugarss",
  plugins: [
    require("postcss-preset-env"),
    require("postcss-nested"),
    require("postcss-normalize")
  ]
}
