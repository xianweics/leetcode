/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let a = s.split("");
    let arr = [];
    let trr = [];
    let brr = [];
    let res = "";
    let max = 0;
    if(a.length == 0 || a.length == 1){
        return a.join(""); 
    }
    if(a.length == 2){
        if(a[0] == a[1]){
            return a.join("");
        } else{
            return [a[0]].join("");
        }
    }
    if(a.length > 2){
        for(let j = 0;j < a.length;j++){
            for(let i = j+1;i < a.length;i++){
                if(a[j] == a[i]){
                    arr.push([j,i,i-j+1]);
                }
            }
        }
        for(let i in arr){
            let count = 0;
            let len = arr[i][2]/2;
            trr = a.slice(arr[i][0],arr[i][1]+1);
            if(parseInt(len) == 1){
                if((arr[i][2] == 2 && trr[0] == trr[1]) || (arr[i][2] == 3 && trr[0] == trr[2])){
                    brr.push(trr);
                }
            } else{
                for(let j=0;j<parseInt(len);j++){
                    if(trr[j] === trr[arr[i][2] - j-1]){
                        count++;
                    }
                }
                if(count == parseInt(len)){
                    brr.push(trr);
                }
            }
        }
        if(brr.length > 0){
            for(let i in brr){
                if(brr[i].length > max){
                    max = brr[i].length;
                    res = brr[i].join("");
                }
            }    
        } else{
            res = [a[0]].join("");
        }
        
    }
    return res;
};
// @lc code=end

