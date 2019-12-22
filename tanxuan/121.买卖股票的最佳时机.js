/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length, max = 0, diff = 0
    for(let i = 0; i<len; i++) {
        for(let j = i+1; j< len; j++) {
            diff = prices[j] - prices[i]
            max = diff > max ? diff : max
        }
    }
    return max
};
// @lc code=end

