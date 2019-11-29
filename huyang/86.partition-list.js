/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
// 分隔链表
// 遍历链表，如果节点小于x则插入新链表
// 否则存入临时数组tmp
// 变脸临时数组tmp，把元素插入新链表
var partition = function(head, x) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let tmp = [];
    while(p){
        if(p.val < x){
            s.next = new ListNode(p.val);
            s = s.next;
        } else{
            tmp.push(p.val);
        }
        p = p.next;
    }
    for(let i in tmp){
        s.next = new ListNode(tmp[i]);
        s = s.next;
    }
    let res = newHead.next;
    delete newHead;    // 删除头节点
    return res;
};
// @lc code=end

