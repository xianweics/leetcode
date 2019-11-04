/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 1. 合并并排序
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  // 2. 获取合并后的长度
  let len = arr.length;
  // 3. 判断当前字符串是奇数个还是偶数个
  let isEven = len % 2 === 0;
  // 4. 根据奇偶分别计算
  if (isEven) {
    return (arr[Math.floor(len / 2) - 1] + arr[Math.floor(len / 2)]) / 2;
  } else {
    return arr[Math.floor(len / 2)];
  }
};
// @lc code=end
