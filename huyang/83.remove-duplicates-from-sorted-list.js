/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
// 删除排序链表中的重复元素
// 遍历链表，如果节点不在临时数组tmp中，把节点插入新链表，并同时插入tmp
var deleteDuplicates = function(head) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let tmp = [];
    while(p){
        if(tmp.indexOf(p.val) < 0){
            s.next = new ListNode(p.val);
            s = s.next;
            tmp.push(p.val);
        }
        p = p.next;
    }
    let res = newHead.next;
    delete newHead;    // 删除头节点
    return res;
};
// @lc code=end

