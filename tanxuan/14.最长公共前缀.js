/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let str = '',
    index = 1,
    start = strs[0];
  while (index <= start.length) {
    str = start.slice(0, index);
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i].length) {
        return '';
      }
      if (strs[i].startsWith(str)) {
        continue;
      } else {
        return start.slice(0, index - 1);
      }
    }
    index++;
  }
  return str;
};
/**
 * 1. 先排除输入为空，或者输入只有一个元素的情况，直接返回
 * 2. 初始化 输出字符串,字符串长度,默认字符串
 * 3. 当输出字符串长度大于默认字符串长度时,停止
 * 4.
 *  4.1 从默认字符串中根据长度来截取输出字符串
 *  4.2 如果数组中有空串,直接返回空
 *  4.3 如果当前串是以输出串开始则继续遍历其它项
 *  4.4 如果不是则直接输出上一个串
 * 5. 长度 +1
 */
// @lc code=end
