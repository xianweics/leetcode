/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 先判断是正数还是负数
  let thanZero = x > 0,
    t = 0;
  // 不考虑符号将字符串反转
  t = Array.from(Math.abs(x) + '')
    .reverse()
    .join('');

  // 修正符号位
  t = thanZero ? +t : -t;
  // 判断是否在区间内
  return t < 2 ** 31 - 1 && t > -(2 ** 31 - 1) ? t : 0;
};
// @lc code=end
