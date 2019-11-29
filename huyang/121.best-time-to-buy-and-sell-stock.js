/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 买卖股票的最佳时机
// 先确认一个低点min
// 定义收益res
// 依次计算之后卖出的收益，比之前收益高再赋值给res
// 遇到更低点则变更低点，重新依次计算卖出后的收益，比之前收益高再赋值给res
var maxProfit = function(prices) {
    let min = prices[0];
    let res = prices[1]>prices[0] ? prices[1]-prices[0] : 0;
    for(let i=1; i<prices.length; i++){
    	min = prices[i] < min ? prices[i] : min;
    	res = prices[i]-min > res ? prices[i]-min : res;
    }
    return res;
};
// @lc code=end

