/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
// 删除排序链表中的重复元素II
// 遍历链表节点放入临时数组
// 求出临时数组中的重复元素
// 遍历链表，把没在临时数组中出现的节点插入新的链表
var duplicate = function(arr){
	var res=[];
	arr.forEach(function(item){
		if(arr.indexOf(item) !== arr.lastIndexOf(item) && res.indexOf(item)===-1){
			res.push(item);
		}
	});
	return res;
}
var deleteDuplicates = function(head) {
    let newHead = new ListNode(0);
    let s = newHead;
    let p = head;
    let q = head;
    let tmp = [];
    while(p){
        tmp.push(p.val);
        p = p.next;
    }
    tmp = duplicate(tmp);
    while(q){
        if(tmp.indexOf(q.val) < 0){
            s.next = new ListNode(q.val);
            s = s.next;
        }
        q = q.next;     // 移动指针
    }
    let res = newHead.next;
    delete newHead;    // 删除头节点
    return res;
};


// 删除排序链表中的重复元素II
// 方法2: 用第83题（删除排序链表中的重复元素）的方法先去除链表中重复出现的节点得到链表s1，并记录下重复出现的节点元素放在temp中
// 再遍历一次s1，temp中出现的元素不插入新链表
var deleteDuplicates = function(head) {
    let head1 = new ListNode(0);
    let s1 = head1;
    let p = head;
    let tmp = [];
    let temp = [];
    while(p){
        if(tmp.indexOf(p.val) < 0){
            s1.next = new ListNode(p.val);
            s1 = s1.next;
            tmp.push(p.val);
        } else{
            temp.push(p.val);
        }
        p = p.next;
    }
    let q = head1;
    let head2 = new ListNode(q.val);
    let s2 = head2;
    q = q.next;
    while(q){
        if(temp.indexOf(q.val) < 0){
            s2.next = new ListNode(q.val);
            s2 = s2.next;
        }
        q = q.next;
    }
    let res = head2.next;
    delete head2;    // 删除头节点
    return res;
};
// @lc code=end

