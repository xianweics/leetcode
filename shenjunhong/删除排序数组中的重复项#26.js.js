/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     var set = new Set(nums);
//     console.log('set: ', set);
//     var index = 0;
//     for (var item of set) {
//       nums[index] = item;
//       index++;
//     }
//     return set.size
// }


    //1.不能产生新的数组

    // 原地算法，就是不依赖额外的资源或者依赖少数的额外资源，仅依靠输出来覆盖输入的一种算法
    var removeDuplicates = function(nums) {
      const length = nums.length
      if(length == 0) return 0
      let slow = 0
      for(let fast = 1; fast < length; fast++) {
          if(nums[slow] !== nums[fast]) {
              slow++
              nums[slow] = nums[fast]
          }
      }
      return slow + 1
  };


    // var arr = [1,2,4,4,3,3,1,5,3];
    var arr = [1, 1, 2];

    // var arr = [1, 1, 2];
    var val = removeDuplicates(arr);
    console.log('val: ', val);