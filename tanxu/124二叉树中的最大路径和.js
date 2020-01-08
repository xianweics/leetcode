/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxVal = null
var maxPathSum = function(root) {
  maxVal = Number.MIN_SAFE_INTEGER
  SubsequentTraversal(root)
  return maxVal
};

// 后续遍历
function SubsequentTraversal (root) {
  let maxLeft = Number.MIN_SAFE_INTEGER
  let maxRight = Number.MIN_SAFE_INTEGER
  if (root.left) {
    maxLeft = SubsequentTraversal(root.left)
  }
  if (root.right) {
    maxRight = SubsequentTraversal(root.right)
  }
  maxVal = Math.max(maxVal,root.val, root.val + maxLeft, root.val + maxRight, root.val + maxLeft + maxRight)
  return Math.max(root.val, root.val + maxLeft, root.val + maxRight)
}
