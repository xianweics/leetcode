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
// 每个节点的左右子树高度差不超过1
var isBalanced = function(root) {
   return fun(root) !== false
};

function fun(root) {
  if (root === null) return 0
  let leftDeep = fun(root.left)
  if (leftDeep === false) return false
  let rightDeep = fun(root.right)
  if (rightDeep === false) return false
  if (Math.abs(leftDeep - rightDeep) >=2 ) return false
  else return Math.max(leftDeep,rightDeep) + 1
};


