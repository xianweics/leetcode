/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let index,
    len = nums.length,
    temp,
    tempIndex
  for (index = 0; index < len; index++) {
    temp = target - nums[index]
    tempIndex = nums.lastIndexOf(temp)
    if (tempIndex > -1 && tempIndex !== index) {
      return [index, tempIndex]
    }
  }
}

/**
 * 思路:

先遍历每项, 然后用目标值减去当前值,然后在数组中查找这个补值

我的误区:

判断当前值是否会大于等于目标值,在潜意识中往往会出现 '和' 会大于 加数,但是有可能出现 0 和 负数
顺序遍历 补值 然后跳过相同 加数(这种情况应该大多数会在双层循环中出现),但是如果看清楚条件,
只有 一种输出,那么可以直接通过 lastIndexOf 来从末尾往前找这个 补值
 */
// @lc code=end
