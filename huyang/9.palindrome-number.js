/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    } else if(x == 0){
        return true;
    } else{
        let t = x;
        if(t == x.toString().split("").reverse().join("")){
            return true;
        } else{
            return false;
        }
    }
};
// @lc code=end

