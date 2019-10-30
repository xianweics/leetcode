/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let a = s.split("");
    let arr = [];
    let brr = [];
    let max = 0;
    if(a.length == 0 || a.length == 1){
        return a.length; 
    }
    if(a.length == 2){
        if(a[0] == a[1]){
            return 1;
        } else{
            return 2;
        }
    }
    if(a.length > 2){
        for(let i=0; i<a.length; i++){
            for(let j=i+1; j<a.length; j++){
                if(a[i] == a[j]){
                    brr.push([i,j]);
                    break;
                } else{
                    arr.push([i,j,j-i+1]);
                }
            }
        }
        for(let i=arr.length - 1; i>0; i--){
            for(let j=0; j<brr.length; j++){
                if(arr[i][0] <= brr[j][0] && arr[i][1] >= brr[j][1]){
                    arr.splice(i,1);
                    break;
                }
            }
        }
        if(arr.length == 0){
            max = 1;
        } else{
            for(let i in arr){
                if(arr[i][2] > max){
                    max = arr[i][2] >2 ? arr[i][2] : 2;
                }
            }
        }
    }
    return max;
};
// @lc code=end

