/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null
    return fun(preorder, inorder)
};

function fun(preorder,inorder) {
    let node = new TreeNode(preorder[0])
    if (preorder.length === 0) return

    let index = -1
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === preorder[0]) {
            index = i
        }
    }
    let left = index >= 0 ? inorder.slice(0, index) : []
    let right = index >= 0 ? inorder.slice(index + 1, inorder.length) : []
    preorder.shift()
    if (left.length > 0) {
        node.left = fun(preorder, left)
    }
    if (right.length > 0) {
        node.right = fun(preorder, right)
    }
    return node
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
