/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 缺失的第一个正数
// 如果该数组为空，返回1
// 定义一个临时数组arr
// 让数组中的正数作为arr的下标，并赋值
// 如果arr为空，返回1
// 否则，遍历这个arr，arr第一个空元素的下标就是第一个缺失的正数
// 如果arr没有空元素，则arr的长度就是第一个缺失的正数
var firstMissingPositive = function(nums) {
    if(nums.length<1) return 1;
    let arr = [];
    for(let i in nums){
    	if(nums[i] > 0) arr[nums[i]] = nums[i];
    }
    if(arr.length<1) return 1;
    for(let j=1;j<arr.length-1;j++){
    	if(arr[j]== null) return j;
    }
	return arr.length;
};
// @lc code=end

