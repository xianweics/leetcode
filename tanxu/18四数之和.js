/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
//
var fourSum = function(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let key = nums[i] + nums[j]
            let mapVal = map.get(key)
            if (mapVal) {
                mapVal.push([i,j])
            } else {
                map.set(key, [[i,j]])
            }
        }
    }
    let result = []
    // 用于去重
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let key = target - nums[i] - nums[j]
            let val = map.get(key)
            if (val) {
                val.forEach((item) => {
                    if (i !== item[0] && i !== item[1] && j !== item[0] && j !== item[1]) {
                        let ary = [nums[i], nums[j], nums[item[0]], nums[item[1]]].sort((a, b) => {
                            return a - b
                        })
                        let str = ary.toString()
                        if (!set.has(str)) {
                            set.add(str)
                            result.push(ary)
                        }
                    }
                })
            }
        }
    }
    return result
};
console.log(fourSum([1,0,-1,0,-2,2], 0))
