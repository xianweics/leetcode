/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!haystack && needle) return -1;
    if(!haystack && !needle) return 0;
    if(haystack && !needle) return 0;
	let arr = haystack.split(needle);
	if(arr[0].length == haystack.length){
		return -1;
	} else{
		return arr[0].length;
	}
};
// @lc code=end

