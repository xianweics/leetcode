/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head == null) return head
  if (head.next == null) return head
  let p0 = null
  let p1 = head
  let p2 = p1.next
  head = p2
  swap(p0, p1, p2)
  return head
};

function swap (p0, p1, p2) {
  if (p0 !== null) {
    p0.next = p2
  }
  p1.next = p2.next
  p2.next = p1
  p0 = p1
  p1 = p1.next
  if (p1 === null) return
  p2 = p1.next
  if (p2 === null) return
  swap(p0, p1, p2)
}
