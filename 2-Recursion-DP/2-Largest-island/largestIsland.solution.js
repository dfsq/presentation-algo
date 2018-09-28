/**
 * Recursion
 * Time: O(rows x cols), visit each cell once only
 */
function largestIsland (grid) {
  if (grid.length === 0 || grid[0] === 0) {
    return 0
  }

  let cols = grid[0].length
  let rows = grid.length
  let max = 0

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      max = Math.max(max, calculateArea(grid, row, col))
    }
  }

  return max
}

function calculateArea (grid, row, col) {
  if (grid[row][col] === 0) {
    return 0
  }

  let area = 1

  grid[row][col] = 0

  if (row > 0) area += calculateArea(grid, row - 1, col)
  if (row < grid.length - 1) area += calculateArea(grid, row + 1, col)
  if (col > 0) area += calculateArea(grid, row, col - 1)
  if (col < grid[0].length - 1) area += calculateArea(grid, row, col + 1)

  return area
}

module.exports = largestIsland
