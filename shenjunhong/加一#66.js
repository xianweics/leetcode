/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length;
  for(let i = len - 1; i >= 0; i--) {
    //筛选出不是9 99 999 9999的
    digits[i]++;
    digits[i] %= 10;
    if(digits[i]!=0)
        return digits;
  }
  console.log('[...Array(len + 1)]: ', [...Array(len + 1)]); //生成len +1 个数组项
  digits = [...Array(len + 1)].map(_=>0);;
  console.log('digits: ', digits);
  digits[0] = 1;
  return digits;
}


// var arr = [4,3,2,1]
var arr = [4,3,2,9]
var arr = [9,9,9]

var val = plusOne(arr)
console.log('val: ', val);



// var plusOne = function(digits) {
//   const len = digits.length-1;
//   let val = (digits[len])+1;
//   if(val>9){
//     val = [1, 0]
//   } else {
//     val = [val]
//   }
//   var b=[];
//   b=digits.concat();
//   b.pop();
//   var d = b.concat([...val])
//   return d
// };