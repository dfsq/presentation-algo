/**
 * Using extra memory.
 */
function commonAncestor (root, p, q) {
  if (root === null || p === null || q === null) {
    return null
  }

  let pathP = findPath(root, p) // [node1, node2, ..., p]
  let pathQ = findPath(root, q) // [node1, node2, ..., q]

  let commonNode = pathP[0]

  while (pathP.length && pathQ.length && pathP[0].val === pathQ[0].val) {
    commonNode = pathP[0]
    pathP.shift()
    pathQ.shift()
  }

  return commonNode
}

function findPath (root, node) {
  if (root === null) {
    return null
  }

  if (root === node) {
    return [node]
  }

  let leftPath = findPath(root.left, node)

  if (leftPath) {
    leftPath.unshift(root)
    return leftPath
  }

  let rightPath = findPath(root.right, node)

  if (rightPath) {
    rightPath.unshift(root)
    return rightPath
  }

  return null
}


/**
 * Without extra memory
 * Time: O(n)
 */

function commonAncestor (root, p, q) {
  return helper(root, p, q)
}

function helper (root, p, q) {
  const isPinLeft = contains(root.left, p)
  const isQinLeft = contains(root.left, q)

  if (isPinLeft !== isQinLeft) {
    return root
  }

  const side = isPinLeft ? root.left : root.right

  return commonAncestor(side, p, q)
}

function contains (root, node) {
  if (root === null) {
    return false
  }

  if (root === node) {
    return true
  }

  return contains(root.left, node) || contains(root.right, node)
}
