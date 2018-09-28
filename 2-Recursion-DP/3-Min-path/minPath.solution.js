/**
 * Recursion
 * Time: O(2^n)
 */
function minPath(matrix) {
  return helper(matrix, 0, 0)
}

function helper(matrix, row, col) {
  if (row > matrix.length - 1 || col > matrix[0].length - 1) {
    return Number.MAX_SAFE_INTEGER
  }

  if (row === matrix.length - 1 && col === matrix[0].length - 1) {
    return matrix[row][col]
  }

  return matrix[row][col] + Math.min(
    helper(matrix, row, col + 1),
    helper(matrix, row + 1, col)
  )
}

/**
 * DP
 * Time: O(rows x cols)
 * Space: O(rows x cols)
 */
function minPath (matrix) {
  let cache = []
  let rows = matrix.length
  let cols = matrix[0].length

  for (let row = 0; row < rows; row++) {
    cache[row] = []
  }

  cache[rows - 1][cols - 1] = matrix[rows - 1][cols - 1]

  // last row
  for (let col = cols - 2; col >= 0; col--) {
    cache[rows - 1][col] = cache[rows - 1][col + 1] + matrix[rows - 1][col]
  }

  // last col
  for (let row = rows - 2; row >= 0; row--) {
    cache[row][cols - 1] = cache[row + 1][cols - 1] + matrix[row][cols - 1]
  }

  for (let row = rows - 2; row >= 0; row--) {
    for (let col = cols - 2; col >= 0; col--) {
      cache[row][col] = matrix[row][col] + Math.min(cache[row][col + 1], cache[row + 1][col])
    }
  }

  return cache[0][0]
}
