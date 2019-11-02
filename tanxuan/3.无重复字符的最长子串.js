/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let index = 0, // 当前字符串长度
    max = 0, // 最大长度
    str = ''; // 当前字符串
  for (let c of s) {
    // 没有重复的字符串长度
    if (!str.includes(c)) {
      str += c;
      index++;
      max = max > index ? max : index;
      console.log('if: ', str, index, max);
    } else {
      // 当有重复的字符串时,从第一个重复字符后开始截取
      str += c;
      // 这里不能直接使用  slice(1) 或者 lastIndexOf 重复字符可能是第一位, 也可能是最后一位
      str = str.slice(str.indexOf(c) + 1);
      // 不能直接赋值给 max, 这是当前字符串的长度, 并不一定是最长的字符串
      index = str.length;
      console.log('else: ', str, index, max);
    }
  }
  return max;
};
// @lc code=end
