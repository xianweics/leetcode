## 最后一个单词的长度

> 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。 <br/>  
> 如果不存在最后一个单词，请返回 0 。 <br/>
> 说明：一个单词是指由字母组成，但不包含任何空格的字符串。 

示例:
```text
输入: "Hello World"
输出: 5
```

- 解法
  - 解题思路: 
    1. 找到最后一个单词的空格为止。
    2. 根据index，剪切单词，并计算剩下的长度
    
  - 代码
    ```javascript
    /**
     * @param {string} s
     * @return {number}
     */
    const lengthOfLastWord = function(s) {
      s = s.trim();
      const emptyIndex = s.lastIndexOf(' ');
      return s.substr(emptyIndex + 1).length;
    };
    ```
    
  - 测试结果
  ![](result58-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`