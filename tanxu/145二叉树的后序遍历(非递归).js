// 双栈实现
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
var postorderTraversal = function(root) {
    if (!root) return []
    let stackA = [root]
    let stackB = []
    let result = []
    while (stackA.length > 0) {
        let stackTop = stackA[stackA.length - 1]
        stackA.pop()
        stackB.push(stackTop)
        if (stackTop.left) {
            stackA.push(stackTop.left)
        }
        if (stackTop.right) {
            stackA.push(stackTop.right)
        }
    }
    while (stackB.length > 0) {
        result.push(stackB.pop().val)
    }
    return result
};

