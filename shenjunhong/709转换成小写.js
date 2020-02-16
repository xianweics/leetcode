/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.toLocaleLowerCase()
};

var  str = "Hello";
var val = toLowerCase(str);
console.log('val: ', val);
// 输出: "hello"