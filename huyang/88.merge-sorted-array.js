/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 合并两个有序数组
// 先合并数组
// 原nums1的元素依次和nums2的元素进行比较
// 如果前者较大，则继续和nums2的下一个元素比较
// 否则，交换这俩元素
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);   // 合并数组
    let i = 0;
    let j = m;
    while(i<m){
        j = m;
        while(nums1[i] > nums1[j] && j<m+n){
            j++;
        }
        if(nums1[i] > nums1[j-1]){
            let tmp = nums1[i];
            nums1[i] = nums1[j-1];
            nums1[j-1] = tmp;
        } else{
            i++;
        }
    }
};
// @lc code=end

