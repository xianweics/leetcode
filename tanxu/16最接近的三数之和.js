/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let minDistance = Number.MAX_VALUE
    let result = 0
    nums = nums.sort((a,b) => { return a - b})
    for (let i = 0; i < nums.length ; i++) {
        let l = i+1
        let r = nums.length - 1
        while (l < r)  {
            let sum = nums[i] + nums[l] + nums[r]
            let val = sum - target
            let distance = sum - target < 0 ? target - sum : sum - target
            if (distance < minDistance) {
                minDistance = distance
                result = sum
            }
            if (val === 0) {
                return sum
            } else if (val > 0) {
                r--
            } else {
                l++
            }
        }
    }
    return result
};

console.log(threeSumClosest([-1,2,1,-4],1))
