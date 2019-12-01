/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_bf = function(s) {
  if (!s) return '';
  var longest = s[0], str, i, j, len;
  var isPalindrom = function (left, right) {
    while (left < right && s[left] === s[right]) {
      left++;
      right--;
    }
    return left >= right;
  }
  for (len = 2; len <= s.length; len++) {
    for (i = 0; i < s.length; i++) {
      j = i + len - 1;
      if (isPalindrom(i, j)) {
        str = s.slice(i, j + 1);
        if (longest.length < str.length) longest = str;
      }
    }
  }
  return longest;
}
