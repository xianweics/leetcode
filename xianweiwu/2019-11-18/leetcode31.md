## 下一个排列

> 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。<br/>
> 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。   <br/>
> 必须原地修改，只允许使用额外常数空间。

示例:
```text
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
```

- 解法
  - 解题思路:
    1. 从后往前，对比前一个数与后一个数，查找到需要替换最大位的下标
    2. 如果找不到，翻转数组
    3. 如果找到，取之前的数，该数接近最大位并且大于最大位，然后把剩下的数据，按照降序排序。
    
  - 代码
    ```javascript
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    const nextPermutation = function(nums) {
      if(nums.length <= 1) return nums;
    
      let i;
      for(i = nums.length - 1; i > 0; i--){
        if(nums[i] > nums[i - 1]){
          break;
        }
      }
    
      if(i === 0) return nums.reverse();
    
      let minIndex = i;
      let changeIndex = i - 1;
      for(i = i + 1; i < nums.length; i++){
        if(nums[minIndex] > nums[i] && nums[changeIndex] < nums[i]){
          minIndex = i;
        }
      }
      let temp = nums[minIndex];
      nums[minIndex] = nums[changeIndex];
      nums[changeIndex] = temp;
      let  head = nums.splice(0, changeIndex + 1);
      nums.sort((a, b) => a - b);
      return nums.unshift(...head);
    };
    ```
    
  - 测试结果
  ![](result31-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`
    
- 总结
  > 一些细节蛮繁琐的。特别是替换最大位的数，需要考虑所替换的数据大于当前的最大位并且接近最大位的。