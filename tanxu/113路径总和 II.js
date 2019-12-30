var pathSum = function(root, sum) {
  let array = []
  let res = []
  getPathSum(root,sum)
  return res

  function getPathSum(root, sum) {
    if (!root) return []
    array.push(root.val)
    sum -= root.val
    if (sum === 0 && !root.left && !root.right) {
      res.push(Array.from(array))
    } else {
      if (root.left) {
        getPathSum(root.left, sum)
        array.pop()
      }
      if (root.right) {
        getPathSum(root.right, sum)
        array.pop()
      }
    }
  }
};
