var nanocomponent = require('nanocomponent')
var morph = require('nanomorph')
var slice = Array.prototype.slice

function microcomponent (opts) {
  var update = opts.onupdate
  var render = opts.render
  var component = null

  opts.onupdate = function onUpdate () {
    var args = slice.call(arguments)
    var element = args.shift()
    element = morph(element, render.apply(null, args))
    if (update) update.apply(null, [element].concat(args))
  }

  component = nanocomponent(opts)

  return function wrappedComponent () {
    var args = slice.call(arguments)
    return component.apply(null, args)
  }
}

module.exports = microcomponent
