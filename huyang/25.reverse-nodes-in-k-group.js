/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
// k个一组翻转链表
var reverseKGroup = function(head, k) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let q = head;
    let n = 0;      // 链表长度
    let tmp = [];   // 临时数组，存放每k个一组的链表节点
    let temp = [];  // 临时数组，存放交换后的 每k个一组的链表节点 的集合
    while(q){
        n++;
        q = q.next;     // 移动指针
    }
    for(let i=0;i< k * parseInt(n/k);i++){
        tmp.push(p.val);
        p = p.next;
        if(tmp.length == k){
            temp = [...temp, ...tmp.reverse()];
            tmp = [];
        }
    }
    for(let i in temp){
        s.next = new ListNode(temp[i]);
        s = s.next;
    }
    while(p){
        s.next = new ListNode(p.val);
        s = s.next;
        p = p.next;     // 移动指针
    }
    let res = newHead.next;
    delete newHead;    // 删除头节点
    return res;
};
// @lc code=end

