/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// 报数
// 递归
// 不管n是几，要得到结果必须从n=1开始，且结果和n-1的结果有关
// 所以用一个临时数组存放n-1的结果作为求n的结果的函数的入参
var dd = function(index, arr, n) {
    if(index == n)  return arr.join('');
    index++;
    let tmp = [];
    let count = 1;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == arr[i+1] && i != arr.length - 1) {
            count++;
        }else {
            tmp.push(count);
            tmp.push(arr[i]);
            count = 1;
        }
    }
    return dd(index, tmp, n);
} 
var countAndSay = function(n) {
    return dd(1, ['1'], n) 
};
// @lc code=end

