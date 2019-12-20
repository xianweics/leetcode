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


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   if (nums.length === 0) return
//   if (arguments.length === 2) {
//     nums = nums.map((value, index) => {
//       return {
//         index,
//         value
//       }
//     })
//   }
//   let arr = []
//   let _num = nums[0]
//   nums.shift()
//   arr.push(_num.index)
//   let _target = target - _num.value
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i].value === _target) {
//       arr.push(nums[i].index)
//       return arr
//     }
//   }
//   // 递归查找
//   return twoSum(nums, target, true)
// }


var twoSum = function (nums, target) {
  let res = {}
  var arr = [];
  for (let i = 0; i < nums.length; i++) { // 每个人登记自己想要配对的人，让主持人记住
    res[target - nums[i]] = nums[i]
  }
  for (let j = 0; j < nums.length; j++) { // 每个人再次报数的时候，主持人看一下名单里有没有他
    if (res[nums[j]] !== undefined) {
      arr.push([nums[j], res[nums[j]]])
    }
  };
  var newArr = [];
  let len = arr.length
  for (let i = 0; i < len; i++) {
    var val = arr[i];
    console.log('val: ', val);
    console.log('i: ', i, len-i);
    if(i < (len - i)){
      if ((val).indexOf(arr[len - i]) > -1) {
      
      } else {
        newArr.push(arr[i])
      }
    } 

  }
  return newArr
}


// var twoSum = function(nums, target) {
//   var len = nums.length;
//   var hash = {};
//   var arr =[];
//   //a + b = c + d
//   for (let i = 0; i < len; i++) { // 每个人登记自己想要配对的人，让主持人记住
//     res[target - nums[i]] = nums[i]
//   }
//   for (let j = 0; j < len; j++) { // 每个人再次报数的时候，主持人看一下名单里有没有他
//     if (res[nums[j]] !== undefined) {
//       arr.push([nums[j], res[nums[j]]])
//     }
//   };
// };


console.log(twoSum([3, 2, 4, 3], 6));