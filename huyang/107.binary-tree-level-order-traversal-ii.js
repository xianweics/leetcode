/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
// 二叉树的层次遍历II
// 非递归-采用队列
// 先从上往下，从左到右
// 然后将得到的结果数组反转就是从下往上了
var levelOrderBottom = function(root) {
    if(!root)   return [];
    let res = [];
    let q = [root];
    while(q.length > 0){
        let tmp = [];
        let temp = [];
        for(let i in q){
            let p = q[i];
            temp.push(p.val);
            p.left && tmp.push(p.left);
            p.right && tmp.push(p.right);
        }
        q = tmp;
        res.push(temp);
    }
    return res.reverse();
};
// @lc code=end

