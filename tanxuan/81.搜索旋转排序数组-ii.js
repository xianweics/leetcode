/*
 * @Author: Tan Xuan
 * @Date: 2020-02-21 10:48:16
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-02-21 15:32:03
 * @Description: File content
 */
/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */
/**
 * 
 * 循环, 遍历 -> 没啥好说的
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (!nums.length) return false
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return true
        }
    }
    return false
};
// @lc code=end

