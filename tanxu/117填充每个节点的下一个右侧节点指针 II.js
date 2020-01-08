/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null
  con(root)
  return root
};

function con(node) {
  if (node.left && node.right) {
    let curNode = node.left
    node.left.next = node.right
    let headNode = null
    let preNode = null
    while (curNode) {
      if (preNode) {
        preNode.next = curNode.left || curNode.right || null
        preNode = curNode.right || curNode.left || preNode
      }
      if (curNode.left && curNode.right) {
        curNode.left.next = curNode.right
      }
      if (!headNode) {
        headNode = curNode.left || curNode.right || null
      }
      if (curNode.next === null) {
        curNode = headNode
        headNode = null
        preNode = null
      } else {
        curNode = curNode.next
      }
    }
  }
}
