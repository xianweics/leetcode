/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var regNumber = /\d+/;
    if(!regNumber.test(str)) return 0;
    let arr = str.replace(/^\s*|\s*$/g,"").split("");
    let brr = [];
    let p = null;
    var int = /^[0-9]*$/;
    for(let i in arr){
        if(arr[i] != " "){
            if(int.test(arr[i])){
                if(!p) p = "+";
                brr.push(arr[i]);
            } else{
                if(arr[i] == "+" || arr[i] == "-"){
                    if(p){
                        break;
                    } else{
                        p = arr[i];
                    }
                } else{
                    break;
                }
            }
        } else{
            if(brr.length > 0 || p){
                break;
            }
        }
    }
    if(brr.length > 0){
        res = p == "-" ? -brr.join("") : brr.join("");   
    } else{
        return 0;
    }
    let m = 1024*1024*2048;
    if(res >= m-1){
        return m-1;
    } else if(res < -m){
        return -m;
    } else{
        return parseInt(res);
    }
};
// @lc code=end

