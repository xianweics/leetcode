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
var isValidBST = function(root) {
    let result = [Number.MIN_SAFE_INTEGER]
    return fun(root, result)
};

var fun = function(node, result) {
    if (node === null) return true
    if(node.left) {
        if (!fun(node.left, result)) return false
    }
    result.push(node.val)
    if (node.val <= (result.length - 2 >= 0 ? result[result.length - 2] : Number.MIN_SAFE_INTEGER)) return false
    if (node.right) {
        if (!fun(node.right, result)) return false
    }
    return true
};
