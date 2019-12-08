## 两两交换链表中的节点

> 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。<br/>
> 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。 

示例:
```text
给定 1->2->3->4, 
你应该返回 2->1->4->3.
```

- 解法1
  - 解题思路:
    1. 将链表转数组
    2. 交换数组顺序
    3. 将数组转链表
    
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
     * @return {ListNode}
     */
    const swapPairs = function(head) {
      const toArr = function(list){
        const arr = [];
        while(list){
          arr.push(list.val);
          list = list.next;
        }
        return arr;
      };
      const toList = function(arr){
        const list = new ListNode(0);
        let cur = list;
        arr.forEach(item => {
          cur.next = new ListNode(item);
          cur = cur.next;
        });
        return list.next;
      };
      const arr = toArr(head);
      let temp = 0;
      for(let i = 0; i < arr.length - 1; i = i + 2){
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      return toList(arr);
    };
    ```
    
  - 测试结果
  ![](result24-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(n)`