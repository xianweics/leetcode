var lengthOfLastWord = function(s) {
    s = s.trim()
    let res = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            return res
        } else {
            res++
        }
    }
    return res
};
