/**
 * @param {number} num
 * @return {number}
 */
// var maximum69Number  = function(num) {
//   console.log('num: ', num);
//   var val =''

//   val=(num+'').replace('6', 9)
//   return val





// };

const maximum69Number = num => Number(num.toString().replace('6', '9'));


var num = 9996;
var val = maximum69Number(num);
console.log('maximum69Number: ', val);