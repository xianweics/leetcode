/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 子集II（数组nums包含重复元素）
// 在子集I的基础上去重
var sortInsert = function (arr, n){
    for(let i in arr){
        if(n<=arr[i]){
            arr.splice(i, 0, n);
            return arr;
        }
    }
    arr.push(n);
    return arr;
}
var subsetsWithDup = function(nums) {
    if(nums.length == 0) return [[]];
    let res = [[], [nums[0]]];
    for(let i=1; i<nums.length; i++){
        for(let j in res){
            let tmp = [...res[j]];
            sortInsert(tmp, nums[i]);   // 插入数组并按升序排序
            // 去重
            let c = 0;
            for(let k in res){
                if(res[k].join("/") != tmp.join("/"))   c++;
            }
            if(c == res.length) res.push(tmp);
            c = 0;
        }
    }
    return res;  
};
// @lc code=end

