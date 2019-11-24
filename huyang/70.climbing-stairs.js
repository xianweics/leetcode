/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 爬楼梯
// n=1        1
// n=2        2
// n=3        3 = 2 + 1
// n=4        5 = 3 + 2
// n=5        8 = 5 + 3
// n=6        13 = 8 + 5
var climbStairs = function(n) {
    if(n<4) return n;
    let a = 1;
    let b = 2;
    let tmp = a+b;
    for(let i=3;i<=n;i++){
        tmp = a+b;
        a = b;
        b = tmp;
    }
    return b;
};
// @lc code=end

