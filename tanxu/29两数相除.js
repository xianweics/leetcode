/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 方法一，用减法实现
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0
    let resBiggerZero = false
    let result = 0

    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
        resBiggerZero = true
    }
    if (dividend > 0) {
        dividend = -dividend
    }
    if (divisor > 0) {
        divisor = -divisor
    }
    while (dividend - divisor < 1) {
        result--
        dividend -= divisor
    }
    let maxVal = 2147483647
    let minVal = -maxVal - 1

    if (resBiggerZero) {
        if (result === minVal) {
            return maxVal
        } else {
            return  -result
        }
    } else {
        return result
    }
};

// console.log(divide(-2147483648, -1))


console.log(123 >> 1)
