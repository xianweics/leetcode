/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 最后一个单词的长度
var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    for(let i=arr.length-1;i>=0;i--){
    	if(arr[i].length>0)	return arr[i].length;
    }
    return 0;
};
// @lc code=end

