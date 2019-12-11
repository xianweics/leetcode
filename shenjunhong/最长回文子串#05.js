/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_bf = function(s) {

}



















































// var longestPalindrome_bf = function(s) {
//   if (!s) return '';
//   var longest = s[0];
//   var expandAroundCenter = function (left, right) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       left--;
//       right++;
//     }
//     return s.slice(left + 1, right);
//   }
//   for (var i = 0; i < s.length; i++) {
//     // 奇数
//     var odd = expandAroundCenter(i, i);
//     if (odd.length > longest.length) longest = odd;
//     // 偶数
//     var even = expandAroundCenter(i, i + 1);
//     if (longest.length < even.length) longest = even;
//   }
//   return longest;
// }
