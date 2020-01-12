/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null)  return true
  return isMirror(root.left, root.right)
};

function isMirror (left, right) {
  if (left === null && right === null) return true
  if (left === null || right === null) return false
  if (left.val !== right.val) return false
  if (!isMirror(left.left,right.right))  return false
  if (!isMirror(left.right,right.left)) return false
  return true
}
