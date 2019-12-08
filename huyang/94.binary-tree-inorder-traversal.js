/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
// 二叉树的中序遍历
// 栈
// 先将根节点入栈，找到所有左节点入栈，直到没有左节点为止
// 然后出栈存入结果数组，每出一个，对比该根节点的右子节点是否有左节点，若有则入栈，否则继续出栈
var inorderTraversal = function(root) {
    let res = [];
    let s = [];     // 栈  
    let p = root;   // 指针
    while (p || s.length > 0) { // 直至左节点为空，即没有左节点为止
        while (p) {
            s.push(p);
            p = p.left;
        }
        // 出栈，存放根节点
        p = s.pop();
        res.push(p.val);
        p = p.right;
    }
    return res;
};

// 递归
var inorder = function(root, res){
    if(!root)   return ;
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
}
var inorderTraversal = function(root) {
    let res = [];
    inorder(root, res);
    return res;
};
// @lc code=end

