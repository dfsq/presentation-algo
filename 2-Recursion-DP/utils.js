function Node (val) {
  this.val = val
  this.left = null
  this.right = null
 }

function createTree(arr) {
  let queue = []
  let i = 0
  let root = new Node(arr[0])

  queue.push(root)

  while (queue.length > 0) {
    let node = queue.shift()
    let left = arr[i + 1]
    let right = arr[i + 2]

    node.left = left ? new Node(left) : null
    node.right = right ? new Node(right) : null

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }

    i += 2
  }

  return root
}

module.exports = {
  createTree,
  Node,
}
