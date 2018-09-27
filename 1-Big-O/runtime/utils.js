const { performance } = require('perf_hooks')

function getTestRange (n) {
  const result = []

  for (let i = 0; i < n; i++) {
    result.push(getRandom(-100, 100))
  }

  return result
}

function getRandom (min, max) {
  return (Math.random() * (max - min) + min) | 0;
}

function identity (a) {
  return a
}

function getComplexityPoints (
  testFunction,
  transformFunction = identity,
  accessorFunction = identity
) {
  const getRange = (n) => transformFunction(getTestRange(n))
  const input = [
    getRange(5),
    getRange(5),
    getRange(5),
    getRange(5),
    getRange(5),
    getRange(16),
    getRange(29),
    getRange(40),
    getRange(51),
    getRange(62),
    getRange(72),
    getRange(100),
    getRange(401),
  ]

  let t0 = performance.now()

  return input.map(function (i) {
    const params = accessorFunction(i)
    const result = testFunction(i, ...params)
    const t1 = performance.now()
    const time = (t1 - t0).toFixed(4)

    t0 = t1

    return `{${i.length},${time}}`
  })
    .slice(4)
    .join(',')
}

module.exports = {
  getComplexityPoints,
}
