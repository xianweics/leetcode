/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // 防止   类似 s = ()()() 栈空的时候没得减
  let stack = [-1]
  let maxLen = 0
  for (let i = 0; i < s.length; i++) {
     if (s[i] === '(') {
       stack.push(i)
     } else {
       if (stack.length === 1) {
         stack[0] = i
       } else {
         stack.pop()
         maxLen = Math.max(maxLen, i - stack[stack.length - 1])
       }
     }
  }
  return maxLen
};

console.log(longestValidParentheses("()(())"))


var longestValidParentheses1 = function(s) {
  let dp = []
  dp[0] = 0
  let maxLen = 0
  for (let i = 1; i < s.length; i++) {
    dp[i] = 0
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (dp[i - 2] || 0) + 2
      } else {
        // console.log(i - dp[i - 1] - 1)
        if (s[i - dp[i - 1] - 1] === '(') {
          dp[i] = dp[i - 1] + 2 + (dp[i - (dp[i -1] + 2)] || 0)
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i]
    }
  }
  return maxLen
};

console.log(longestValidParentheses1("((())))"))
