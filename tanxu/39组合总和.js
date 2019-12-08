var combinationSum = function(candidates, target) {
    let result = []
    for (let i = 0; i < candidates.length; i++) {
        let sum = 0
        let ary1 = []
        ary1.push(candidates[i])
        sum += candidates[i]
        let ary2 = Array.from(candidates).splice(i,candidates.length)
        fun(ary1,ary2,sum,target)
    }

    function fun(ary1, ary2,sum, target) {
        console.log(ary1, ary2)
        if (sum < target) {
            for (let i = 0; i < ary2.length; i++) {
                let a1 = Array.from(ary1)
                a1.push(ary2[i])
                let a2 = Array.from(ary2).splice(i,ary2.length)
                fun(a1,a2, sum + ary2[i], target)
            }
        } else if (sum === target) {
            result.push(Array.from(ary1))
        }
    }
    return  result
};



console.log(combinationSum([1,2,3],6))

