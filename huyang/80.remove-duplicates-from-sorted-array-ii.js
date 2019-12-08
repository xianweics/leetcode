/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 删除排序数组中的重复项II
// 如果长度小于3，直接返回
// 第2个和第0个比较，第3个和第1个比较，依次类推
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    let j = 2;
    for(let i=2; i<nums.length; i++){
        if(nums[i] != nums[j - 2])  nums[j++] = nums[i];
    }
    return j;
};
// @lc code=end

