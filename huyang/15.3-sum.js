/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	if(nums.length<3){
        return [];
    } else if(nums.length==3){
        return nums[0]+nums[1]+nums[2] == 0 ? [nums] : [];
    } else{
        let arr = [];
        let res = [];
        let tmp = [];
        let count = 0;
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                arr.push(nums[i] < nums[j] ? [nums[i],nums[j],nums[i]+nums[j],i,j] : [nums[j],nums[i],nums[i]+nums[j],i,j]);
            }
        }
        for(let i in arr){
            for(let j in nums){
                if(j!=arr[i][3] && j!=arr[i][4] && arr[i][2] + nums[j] == 0){
                    if(nums[j]<arr[i][0]){
                        tmp = [nums[j],arr[i][0],arr[i][1]];
                    } else if(nums[j]>arr[i][1]){
                        tmp = [arr[i][0],arr[i][1],nums[j]];
                    } else{
                        tmp = [arr[i][0],nums[j],arr[i][1]];
                    }
                    if(res.length < 1){
                        res.push(tmp);
                    } else if(res.length == 1){
                        if(res[0].toString() != tmp.toString()) res.push(tmp);
                    } else{
                        for(let o in res){
                            if(res[o].toString() != tmp.toString()){
                                count++;
                            } else{
                                break;
                            }
                        }
                        if(count==res.length)   res.push(tmp);
                        count = 0;
                    }
                }
            }
        }
        return res;
    }
};
// @lc code=end

