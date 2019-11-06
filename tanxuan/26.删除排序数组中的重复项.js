/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 如果长度不够直接返回
  if (nums.length <= 1) {
    return nums;
  }
  // 遍历
  for (let i = 1; i < nums.length; ) {
    // 如果相同则删除, 索引不变
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    } else {
      // 不相同则索引加1
      i++;
    }
  }
  return nums.length;
};
// @lc code=end
