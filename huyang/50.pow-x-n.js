/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// x的n次方
// n>0，n个x的乘积
// n<0，1除以n个x的乘积
var myPow = function(x, n) {
    if(n == 0) return 1.0;
    if(n == 1) return x;
    if(x == 0) return 0;
    if(x == 1) return 1.0;
    if(x == -1){
        if(Math.abs(n)%2 == 0){
            return 1.0;
        } else{
            return -1.0;
        }
    }
    let flag = n>0 ? true : false;
    let res = x;
    for(let i=1;i<Math.abs(n);i++){
        res *=x;
    }
    return flag ? res : 1/res;
};
// @lc code=end

