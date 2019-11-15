/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 全排列（有重复元素）
// 排列组合，30题中子方法
// 定义和res类似的数组check是为了不用去重
var newArr = function(tmp,arr){
	let res = [];
	function inner(tmp){
		for(let i in arr){
			if(tmp.length == arr.length-1){
				if(tmp.indexOf(arr[i])<0){
					res.push(tmp.concat(arr[i]));
				}
				continue;
			}
			if(tmp.indexOf(arr[i]) < 0){
				inner(tmp.concat(arr[i]));
			}
		}
	}
	inner(tmp);
	return res;
};
var permuteUnique = function(nums) {
    if(nums.length < 2) return [nums];
    if(nums.length == 2) return nums[0]==nums[1] ? [nums] : [nums,[nums[1],nums[0]]];
    let index = Array.from({length: nums.length}, (a, i) => i);
    let arr = newArr([],index);
    let tmp = [];
    let tt = '';
    let res = [];
    let check = [];
    for(let i in arr){
        for(let j in nums){
            tt += nums[arr[i][j]] + '/';
            tmp.push(nums[arr[i][j]]);
        }
        if(check.indexOf(tt)<0){
            check.push(tt);
            res.push(tmp);
        }
        tmp = [];
        tt = '';
    }
    return res;
};
// @lc code=end

