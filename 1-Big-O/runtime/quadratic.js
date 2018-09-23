const { getComplexityPoints } = require('./utils')

/**
 * https://www.wolframalpha.com/input/?i=quadratic+fit
 */
function maxSum (nums) {
  let max = Number.MIN_SAFE_INTEGER
  let pair = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j]

      if (max < sum) {
        max = sum
        pair = [nums[i], nums[j]]
      }
    }
  }

  return pair
}

console.log(getComplexityPoints(maxSum))
