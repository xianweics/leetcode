var searchInsert = function(nums, target) {
    let index = 0
    if (nums.length === 0) return 0

    while (nums.length > 1) {
        let k = (nums.length / 2).toFixed(0) - 1
        if (nums[k] === target) {
            return index + k
        } else if (nums[k] > target){
            nums = nums.slice(0, k + 1)
        } else if (nums[k] < target) {
            nums = nums.slice(k + 1, nums.length)
            index = index + k + 1
        }
    }
    if (nums.length === 1) {
        return nums[0] >= target ? index : index + 1
    }
    return index
};

console.log(searchInsert([1,3,5,6], 2))
