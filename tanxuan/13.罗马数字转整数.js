/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const obj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }
  let keys = Object.keys(obj).reverse()
  let i = 0,
    res = 0
  // 当字符串还有长度时
  while (s) {
    // 找到最开始的键值
    if (s.startsWith(keys[i])) {
      // arr[i] = arr[i] ? arr[i] + 1 : 1
      // 结果累加 键值对应的 值
      res += obj[keys[i]]
      // 截取后面的字符串
      s = s.slice(keys[i].length)
    } else {
      // arr[i] = 0
      // 如果没有 则将键数组后移
      i ++
    }
  }
  // console.log(arr)
  return res
};
// @lc code=end

