/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 买卖股票的最佳时机II
// 后一天价格比前一天价格高，就在前一天买入，这天卖出
var maxProfit = function(prices) {
    let count = 0;
	for(let i=0; i<prices.length-1; i++){
		if(prices[i+1] > prices[i])	count += (prices[i+1] - prices[i]);
	}
    return count;
};
// @lc code=end

