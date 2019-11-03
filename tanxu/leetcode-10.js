// 递归判断
var isMatch = function(s, p) {
    if (s === p) {
        return true
    }
    // 第一个字符匹配上了
    let firstMatch = s && (s[0] === p[0] || p[0] === '.')

    if(firstMatch) {
        if (p[1] === '*') {
            return isMatch(s,p.substring(2)) || isMatch(s.substring(1),p)
        } else {
            return isMatch(s.substring(1), p.substring(1))
        }
    } else {
        if (p[1] === '*') {
            return isMatch(s,p.substring(2))
        } else {
            return false
        }
    }
};


console.log(isMatch("ab", 'c*ab'))

// 方法2 动态规划

var isMatch2 = function(s, p) {
}

console.log(isMatch2("ab", '.*'))
