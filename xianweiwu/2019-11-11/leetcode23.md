## 合并K个排序链表

> 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例1:
```text
输入:
[
  1->4->5,
  1->3->4,
  2->6
]

输出: 1->1->2->3->4->4->5->6
```

- 解法
  - 解题思路:
    1. 将链表转数组
    2. 排序数组
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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    const mergeKLists = function(lists) {
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
      let arr = [];
      for(let i = 0; i < lists.length; i++){
        arr = arr.concat(toArr(lists[i]))
      }
      arr.sort((a, b) => a - b);
      return toList(arr);
    };
    ```
    
  - 测试结果
  ![](result23-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n^2)`
    - 空间复杂度: `O(n)`