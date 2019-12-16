/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 全排列（无重复元素）
// 排列组合，30题中子方法的简化版，因为没有重复元素
// 定义一个临时数组tmp，用来存放每个可能的组合元素
// 定义一个结果数组res
// 然后用递归方法
var permute = function(nums) {
    let tmp = [];
    let res = [];
	function inner(tmp){
		for(let i in nums){
			if(tmp.length == nums.length-1){
				if(tmp.indexOf(nums[i])<0){
					res.push(tmp.concat(nums[i]));
				}
				continue;
			}
			if(tmp.indexOf(nums[i]) < 0){
				inner(tmp.concat(nums[i]));
			}
		}
	}
	inner(tmp);
	return res;
};
// 法二
var pailie = function(arr, tmp, res){
	if(arr.length == 0)	res.push(tmp);
	for(let i=0; i<arr.length; i++){
		let newArr = [...arr];
		newArr.splice(i, 1);
		pailie(newArr, [...tmp, ...[arr[i]]], res);
	}
}
var permute = function(nums) {
    let res = [];
	pailie(nums, [], res);
	return res;
};
// @lc code=end

