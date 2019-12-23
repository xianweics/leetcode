var convert = function(s, numRows) {
    let array = []
    let flag = 1
    let y = 0
    for (let i = 0; i < s.length; i++) {
        array[y] = (array[y] || "") + s[i]
        if (numRows > 1 && y === numRows - 1) {
            flag = -1
        } else if (y === 0) {
            flag = 1
        }
        y = y + flag
    }
    let result = ""
    for (let item of array) {
        result += item
    }
    return result
};
console.log(convert('leetcode', 3))