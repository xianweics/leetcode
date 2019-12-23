## 缺失的第一个正数

> 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例1:
```text
输入: [1,2,0]
输出: 3
```

示例2:
```text
输入: [3,4,-1,1]
输出: 2
```

示例3:
```text
输入: [7,8,9,11,12]
输出: 1
```

- 解法
  - 解题思路:
    1. 过滤值大于0，并且将数据排序
    2. 分为2种情况处理
      1. 数组长度为0或者数组第一个数值大于1：返回1
      2. 遍历数组，查找下一个元素大于当前元素加1，返回当前元素加1
    3. 返回数组中最后一个数组加1
    
  - 代码
    ```javascript
    /**
     * @param {number[]} nums
     * @return {number}
     */
    const firstMissingPositive = function(nums) {
      nums = nums.filter(item => item > 0).sort((a, b) => a - b);
      if(nums.length === 0 || nums[0] > 1) return 1;    
      let i, lastIndex = nums.length - 1;
      for(i = 0; i < lastIndex; i++){
        const possible = nums[i] + 1;
        if(possible < nums[i + 1]){
          return possible;
        }
      }
      return nums[lastIndex] + 1;
    };
    ```
    
  - 测试结果
  ![](result41-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`