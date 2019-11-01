/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// note: 递归
var didi = function(arr){
	let res = [];
	if(arr.length > 1){
		for(let i in arr[0]){
			for(let j in arr[1]){
				res.push(arr[0][i]+arr[1][j]);
			}
		}
		arr.splice(0,2,res);
		didi(arr);
	} else{
		return arr;
	}
}
var letterCombinations = function(digits) {
	if(!digits) return [];
	let arr = [["a","b","c"],["d","e","f"],
	["g","h","i"],["j","k","l"],
	["m","n","o"],["p","q","r","s"],
	["t","u","v"],["w","x","y","z"]]
	let brr = digits.split("");
	let res = [];
	if(brr.length == 1){
		return arr[brr[0]-2];
	} else{
		for(let i in brr){
			res.push(arr[brr[i]-2]);
		}
		didi(res);
	}
	return res[0];
};
// @lc code=end

