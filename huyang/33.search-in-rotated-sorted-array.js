/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
// 搜索旋转排序数组
// 时间复杂度要求O(log n)
// 第一步：找旋转点
// 第二步：左右两边同时比较开始寻找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length == 0)    return -1;
    if(nums.length == 1)    return nums[0]==target ? 0 : -1;
    let s = nums.length % 2 == 1 ? (nums.length + 1)/2 : nums.length/2;
	for(let i=0,j=nums.length-1; i<s; i++, j--){
        if(nums[i] == target)	return i;
        if(nums[j] == target)	return j;
	}
    return -1;
};
// @lc code=end

