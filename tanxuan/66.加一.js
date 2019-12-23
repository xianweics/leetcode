/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 通过正则找到最末尾的 9 的个数
 * 然后截取拼接
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let str = digits.toString().replace(/\,/g, "");
  let reg = /[0-8]*([9]*)$/g;
  reg.test(str);
  let nine = RegExp.$1;
  let l = "",
    reuslt = "";
  if (nine.length === str.length) {
    l = "1";
  } else if (nine.length > 0) {
    let index = str.lastIndexOf(nine);
    l = index >= 0 ? str.substring(0, index - 1) : '';
    let m = (str[index - 1] - 0 + 1) + '';
    l += m;
  } else {
    l = str.substring(0, digits.length - 1);
    let m = (str[digits.length - 1] - 0 + 1) + '';
    l += m;
  }
  let r = "0".repeat(nine.length);
  result = l + r;
  return result.split("").map(item => {
    return item - 0;
  });
};
// @lc code=end
