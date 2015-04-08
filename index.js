// # Mercury Form Controls
//
// ## install
//
// npm i hg-form-controls
//
// ## usage
//
// var c = require('hg-form-controls')
// c.input('foo')

module.exports = {
  input: require('hg-input'),
  textarea: require('hg-textarea'),
  select: require('hg-select'),
  option: require('hg-select/option')
}