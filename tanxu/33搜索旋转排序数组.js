var search = function(nums, target) {
    if (nums.length === 0) return -1
    if (nums.length === 1) return target === nums[0] ? 0 : -1
    let a1,a2 = []
    let index = 0
    while (nums.length >= 2) {
        let len = nums.length
        // 偶数个 直接二分
        if (len % 2 === 0) {
            if (nums[len/2 - 1] === target) return index + len/2 - 1
            if (nums[len/2] === target) return index + len/2
            if (nums[0] < nums[len/2 - 1]) {
                if (nums[0] <= target && nums[len/2 - 1] >= target) {
                    nums = nums.slice(0, len/2)
                } else {
                    nums = nums.slice(len/2, len)
                    index += len/2
                }

            } else {
                if (nums[len/2] <= target && nums[len - 1] >= target) {
                    nums = nums.slice(len/2, len)
                    index += len/2
                } else {
                    nums = nums.slice(0, len/2)
                }
            }
        } else { // 奇数个
            if (nums.length === 3)
            {
                for (let i = 0; i < nums.length; i++) {
                    if (nums[i] === target) return index + i
                }
                return -1
            }
            if (nums[(len - 1)/2] === target) return index + (len - 1)/2

            if (nums[0] < nums[(len - 1)/2 - 1]) {
                if (nums[0] <= target && nums[(len - 1)/2 - 1] >= target) {
                    nums = nums.slice(0, (len - 1)/2)
                } else {
                    nums = nums.slice((len - 1)/2 + 1, len)
                    index += (len - 1)/2 + 1
                }

            } else {
                if (nums[(len - 1)/2 + 1] <= target && nums[len - 1] >= target)
                {
                    nums = nums.slice((len - 1)/2 + 1, len)
                    index += (len - 1)/2 + 1
                } else {
                    nums = nums.slice(0, (len - 1)/2)
                }

            }
        }
    }
    return -1
};

console.log(search([4,5,6,7,8,9,1,2,3], 1))
