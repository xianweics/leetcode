/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  console.log('s: ', s);
  //1.原地修改  所以 不能新建数组
  //2.使用O(1)  
  return s.reverse();
};

// var a = ["h","e","l","l","o"];
var a  = 'hello'
var val = reverseString(a)
console.log('val: ', val);