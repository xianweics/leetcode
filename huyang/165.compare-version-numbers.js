/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 比较版本号
// 把用“.”分隔的版本号字符串转化为数组
// 然后依次对应比较长度相同的前面部分，如果arr的元素大返回1，反之-1
// 如果arr的的长度长，且剩余部分都不0，则返回1，否则返回0
// 如果brr的的长度长，且剩余部分都不0，则返回-1，否则返回0
// 如果arr和brr长度相同，则返回0
var compareVersion = function(version1, version2) {
    let arr = version1.split(".");
    let brr = version2.split(".");
    let min = arr.length < brr.length ? arr.length : brr.length;
    for(let i=0; i<min; i++){
        if(parseInt(arr[i]) > parseInt(brr[i])) return 1;
        if(parseInt(arr[i]) < parseInt(brr[i])) return -1;
    }  
    if(arr.length > brr.length){
        let count = 0;
        for(let i=min; i<arr.length; i++){
            if(parseInt(arr[i]) == 0)   count++;
        }
        return count < arr.length - min ? 1 : 0;
    } else if(arr.length < brr.length){
        let count = 0;
        for(let i=min; i<brr.length; i++){
            if(parseInt(brr[i]) == 0)   count++;
        }
        return count < brr.length - min ? -1 : 0;
        return -1;
    } else{
        return 0;
    }
};
// @lc code=end

