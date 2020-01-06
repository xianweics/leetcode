/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */
/***
 * 思路：123*89 = (9*3*1 + 9*2*10 + 9*1*100)*1 + (8*3*1 + 8*2*10 + 8*1*100)*10
 */
// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let n1 = num1.length-1, n2 = num2.length-1, mul=[];
    if(n1<0 || n2<0) {
        return '';
    }
    mul.length = n1+n2+2
    mul.fill(0)
    for(let i=n1;i>=0;i--){
        for(let j=n2;j>=0;j--){
            let bitmul=num1[i]*num2[j]
            bitmul +=mul[i+j+1]
            mul[i+j] += (bitmul / 10)>>0
            mul[i+j+1] = bitmul % 10
        }
    }
    let str = '', i =0
    while(i < mul.length-1 && mul[i]==0) {
        i++
    }
    for(; i<mul.length;++i) {
        str+=mul[i]
    }
    return str;
};
// @lc code=end

