const importPlugin = require("postcss-import")
const presetEnv = require("postcss-preset-env")
const normalize = require("postcss-normalize")
const nested = require("postcss-nested")
const cssnano = require("cssnano")

module.exports = {
  plugins: [
    importPlugin(),
    presetEnv({importFrom: "src/styles/vars.css"}),
    normalize(),
    nested(),
    cssnano()
  ]
}
