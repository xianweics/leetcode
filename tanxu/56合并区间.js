/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return  []
    let array = [intervals[0]]
    let flag = false
    for (let i = 1 ;i < intervals.length; i++) {
        let index = 0
        for (let j = 0; j < array.length; j++) {
            if (intervals[i][0] >= array[j][0]) {
                index++
            }
        }
        array.splice(index, 0, intervals[i]);
    }

    let result = []
    let temp = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i][0] <= temp[1]) {
            temp = [temp[0],Math.max(temp[1], array[i][1])]
        } else {
            result.push(temp)
            temp = array[i]
        }
    }
    result.push(temp)
    return result
};


console.log(merge([[1,4], [2,3]]))
