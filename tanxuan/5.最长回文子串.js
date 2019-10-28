/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  /* let len = s.length - 1,
    arr = [],
    target = '',
    curr = ''
  if (len === 0) {
    return s
  }
  if ([...new Set(s)].length === 1) {
    return s
  }
  for (let i = 0; i <= len; i++) {
    arr[i] = []
    for (let j = 0; j <= len; j++) {
      arr[i][j] = i === j ? true : false
    }
  }
  for (let i = len; i >= 0; i--) {
    for (let j = len - 1; j >= 0; j--) {
      if (i - 1 < 0) {
        continue
      }
      if (s[i - 1] === s[j + 1]) {
        arr[i - 1][j + 1] = arr[i][i]
        // curr = j - i + 2
        // if (curr > target.length) {
        //   target = s.slice(Math.min(i,j), Math.max(i,j)+1)
        // }
      } else {
        arr[i - 1][j + 1] = false
      }
    }
    let start = 0, end = 0
    start = arr[i].indexOf(true), end = arr[i].lastIndexOf(true)
    curr = s.slice(start, end+1)
    target = target.length >= curr.length ? target : curr
  }
  console.log(arr, target)
  return target */

  let len = s.length, target = '', arr = []

  if (s.length === 1 || [...new Set(s)].length === 1) {
    return s
  }

  for(let i = 0; i < len; i ++) {
    arr[i] = []
    for(let j = 0; j < len; j ++) {
      let curr = s.slice(i, j + 1)
      let str = curr.split('').reverse().join('')
      if (curr == str) {
        target = target.length >= curr.length ? target : curr
      }
    }
  }
  return target
}

// @lc code=end
