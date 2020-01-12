/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 最长回文字符串
// 中心扩展算法
var expandAroundCenter = function(s, l, r){
    let L = l, R = r;
    while(L > -1 && R<s.length && s.charAt(L) == s.charAt(R)){
        L--;
        R++;
    }
    return R-L-1;
}
var longestPalindrome = function(s) {
    if(!s || s.length < 1)  return "";
    let start = 0, end = 0;
    for(let i=0; i<s.length; i++){
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i+1);
        let len = len1 > len2 ? len1 : len2;
        if(len > end - start){
            start = i - parseInt((len - 1)/2);
            end = i + parseInt(len/2);
        }
    }
    return s.substr(start, end + 1);
};
// @lc code=end

