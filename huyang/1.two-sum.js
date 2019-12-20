/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 两数之和
var twoSum = function(nums, target) {
    for(let i in nums){
        if(nums.indexOf(target - nums[i]) > -1 && nums.indexOf(target - nums[i]) != i){
            return [i, nums.indexOf(target - nums[i])];
        }
    }
};
// @lc code=end

