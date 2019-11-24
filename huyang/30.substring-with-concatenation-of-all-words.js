/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// 串联所有单词的子串
// 超时
var newArr = function(tmp,arr){		// 求全排列
    let res = [];
    function inner(tmp){
        for(let i in arr){
            if(tmp.length == arr.length-1){
                if(tmp.indexOf(arr[i])<0){
                    res.push(tmp.concat(arr[i]));
                }
                continue;
            }
            if(tmp.indexOf(arr[i]) < 0){
                inner(tmp.concat(arr[i]));
            }
        }
    }
    inner(tmp);
    return res;
};
var findSubstring = function(s, words) {
    if(!s || words.length==0) return []; 
    let makeup = [];        // words组成的所有可能的子串的集合
    let res = new Set();    // 结果集
    // 求子串
    if(words.length == 1){
        makeup = [...words];
    } else if(words.length == 2){
        makeup = [words[0]+words[1],words[1]+words[0]];
    } else{
        let index = Array.from({length: words.length}, (a, i) => i);
        let arr = newArr([],index);
        let tmp = '';
        for(let i in arr){
            for(let j in words){
                tmp +=words[arr[i][j]];
            }
            if(makeup.indexOf(tmp)<0)  makeup.push(tmp);
            tmp = '';
        }
    }
    // 寻找字符串中所有子串出现的位置
    for(let i in makeup){
        let temp = s.indexOf(makeup[i]);
        while(temp > -1){
            res.add(temp);
            temp = s.indexOf(makeup[i], temp + 1);   
        }
    }
    return Array.from(res);
};
// @lc code=end

