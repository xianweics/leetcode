/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let arr = [], res = new ListNode(0), list = res;
  // 获取所有值, 并存入数组
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  // 切掉不需要的值
  arr.splice(arr.length - n,1);
  // 用链表存储
  for(let i of arr) {
    list.next = new ListNode(i);
    list = list.next;
  }
  // 从头部往后返回
  return res.next;
};
// @lc code=end
