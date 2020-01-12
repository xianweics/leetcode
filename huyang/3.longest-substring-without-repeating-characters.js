/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 无重复字符的最长子串
// 依次把字符串元素塞入新字符串
// 如果新字符串中没有该元素则塞入
// 否则，删除该元素及其出现位置前面的元素再塞入
// 返回新字符串的最大长度
var lengthOfLongestSubstring = function(s) {
    let tmp = '';
    let max = 0;
    for(let i=0; i<s.length; i++){
        if(tmp.indexOf(s.charAt(i)) < 0){
            tmp += s.charAt(i);
            max = tmp.length > max ? tmp.length : max; 
        } else{
            tmp = tmp.substr(tmp.indexOf(s.charAt(i))+1);
            tmp += s.charAt(i);
        }
    }
    return max;
};
// @lc code=end

