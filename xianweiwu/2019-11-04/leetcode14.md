## 最长公共前缀

> 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。

示例1:
```text
输入: ["flower","flow","flight"]
输出: "fl"
```

示例2:
```text
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

- 解法1
  - 解题思路: 暴力查找
    
  - 代码
    ```javascript
    /**
     * @param {string[]} strs
     * @return {string}
     */
    const longestCommonPrefix = function(strs) {
      let first = strs[0] || '';
      let l = strs.length;
      let result = '';
     
      for(let j = 0; j < first.length; j++){
        let temp = first[j];
        let i = 0;
        for(i = 0; i < l; i++){
          if(strs[i][j] !== temp){
            break;
          }
        }
        if(i >= l){
          result += temp;
        }else{
          break;
        }
      }
      return result;
    };
    ```
    
    
  - 测试结果
  ![](result14-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n^2)`
    - 空间复杂度: `O(1)`