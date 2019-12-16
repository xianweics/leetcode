/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var  haystackArr = haystack;
  var needleArr = needle;
  if(!needle){
    return 0;
  }
  var len = needle.length;
  if(haystack.indexOf(needle) > -1){
    for(let j in haystack){
      if(needle.indexOf(haystack[j])> -1){
        var num  = Number(j) + len;
        var falg = true;
        for(let i = len - 1; i > 0; i--){
          if(haystackArr[num-i] == needleArr[len-i]){
            console.log('haystackArr[num-i] == needleArr[len-i]: ', haystackArr[num-i], needleArr[len-i]);
          
        }
        if(falg){
          return j
        }
      }
    };
  }
  return -1
};



// var haystack = "hello", needle = "ll"
// var haystack = "aaaaa", needle = "bba"

// var haystack = "mississippi", needle = "issip";
// var haystack = "mississippi",needle = "sipp";
var haystack =  "bbbbababbbaabbba",needle= "abb"
var val = strStr(haystack, needle)
console.log('val: ', val);
