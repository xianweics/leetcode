// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
//
// 示例 1：
//
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：
//
// 输入: "cbbd"
// 输出: "bb"

// 方法一： 暴力破解法，找出所子串，然后判断每一个字串是不是回文串  时间复杂度o(n^3)
//
var longestPalindrome1 = function(s) {
    let len = s.length

    for (let i = len; i > 1; i--) {
        let startIndex = 0
        let endIndex = i - 1
        while (endIndex < len) {
            let str = s.substring(startIndex,endIndex + 1)
            if(isHuiwen(str)){
                return str
            }
            startIndex++
            endIndex++
        }
    }
    return s[0] || ""
};

let isHuiwen = function(s) {
    for (let i = 0;i < Math.ceil(s.length/2);i++){
        if (s[i] !== s[s.length - i -1]) {
            return false
        }
    }
    return true
}

console.log(longestPalindrome1('aaaabaasdf'))
// 方法2 动态规划方法
var longestPalindrome2 = function(s) {
    // 记录最终长度最大的回文下标
    let start = 0
    let end = 0
    // 保存回文
    let dp = []
    // 先求解长度为1 和 2 的回文，并保存至dp
    for (let i = 0; i<s.length; i++) {
        dp[i] = []
        dp[i][i] = true
        if (s[i] === s[i + 1]) {
            dp[i][i+1] = true
            start = i
            end = i + 1
        }
    }
    // 求解长度3及以上的回文
    for (let len = 3; len <= s.length ;len++) {
        for (let i = 0; i + len <= s.length; i++) {
            if (dp[i + 1][i + len - 2] && s[i] === s[i + len - 1]) {
                dp[i][i + len -1] = true
                start = i
                end = i + len -1
            }
        }
    }
    return s.substring(start, end + 1)
}

console.log(longestPalindrome2('aaaabaasdf'))
