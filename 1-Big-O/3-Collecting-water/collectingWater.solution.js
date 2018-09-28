/**
 * Time: O(n^2)
 * Space: O(1)
 */
function collectingWater (height) {
  let collected = 0

  for (let i = 1; i < height.length - 1; i++) {
    let maxLeft = 0
    let maxRight = 0

    for (let j = i; j >= 0; j--) {
      maxLeft = Math.max(maxLeft, height[j])
    }

    for (let j = i; j < height.length; j++) {
      maxRight = Math.max(maxRight, height[j])
    }

    collected += Math.min(maxLeft, maxRight) - height[i]
  }

  return collected
}

/**
 * Time: O(n)
 * Space: O(n)
 */
function collectingWater(height) {
  let maxRightCache = []
  maxRightCache[height.length] = 0

  for (let i = height.length - 1; i >= 0; i--) {
    maxRightCache[i] = Math.max(maxRightCache[i + 1], height[i])
  }

  let collected = 0
  let maxLeft = height[0]
  let maxRight = maxRightCache[0]

  for (let i = 0; i < height.length; i++) {
    maxLeft = Math.max(maxLeft, height[i])
    maxRight = maxRightCache[i]

    collected += Math.min(maxLeft, maxRight) - height[i]
  }

  return collected
}

/**
 * Time: O(n)
 * Space: O(1)
 */
function collectingWater (height) {
  let left = 0
  let right = height.length - 1
  let collected = 0
  let leftMax = 0
  let rightMax = 0

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        collected += leftMax - height[left]
      }

      left++
    }
    else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        collected += rightMax - height[right]
      }

      --right
    }
  }

  return collected
}
