/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return []
    let dp = []
    dp[0] = [new TreeNode(1)]
    for (let i = 1; i < n; i++) {
        dp[i] = []
        let nodes = dp[i - 1]
        for (let node of nodes) {
            // 将已有节点整体作为左子树
            let root = new TreeNode(i + 1)
            root.left = deepCopy(node)
            dp[i].push(root)


            // 将新增节点插入至最右的节点
            let insertNode,rightNode
                insertNode = rightNode = deepCopy(node)
            while (rightNode.right) {
                rightNode = rightNode.right
            }
            rightNode.right = new TreeNode(i + 1)
            dp[i].push(insertNode)

            // 遍历每一层右子节点，重新赋值右节点，然后将原来的作为新插入节点的左子树
            let nodeCopy = node
            while (node.right) {
                dp[i].push(fun(nodeCopy, node.right, i + 1))
                node = node.right
            }
        }
    }
    return dp[n - 1]
};

function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

function deepCopy(root) {
    if (root === null) return null
    let node = new TreeNode(root.val)
    if (root.left) {
        node.left = deepCopy(root.left)
    }
    if (root.right) {
        node.right = deepCopy(root.right)
    }
    return node
}


function fun(root, curNode, val) {
    root = deepCopy(root)
    let node = root
    while (node.right) {
        if (node.right.val === curNode.val) {
            let temp = node.right
            node.right = new TreeNode(val)
            node.right.left = temp
            break
        }
        node = node.right
    }
    return root
}


console.log(generateTrees(5))

