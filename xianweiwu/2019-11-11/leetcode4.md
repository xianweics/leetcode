## 寻找两个有序数组的中位数

> 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。 <br/>
> 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。<br/>
> 你可以假设 nums1 和 nums2 不会同时为空。

示例1:
```text
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```

示例2:
```text
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

- 解法
  - 解题思路:
    1. 将每个2个数组从小到大添加到新数组中
    2. 取排序好数组的中位数：分为偶数，奇数长度的数组取不同的中位数
    
  - 代码
    ```javascript
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    const findMedianSortedArrays = function(nums1, nums2) {
        let newArr = [];
        let item1 = 0;
        let item2 = 0;
        while(nums1.length > 0 && nums2.length > 0){
          item1 = nums1[0];
          item2 = nums2[0];
          if(item1 > item2){
            newArr.push(item2);
            nums2.shift();
          }else{
            newArr.push(item1);
            nums1.shift();
          }
        }
        newArr = newArr.concat(nums1, nums2);
        if(newArr.length === 0) return 0;
        if(newArr.length === 1) return newArr[0];
    
        let mid = Math.floor(newArr.length / 2);
        if(newArr.length % 2 === 0){
          return ((newArr[mid - 1] + newArr[mid]) / 2).toString().toFixed(1);
        }else{
          return newArr[mid];
        }
    };
    ```
    
  - 测试结果
  ![](result4-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(m+n)`
    - 空间复杂度: `O(m+n)`
    
- 总结
  > 时间复杂度还是没达到要求，后续要研究二分法去处理。