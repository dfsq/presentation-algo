const { createTree } = require('../utils')
const maxDepth = require('./maxDepth')

test.each([
  [[3,9,20,null,null,15,7], 3],
  [[5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9], 4],
  [[5, 3, 6, 2, 4, null, 8, 1, null, null, 7, null,9,12,null,2], 5],
  [[1], 1],
  [[1,2], 2],
])(
  '%j should have max depth %i',
  (a, expected) => {
    const tree = createTree(a)
    expect(maxDepth(tree)).toBe(expected)
  },
)
