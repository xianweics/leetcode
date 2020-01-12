## 删除链表的倒数第N个节点

> 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。<br/>
> 说明：给定的 n 保证是有效的。

示例1:
```text
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

- 解法
  - 解题思路: 
    1. 算出链表的长度`count`
    2. `count - n + 1` 为链表需要删除的节点
    3. 通过遍历链表找到 `count - n + 1`的前一项，即为`count - n`，修改链表的`next`
    
  - 代码
    ```javascript
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
    const removeNthFromEnd = function(head, n) {
      if(n === 0) return head;
      let count = 0;
      let atPoint = 0;
      let headPoint = head;
      while(headPoint){
        headPoint = headPoint.next;
        count++;
      }
      atPoint = count - n;
      headPoint = head;
      if(count === n){
        return head.next;
      }else{
        count = 1;
        while(count < atPoint){
          headPoint = headPoint.next;
          count++;
        }
        headPoint.next = headPoint.next.next;
        return head;
        }
    };
    ```
    
  - 测试结果
  ![](result19-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(n)`