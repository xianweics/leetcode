/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 矩阵置零
// 先找出所有值为0的位置
// 然后根据将该位置的横竖位置出现的元素置为0
var setZeroes = function(matrix) {
    let res = [];
    for(let i in matrix){
        for(let j in matrix[0]){
            if(matrix[i][j] == 0)   res.push([i, j]);
        }
    }  
    for(let k in res){
        for(let i in matrix[0]){
            matrix[res[k][0]][i] = 0;
        }
        for(let j in matrix){
            matrix[j][res[k][1]] = 0;
        }
    }
};
// @lc code=end

