/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count  = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            count++
        } else {
            nums[i - count] = nums[i]
        }
    }
    return nums.length - count
};
