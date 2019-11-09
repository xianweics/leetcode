/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 * 1. 半周期为 numRows - 1, 完整周期为 (numRows-1) * 2
 * 2. 
 */
var convert = function(s, numRows) {
  let res = '',
    temp = [];
  if (numRows === 1) {
    return s;
  }
  let round = numRows - 1;
  for (let i = 0; i < s.length; i++) {
    let ans = Math.floor(i / round); // 当前半周期
    let cur = i % round; // 当前行标
    // console.log(i, ', ans :', !!(ans % 2), ', cur :', cur);
    if (ans % 2) {
      let index = numRows - cur - 1; // 计算当前行标
      temp[index] = temp[index] ? temp[index] + s[i] : s[i];
    } else {
      // 如果为0则是一个完整周期, 是第一行
      temp[cur] = temp[cur] ? temp[cur] + s[i] : s[i];
    }
    // console.log(temp);
  }
  for (let i = 0; i < temp.length; i++) {
    res += temp[i];
  }
  return res;
};
// @lc code=end
