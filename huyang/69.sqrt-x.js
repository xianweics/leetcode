/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// x的平方根
var mySqrt = function(x) {
    if(x==0) return 0;
    for(let i = 1; i<=x; i++){
    	if(i*i==x) return i;
        if(i*i>x) return i-1;
    }
};
// @lc code=end

