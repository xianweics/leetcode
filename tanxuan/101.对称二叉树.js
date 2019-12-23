/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
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
  return isMirror(root, root);
};

function isMirror(p, q) {
  if (p == null && q == null) {
    return true;
  }
  if (p != null && q != null && p.val == q.val) {
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  } else {
    return false;
  }
}
// @lc code=end

