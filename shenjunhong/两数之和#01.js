/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   const len = nums.length;
//   if(nums.lenght === 0 ) return;
//   if(nums.length === 2) return [nums[0], nums[1]];
//   let arr = [];
//   let _num = nums[0];
//   nums.shift();
//   arr.push(_num)
//   let _target = target - _num;
//   for(let i=0; i < len; i++){
//     if(nums[i] == _target){
//       arr.push(nums[i])
//       return arr
//     }
//   };

//   return twoSum(nums, target)
// };

// function inde(nums){
//   index = 0;
//   len = nums.length;
//   if(index>len){
//     return
//   }
//   return nums[index] + nums[index+1];
// }


console.log('算法测试')

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  if (nums.length === 0) return
  if (arguments.length === 2) {
    nums = nums.map((value, index) => {
      return {
        index,
        value
      }
    })
  }
  let arr = []
  let _num = nums[0]
  nums.shift()
  arr.push(_num.index)
  let _target = target - _num.value
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].value === _target) {
      arr.push(nums[i].index)
      return arr
    }
  }
  // 递归查找
  return twoSum(nums, target, true)
}

console.log(twoSum([3, 2, 4, 3], 6));