/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 只出现一次的数字
// 异或
var singleNumber = function(nums) {
    let res = nums[0];
    for(let i=1; i<nums.length ; i++){
        res ^=nums[i];
    }
    return res;
};
// @lc code=end

