/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null
    }
    let tempAry = []
    while (lists.length > 1) {
        let index = 0
        if (lists.length % 2 === 1) {
            tempAry.push(lists[0])
            index = 1
        }
        for (index; index < lists.length; index += 2) {
            tempAry.push(mergeTwoLists(lists[index], lists[index + 1]))
        }
        lists = tempAry
        tempAry = []
    }
    return lists[0]
};


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
