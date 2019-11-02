/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
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
  };
  // 获取键 和 值 数组
  let keys = Object.keys(obj).reverse();
  let values = Object.values(obj).reverse();
  let i = 0,
    res = '';
  // 遍历键
  while (i < keys.length) {
    // 当前的除数
    let ss = Math.floor(num / values[i]);
    // 余数
    num = num % values[i];
    // 拼接字符串
    res += keys[i].repeat(ss);
    // 如果减完了则提前退出
    if (!num) {
      return res;
    }
    i++;
  }
  return res;
};
// @lc code=end
