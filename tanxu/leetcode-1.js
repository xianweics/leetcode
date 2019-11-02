// 题目
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//
// 示例:
//
//   给定 nums = [2, 7, 11, 15], target = 9
//
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度 O(n²)
// var twoSum = function(nums, target) {
//   var length = nums.length
//   for (var i = 0; i < length; i++){
//     for (var j =0; j < length; j++){
//       if (i !== j) {
//         if (nums[i] + nums[j] === target) {
//           return [i,j]
//         }
//       }
//     }
//   }
// };
  // 用一个map去保存已经遍历过了的值，js中的map查找时间未O(1) ，因为是用hash实现的
  // 所以整个算法时间复杂度为O(n)
var twoSum = function(nums, target) {
  var map = new Map()
  map.set(nums[0], 0)
  for (var i = 1; i<nums.length; i++) {
    var key = target - nums[i]
    if (map.get(key) !== undefined) {
      return [map.get(key),i]
    } else {
      map.set(nums[i], i)
    }
  }
};

console.log(twoSum([1,2,3,4], 4))

