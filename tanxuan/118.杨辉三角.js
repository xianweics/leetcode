/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

/**
 * 两端都为1
 * a[i][j] = a[i-1][j-1] + a[i-1][j]
 */
var generate = function(numRows) {
    let res = [];
    for (let i = 1; i <= numRows; i++) {
        let row = [];
        for (let j = 0; j < i; j++) {
            if (!j || j === i - 1) {
                row.push(1);
            } else {
                // console.log(res[i-2][j-1], res[i-2][j])
                row.push(res[i - 2][j - 1] + res[i - 2][j]);
            }
        }
        res.push(row);
    }
    return res;
};
// @lc code=end
