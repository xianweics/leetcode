var generateParenthesis = function(n) {
    if (n === 0 ) {
        return []
    }
    let result = []
    fun('(', 1, 0, n, result)
    return result
};

function fun(str, left, right, n, result) {
    if (str.length === 2 * n) {
        result.push(str)
    } else {
        if (left < n) {
            let l = left + 1
            fun(str + '(', l, right, n, result)
        }
        if (left > right) {
            let r = right + 1
            fun(str + ')', left, r, n, result)
        }
    }
}

console.log(generateParenthesis(2))
