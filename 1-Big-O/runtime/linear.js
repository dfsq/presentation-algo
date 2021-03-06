const { getComplexityPoints } = require('./utils')

/**
 * https://www.wolframalpha.com/input/?i=linear+fit
 */
function sum (nums) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    result += nums[i]
  }

  return result
}

console.log(getComplexityPoints(sum))
