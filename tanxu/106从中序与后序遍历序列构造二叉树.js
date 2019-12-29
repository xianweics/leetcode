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
// 后序确定根，中序确定左右子节点
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null
    return fun(postorder, inorder)
};

function fun(postorder,inorder) {
    let len = postorder.length
    let node = new TreeNode(postorder[len - 1])
    if (postorder.length === 0) return

    let index = -1
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === postorder[len - 1]) {
            index = i
        }
    }
    let left = index >= 0 ? inorder.slice(0, index) : []
    let right = index >= 0 ? inorder.slice(index + 1, inorder.length) : []
    postorder.pop()
    if (right.length > 0) {
        node.right = fun(postorder, right)
    }
    if (left.length > 0) {
        node.left = fun(postorder, left)
    }
    return node
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
