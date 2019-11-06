// 整数转罗马数字

var intToRoman = function(num) {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let res = ''
    let index = 0
    while(num > 0) {
        if (nums[index] > num) {
            index++
        } else {
            res += romans[index]
            num = num - nums[index]
        }
    }
    return res
};

console.log(intToRoman(234))
