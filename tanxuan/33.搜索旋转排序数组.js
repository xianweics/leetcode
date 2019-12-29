/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length
    for(let i = 0; i < len; i ++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1
};
// @lc code=end

