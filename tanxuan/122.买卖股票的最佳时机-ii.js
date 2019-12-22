/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length, max = 0, diff = 0
    for(let i = 0; i<len - 1; i++) {
        diff = prices[i+1] - prices[i]
        if (diff > 0) {
            max += diff
        }
    }
    return max
};
// @lc code=end

