// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
//
// 示例 1:
//
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
//
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
//
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 时间复杂度O(n²)
// var lengthOfLongestSubstring = function(s) {
//   var ary = []
//   var maxLen = 0
//   var index1 = 0
//   var index2 = -1
//   for (var i = 0; i < s.length; i++) {
//     index1 = i
//     ary.push(s[i])
//     if (ary.length === 1) {
//       maxLen = 1
//       continue
//     }
//     for (var j = index2; j < ary.length - 1; j++) {
//       if (ary[j] == s[i]) {
//         index2 = j
//       }
//     }
//     if (index1 - index2 > maxLen -1) {
//       maxLen = index1- index2
//     }
//   }
//   return maxLen
// };
//
// console.log(lengthOfLongestSubstring('auca'))

// map保存以遍历的字符 时间复杂度O(n)
var lengthOfLongestSubstring = function(s) {
  var map = new Map()
  // 最大长度
  var maxLen = 0
  // 结尾下标
  var indexEnd = -1
  // 开始下标
  var indexStart = 0
  // 是否有重复字符
  var isRepeat = false
  for (var i = 0; i < s.length; i++) {
    indexStart = i
    if (i === 0) {
      map.set(s[0], 0)
      maxLen = 1
      continue
    }
    if (map.get(s[i]) !== undefined) {
      indexEnd = Math.max(map.get(s[i]), indexEnd)
      isRepeat = true
    }
    maxLen = Math.max(indexStart - indexEnd, maxLen)
    map.set(s[i], i)
  }
  return  isRepeat ? maxLen : s.length
};


console.log(lengthOfLongestSubstring("ascddddd"))
