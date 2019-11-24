var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort(function (a,b) {
        return a - b
    })
    let result = []
    for (let i = 0; i < candidates.length; i++) {
        // 去重处理
        if (candidates[i] === candidates[i -1]) continue
        let sum = 0
        let ary1 = []
        ary1.push(candidates[i])
        sum += candidates[i]
        let ary2 = Array.from(candidates).splice(i + 1,candidates.length)
        fun(ary1,ary2,sum,target)
    }

    function fun(ary1, ary2,sum, target) {
        if (sum < target) {
            for (let i = 0; i < ary2.length; i++) {
                // 去重处理
                if (ary2[i] === ary2[i - 1]) continue
                let a1 = Array.from(ary1)
                a1.push(ary2[i])
                let a2 = Array.from(ary2).splice(i + 1,ary2.length)
                fun(a1,a2, sum + ary2[i], target)
            }
        } else if (sum === target) {
            result.push(Array.from(ary1))
        }
    }
    return  result
};

console.log(combinationSum2([1,1,1,1,1,3,2], 6))
