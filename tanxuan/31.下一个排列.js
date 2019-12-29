/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */
/**
从后到头找到第一个开始变小的位置

将此位置之后（一直到尾）逆序（从小到大排列）

将该位置与逆序后的片段中第一个比它大的元素交换

如果没有找到开始变小的位置，将整个序列逆序。
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length < 2) {
        return nums
    }
    for(let p = nums.length - 2; p >= 0; p --) {
        if(nums[p] < nums[p+1]) {
            reverse(nums, p+1, nums.length-1)
            let tmp = nums[p], i = 1
            for(; p+i < nums.length && nums[p+i] <= nums[p]; i++);
            nums[p] = nums[p+i]
            nums[p+i] = tmp
            return null;
        }
    }
    reverse(nums, 0, nums.length-1)
    return null
};

function reverse(nums, i, j) {
    while(i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i+=1
        j-=1
    }
}

// @lc code=end