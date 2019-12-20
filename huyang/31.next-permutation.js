/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 字典序算法
// 从后向前查看逆序区域，找到逆序区域的前一位，也就是数字置换的边界
var findTransferPoint = function(nums){
    for(let i=nums.length-1; i>0; i--){
        if(nums[i] > nums[i-1]) return i;
    }
    return 0;
};
var nextPermutation = function(nums) {
    if(nums.length<2) return nums;
    let index = findTransferPoint(nums);    // 数字置换边界
    if(index == 0)  return nums.reverse();  // 如果数字置换边界为0，说明整个数组已经逆序，返回最小值
    // 把逆序区域前的一位和逆序区域中刚刚大于它的数字交换位置
    let tmp = nums[index-1];
	for(let i=nums.length-1;i>0;i--){
		if(tmp < nums[i]){
			nums[index-1] = nums[i];
			nums[i] = tmp;
			break;
		}
	}
	// 把原来的逆序区域转为顺序
    for(let i=index,j=nums.length-1;i<j;i++,j--){
    	let temp = nums[i];
    	nums[i] = nums[j];
    	nums[j] = temp;
	}
};
// @lc code=end

