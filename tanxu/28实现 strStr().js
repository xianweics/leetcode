/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    let index = 0
    let firstMatchs = []
    let n = 1
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && i > (firstMatchs[firstMatchs.length - 1] || -1) ) {
            firstMatchs.push(i)
        }
        if (haystack[i] === needle[index]) {
            index++
        } else {
            // 匹配失败，从第n个第一字符相同开始匹配
            index = 0
            if (n < firstMatchs.length) {
                i = firstMatchs[n] - 1
                n++
                continue
            }
        }
        if (index === needle.length) {
            return i - index + 1
        }
    }
    return -1
};

console.log(strStr("mississipi",'issipi'))
