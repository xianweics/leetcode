## 有效数字

> 验证给定的字符串是否可以解释为十进制数字。<br/>
> 例如: <br/>
```text
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false
```

- 解法
  - 解题思路: 使用number的特性
    
  - 代码
    ```javascript
    /**
     * @param {string} s
     * @return {boolean}
     */
    const isNumber = function(s) {
      s = s.trim();
      if(s === '') return false;
      return !Number.isNaN(Number(s));
    };
    ```
    
  - 测试结果
  ![](result65-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(1)`
    - 空间复杂度: `O(1)`