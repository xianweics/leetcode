/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 加一
// 用数组来实现小学的竖式
var plusOne = function(digits) {
    let add = new Array(digits.length).fill(0);
	add.push(1);
	digits.unshift(0);
	let p = 0;	// 进位
	for(let i=digits.length-1;i>=0;i--){
		if(digits[i]+add[i]+p > 9){
			digits[i] = digits[i]+add[i]+p-10;
			p=1;
		} else{
			digits[i] = digits[i]+add[i]+p;
			p = 0;
		}
	}
	if(digits[0] == 0) digits.shift();
	return digits;
};
// @lc code=end

