// 给出两个 非空 的链表用来表示两个非负的整数。
// 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
//
// 示例：
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var head = null
  var point = null
  // 是否进位
  var carry = 0
  while (l1 !== null || l2 !== null) {
    var node = new ListNode(null)
    if (point !=null) {
      point.next = node
    }
    if (head === null) {
      head = node
    }
    var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    node.val = sum % 10
    carry = sum >= 10 ? 1 : 0
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    point = node
  }
  // 考虑最高位进1的情况
  if(carry) {
    var val = new ListNode(1)
    point.next = val
  }
  return head
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var a = new ListNode(2)
a.next = new ListNode(4)
a.next.next = new ListNode(3)

var b = new ListNode(5)
b.next = new ListNode(6)
b.next.next = new ListNode(4)

console.log(addTwoNumbers(a,b).val)
console.log(addTwoNumbers(a,b).next.val)
console.log(addTwoNumbers(a,b).next.next.val)
// console.log(addTwoNumbers(a,b).next.next.next.val)
