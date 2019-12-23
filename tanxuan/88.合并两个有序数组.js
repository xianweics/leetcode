/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (m == 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }
  if (nums2[n - 1] > nums1[m - 1]) {
    nums1[m + n - 1] = nums2[n - 1];
    merge(nums1, m, nums2, n - 1);
  } else {
    nums1[m + n - 1] = nums1[m - 1];
    merge(nums1, m - 1, nums2, n);
  }
};
// @lc code=end
