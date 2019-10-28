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
var twoSum = function(nums, target) {
    for(let i in nums){
    	for(let j in nums){
    		if((i !== j) && nums[i] + nums[j] === target)
                var arr = [i,j];
    	}
    }
    return arr;
};
// @lc code=end

