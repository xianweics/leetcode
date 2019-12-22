
var numTrees = function(n) {
    if (n === 0) return 0
    let dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        let sum = 0
        for (let j = 1; j <= i; j++) {
            sum += dp[i - j] * dp[j - 1]
        }
        dp[i] = sum
    }

    return dp[n]
};

console.log(numTrees(3))

