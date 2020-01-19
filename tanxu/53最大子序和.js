/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        result = Math.max(sum, result)
    }
    return result
};
