/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 第k个排列
// 生成排列组合
var pailie = function(arr, tmp, res, k){
    if(res.length == k) return;
    if(arr.length == 0) res.push(tmp);
    for(let i=0; i<arr.length; i++){
        let newArr = [...arr];
        newArr.splice(i, 1);
        pailie(newArr, tmp+arr[i], res, k);
    }
}
var getPermutation = function(n, k) {
    let res = [];
    pailie(Array.from({length:n},(item, index)=> index+1), '', res, k);
    return res[k-1];
};
// @lc code=end

