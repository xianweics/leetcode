## 反转链表 II

> 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。<br/>
> 说明: 1 ≤ m ≤ n ≤ 链表长度。 

示例1:
```text
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
```

- 解法
  - 解题思路: 
    1. 将链表分为3部分。第一部分为前 `m - 1`, 第二部分为 `m` 到 `n`, 第三部分为大于 `n`
    2. 把第二部分翻转：转数组，翻转数组，然后把数组转链表
    3. 把第一部分，翻转过的第二部分，第三部分连接起来
    
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
     * @param {number} m
     * @param {number} n
     * @return {ListNode}
     */
    const reverseBetween = function(head, m, n) {
      if(n === m) return head;
      let headPoint = head;
      let count = 0;
      let first = new ListNode(0);
      let firstPoint = first;
      let reverse = new ListNode(0);
      let reversePoint = reverse;
      while(headPoint){
        count++;
        const newNode = new ListNode(headPoint.val);
        if(count < m){
          firstPoint.next = newNode;
          firstPoint = firstPoint.next;
        }else if(count >= m && count <= n){
          reversePoint.next = newNode;
          reversePoint = reversePoint.next;
        }else{
          break;
        }
        headPoint = headPoint.next;
      }
      reversePoint = reverse.next;
      const arr = [];
      while(reversePoint){
        arr.push(reversePoint.val);
        reversePoint = reversePoint.next;
      }
      reverse = new ListNode(0);
      reversePoint = reverse;
      arr.reverse().forEach(item => {
        reversePoint.next = new ListNode(item);
        reversePoint = reversePoint.next;
      });
      firstPoint.next = reverse.next;
      reversePoint.next = headPoint;
      return first.next;
    };
    ```
    
  - 测试结果
  ![](result92-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(n)`