/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = []
  fun([], nums, nums.length, result)
  return result
};

function fun (resItem, array,len, result) {
  let set = new Set()
  for (let i = 0; i < array.length; i++) {
    // 去除重复的情况
    if (set.has(array[i])) continue
    else set.add(array[i])
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

console.log(permuteUnique([1,1,2]))
