/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let end = 0;
  let maxPosition = 0;
  let steps = 0;
  for(let i = 0; i < nums.length - 1; i++){
    //找能跳的最远的
    maxPosition = Math.max(maxPosition, nums[i] + i);
    if( i === end){
      //遇到边界，就更新边界，并且步数加一
      end = maxPosition;
      steps++;
    }
  }
  return steps;
};

console.log(jump([2,4,3,2,1,2]))

