/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 组合
// 来自第78题的启发
// 如果k=1，直接返回每个元素构成的数组的集合
// 否则，返回长度为k的组合
var combine = function(n, k) {
    if(k==1)    return Array.from({length:n},(item, index)=> [index+1]);
    let res = [[], [1]];
    for(let i=2; i<=n; i++){
        for(let j in res){
            let tmp = [...res[j]];
            if(tmp.length < k){
                tmp.push(i);
                res.push(tmp);
            }
        }
    }
    return res.filter((item) =>{
        return item.length == k;
    });  
};
// @lc code=end

