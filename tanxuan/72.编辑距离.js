/*
 * @Author: Tan Xuan
 * @Date: 2020-02-09 15:05:38
 * @LastEditors  : Tan Xuan
 * @LastEditTime : 2020-02-09 15:10:23
 * @Description: File content
 */
/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const cost = [];
    for (let i = 0; i <= m; ++i) {
        cost[i] = [];
        cost[i][0] = i;
    }
    for (let j = 0; j <= n; ++j) {
        cost[0][j] = j;
    }
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (word1[i-1] == word2[j-1]) {
                cost[i][j] = cost[i-1][j-1];
            } else {
                cost[i][j] = 1 + Math.min(cost[i-1][j-1], Math.min(cost[i][j-1], cost[i-1][j]));
            }             
        }
    }
    return cost[m][n];
};
// @lc code=end

