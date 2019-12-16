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
// leetcode执行结果不一致，但应该是对的
// 字典序算法
var nextPermutation = function(nums) {
    if(nums.length<2) return nums;
    let index = 0;
    let count = 0;
    // 从后向前寻找逆序区的前一位
    for(let i=nums.length-1;i>=0;i--){
		if(nums[i] < nums[i-1]){
			index = i-1;
		} else{
			count++;
		}
	}
	if(count == nums.length){	// 数组是顺序的，交换最后两位
		let t = nums[nums.length-1];
		nums[nums.length-1] = nums[nums.length-2];
		nums[nums.length-2] = t;
		return nums;
	}
    if(index == 0){	// 数组是逆序的，返回最小值
    	return nums.reverse();
    }
    let numsCopy = [...nums];
    // 把逆序区域前的一位和逆序区域中刚刚大于它的数字交换位置
    let temp = numsCopy[index-1];
	for(let i=numsCopy.length-1;i>0;i--){
		if(temp < numsCopy[i]){
			numsCopy[index-1] = numsCopy[i];
			numsCopy[i] = temp;
			break;
		}
	}
	// 把原来的逆序区域转为顺序
    for(let i=index,j=numsCopy.length-1;i<j;i++,j--){
    	let tmp = numsCopy[i];
    	numsCopy[i] = numsCopy[j];
    	numsCopy[j] = tmp;
	}
    return numsCopy;
};
// @lc code=end

