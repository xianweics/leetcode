/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) {
        return true;
    }
    if (s.length % 2) {
        return false;
    }

    s = s
        .replace(/\(\)/g, '')
        .replace(/\{\}/g, '')
        .replace(/\[\]/g, '');
    if (!s) {
        return true;
    }

    let middle = Math.floor(s.length / 2);
    while (middle) {
        s = s
            .replace(/\(\)/g, '')
            .replace(/\{\}/g, '')
            .replace(/\[\]/g, '');
        let temp = Math.floor(s.length / 2);
        if (temp < middle) {
            middle = temp;
        } else {
            middle--;
        }
    }
    return s.length === 0;
};
// @lc code=end
