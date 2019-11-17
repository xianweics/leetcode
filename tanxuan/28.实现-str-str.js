/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle);
    new RegExp('(.*?)' + needle).test(haystack);
    if (haystack.startsWith(needle)) {
        return 0;
    }
    return RegExp.$1.length > 0 ? RegExp.$1.length : -1 ;
};
// @lc code=end

