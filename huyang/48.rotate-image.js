/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// leetcode执行结果不一致，但应该是对的
var rotate = function(matrix) {
    let res = [];
    let tmp = [];
    for(let j in matrix[0]){
        for(let i=matrix.length-1;i>-1;i--){
            tmp.push(matrix[i][j]);
        }
        res.push(tmp);
        tmp = [];
    }
    return res;
};
// @lc code=end

