/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 不同路径
// 在一个m*n的矩阵中从左上角到右下角，需要向右走m-1步，向下走n-1步，一共s=m+n-2步
// 所有的走法就是找出向右走或向下走哪几步，m大就计算向下走哪n-1步，否则计算向右走哪m-1步
// 即数学中的组合：从n个不同元素中，任取m(m≤n）个元素并成一组，叫做从n个不同元素中取出m个元素的一个组合；
// 从n个不同元素中取出m(m≤n）个元素的所有组合的个数，叫做从n个不同元素中取出m个元素的组合数。用符号 C(n,m) 表示。
//自定义一个阶乘函数，就是有n个数相乘，从m开始，每个数减1，如factorial(5,4)就是5*(5-1)*(5-2)*(5-3),相乘的数有4个
var factorial = function(m,n){
    var num = 1;
    var count = 0;
    for(var i = m;i > 0;i--){
        if(count == n){     //当循环次数等于指定的相乘个数时，即跳出for循环
            break;
        }
        num = num * i;
        count++;
    }
    return num;
}
var uniquePaths = function(m, n) {
    let s = m+n-2;
    let p = m > n ? n-1 : m-1;
    return factorial(s,p)/factorial(p,p);
};
// @lc code=end

