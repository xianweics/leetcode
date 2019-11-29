/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
// 两两交换链表中的节点
var swapPairs = function(head) {
    let newHead = new ListNode(0);     // 创建头节点
    let s = newHead;
    // 定义对应指针
    let p = head;
    while(p && p.next){
        let a = p.val;
        p = p.next;     // 移动指针
        let b = p.val;
        s.next = new ListNode(b);
        s = s.next;
        s.next = new ListNode(a);
        s = s.next;
        p = p.next;     // 移动指针
    }
    if(p){
        s.next = new ListNode(p.val);
        s = s.next;
    }
    let res = newHead.next;
    delete newHead;    // 删除头节点
    return res;
};
// @lc code=end

