// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let hashMap = new Map();
    let ans = 0;
    for (let i = 0, j = 0; i < n; i++) {
      if (hashMap.has(s[i])) {
        j = Math.max(hashMap.get(s[i]), j)
      }
      ans = Math.max(ans, i - j + 1);
      hashMap.set(s[i], i + 1)
    }
    return ans;
  };
  