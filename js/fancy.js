'use strict'

function text (hex) {
  return 'color: #' + hex + '; font-size: 16px; font-weight: bold'
}

var plainMessage = 'Hello mate, fancy to work with me? Drop me a line at hello@jacopodaeli.com.'

var styledMessage = [
  '%cHello %cmate%c, fancy to %cwork %cwith me? Drop me a line at %chello@jacopodaeli.com%c.',
  text('0e1d1c'),
  text('47897f'),
  text('0e1d1c'),
  text('47897f'),
  text('0e1d1c'),
  text('ffc023'),
  text('0e1d1c')
]

window.onload = function () {
  try {
    console.log.apply(console, styledMessage)
  } catch (e) {
    console.log(plainMessage)
  }
}
