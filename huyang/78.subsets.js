/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 子集
// 每次给结果数组增加一个新元素
var subsets = function(nums) {
    if(nums.length == 0) return [[]];
    let res = [[], [nums[0]]];
    for(let i=1; i<nums.length; i++){
        for(let j in res){
            let tmp = [...res[j]];
            tmp.push(nums[i]);
            res.push(tmp);
        }
    }
    return res;
};
// @lc code=end

