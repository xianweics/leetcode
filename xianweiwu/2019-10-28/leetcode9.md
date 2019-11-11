## 回文数

> 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
示例1:
```text
输入: 121
输出: true
```

示例2:
```text
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

示例3:
```text
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

- 解法1
  - 解题思路：
    1. 将整数转换成字符串，再转换成数组
    2. 反转数组，再转成字符串
    3. 之前字符串跟反转后的字符串进行对比
    
  - 代码
    ```javascript
    /**
     * @param {number} x
     * @return {boolean}
     */
    var isPalindrome = function(x) {
      const str = x.toString();
      return str.split('').reverse().join('') === str;
    };
    ```
  - 测试结果
  ![](result9-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`
    
- 解法2
  - 解题思路：
    1. 将整数转换成字符串
    2. 前后对比该字符串是否相同，遇到不同直接返回结果
    3. 直到每个字符都比较过
    
  - 代码
    ```javascript
    /**
     * @param {number} x
     * @return {boolean}
     */
    const isPalindrome = function(x) {
      const str = x.toString();
      const l = str.length;
      for(let i = 0; i < l / 2; i++){
        if(str[i] !== str[l-i-1]){
          return false;
        }
      }
      return true;
    };
    ```
  - 测试结果
  ![](result9-2.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`
    
- 总结
  > 2种解法其实时间复杂度都差不多，解法1依赖于数组内置的工具方法，计算操作多些。