/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 二进制求和
// 用数组来实现小学的竖式
var addBinary = function(a, b) {
    let tmp = new Array(Math.abs(a.length - b.length)+1).fill(0);
	let arr = a.split('');
	let brr = b.split('');
	if(a.length<b.length){
	    arr = [...tmp, ...arr];
	    brr.unshift(0);
	} else{
		brr = [...tmp, ...brr];
		arr.unshift(0);
	}
	let res = new Array(arr.length).fill(0);
	let p = 0;	// 进位
	for(let i=arr.length-1;i>=0;i--){
		if(parseInt(arr[i])+parseInt(brr[i])+p > 1){
			res[i] = parseInt(arr[i])+parseInt(brr[i])+p-2;
			p=1;
		} else{
			res[i] = parseInt(arr[i])+parseInt(brr[i])+p;
			p = 0;
		}
	}
	if(res[0] == 0) res.shift();
	return res.join('');
};
// @lc code=end

