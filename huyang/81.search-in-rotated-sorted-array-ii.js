/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// 搜索旋转排序数组II
var search = function(nums, target) {
    if(nums.length == 1)	return nums[0] == target;
	let s = nums.length % 2 == 1 ? (nums.length + 1)/2 : nums.length/2;
	for(let i=0,j=nums.length-1; i<s; i++, j--){
		if(nums[i] == target || nums[j] == target)	return true;
	}
    return false;
};
// @lc code=end

