var firstMissingPositive = function(nums) {
    let ary = []
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] >= 0) {
            ary[nums[i]] = true
        }
    }
    if (ary.length === 0) return 1
    for (let i = 1; i < ary.length; i++) {
        if (!ary[i]) {
            return i
        }
    }
    return ary.length
};

console.log(firstMissingPositive([3,4,-1,1]))
