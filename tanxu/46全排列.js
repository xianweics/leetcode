/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []
  fun([], nums, nums.length, result)
  return result
};

function fun (resItem, array,len, result) {
  for (let i = 0; i < array.length; i++) {
    resItem.push(array[i])
    if (resItem.length === len) {
      // 深复制一个数组
      result.push(resItem.slice())
    } else {
      let copy = array.slice()
      copy.splice(i,1)
      fun(resItem.slice(), copy, len, result)
    }
    resItem.pop()
  }
}

console.log(permute([1,2,3]))
