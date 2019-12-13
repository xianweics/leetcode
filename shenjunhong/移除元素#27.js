/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var arr = [];
  arr = nums
  for(let i in nums){
    console.log('i: ', i);
    if(nums[i] == val){
      arr.splice(i,1)
    }
  }
  return nums = arr;
};

// var val = removeElement([2,3,4,5,3,6], 5)
var val = removeElement([3,2,2,3],3)

console.log('val: ', val);

























