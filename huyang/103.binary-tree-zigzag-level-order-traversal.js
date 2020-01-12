/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
// 二叉树的锯齿形状层次遍历
// 非递归-采用队列
// 从上往下
// 奇数层从左到右
// 锯齿形状只需要将偶数层反转为从右往左就可以了
var zigzagLevelOrder = function(root) {
    if(!root)   return [];
    let res = [];
    let q = [root];
    let count = 1;
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
        if(count%2 == 0){
            res.push(temp.reverse());
        } else{
            res.push(temp);
        }
        count++;
    }
    return res;
};
// @lc code=end

