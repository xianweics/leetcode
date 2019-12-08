/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[i] = nums[j]
            i++
        }
    }
    return i + 1
};

console.log()
