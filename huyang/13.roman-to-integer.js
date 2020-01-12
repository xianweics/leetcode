/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = s.split("");
    let num = 0;
    for(let i in arr){
        switch(arr[i]){
            case "I":
                arr[i] = 1;
                break;
            case "V":
                arr[i] = 5;
                break;
            case "X":
                arr[i] = 10;
                break;
            case "L":
                arr[i] = 50;
                break;
            case "C":
                arr[i] = 100;
                break;
            case "D":
                arr[i] = 500;
                break;
            case "M":
                arr[i] = 1000;
                break;
            default:
                arr[i] = 0;
                break;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] && arr[i] < arr[i+1]){
            arr[i] = -arr[i];
        }
        num += arr[i];
    }
    return num;
};
// @lc code=end

