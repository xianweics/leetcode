/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
// 删除链表的倒数第N个节点
// 先找到要删除的是正数的第N个节点
// 然后创建新链表的时候跳过这个节点
var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let q = head;
    let len = 0;    // 链表长度
    let count = 0;
    while(q){
        len++;
        q = q.next;
    }
    n = len - n;    // 把倒数第n个节点变成正数第n个节点
    while(p){
        if(count != n){
            s.next = new ListNode(p.val);
            s = s.next;
        }
        p = p.next;
        count++;
    }
    let res = newHead.next;
    delete newHead;    // 删除头节点
    return res;
};
// @lc code=end

