/*
 * @Author: Tan Xuan
 * @Date: 2020-02-09 14:57:43
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-02-09 14:59:26
 * @Description: File content
 */
/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return;
    let rowFlag = false, colFlag = false;
    let rows = matrix.length, cols = matrix[0].length;
    //看第一列是否是有0
    for (let i = 0; i < rows; ++i) {
        if (matrix[i][0] == 0) {
            colFlag = true;
            break;
        }
    }
    //看第一行是否有0
    for (let i = 0; i < cols; ++i) {
        if (matrix[0][i] == 0) {
            rowFlag = true;
            break;
        }
    }
    //遍历除第一行第一列以外的矩阵元素，如果有元素为0，则将对应的第一行第一列的位置置为0
    for (let i = 1; i < rows; ++i) {
        for (let j = 1; j < cols; ++j) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    //同样遍历除第一行第一列以外的矩阵元素，如果matrix[i][j]所在位置的第一行第一列有任意一个位置为0 那么那个位置将被置为0
    for (let i = 1; i < rows; ++i) {
        for (let j = 1; j < cols; ++j) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    //看第一列是否有0  有则将该列置为0
    if (colFlag) {
        for (let i = 0; i < rows; ++i) matrix[i][0] = 0;
    }
    //行同理
    if (rowFlag) {
        for (let i = 0; i < cols; ++i) matrix[0][i] = 0;
    }
};
// @lc code=end