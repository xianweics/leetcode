var searchRange = function(nums, target) {
    let start = -1
    let end = -1
    let index = 0
    if (nums.length === 0) return [-1, -1]
    if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1]
    while (nums.length > 0) {
        let k = (nums.length / 2).toFixed(0) - 1
        if (nums[k] === target) {
            start = end = index + k
            let i = k, j = k
            while (nums[--i] === target) {
                start--
            }

            while (nums[++j] === target) {
                end++
            }
            return [start, end]
        } else if (nums[k] > target) {
            nums = nums.slice(0, k + 1)
        } else {
            index = index + k + 1
            nums = nums.slice(k + 1, nums.length)
        }
        if (nums.length === 1) return nums[0] === target ? [index, index] : [-1, -1]
    }
    return [-1, -1]
};

console.log(searchRange([0,0,2,3,4,4,4,5]
    ,5))
