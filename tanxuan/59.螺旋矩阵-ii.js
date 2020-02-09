/*
 * @Author: Tan Xuan
 * @Date: 2020-02-09 15:20:51
 * @LastEditors  : Tan Xuan
 * @LastEditTime : 2020-02-09 15:43:08
 * @Description: File content
 */
/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = [];
    let start = 1, j = 0;
    for(let i = 0; i < n; i ++) {
        result[i] = [];
    }
    while (start <= n * n) {
        for (let i = j; i < n - j; i++)
            result[j][i] = start++;
        for (let i = j + 1; i < n - j; i++)
            result[i][n - j - 1] = start++;
        for (let i = n - j - 2; i >= j; i--)
            result[n - j - 1][i] = start++;
        for (let i = n -j - 2; i > j; i--)
            result[i][j] = start++;
        j++;
    }
    return result;
};
// @lc code=end

