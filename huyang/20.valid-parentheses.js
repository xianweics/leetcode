/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// note: 栈。先进先出
var isValid = function(s) {
    if(!s) return true;
    let arr = s.split("");
    let res = [];
    if(arr.length % 2 != 0){
        return false;
    } else{
        for(let i=0;i<arr.length;i++){
            if(arr[i]=="(" || arr[i]=="{" || arr[i]=="["){
                res.push(arr[i]);
            } else{
                switch(arr[i]){
                    case ")":
                        if(res[res.length-1] == "("){
                            res.pop();
                        } else{
                            return false;
                        }
                        break;
                    case "]":
                        if(res[res.length-1] == "["){
                            res.pop();
                        } else{
                            return false;
                        }
                        break;
                    case "}":
                        if(res[res.length-1] == "{"){
                            res.pop();
                        } else{
                            return false;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
    if(res.length == 0){
        return true;
    } else{
        return false;
    }
};
// @lc code=end

