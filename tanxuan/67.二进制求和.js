/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

/**
  * 计算字符串的长度，保证a为最长，记长度为len，如果a的长度较短，return(b, a) --> 保证第一个字符串长度为最长
  * 初始化result[len+1], 多一位保证进位
  * 两个字符串同时从最后一位遍历，并且相加，这里还要加上result[index+1] 表示的是进位
  * 对和进行求模，如果等于2 那么result[index+1] 置为0， 并且result[index] 置1 （进位）
  */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 < len2) {
    return addBinary(b, a);
  }
  let result = new Array(len1 + 1).fill(0);

  let index = len1 - 1;
  let j = len2 - 1;
  while (index >= 0) {
    let tmp =
      j >= 0
        ? a[index] - 0 + (b[j] - 0) + result[index + 1]
        : a[index] - 0 + result[index + 1];
    result[index + 1] = tmp % 2;
    result[index] += Math.floor(tmp / 2);
    index--;
    j--;
  }

  let str = "";
  for (let i = 0; i < result.length; i++) {
    if (i == 0 && result[i] == 0) continue;
    str += result[i];
  }
  return str;
};
// @lc code=end
