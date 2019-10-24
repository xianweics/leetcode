/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function(l1, l2) {
    // 初始化
    let head = new ListNode(0)
    let result = head
    let p1 = l1
    let p2 = l2
    let add = 0
    let sum = 0

    while(p1 || p2 || add) {
        // 得到和
        sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + add
        
        // 求 进位 和 余数
        add = parseInt(sum / 10)
        sum = sum % 10

        // 重新获取链表
        p1 = p1 && p1.next
        p2 = p2 && p2.next

        // 链接next
        result.next = new ListNode(sum)
        result = result.next
        // 判断当前链表是否还存在
        if (!p1 && !p2) {
            result.next = null
        }
    }
    return head.next
};

// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]
// var addTwoNumbers = function(l1, l2) {
//     // 初始化
//     let head = new ListNode(0)
//     let res = head
//     let p1 = [], p2 = []

//     // 添加到数组中
//     while(l1) {
//         p1.push(l1.val)
//         l1 = l1.next
//     }
//     while(l2) {
//         p2.push(l2.val)
//         l2 = l2.next
//     }

//     // 转成数值
//     let num1 = +(p1.reverse().join(''))
//     let num2 = +(p2.reverse().join(''))
//     console.log(num1, num2)
//     let result = (num1 + num2).toFixed()
//     result = result.split('')
//     let len = result.length
//     while(len > 0) {
//         res.next = new ListNode(result[len - 1] - 0)
//         res = res.next
//         len --
//     }
//     console.log(res, head)
//     return head.next
// };

// @lc code=end

