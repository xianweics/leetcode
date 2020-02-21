/*
 * @Author: Tan Xuan
 * @Date: 2020-02-21 10:15:56
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-02-21 10:28:24
 * @Description: File content
 */
/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length - 2;) {
        if (nums[i] === nums[i +1] && nums[i] === nums[i + 2]) {
            nums.splice(i+1, 1)
        } else {
            i += 1
        }
    }
    return nums.length
};
// @lc code=end

