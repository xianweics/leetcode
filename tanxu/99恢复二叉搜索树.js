/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let curNode = root
    let preNode = null
    let node1 = null
    let node2 = null
    while(curNode !== null) {
        if (curNode.left === null) {
            // 这里记录下错误的节点
            if (preNode && preNode.val >= curNode.val) {
                node1 = node1 === null ? preNode : node1
                node2 = curNode
            }
            // console.log(preNode ? preNode.val : null, curNode.val)
            preNode = curNode
            curNode = curNode.right
        } else {
            let node = curNode.left
            // 找当前节点的左节点最右子节点
            while(node.right && node.right !== curNode) {
                node = node.right
            }
            if (node.right === curNode) {
                // 这里记录下错误的节点
                if (preNode && preNode.val >= curNode.val) {
                    node1 = node1 === null ? preNode : node1
                    node2 = curNode
                }
               // console.log(preNode ? preNode.val : null, curNode.val)
                preNode = curNode
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
    // 交换值
    let temp = node1.val
    node1.val = node2.val
    node2.val = temp
};
recoverTree(createTree())



function TreeNode(val, left, right) {
    this.val = val;
    this.left = left
    this.right = right;
}

function createTree () {
    let node3 = new TreeNode(3, null, null)
    let node7 = new TreeNode(7, null, null)
    let node10 = new TreeNode(10, null, null)
    let node8 = new TreeNode(8, node3, node10)
    let root = new TreeNode(6, node7, node8)
    return root
}
