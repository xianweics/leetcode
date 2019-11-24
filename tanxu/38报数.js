var countAndSay = function(n) {
    if (n === 1) return '1'
    let str = '1'
    for (let i = 1; i < n; i++) {
        str = getNumbers(str)
    }
    return str
};

function getNumbers(str) {
    let res = ''
    let count = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i+1]) {
            res += count.toString() + str[i].toString()
            count = 1
            continue
        } else {
            count += 1
        }
    }
    return res
}

console.log(countAndSay(20))
