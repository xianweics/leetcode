/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let arr = [];
	let res = [];
	let min = 10000;
    if(nums.length == 3){
        return nums[0]+nums[1]+nums[2];
    } else{
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                for(let k=j+1;k<nums.length;k++){
                	arr.push([nums[i],nums[j],nums[k],nums[i]+nums[j]+nums[k]]);
            	}
            }
        }
        for(let i in arr){
        	if(arr[i][3] == target){
        		return target;
        	} else{
        		if(Math.abs(arr[i][3]-target) < min){
        			min = Math.abs(arr[i][3]-target);
        			res = arr[i];
        		}
        	}
        }
    }
    return res[3];
};
// @lc code=end

