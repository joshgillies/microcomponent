var microcomponent = require('./')

function mcfactory (opts) {
  return function wrapComponent () {
    return microcomponent(opts)
  }
}

module.exports = mcfactory
