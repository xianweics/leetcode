/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    //排除 被除数为0的情况
    if (dividend === 0) {
        return 0;
    }
    // 商, 是否同符号
    let count = 0,
        isSame = (dividend ^ divisor) < 0;
    // 得到最大值和最小值
    let max = Math.pow(2, 31) - 1,
        min = Math.pow(-2, 31);
    // 如果过界
    if (dividend == min && divisor == -1) {
        return max;
    }
    // 获得两值的绝对值
    let one = Math.abs(dividend),
        two = Math.abs(divisor);
    // 通过位运算获得商
    for (let i = 31; i >= 0; i--) {
        // 防止位运算后的值为负数
        if (Math.abs(one >> i) >= two) {
            count += Math.abs(1 << i);
            one -= Math.abs(two << i);
        }
    }
    return isSame ? -count : count;
};
// @lc code=end
