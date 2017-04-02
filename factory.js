var microcomponent = require('./')
var slice = Array.prototype.slice

function mcfactory (opts) {
  return function wrapComponent () {
    var args = slice.call(arguments)
    if (args.length) return microcomponent(opts).apply(null, args)
    return microcomponent(opts)
  }
}

module.exports = mcfactory
