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
  if (!root) return root
  let curNode = root
  let preNode = null
  let childHead = null
  while (curNode) {
    if (!childHead) {
      childHead = curNode.left || curNode.right
    }
    if (curNode.left) {
      if (preNode) {
        preNode.right = curNode.left
      }
      preNode = curNode.left
    }

    if (curNode.right) {
      if (preNode) {
        preNode.right = curNode.right
      }
      preNode = curNode.right
    }

    if (!curNode.next) {
      curNode = curNode.next
    } else {
      curNode = childHead
      childHead = null
      preNode = null
    }
  }
  return root
};
