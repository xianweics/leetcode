/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = []
    let lvNodes = []
    let tag = true
    if (root) lvNodes = [root]
    while (lvNodes.length > 0) {
        let res = []
        let nodes = []
        let len = lvNodes.length
        for (let i = 0; i < len; i++) {
            if (tag) {
                res.push(lvNodes[i].val)
            } else {
                res.push(lvNodes[lvNodes.length - 1 - i].val)
            }

            if (lvNodes[i].left) nodes.push(lvNodes[i].left)
            if (lvNodes[i].right) nodes.push(lvNodes[i].right)
        }
        lvNodes =  nodes
        result.push(res)
        tag = !tag
    }
    return result
};
