/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // if (nums.length == 0 || nums[0] > target)
  //   return 0;
  // if (nums[nums.length - 1] < target)
  //   return nums.length;
  // //先二分查找，找到了就返回
  // low = 0;
  // hight = nums.length - 1;
  // mid = 0;
  // while (low <= hight) {
  //   mid = (low + hight) / 2;
  //   if (nums[mid] < target) {
  //     low = mid + 1;
  //   } else if (nums[mid] > target) {
  //     hight = mid - 1;
  //   } else {
  //     return mid;
  //   }
  // }
  // //找不到再判断与nums[mid]大小，返回索引
  // return nums[mid] > target ? mid : mid + 1;

};

var searchInsert = function(nums, target) {
  //遍历数组
  for (var i = 0,len = nums.length; i < len; i++) {
    //这里处理值被插在数组头和数组中的情况
    if (nums[i] >= target ) {
      return i;
    }
  }
  //这里处理值被插在数组尾的情况
  return len;
}



const val = searchInsert([1, 3, 5, 6], 5)
console.log('val: ', val);