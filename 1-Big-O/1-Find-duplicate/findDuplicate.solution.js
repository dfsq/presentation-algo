/**
 * Time: O(nlogn)
 * Space: O(1)
 */
function findDuplicated (nums) {
  nums.sort((a, b) => a - b)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return nums[i]
    }
  }
}

/**
 * Time: O(n)
 * Space: O(n)
 */
function findDuplicated (nums) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === true) {
      return nums[i]
    } else {
      hash[nums[i]] = true
    }
  }
}

/**
 * Time: O(n)
 * Space: O(1)
 */
function findDuplicated (nums) {
  for (let i = 0; i < nums.length; i++) {
    let value = Math.abs(nums[i])
    let index = value - 1

    if (nums[index] < 0) {
      return value
    } else {
      nums[index] = -nums[index]
    }
  }
}
