/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var newArr = function(tmp,arr){
	let res = [];
	function inner(tmp){
		for(let i in arr){
			if(tmp.length == arr.length-1){
				if(tmp.indexOf(arr[i])<0){
					res.push(tmp.concat(arr[i]).join(""));
				}
				continue;
			}
			if(tmp.indexOf(arr[i]) < 0){
				inner(tmp.concat(arr[i]));
			}
		}
	}
	inner(tmp);
	return res;
};
var findSubstring = function(s, words) {
	if(!s || words.length==0) return []; 
	let arr = newArr([],words);
	let res = [];
	let tmp = [];
	for(let i in arr){
		tmp = s.split(arr[i]);
		if(tmp[0].length < s.length){
			res.push(tmp[0].length);
		}
	}
	return res;
};
// @lc code=end

