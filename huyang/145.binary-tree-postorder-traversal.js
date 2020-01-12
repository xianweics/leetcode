/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
// 二叉树的后序遍历
// 左右根
// 迭代
// 后序遍历比较复杂，但是看见网上有个比较好记住的办法：
// 按照与前序相似的方法（前序压栈的顺序是先右后左，这里是先左后右），先得到一个结果，然后对结果倒序一下。
var postorderTraversal = function(root) {
    if(!root)   return [];
	let res = [];
	let s = [root];
    while(s.length > 0) {
        let p = s.shift();	// 取第一个
        res.push(p.val);
        p.left && s.unshift(p.left);
        p.right && s.unshift(p.right);
    }
    return res.reverse();
};
// @lc code=end

