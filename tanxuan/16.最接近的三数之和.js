/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // 1. 获取长度, 排序, 计算初始值
  let len = nums.length
  nums = nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]
  // 2. 遍历 到 len-2

  for (let i = 0; i < len -2; i++) {
    // 设置 另外两个 索引
    let l = i + 1,
      r = len - 1
      // 遍历
    while (l < r) {
      // 计算当前和
      let sum = nums[i] + nums[l] + nums[r]
      // 比较哪个值更接近
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum
      }
      // 判断当前值与目标值的关系, 并更新索引
      if (sum > target) {
        r--
      } else if(sum < target) {
        l++
      } else {
        return target
      }
    }
  }

  /* for (let i = len - 1; i >= 2; i --) {
    // 设置 另外两个 索引
    let l = 0,
      r = i - 1
      // 遍历
    while (l < r) {
      // 计算当前和
      let sum = nums[i] + nums[l] + nums[r]
      // 比较哪个值更接近
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum
      }
      // 判断当前值与目标值的关系, 并更新索引
      if (sum > target) {
        r--
      } else if(sum < target) {
        l++
      } else {
        return target
      }
    }
  } */

  return res
}
// @lc code=end
