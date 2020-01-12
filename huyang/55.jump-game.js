/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 跳跃游戏
// 如果长度为1，起点即终点，返回true
// 如果长度大于1且起点为0，返回false
// 从倒数第二位向前遍历，如果遇到0，则判断能不能跳过该位置
var canJump = function(nums) {
    if(nums.length == 1)	return true;
    if(nums[0] == 0)	return false;
    for(let i=nums.length-2; i>0; i--){
    	if(nums[i] == 0){
    		for(let j=i; j>=0; j--){
                // 如果从nums[j]结点可以直接跳到“0”结点之后，那么直接就从nums[j]开始向前继续判断
    			if(nums[j] > (i - j)) {
                    i = j;
                    break;
                }
                // 一直遍历到第一个位置还找不到可以跳过0的结点，则返回false
                if(j == 0)	return false;
    		}
    	}
    }
    return true;
};
// @lc code=end

