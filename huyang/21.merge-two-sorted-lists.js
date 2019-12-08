/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 合并两个有序链表
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(0);     // 创建头节点
    let s = head;
    // 定义对应指针
    let p1 = l1;
    let p2 = l2;
    while(p1 || p2){
        if(p1 && p2){
            if(p1.val <= p2.val){
                s.next = new ListNode(p1.val);
                s = s.next;
                p1 = p1.next;
            } else{
                s.next = new ListNode(p2.val);
                s = s.next;
                p2 = p2.next;
            }
        } else{
            if(p1){
                s.next = new ListNode(p1.val);
                s = s.next;
                p1 = p1.next;
            } else{
                s.next = new ListNode(p2.val);
                s = s.next;
                p2 = p2.next;
            }
        }
    }
    let res = head.next;
    delete head;    // 删除头节点
    return res;
};
// @lc code=end

