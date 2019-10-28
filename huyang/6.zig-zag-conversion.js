/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var group = function(array, subGroupLength) {
    let index = 0;
    let newArray = [];
    while(index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
}
var convert = function(s, numRows) {
    let trr = [];
    let g = numRows + numRows - 2;
    if(numRows == 1){
        return s;
    } else{
        for(let i=0;i<s.length;i++){
            let o = i%g;
            let p = g - o;
            if(o<numRows){
                trr.push(s[i]);
            }else{
                let rr = new Array(numRows);
                rr[p] = s[i];
                trr = trr.concat(rr);
            }
        }
    }
    let arr = group(trr, numRows);
    let crr = [];
    for(let j=0;j<numRows;j++){
        for(let i in arr){ 
            crr.push(arr[i][j]);
        }
    }
    return crr.join("");
};
// @lc code=end

