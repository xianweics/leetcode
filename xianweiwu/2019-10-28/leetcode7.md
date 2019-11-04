## 整数反转

> 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。<br/>
>假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

示例1:
```text
输入: 123
输出: 321
```

示例2:
```text
输入: -123
输出: -321
```

示例3:
```text
输入: 120
输出: 12
```

- 解法1
  - 解题思路：
    1. 将整数转正整数，再转字符串，再转数组
    2. 通过数组的`reverse`方法将数组翻转
    3. 将正整数加上符号，并去除整数前的O
    4. 得到的结果判断是否符合取值范围，对于不符合的返回0
    
  - 代码
    ```javascript
    /**
     * @param {number} x
     * @return {number}
     */
    var reverse = function(x) {
      const max = Math.pow(2, 31);
      let number = Number(Math.abs(x).toString().split('').reverse().join('').replace(/0*/,''));
      let result = x > 0 ? number : -number;
      if(result > max - 1 || result < -max || result === 0){
        return 0;
      }else{
        return result;
      }
    };
    ```
  - 测试结果
  ![](result7-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`

- 解法2
  - 解题思路：
    1. 先去除末尾的0
    2. 自己实现数组的`reverse`功能
    3. 将正整数加上符号，并去除整数前的O
    4. 得到的结果判断是否符合取值范围，对于不符合的返回0
    
  - 代码
    ```javascript
    /**
     * @param {number} x
     * @return {number}
     */
    var reverse = function(x) {
      if(x === 0) return 0;
      while(x % 10 === 0){
        x /= 10;
      }
      const max = Math.pow(2, 31);
      let great0 = Math.abs(x);
      let temp = '';
      let arr = great0.toString().split('');
      const l = arr.length;
      for(let i = 0; i < Math.floor(l / 2); i++){
        temp = arr[i];
        arr[i] = arr[l-i-1];
        arr[l-i-1] = temp;
      }
      great0 = Number(arr.join(''));
      x = x > 0 ? great0 : -great0;
      if(x > max - 1 || x < -max){
        return 0;
      }else{
        return x;
      }
    };
    ```
    
   - 测试结果
    ![](result7-2.jpg)
    
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`

- 总结
  > 解法1跟解法2本质没区别。只是解法2多实现数组`reverse`功能，而且实现的还不如内置的好