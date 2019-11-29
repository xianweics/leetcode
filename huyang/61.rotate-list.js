/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
// 旋转链表
// 如果k=0，说明没有走，直接返回链表
// 如过k是链表长度的n倍，说明走了n圈，链表不会变化，直接返回链表
// 观察杨例可知，旋转就是先读取倒数第k个节点后的节点，再从头开始读取到k
// 通过链表长度-k求出是正数第k个节点更方便操作
var rotateRight = function(head, k) {
    if(k == 0) return head;
    let newHead = new ListNode(0);
    let s = newHead;
    let p1 = head;  // 指针p1
    let p2 = head;  // 指针p2
    let q = head;   // 查询head长度的指针
    let len = 0;    // 链表长度
    let count = 0;  // 计数
    while(q){
        len++;
        q = q.next;
    }
    k = k % len;    // 简化到一轮
    if(k == 0) return head;
    k = len - k;    // 找到正数的第k个节点
    while(p1){
        if(count >= k){
            s.next = new ListNode(p1.val);
            s = s.next;
        }
        p1 = p1.next;
        count++;
    }
    count = 0;
    while(p2){
        if(count < k){
            s.next = new ListNode(p2.val);
            s = s.next;
        } else{
            break;
        }
        p2 = p2.next;
        count++;
    }
    let res = newHead.next;
    delete newHead;    // 删除头节点
    return res;
};
// @lc code=end

