/*
 * @Author: Tan Xuan
 * @Date: 2020-02-10 15:45:00
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-02-10 15:45:28
 * @Description: File content
 */
/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let N = m + n - 2;
    let M = m < n ? m - 1 : n - 1;
    //计算 C(N,M)
    //根据：C(N,M)=C(N,M-1)*M/(N-M+1);
    let ans = 1;
    for (let i = 1; i <= M; i++)
        ans = ans * (N - i + 1) / i;
    return ans;
};
// @lc code=end