// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s.length) return '';
    let maxStr = '';
    for (let i = 0; i + (maxStr.length >> 1) < s.length; i ++) {
      if (s[i] === s[i + 1]) {
        const { left, right } = findPldrEdge(i, i + 1, s);
        if (right - left - 1 > maxStr.length) maxStr = s.slice(left + 1, right);
      }
      const { left, right } = findPldrEdge(i, i, s);
      if (right - left - 1 > maxStr.length) maxStr = s.slice(left + 1, right);
    }
    return maxStr;
  };
  
  /**
   * 在字符串s中寻找以left和right为中心的最长回文子串的边缘索引
   * @param {number} left 回文子串中心的初始左值
   * @param {number} right 回文子串中心的初始右值
   * @param {string} s 原始字符串
   * @return {Object}
   */
  function findPldrEdge(left, right, s) {
    while (s[--left] === s[++right] && left >= 0 && right < s.length) {}
    return { left: left + 1, right };
  }
// 思路：

//   将以每个字符为中心的最长回文子串都找出来，其中最长的就是我们需要的结果咯
// 注意点1：回文子串的中心并不仅仅只能是一个字符，在出现连续两个相同的字符时这两个连续字符也可以作为回文子串的中心
// 注意点2：不需要一定遍历完全部字符。例如遍历到第i个字符时，已经检查出来的最长回文子串的长度为l，如果l / 2大于剩下未遍历的字符数s.length - i时，已经可以直接结束遍历了

