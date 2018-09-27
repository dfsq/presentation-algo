const { createTree, Node } = require('../utils')
const commonAncestor = require('./commonAncestor')

test('[3,5,1,6,2,0,8,null,null,7,4] and nodes 5 and 1', () => {
  const tree = createTree([3,5,1,6,2,0,8,null,null,7,4])
  const p = tree.left.left
  const q = tree.left.right
  expect(commonAncestor(tree, p, q)).toBe(tree.left)
})

test('[5, 3, 6, 2, 4, null, 8, 1, null, null, 7, null,9,12,null,2] and nodes 7 and 6', () => {
  const tree = createTree([5, 3, 6, 2, 4, null, 8, 1, null, null, 7, null,9,12,null,2])
  const p = tree.right
  const q = tree.left.right.right
  expect(commonAncestor(tree, p, q)).toBe(tree)
})

test('[5, 3, 6, 2, 4, null, 8, 1,2,9,12,null,2] and 9 and 12', () => {
  const tree = createTree([5, 3, 6, 2, 4, null, 8, 1,2,9,12,null,2])
  const p = tree.left.right.left
  const q = tree.left.right.right
  expect(commonAncestor(tree, p, q)).toBe(tree.left.right)
})

test('[5, 3, null, 2] and 2 and 3', () => {
  const tree = createTree([5, 3, null, 2])
  const p = tree.left.left
  const q = tree.left
  expect(commonAncestor(tree, p, q)).toBe(tree.left)
})
