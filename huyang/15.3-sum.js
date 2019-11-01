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
    let res = [];
	let has = false;
    for(let i=0;i<nums.length;i++){
    	for(let j=1;j<nums.length;j++){
    		for(let k=2;k<nums.length;k++){
    			if(i!=j && i!=k && j!=k && nums[i]+nums[j] == -nums[k]){
    				for(let o in res){
    					if([nums[i],nums[j],nums[k]].sort().toString() == res[o].toString()) {
                            has = true;
                        }
    				}
    				if(!has){
                        res.push([nums[i],nums[j],nums[k]].sort())
                    };
    				has = false;
    			}
    		}	
    	}
    }
    return res;
};
// @lc code=end

