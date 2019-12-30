/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null
  let index = Math.floor(nums.length / 2)
  let node = new TreeNode(nums[index])
  node.left = sortedArrayToBST(nums.slice(0,index))
  node.right = sortedArrayToBST(nums.slice(index + 1, nums.length))
  return node
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
