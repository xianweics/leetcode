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
// 旋转图像
// 原地旋转，不能创建新的数组矩阵
// 观察例子可以直接写代码
var rotate = function(matrix) {
    let len = matrix.length;
    let tmp = [];
    for(let j in matrix[0]){
        for(let i=len-1;i>-1;i--){
            tmp.push(matrix[i][j]);
        }
        matrix.push(tmp);
        tmp = [];
    }
    matrix.splice(0, len);
};
// @lc code=end

