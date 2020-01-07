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
var buildTree = function(preorder, inorder) {
  let map = {}
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i
  }
  let result = preorder.length > 0 ? new TreeNode(preorder[0]) : null
  let curNode = root = result
  for (let i = 1; i < preorder.length; i++) {
    console.log(curNode.val)
    let newNode = new TreeNode(preorder[i])
    if (map[preorder[i]] > map[root.val]) {
      root.right = newNode
      root = root.right
      curNode = newNode
      console.log(123)
      continue
    } else if (map[preorder[i]] > map[curNode.val]) {
      curNode.right = newNode
    } else {
      curNode.left = newNode
    }
    curNode = newNode
  }
  return result
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null
}
