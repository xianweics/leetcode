/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return ['']
  }
    let obj = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
    }
    let res = [], temp = 0
    /* let len = digits.length
    if (digits.includes('7') && digits.includes('9')) {
      res.length = 3 ** (len - 2) * 4 * 4
    } else if (digits.includes('7') || digits.includes('9')) {
      res.length = 3 ** (len - 1) * 4
    } else {
      res.length = 3 ** len
    } */
    for(let i of digits) {
      let cArr = obj[i]
      for(let j in cArr) {
        res.push(cArr[j])
      }
    }
    console.log(res)
};
// @lc code=end

