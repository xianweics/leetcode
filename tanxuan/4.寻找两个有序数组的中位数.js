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
    let arr = nums1.concat(nums2).sort((a, b) => a - b)
    let len = arr.length
    let isEven = len % 2 === 0
    if (isEven) {
        return (arr[Math.floor(len / 2) - 1] + arr[Math.floor(len / 2)]) / 2
    } else {
        return arr[Math.floor(len / 2)]
    }
};
// @lc code=end

