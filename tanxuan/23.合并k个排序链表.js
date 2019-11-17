/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let head = new ListNode(0),
    res = head;
  for (let i = 0; i < lists.length; i ++) {
    if (!lists[i]) continue;
    let temp = res.next;
    res.next = comboTwo(temp, lists[i]);
    // res = res.next;
    // console.log(res);
  }
  return head.next;
};

function comboTwo(l1, l2) {
  let head = new ListNode(0),
    res = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      res.next = new ListNode(l1.val);
      res = res.next;
      l1 = l1.next;
    } else {
      res.next = new ListNode(l2.val);
      res = res.next;
      l2 = l2.next;
    }
  }
  let rest = l1 || l2;
  while (rest) {
    res.next = new ListNode(rest.val);
    res = res.next;
    rest = rest.next;
  }
  return head.next;
}
// @lc code=end
