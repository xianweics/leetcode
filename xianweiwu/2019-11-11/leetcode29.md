## 两数相除
> 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。<br/>
> 返回被除数 dividend 除以除数 divisor 得到的商。

示例1:
```text
输入: dividend = 10, divisor = 3
输出: 3
```

示例2:
```text
输入: dividend = 7, divisor = -3
输出: -2
```

- 解法
  - 解题思路: 
    1. 先将除数和被除数转成正数处理
    2. 通过对数去减少除数，并累加被除的次数
    3. 判断结果是否超出取值范围
    3. 通过除数以及被除数判断是否添加符号
    
  - 代码
    ```javascript
    /**
     * @param {number} dividend
     * @param {number} divisor
     * @return {number}
     */
    const divide = function(dividend, divisor) {
      const limit = Math.pow(2, 31);
      const getLimit = function(isMinus, count, limit){
        count = isMinus ? -count : count;
        if(count > limit - 1){
          return limit - 1;
        }else if(count < -limit){
          return -limit;
        }
        return count;
      };
      const isMinus = dividend * divisor < 0;
      let plusDividend = Math.abs(dividend);
      let plusDivisor = Math.abs(divisor);
      let count = 0;
      let powCount = 1;
    
      if(plusDividend < plusDivisor) return 0;
      if(plusDivisor === 1) return getLimit(isMinus, plusDividend, limit);
      
      while(plusDividend >= plusDivisor){
        powCount = 1;
        while(Math.pow(plusDivisor, powCount) < plusDividend){
          powCount++;
        }
        if(powCount >= 2){
           let temp = Math.pow(plusDivisor, powCount - 1);
           plusDividend -= temp;
           count += temp/plusDivisor;
        }else{
           count++;
           plusDividend -= plusDivisor;
        }
      }
      return getLimit(isMinus, count, limit);
    };
    ```
    
  - 测试结果
  ![](result29-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(nlogn)`
    - 空间复杂度: `O(1)`
    
- 总结
  > 通过正则简单处理，但是不了解正则内部的实现。这部分还需要多研究研究。