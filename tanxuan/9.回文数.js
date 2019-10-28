/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x + ''
  let len = x.length, i = Math.floor(len / 2)
  if (x < 0) {
    return false
  }
  while(i >= 0) {
    if (x[i] !== x[len - i - 1]) {
      return false
    }
    i --
  }
  return true
};
// @lc code=end

