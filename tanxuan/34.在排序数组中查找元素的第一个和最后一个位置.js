/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */
/**
 * 1. 遍历找到和target相等的索引
 * 2. 如果只有一个,则再推一个
 * 3. 如果没有则返回[-1,-1]
 * 4. 如果有两个及以上,则返回第一个和最后一个的索引
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length, result = []
    for(let i = 0; i < len; i ++) {
        if (nums[i] === target) {
            result.push(i)
        }
    }
    if (result.length === 1) {
        let tmp = result[0]
        result.push(tmp)
        return result
    } else if (!result.length){
        return [-1, -1]
    } else {
        return [result[0], result[result.length - 1]]
    }
};
// @lc code=end

