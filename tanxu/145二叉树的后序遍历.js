// 方法1 递归
var postorderTraversal = function(root) {
  if (!root) return []
  let result = []
  Traversal(root, result)
  return result
};

function Traversal (node, result) {
  if (node.left) {
    Traversal(node.left, result)
  }
  if (node.right) {
    Traversal(node.right, result)
  }
  result.push(node.val)
}
