/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
// 如果数组为空，返回[-1,-1]
// 如果数组长度为1，且该元素等于目标值，返回[0,0]，否则返回[-1,-1]
// 如果数组长度大于1，则遍历数组寻找目标元素，若匹配则把下标存入数组res；直到元素值大于目标值，跳出循环
// 如果res长度为0，则没有匹配到，返回[-1,-1]
// 如果res长度为1，则开始结束值相同
// 如果res长度大于1，则取第一个和最后一个元素最为范围
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length == 0) return [-1,-1];
    if(nums.length == 1){
    	if(nums[0] == target){
    		return [0,0];
    	} else{
    		return [-1,-1];
    	}
    }
    let res = [];
    for(let i=0;i<nums.length;i++){
    	if(nums[i]==target){
    		res.push(i);
        }
        if(nums[i]>target){
            break;
    	}
    }
    if(res.length == 0){
    	return [-1,-1];
    } else if(res.length == 1){
    	res.push(res[0]);
    	return res;
    } else {
    	return [res[0],res[res.length-1]];
    }
};
// @lc code=end

