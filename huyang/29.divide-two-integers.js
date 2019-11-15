/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend == 0) return 0;
    if(divisor == 1){
        if(dividend > 2147483647 || dividend < -2147483648){
            return 2147483647;
        } else{
            return dividend; 
        }
    }
	if(divisor == -1){
        if(-dividend > 2147483647 || -dividend < -2147483648){
            return 2147483647;
        } else{
            return -dividend; 
        }
    }
	let minus = ((dividend>0 && divisor>0) || (dividend<0 && divisor<0)) ? false : true;
	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);
	let i = 1;
	let count = divisor;
    if(dividend < divisor)	return 0;
    while(divisor < dividend){
    	divisor += count;
        if(divisor <= dividend){
	        i++;
        }
    }
    let res = minus ? -i : i;
    if(res > 2147483647 || res < -2147483648){
    	return 2147483647;
    } else{
    	return res;
    }
};
// @lc code=end

