const path = require('path')

module.exports = {
  base: path.resolve(__dirname, '../dist'),
  mainJs: path.resolve(__dirname, '../src/index.js'),
  template: path.resolve(__dirname, "../src/template.html"),
}