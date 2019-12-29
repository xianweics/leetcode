var reverse = function (x) {
    let maxVal = Math.pow(2, 31) - 1
    let minVal = -Math.pow(2, 31)
    let result = 0
    while (x != 0) {
        let number = x % 10
        x = (x - number) / 10
        if (result > (maxVal - number)/10 || result < (minVal - number)/10) {
            return 0
        }
        result = result * 10 + number
    }
    return result
};

console.log(reverse(-12345))