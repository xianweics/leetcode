/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k <= 1) return head
  let p0 = null
  let p1 = p0
  let stack = []
  head = null
  while (p1 !== null) {
    stack.push(p1)
    let top = p1
    p1 = p1.next
    if (stack.length === k) {
      if (head === null) {
        head = top
      }
      if (p0 !== null) {
        p0.next = p1
      }
      for (let i = k - 1; i > 0; i--) {
        stack[i].next = stack[i - 1]
      }
      p0 = stack[0]
      p0.next = null
      stack = []
    }
  }
  if (stack.length > 0)  {
    if (p0 === null) {
      return stack[0]
    } else {
      p0.next = stack[0]
    }
  }
  return head
};
