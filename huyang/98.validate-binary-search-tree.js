/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
// 验证二叉搜索树
// 所有左子树的节点都小于根节点，所有右子树的节点都大于根节点
// 每个子树的左节点<根节点<右节点
// 由上述条件可知，该题可转化为求二叉树中序遍历的结果，如果为升序，则返回true，否则false
// 返回中序遍历结果
var ldr = function(root){
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
}
var isValidBST = function(root) {
    let arr = ldr(root);
    for(let i=0; i < arr.length-1; i++){
        if(arr[i+1] <= arr[i])  return false;
    }
    return true;
};
// @lc code=end

