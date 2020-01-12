/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 括号生成
// 回溯法——1、选择2、条件3、结束
var parenthesis = function(str, res, l, r) {
	if(l==0 && r==0) res.push(str);
	if(l>0) parenthesis(str + "(", res, l-1, r);
	if(r>l)	parenthesis(str + ")", res, l, r-1);
};
var generateParenthesis = function(n) {
    let l = n, r = n;   // 左括号右括号个数都为n
    let res = [];       // 结果集
    parenthesis("", res, l, r);
    return res;
};
// @lc code=end

