/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 第k个排列
// 先生成排列组合
// 超时
var newArr = function(tmp,arr,k){
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
			if(res.length == k){
				return res;
			}
		}
	}
	inner(tmp);
	return res;
};
var getPermutation = function(n, k) {
    let res = newArr([], Array.from({length: n},(item, index)=> index+1), k);
    return res.pop();
};
// @lc code=end

