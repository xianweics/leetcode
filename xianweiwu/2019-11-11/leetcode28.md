## 实现 strStr()

> 实现 strStr() 函数。<br/>
> 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例1:
```text
输入: haystack = "hello", needle = "ll"
输出: 2
```

示例2:
```text
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

- 解法
  - 解题思路: 通过正则匹配
    
  - 代码
    ```javascript
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    const strStr = function(haystack, needle) {
      const match = haystack.match(needle);
      return match ? match.index : -1;
    };
    ```
    
  - 测试结果
  ![](result28-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(nlogn)`
    - 空间复杂度: `O(1)`
    
- 总结
  > 通过正则简单处理，但是不了解正则内部的实现。这部分还需要多研究研究。