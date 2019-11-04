/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let min = 10000;
    let num = 0;
    let res = [];
    for(let i in strs){
        strs[i] = strs[i].split("");
        min = strs[i].length < min ? strs[i].length : min;
    }
    for(let i=0;i<min;i++){
        let count = 0;
        let breakFlag = false;
        for(let j=1;j<strs.length;j++){
            if(strs[j][i] == strs[0][i]){
                count++;
            } else{
                breakFlag = true;
            }
        }
        if(breakFlag) break;
        if(count == strs.length-1){
            num++;
        }
    }
    for(let i=0;i<num;i++){
        res.push(strs[0][i]);
    }
    return res.join("");
};
// @lc code=end

