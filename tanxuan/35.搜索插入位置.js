/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length;
    for(let i = len - 1; i >= 0;) {
        if (nums[i] < target) {
            return i + 1;
        } 
        i --;
    }
    return 0;
};
// @lc code=end

