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
        if (node1 && node2) break
        if (preNode && curNode.val <= preNode.val) {
            if (!node1) {
                node1 = preNode
            } else {
                node2 = curNode
            }
        }
        if (curNode.left === null) {
            preNode = curNode
            curNode = curNode.right
        } else {
            let node = curNode.left
            // 找当前节点的左节点最右子节点
            while(node.right && node.right !== curNode) {
                node = node.right
            }
            if (node.right === curNode) {
                curNode = curNode.right
                node.right = null
            } else {
                // 设置线索
                node.right = curNode
                preNode = curNode
                // 继续往左遍历
                curNode = curNode.left
            }
        }
    }
    let val = node1.val
    node1.val = node2.val
    node2.val = val
};
