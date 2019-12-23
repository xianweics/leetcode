/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let len = s.length, i = (len / 2) >> 0
    while (i >= 0) {
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
        // console.log(s[i], s[len - i - 1])
        i--;
    }
    return true;
};
// @lc code=end
