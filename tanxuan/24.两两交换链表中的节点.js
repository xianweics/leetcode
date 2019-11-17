/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    let res = new ListNode(0), list = res;
    while(head && head.next) {
        let t1 = head.next;
        list.next = new ListNode(t1.val);
        list = list.next;
        list.next = new ListNode(head.val);
        head = t1.next;
        list = list.next;
        console.log(head, list);
    }
    if (head) {
        list.next = new ListNode(head.val);
        list = list.next;
    }
    return res.next;
};
// @lc code=end

