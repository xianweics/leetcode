/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // n:2
    ()()
    (())

    //n:4
    (((())))
    ()()()()
    ()((()))
    ((()))()
    (()())()
    ()(()())
    ()(())()
    (())(())
};

const val = generateParenthesis(n)
console.log('val: ', val);
