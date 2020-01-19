/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 *左上角的点，绝对向右移动，
右上角的点，绝对向下移动，
右下角的点，绝对向左移动，
左下角的点，绝对向上移动，
 */
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length;
        for (let i = 0; i < len / 2; i++) {
            let start = i;
            let end = len - i - 1;
            for (let j = 0; j < end - start; j++) {
                let temp = matrix[start][start + j];
                matrix[start][start + j] = matrix[end - j][start];
                matrix[end - j][start] = matrix[end][end - j];
                matrix[end][end - j] = matrix[start + j][end];
                matrix[start + j][end] = temp;
            }
        }      
};
// @lc code=end

