/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
// 平衡二叉树
// 未通过
var isBalanced = function(root) {
    if(!root)   return true;
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
    for(let i=1; i<res.length-1; i++){
        if(res[i].length < Math.pow(2,i-1) + 1)   return false;
    }
    return true;
};
// @lc code=end

