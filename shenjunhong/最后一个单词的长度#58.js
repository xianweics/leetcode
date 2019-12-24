/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const S = s.trim();
    const arr = S.split(' ') 
    var len = arr.length -1
    return arr[len].length == 0 ? 0 : arr[len].length
};


// var str = "Hello ";
var str = 'a ';
// var str = "Hello World";
var val = lengthOfLastWord(str)
console.log('val: ', val);
// 输出: 5

