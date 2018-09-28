/**
 * Time: O(n)
 */
function maxDepth (root) {
  if (root === null) {
    return 0
  }

  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)

  return Math.max(leftDepth, rightDepth) + 1
}

/**
 * Iteratively without recursion.
 */
 function maxDepth (root) {
   let queue = []
   let height = 1
   let currentLevel = 1
   let nextLevel = 0

   queue.push(root)

   while (queue.length > 0) {
     let node = queue.shift()

     if (node.left !== null) {
       queue.push(node.left)
       nextLevel++
     }

     if (node.right !== null) {
       queue.push(node.right)
       nextLevel++
     }

     currentLevel--

     if (currentLevel === 0 && queue.length > 0) {
       height++
       currentLevel = nextLevel
       nextLevel = 0
     }
   }

   return height
 }
