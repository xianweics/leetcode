/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let ary = []
    while (head) {
      ary.push(head.val)
      head = head.next
    }
    return sortedArrayToBST(ary)
};

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
