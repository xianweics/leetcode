## 合并两个有序链表

> 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例:
```text
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

- 解法1
  - 解题思路:
    1. 创建一个新链表
    2. 比较`l1` `l2`的大小，将新链表的`next`指向小的数值链表，并移动`l1` `l2`的指针
    3. 将没有遍历完的`l1`或者`l2`，追加到新链表的`next`中
    
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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    const mergeTwoLists = function(l1, l2) {
      const result = new ListNode(0);
      let cur = result;
      let curl1 = l1;
      let curl2 = l2;
      let temp = null;
      while(curl1 && curl2){
        if(curl1.val >= curl2.val){
          temp = curl2;
          curl2 = curl2.next;
        }else{
          temp = curl1;
          curl1 = curl1.next;
        }
        cur.next = temp;
        cur = cur.next;
      }
      cur.next = curl1 ? curl1 : curl2;
      return result.next;
    };
    ```
    
  - 测试结果
  ![](result22-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(Max(n, m))`
    - 空间复杂度: `O(n)`