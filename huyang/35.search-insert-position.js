/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
// 如果数组为空，即找不到目标值，返回0
// 由于是升序数组，当数组元素大于等于目标值时，返回改元素下标
// 如果数组最大元素值仍然小于目标值，目标值插入数组，返回数组长度
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length == 0) return 0;
    for(let i=0;i<nums.length;i++){
    	if(nums[i] >= target){
    		return i;
    	}
    }
    return nums.length;
};
// @lc code=end

