/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
// 两数相加
// 链表
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);     // 创建头节点
    let s = head;
    // 定义对应指针
    let p1 = l1;
    let p2 = l2;
    let p = 0;    // 进位
    while(p1 || p2 || p){
        let a = p1 ? p1.val : 0;
        let b = p2 ? p2.val : 0;
        // 求结果sum和进位p
        let sum = a + b + p;
        p = sum > 9 ? parseInt(sum / 10) : 0;
        sum = sum % 10;
        // 移动指针
        p1 = p1 && p1.next;
        p2 = p2 && p2.next;
        // 插入结果sum
        s.next = new ListNode(sum);
        s = s.next;
        if(!p1 && !p2)  s.next = null;
    }
    let res = head.next;
    delete head;    // 删除头节点
    return res;
};
// @lc code=end

