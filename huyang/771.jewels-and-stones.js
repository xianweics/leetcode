/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jarr = J.split("");
    var sarr = S.split("");
    var count = 0;
    for(let j in jarr){
    	for(let s in sarr){
    		if(jarr[j] === sarr[s]) count++;
    	}
    }
    return count;  
};
// @lc code=end

