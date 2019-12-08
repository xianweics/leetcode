## 报数

> 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：<br/>

```text
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

> 1 被读作  "one 1"  ("一个一") , 即 11。<br/>
> 11 被读作 "two 1s" ("两个一"）, 即 21。<br/>
> 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。<br/>
> 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。 <br/>
> 注意：整数顺序将表示为一个字符串。

示例1:
```text
输入: 1
输出: "1"
```

示例2:
```text
输入: 4
输出: "1211"
```

- 解法
  - 解题思路: 
    1. 使用数组去记录上一次的报数内容
    2. 记录方式：取上一个记录的值，通过双指针记录下一个值
    
  - 代码
    ```javascript
    /**
     * @param {number} n
     * @return {string}
     */
    const countAndSay = function(n) {
      const arr = ['0', '1'];
      for(let i = 2; i <= n; i++){
        const pre = arr[i - 1];
        let j = 0;
        let str = '';
        while(j < pre.length){
          let num = 1;
          let k = j + 1;
          let item = pre[j];
          while(k < pre.length){
            if(pre[j] === pre[k]){
              num++;
              k++;
            }else{
              break;
            }
          }
          j = k;
          str += num + item;
        }
        arr[i] = str;
      }  
      return arr[n];
    };
    ```
    
  - 测试结果
  ![](result38-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n^2)`
    - 空间复杂度: `O(n)`