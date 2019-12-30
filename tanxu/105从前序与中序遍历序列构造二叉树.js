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

// 前序序列用于确定根
// 中序序列用于确定下一个节点是根的左节点还是右节点
var buildTree = function(preorder, inorder) {
  let map = {}
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i
  }
  let root = preorder.length > 0 ? new TreeNode(preorder[0].val) : null
  let curNode = root
  for (let i = 1; i < preorder.length; i++) {
     let newNode = new TreeNode(preorder[0].val)
     if (map[preorder[i]] > map[curNode.val]) {
       curNode.right = newNode
     } else {
       curNode.left = newNode
     }
     curNode = newNode
  }
  return root
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null
}
