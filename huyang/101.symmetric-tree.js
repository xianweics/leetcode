/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
// 对称二叉树
// 递归
var dd = function(l, r){
    if(!l && !r)    return true;
    if(l && r && l.val == r.val){
        // 左子树的左节点和右子树的右节点相等，右子树的左节点和左子树的右节点相等
        return dd(l.left, r.right) && dd(r.left, l.right);
    } else{
        return false;
    }
}
var isSymmetric = function(root) {
    if(!root)    return true;
    return dd(root.left, root.right);
};
// @lc code=end

