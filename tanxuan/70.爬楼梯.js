/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

 /**
  * 动态规划
  */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let arr = [0, 1];
  let i = 0;
  while(i < n) {
    arr[i % 2] = arr[i % 2] + arr[(i + 1) % 2]
    i ++;
  }
  return arr[(i + 1) % 2]
};
// @lc code=end

