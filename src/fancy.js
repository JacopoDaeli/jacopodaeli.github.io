'use strict'

function text (hex) {
  return `color: #${hex}; font-size: 16px; font-weight: bold`
}

const plainWorkWithMeMessage = `Hello mate, fancy to work with me? Drop me a line at hello@jacopodaeli.com.`

const styledWorkWithMeMessage = [
  '%cHello %cmate%c, fancy to %cwork %cwith me? Drop me a line at %chello@jacopodaeli.com%c.',
  text('404040'),
  text('757C88'),
  text('404040'),
  text('757C88'),
  text('404040'),
  text('FF4D3D'),
  text('404040')
]

export default () => {
  try {
    console.log.apply(console, styledWorkWithMeMessage)
  } catch (e) {
    console.log(plainWorkWithMeMessage)
  }
}
