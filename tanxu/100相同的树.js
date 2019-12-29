/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 先序遍历两棵树，判断节点是否相等
var isSameTree = function(p, q) {
  if (p === null && q === null) return true
  if ((p === null && q !== null) || (p !== null && q === null)) return false
  if (p.val != q.val) return false
  if (!isSameTree(p.left, q.left)) return false
  if (!isSameTree(p.right, q.right)) return false
  return true
};
