/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  sum=nums[0];
  n=nums[0];
  for(let i=1; i<nums.length; i++) {
      if(n>0) n+=nums[i];
      else n=nums[i];
      if(sum<n)sum=n;
  }
  return sum;
};

var n = [-2,1,-3,4,-1,2,1,-5,4];
var val = maxSubArray(n);
console.log('val: ', val);

// 这道题难度不该是easy 这道题的一开始我想到的是暴力的滑窗去做，复杂度O(n^2)，显然达不到题目中要求的复杂度 这道题根据题目关键词，“最大”“连续”，可以判断是一道动态规划，附上这道题目的wiki链接https://zh.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E5%88%97%E9%97%AE%E9%A2%98 方法如下：

// 定义一个函数f(n)，以第n个数为结束点的子数列的最大和，存在一个递推关系f(n) = max(f(n-1) + A[n], A[n]);
// 将这些最大和保存下来后，取最大的那个就是，最大子数组和。因为最大连续子数组 等价于 最大的以n个数为结束点的子数列和 附代码