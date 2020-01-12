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
	let res = target;
    let tmp = 0;
	let min = 10000;
    if(nums.length == 3){
        return nums[0]+nums[1]+nums[2];
    } else{
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                arr.push([i,j,nums[i]+nums[j]]);
            }
        }
        for(let i in arr){
            for(let j in nums){
                if(j != arr[i][0] && j != arr[i][1]){
                    if(arr[i][2] == target-nums[j]){
                        return target;
                    } else{
                        num = arr[i][2]+nums[j]>target ? arr[i][2]+nums[j]-target : target-arr[i][2]-nums[j];
                        if(num < min){
                            min = num;
                            res = arr[i][2]+nums[j];
                        }
                    }
                }
            }
        }
    }
    return res;
};
// @lc code=end

