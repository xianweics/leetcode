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
  // dp
  /* let len = s.length,
    arr = [],
    start = 0,
    max = 0
  // 1. 先过滤掉特殊长度
  if (len <= 1 || [...new Set(s)].length === 1) {
    return s
  }
  // 2. 初始化并找到是否长度为2的回文串
  for (let i = 0; i < len; i++) {
    arr[i] = new Array(len)
    arr[i].fill(false)
    arr[i][i] = true
    if (i < len - 1 && s[i] === s[i + 1]) {
      arr[i][i + 1] = true
      max = 2
      start = i
    }
  }
  // 3. 从长度3开始遍历整个串
  for (let l = 3; l <= len; l++) {
    // 4. 根据前一个状态判断当前串是否是回文,并更新状态
    for (let i = 0; i + l - 1 < len; i++) {
      let j = i + l - 1
      if (s[i] === s[j] && arr[i + 1][j - 1]) {
        arr[i][j] = true
        start = i
        max = l
      }
    }
  }
  // 5. 如果不存在回文则返回第一个字符
  if (max === 0 && len > 1) {
    return s[0]
  }
  return s.substr(start, max) */

  // 中心扩散
  let len = s.length;
  if (len <= 1 || [...new Set(s)].length === 1) {
    return s;
  }
  let start = 0, // 起始索引
    end = 0, // 结束索引
    max = 0; // 最大长度
  for (let i = 0; i < len; i++) {
    let len1 = calcCenter(s, i, i); // 一个元素为中心
    let len2 = calcCenter(s, i, i + 1); // 两个元素为中心
    max = Math.max(Math.max(len1, len2), max); // 计算当前的最大长度
    // 根据长度计算起止索引
    if (max > end - start + 1) {
      start = i - Math.floor((max - 1) / 2);
      end = i + Math.floor(max / 2);
    }
  }
  return s.substr(start, max);
};

function calcCenter(string, left, right) {
  // 从当前元素为中心 向两边扩散查找,直到找到不同的两个元素
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left--;
    right++;
  }
  // 因为向两边扩散是同时进行的,且不成立才停止所以长度由 r - l + 1 => r - l -1
  return right - left - 1;
}

// @lc code=end
