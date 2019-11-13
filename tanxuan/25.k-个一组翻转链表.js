/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let list = new ListNode(0), prev = list, curr = head, next;
    list.next = head;
    let length = 0;
    // 计算长度
    while(head) {
        length++;
        head = head.next;
    }
    // 外层循环
    for(let i = 0; i < Math.floor(length / k); i ++) {
        // 交换
        for(let j = 0; j < k - 1; j ++) {
            next = curr.next;
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }
        // 重设头,尾
        prev = curr;
        curr = prev.next;
    }
    return list.next;
};
// @lc code=end

