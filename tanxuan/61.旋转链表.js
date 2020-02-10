/*
 * @Author: Tan Xuan
 * @Date: 2020-02-10 15:23:02
 * @LastEditors  : Tan Xuan
 * @LastEditTime : 2020-02-10 15:40:30
 * @Description: File content
 */
/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function(head, k) {
    // 不需要移动
    if (!head || !k) {
        return head
    }
    // 定义并获取长度
    let length = 1, point = head, end;
    while(point.next) {
      point = point.next
      length += 1;
    }
    // 得到偏移量
    let count = length - k % length;
    end = point;
    point.next = head;
    point = head
    // 循环偏移
    for(let i = 0; i < count; i++) {
        point = point.next;
        end = end.next;
    }
    // 裁剪
    end.next = null;
    return point
};
// @lc code=end

