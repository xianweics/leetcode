/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    generate(res, '', 0, 0, n);
    return res;
};

function generate(res, str, l, r, n) {
    if (l > n || r > n) return;
    if (l === n && r === n) {
        res.push(str);
    }
    if (l >= r) {
        generate(res, str + '(', l + 1, r, n);
        generate(res, str + ')', l, r + 1, n);
    }
}
// @lc code=end
