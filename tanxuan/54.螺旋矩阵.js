/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */
/**
 * 处理好边界
 */
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) {
        return []
    }
    const res = []
    let l=0, r = matrix[0].length-1, u = 0, d = matrix.length-1;
    // console.log(res, matrix, l, d, u, r)
    while (l <= r && u <= d){
        for (let i = l; i <= r; i++) {
            res.push(matrix[u][i]);
        }
        // console.log(res)
        u++;
        for (let i = u; i <= d; i++) {
            res.push(matrix[i][r]);
        }
        // console.log(res)
        r--;
        for (let i = r; i >= l && u <= d; i--) {
            res.push(matrix[d][i]);
        }
        // console.log(res)
        d--;
        for (let i = d; i >= u && l <= r; i--) {
            res.push(matrix[i][l]);
        }
        // console.log(res)
        l++;
    }
    return res
};
// @lc code=end

