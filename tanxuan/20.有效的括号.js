/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let left = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  let right = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  let len = s.length,
    middle = Math.floor(len / 2) - 1,
    index = 0;
  while (index <= middle) {
    console.log(s[middle - index], s[middle + index + 1]);
    if (s[middle - index] !== obj[s[middle + index + 1]]) {
      return false;
    }
    index++;
  }
  return true;
};
// @lc code=end
