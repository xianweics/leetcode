## 罗马数字转整数

> 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。<br/>
```text
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
> 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。<br/>
> 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。 <br/>
> 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。<br/>
> 这个特殊的规则只适用于以下六种情况：<br/>

```text
  I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
  C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
  给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
```

示例1:
```text
输入: "III"
输出: 3
```

示例2:
```text
输入: "IV"
输出: 4
```

示例3:
```text
输入: "IX"
输出: 9
```

示例4:
```text
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

示例5:
```text
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

- 解法
  - 解题思路: 
    1. 设计一张映射表。遍历每个元素并根据映射表进行统计。
    
  - 代码
    ```javascript
    /**
     * @param {string} s
     * @return {number}
     */
    const romanToInt = function(s) {
      let result = 0;
      let index = 0;
      const common = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
      };
    
      while(index < s.length - 1){
        const commonValue = common[s[index] + s[index + 1]];
        if(commonValue){
          result += commonValue;
          index += 2;
        }else{
          result += common[s[index]];
          index++;
        }
      }
      if(index === s.length - 1){
        return result + common[s[index]]
      }
      return result;
    };
    ```
    
  - 测试结果
  ![](result13-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`