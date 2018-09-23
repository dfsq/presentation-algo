const { getComplexityPoints } = require('./utils')

/**
 * https://www.wolframalpha.com/input/?i=logarithmic+fit
 */
function search (nums, target) {
  let left = 0
  let right = nums.length - 1
  let result = -1

  while (left <= right) {
    let middle = Math.floor((right + left) / 2)

    if (nums[middle] === target) {
      return middle
    }

    if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return result
}

const points = getComplexityPoints(search, function (nums) {
  return nums.sort((a, b) => a - b)
}, function (nums) {
  return [nums[0]]
})

console.log(points)
