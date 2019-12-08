## 搜索插入位置

> 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。<br/>
> 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。 <br/>
> 你可以假设数组中无重复元素。

示例1:
```text
输入: [1,3,5,6], 5
输出: 2
```

示例2:
```text
输入: [1,3,5,6], 2
输出: 1
```

示例3:
```text
输入: [1,3,5,6], 7
输出: 4
```

示例4:
```text
输入: [1,3,5,6], 0
输出: 0
```

- 解法
  - 解题思路: 暴力查找
    
  - 代码
    ```javascript
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    const searchInsert = function(nums, target) {
      if(nums.length === 0) return 0;
      for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
          return i;
        }
      }
      return nums.length;
    };
    ```
    
  - 测试结果
  ![](result35-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n)`
    - 空间复杂度: `O(1)`
    
- 总结
  > 简单的查找而已。二分法目前不熟悉，所以时间复杂度过高。