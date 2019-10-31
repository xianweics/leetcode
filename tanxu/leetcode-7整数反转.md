# 题目

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

# 思路
初始值

x = 12345
result = 0

计算

result = result + x%10 

x = (x - x%10)/10  

当x = 0 时停止，每次输出result为

5

54

543

5432

54321

关键点在于计算result之前需要判断计算后是否会溢出，即小于最小值，大于最大值

```
if (result > (maxVal - number)/10 || result < (minVal - number)/10) {
    return 0
}
```

# 代码

```
var reverse = function (x) {
    let maxVal = Math.pow(2, 31) - 1
    let minVal = -Math.pow(2, 31)
    let result = 0
    while (x != 0) {
        let number = x % 10
        x = (x - number) / 10
        if (result > (maxVal - number)/10 || result < (minVal - number)/10) {
            return 0
        }
        result = result * 10 + number
    }
    return result
};

console.log(reverse(-12345))
```



