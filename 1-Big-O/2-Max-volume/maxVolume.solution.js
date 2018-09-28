/**
 * Time: O(n^2)
 * Space: O(1)
 */
 function maxVolume (heights) {
   let max = 0

   for (let i = 0; i < heights.length; i++) {
     for (let j = i + 1; j < heights.length; j++) {
       let height = Math.min(heights[i], heights[j])
       max = Math.max(height * (j - i), max)
     }
   }

   return max
 }

/**
 * Time: O(n)
 * Space: O(1)
 */
function maxVolume (heights) {
  let left = 0
  let right = heights.length - 1
  let max = 0

  while (left < right) {
    let height = Math.min(heights[left], heights[right])
    max = Math.max(max, (right - left) * height)

    if (heights[left] > heights[right]) {
      right -= 1
    } else {
      left += 1
    }
  }

  return max
}
