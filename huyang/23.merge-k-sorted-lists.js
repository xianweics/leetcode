/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
// 合并k个排序链表
// 递归第21题（合并两个排序链表）
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
var mergeKLists = function(lists) {
    let res = mergeTwoLists(lists[0], lists[1]);
    for(let i=2; i<lists.length; i++){
        res = mergeTwoLists(res, lists[i]);
    }
    return res;
};
// @lc code=end

