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
var minDepth = function(root) {
  return fun(root)
};

function fun(root) {
  if (root === null) return 0
  let leftDeep = fun(root.left)
  let rightDeep = fun(root.right)
  if (leftDeep === 0) return rightDeep + 1
  if(rightDeep === 0) return leftDeep + 1
  return Math.min(leftDeep,rightDeep) + 1
};
