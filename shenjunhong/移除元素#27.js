/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // console.log('nums, val: ', nums, val);
  var arr = [];
  for(let i in nums){
    console.log('nums: ', nums);
    if(nums[i] == val){
      // console.log('i: ', nums[i]), i;
      // arr.slice(i,1)
    } else {
      arr.push(nums[i])
    }
  }
  return nums = arr.length;
};


// var removeElement = function(nums, val) {
//   let len = nums.length;
//   let s = 0;
//   for(let i=0;i<len;i++)
//       {
//           if(nums[i] != val)
//               {
//                   nums[s++] = nums[i];
//               }
//       }
//   return s;
// };

// var val = removeElement([2,3,4,5,3,6], 5)
// var val = removeElement([3,2,2,3],3)
var val = removeElement([0,1,2,2,3,0,4,2],2)  //01304


console.log('val: ', val);























