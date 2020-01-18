## 验证回文串

> 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。<br/>
> 说明：本题中，我们将空字符串定义为有效的回文串。

示例1: 
```text
输入: "A man, a plan, a canal: Panama"
输出: true
```

示例2: 
```text
输入: "race a car"
输出: false
```

- 解法
  - 解题思路: 
    1. 去除掉除字母数字外其他的字符
    2. 对比旋转过的字符与原字符
    
  - 代码
    ```javascript
    /**
     * @param {string} s
     * @return {boolean}
     */
    const isPalindrome = function(s) {
      const filterStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
      return filterStr === filterStr.split('').reverse().join('');
    };
    ```
    
  - 测试结果
  ![](result125-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(n)`