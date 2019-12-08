/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = new Map()
    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            let stackTop = stack[stack.length - 1]
            if (s[i] === map.get(stackTop)) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};
