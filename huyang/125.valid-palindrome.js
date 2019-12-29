/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 验证回文串
// 删除字符串中非字母数字的字符
// 遍历前一半和后一半比较，如果不相同返回false
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    let len = s.length%2 == 1 ? (s.length-1)/2 : s.length/2;
    for(let i=0; i<len; i++){
        if(s.charAt(i).toLocaleLowerCase() != s.charAt(s.length-1-i).toLocaleLowerCase())   return false;
    }
    return true;
};
// @lc code=end

