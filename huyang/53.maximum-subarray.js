/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 最大子序和
var maxSubArray = function(nums) {
    let sum = 0;
	let res = nums[0];
	for(let i in nums){
		if(sum>=0){
			sum += nums[i];
		} else{
			sum = nums[i];
		}
		res = res>sum ? res : sum;
	}  
	return res;
};
// @lc code=end

