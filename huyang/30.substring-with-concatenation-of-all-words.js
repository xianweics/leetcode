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
// 数组全排列成字符串
var pailie = function(arr, tmp, set){       
    if(arr.length == 0) set.add(tmp);
    for(let i=0; i<arr.length; i++){
        let newArr = [...arr];
        newArr.splice(i, 1);
        pailie(newArr, tmp + arr[i], set);
    }
}   
var findSubstring = function(s, words) {
    if(!s || words.length==0) return []; 
    let makeup = new Set();     // words组成的所有可能的子串的集合
    let res = new Set();        // 结果集
    // 求子串
    if(words.length == 1){
        makeup = [...words];
    } else if(words.length == 2){
        makeup = [words[0]+words[1],words[1]+words[0]];
    } else{
        pailie(words, '', makeup);
        makeup = [...makeup];
    }
    // 寻找字符串中所有子串出现的位置
    for(let i in makeup){
        let temp = s.indexOf(makeup[i]);
        while(temp > -1){
            res.add(temp);
            temp = s.indexOf(makeup[i], temp + 1);   
        }
    }
    return [...res];
};
// @lc code=end

