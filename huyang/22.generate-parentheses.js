/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 括号生成
// 递归
// 超时了
var dd = function(index, arr, n) {
    if(index == n)  return arr;
    index++;
    let str = '';
    let s = ''
    let tmp = [];
    for(let k in arr){
        str = arr[k];
        for(let i=0; i<=2*index; i++){
            str = arr[k].slice(0, i+1) + '(' + arr[k].slice(i+1);
            for(let j=i+1; j<=str.length; j++){
                s = str;
                s = s.slice(0, j+1) + ')' + s.slice(j+1);
                if(tmp.indexOf(s) < 0)  tmp.push(s);
            }
        }
    }
    return dd(index, tmp, n);
}
var generateParenthesis = function(n) {
    if(n==0) return [];
    if(n==1) return ["()"];
    if(n==2) return ["()()", "(())"];
    return dd(1, ['()'], n); 
}
// @lc code=end

