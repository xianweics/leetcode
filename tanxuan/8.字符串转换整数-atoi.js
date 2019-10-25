/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MIN = -(2 ** 31), INT_MAX = 2 ** 31 - 1
    str = str.replace(/^\s*/, '')
    // if (/^[+-]{2,}/.test(str)) {
    //   return 0
    // }
    if (/^[+-]{0,1}[\d]+/.test(str)) {
      if (/^-\d/.test(str)) {
        let t = str.match(/^-\d*/)
        t = t - 0
        return t > INT_MIN ? t : INT_MIN
      } else {
        let t = str.match(/^[+\d][\d]*/)
        t = t - 0
        return t < INT_MAX ? t : INT_MAX
      }
    } else {
      return 0
    }
};
// @lc code=end

