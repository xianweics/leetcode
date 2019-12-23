/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
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
var deleteDuplicates = function(head) {

  if (!head) {
    return null;
  }

  let list = new ListNode(0),
    tmp = list,
    arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  
  // ----------
  let val = arr[0];
  tmp.next = new ListNode(val);
  tmp = tmp.next;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == val) {
      continue;
    } else {
      val = arr[i];
      tmp.next = new ListNode(arr[i]);
      tmp = tmp.next;
    }
  }
  // -----------

  // arr.forEach(item => {
  //   tmp.next = new ListNode(item);
  //   tmp = tmp.next;
  // })
  return list.next;
};
// @lc code=end
