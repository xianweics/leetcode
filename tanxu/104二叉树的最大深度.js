/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let result = 0
    let lvNodes = []
    if (root) lvNodes = [root]
    while (lvNodes.length > 0) {
        result++
        let nodes = []
        for (let i = 0; i < lvNodes.length; i++) {
            if (lvNodes[i].left) nodes.push(lvNodes[i].left)
            if (lvNodes[i].right) nodes.push(lvNodes[i].right)
        }
        lvNodes =  nodes
    }
    return result
};
