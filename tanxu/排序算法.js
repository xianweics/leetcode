// 选择排序
function selectionSort (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}

// console.log(selectionSort([3,5,2,9,10,7,8,1,4,6]))


// 冒泡排序
function bubbleSor(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j+1] < nums[j]) {
                let temp = nums[j + 1]
                nums[j+1] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}

// console.log(bubbleSor([3,5,2,9,10,7,8,1,4,6]))


// 插入排序
function insertSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let index = 0
        while(nums[i] > nums[index] && index < i) {
            index++
        }
        let temp = nums[i]
        for (let j = i; j >= index; j--) {
            nums[j] = nums[j - 1]
        }
        nums[index] = temp
    }
    return nums
}
// console.log(insertSort([3,5,2,9,10,7,8,1,4,6]))

// 希尔排序
function shellSort(array)
{
    let len = array.length
    let temp = null
    let gap = len / 2
    while (gap > 0) {
        for (let i = gap;i < len; i++) {
            temp = array[i];
            let preIndex = i - gap;
            while (preIndex >= 0 && array[preIndex] > temp) {
                array[preIndex + gap] = array[preIndex];
                preIndex -= gap;
            }
            array[preIndex + gap] = temp;
        }
        gap = Math.floor(gap/2);
    }
    return array;
}

// console.log(shellSort([3,5,2,9,10,7,8,1,4,6]))

// 归并排序
function mergeSort(nums) {
    let len = Math.floor(nums.length/2)
    return merge(nums.slice(0,len), nums.slice(len, nums.length))
}

function merge(ary1, ary2) {
    if (ary1.length > 2) {
        let len = Math.floor(ary1.length/2)
        let a1 = ary1.slice(0,len)
        let a2 = ary1.slice(len, ary1.length)
        ary1 = merge(a1, a2)
    } else if (ary1.length === 2) {
        if (ary1[0] > ary1[1]) {
            let temp = ary1[0]
            ary1[1] = ary1[0]
            ary1[0] = temp
        }
    }
    if (ary2.length > 2) {
        let len = Math.floor(ary2.length/2)
        let a1 = ary2.slice(0,len)
        let a2 = ary2.slice(len, ary2.length)
        ary2 = merge(a1, a2)
    } else if (ary2.length === 2) {
        if (ary2[0] > ary2[1]) {
            let temp = ary2[0]
            ary2[1] = ary2[0]
            ary2[0] = temp
        }
    }
    let result = []
    let index1 = 0
    let index2 = 0
    while(index1 + index2 < ary1.length + ary2.length) {
        if (ary1[index1] > ary2[index2] || ary1[index1] === undefined) {
            result.push(ary2[index2])
            index2++
        } else {
            result.push(ary1[index1])
            index1++
        }
    }
    return result
}

// console.log(mergeSort([3,5,2,9,10,7,8,1,4,6]))

// 快速排序

function quickSort(nums) {
    return qSort(nums)
}

function qSort(nums) {
    let mid = nums[0]
    let small = []
    let big = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < mid) {
            small.push(nums[i])
        } else {
            big.push(nums[i])
        }
    }
    if (small.length === 0 && big.length === 0) {
        return [mid]
    }
    if (small.length === 0) {
        return [mid].concat(qSort(big))
    } else if (big.length === 0) {
        return qSort(small).push(mid)
    } else {
        small = qSort(small)
        big = qSort(big)
        small.push(mid)
        return small.concat(big)
    }
}

console.log(quickSort([1,5,2,9,10,7,8,3,4,6]))
