/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
// 二叉树的前序遍历
// 根左右
// 迭代
var preorderTraversal = function(root) {
    if(!root)   return [];
	let res = [];
	let s = [root];
    while(s.length > 0) {
        let p = s.shift();	// 取第一个
        res.push(p.val);
        p.right && s.unshift(p.right);
        p.left && s.unshift(p.left);
    }
    return res;
};
// @lc code=end

