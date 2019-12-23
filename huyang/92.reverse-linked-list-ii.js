/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 反转链表
var reverseBetween = function(head, m, n) {
    if(m == n) return head;
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let count = 1;
    let tmp = [];
    let flag = true;
    while(p){
        if(count<m){
            s.next = new ListNode(p.val);
            s = s.next;
        } else if(count>n){
            if(flag){
                for(let i=tmp.length-1; i>=0;i--){
                    s.next = new ListNode(tmp[i]);
                    s = s.next;
                }
            }
            flag = false;
            s.next = new ListNode(p.val);
            s = s.next;
        } else{
            tmp.push(p.val);
        }
        p = p.next;
        count++;
    }
    // 反转整个链表的情况
    if(flag){
        for(let i=tmp.length-1; i>=0;i--){
            s.next = new ListNode(tmp[i]);
            s = s.next;
        }
    }
    let res = newHead.next;
    delete newHead;    // 删除头节点
    return res;
};
// @lc code=end

