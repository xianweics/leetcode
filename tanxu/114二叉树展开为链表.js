var flatten = function(root) {
  if (!root) return null
  _flatten(root, root)
  return root
}

var _flatten = function(root,node) {
  let left = root.left
  let right = root.right
  if (!left && right) return _flatten(right, node)
  // 叶子节点
  if (!left && !right) node = root
  if (left) {
    root.right = left
    root.left = null
    node = _flatten(left, node)
  }
  if (right) {
    node.right = right
    node = _flatten(right, node)
  }
  return node
};
