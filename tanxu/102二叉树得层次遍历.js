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
var levelOrder = function(root) {
  let result = []
  let layer = []
  if (root) {
    layer.push(root)
  }
  while (layer.length > 0) {
    let ary = []
    let res = []
    for (let i = 0; i < layer.length; i++) {
      res.push(layer[i].val)
      if (layer[i].left) ary.push(layer[i].left)
      if (layer[i].right) ary.push(layer[i].right)
    }
    layer = ary
    result.push(res)
  }
  return result
};
