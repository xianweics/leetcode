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
var inorderTraversal = function(root) {
    let result = []
    fun(root, result)
    return result
};
var fun = function(node, result) {
    if(node.left) {
        fun(node.left)
    }
    result.push(node.val)
    if (node.right) {
        fun(node.right)
    }
};


var inorderTraversal1 = function(root) {
    let result = []
    let stack = []
    let node = root
    while (node !== null || stack.length > 0) {
        while (node !== null) {
            stack.push(node)
            node = node.left
        }
        node = stack[stack.length -1]
        result.push(node.val)
        stack.pop()
        node = node.right
    }
    return result
};



