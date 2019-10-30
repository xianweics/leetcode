/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  let max = 0,
    len = height.length

  /**
   * 暴力
   * 算出所有可能的值，然后保留当前最大值
   * 容器的体积 = （柱子数 - 1） * 两端的较小数
   */

  if (len === 2) {
    return Math.min(height[0], height[1])
  }

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      let curr = Math.min(height[j], height[i]) * (j - i)
      max = curr > max ? curr : max
    }
  }

  return max
}
// @lc code=end
