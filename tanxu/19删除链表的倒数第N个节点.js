/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let point = head
    let values = []
    while (point) {
        values.push(point)
        point = point.next
    }
    let len = values.length
    let deleteNode = values[len - n]
    let lastNode = values[len - n - 1]
    if (!lastNode) {
        head = values[1] || null
        deleteNode = null
        return head
    }
    lastNode.next = deleteNode.next
    deleteNode = null

    return head
};


var removeNthFromEnd1 = function(head, n) {
    let point1 = null
    let point2 = null
    for (let i = 0; i <= n; i++){
       point2 = point2 === null ? head : point2.next
    }
    while (point2) {
        point1 = point1 === null ? head : point1.next
        point2 = point2.next
    }
    if (point1 === null) {
        let node = head
        head = head.next
        node = null
        return head
    }
    let node = point1.next
    point1.next = node.next
    node = null

    return head
};
