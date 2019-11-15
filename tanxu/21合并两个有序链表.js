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
var mergeTwoLists = function(l1, l2) {
    let head = null
    let p = null
    if (l1 == null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }
    if (l1.val < l2.val) {
        head = p = l1
        l1 = l1.next
    } else {
        head = p = l2
        l2 = l2.next
    }
    while (l1 || l2) {
        if (l1 === null) {
            p.next = l2
            l2 = null
            break
        }
        if (l2 === null) {
            p.next = l1
            l1 = null
            break
        }
        if (l1.val < l2.val) {
            p.next = l1
            p = p.next
            l1 = l1.next
        } else {
            p.next = l2
            p = p.next
            l2 = l2.next
        }
    }
    return head
};
