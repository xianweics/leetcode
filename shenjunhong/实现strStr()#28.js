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
        var nums = 0;
        for(let a = 0; a< len; a++){
          if(haystackArr[Number(j)+a] == needleArr[a]){
            nums++
          }
        }
        if(nums == len){
          return j
        }
      }
    };
  }
  return -1
};




// var haystack = "hello", needle = "ll"  //2
// var haystack = "aaaaa", needle = "bba"

// var haystack = "mississippi", needle = "issip"; //5
var haystack = "mississippi",needle = "sipp"; // 6
// var haystack =  "bbbbababbbaabbba",needle= "abb"; //6
var val = strStr(haystack, needle);
console.log('val: ', val)
