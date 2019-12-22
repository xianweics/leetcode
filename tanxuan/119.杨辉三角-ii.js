/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

 /**
  * 两端都为1
  * a[i][j] = a[i-1][j-1] + a[i-1][j]
  */
var getRow = function(rowIndex) {
    /* let res = []
    for(let i = 1; i <= rowIndex+1; i++) {
        let row = []
        for(let j = 0; j < i; j++) {
            if (!j || j === i -1) {
                row.push(1)
            } else {
                // console.log(res[i-2][j-1], res[i-2][j])
                row.push(res[i-2][j-1] + res[i-2][j])
            }
        }
        res.push(row)
    }
    return res[rowIndex] */

    let res = [], row = []
    for(let i = 1; i <= rowIndex+1; i++) {
        for(let j = 0; j < i; j++) {
            if (!j || j === i -1) {
                row.push(1)
            } else {
                row.push(res[j-1] + res[j])
            }
        }
        res = row
        row = []
    }
    return res
};
// @lc code=end

