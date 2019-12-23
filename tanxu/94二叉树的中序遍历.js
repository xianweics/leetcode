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

// morris遍历，空间复杂度O(1)
var morris = function(root) {
    let result = []
    let curNode = root
    while(curNode !== null) {
        if (curNode.left === null) {
            result.push(curNode.val)
            curNode = curNode.right
        } else {
            let node = curNode.left
            // 找当前节点的左节点最右子节点
            while(node.right && node.right !== curNode) {
                node = node.right
            }
            if (node.right === curNode) {
                result.push(curNode.val)
                curNode = curNode.right
                node.right = null
            } else {
                // 设置线索
                node.right = curNode
                // 继续往左遍历
                curNode = curNode.left
            }
        }
    }
    return result
};

