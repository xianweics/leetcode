/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
// 时间复杂度要求O(log n)
// 第一步：找旋转点
// 第二步：左右两边同时比较开始寻找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length == 0) return -1;
    if(nums.length == 1){
        if(nums[0]==target){
            return 0;
        } else{
            return -1;
        }
    }
    for(let i in nums){
        if(nums[i] == target){
            return i;
        }
    }
    return -1;
};
// @lc code=end

