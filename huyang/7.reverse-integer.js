/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let m = 1024*1024*2048;
    if(x > 0){
        x = x.toString().split("").reverse().join("");
    } else{
        x = -(-x).toString().split("").reverse().join("");
    }
    if(x>=m-1 || x<=-m){
        return 0;
    } else{
        return x;
    }
};
// @lc code=end

