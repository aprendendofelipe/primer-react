// @preval
// This file needs to be a JavaScript file using CommonJS to be compatible with preval
// Cache bust: 2023-02-23 12:00:00 GMT (This file is cached by our deployment tooling, update this timestamp to rebuild this file)

const {default: primitives} = require('@primer/primitives')
const {partitionColors, omitScale} = require('./utils/theme')

const themes = Object.entries(primitives.colors).reduce((acc, [name, variables]) => {
  const {colors, shadows} = partitionColors(variables)
  acc[name] = `html[theme='${name}']:root {${extractValues('', omitScale(colors))}${extractValues(
    '',
    omitScale(shadows),
  )}}`
  return acc
}, {})

function extractValues(name, value) {
  if (typeof value === 'string') {
    return `-${name}:${value};`
  }

  let acc = ''

  for (const [partialName, variables] of Object.entries(value)) {
    acc += extractValues(`${name}-${partialName.slice(0, 19)}`, variables)
  }
  return acc
}

module.exports = themes
