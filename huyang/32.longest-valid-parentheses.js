/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s.length <2) return 0;
    let arr = s.split("");
    let res = [];
    let count = 0;
    for(let i in arr){
        if(arr[i] == "("){
            res.push(arr[i]);
        } else{
            if(res.length > 0){
                res.pop();
                count++;
            }
        }
    }
    return (count-res.length)*2;
};
// @lc code=end

