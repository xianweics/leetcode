/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 面积area = 长(j-i) * 宽(height数组中最小的数)
var maxArea = function(height) {
    let max = 0;
	let area = 0;
    for(let i=0;i<height.length;i++){
    	for(let j=i+1;j<height.length;j++){
    		area = height[i] > height[j]? (j-i)*height[j] : (j-i)*height[i];
    		max = area > max ? area : max;
    	}	
    }
    return max;
};
// @lc code=end

