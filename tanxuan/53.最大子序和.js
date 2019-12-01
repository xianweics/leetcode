/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;
    for(let num of nums) {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        res = Math.max(res, sum);
    }
    return res;
};
// @lc code=end

