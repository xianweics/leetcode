/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   if(0<= x && x <10) return true;
//   if(x< 0) return false;
//   const num = x.toString() ;  
//   const len = num.length;
//   const arr = num.split('');
//   const newArr1 = [];
//   const newArr2 = [];
//   let flag;
//   let j;
//   let cen;
//   if(len%2 == 0){
//     cen = Math.ceil(len/2)
//     j = false;
//     console.log('cen: ', cen);
//   } else {
//     cen = Math.ceil(len/2)-1
//   }
//   for(let i = 0; i<= cen;i ++){
//     newArr1.push(arr[i])    
//   }
//   for(let i = (len-1); i >= cen; i--){
//     newArr2.push(arr[i])
//   }
//   console.log('cen-1: ', cen-1);
  
//   for(let i = 0; i <= cen-1; i++ ){
//     if(newArr1[i] == newArr2[i]) {
//       console.log('newArr1[i] == newArr2[i]: ', newArr1[i],newArr2[i]);
//       flag =true;
//     } else {
//       console.log('newArr1[i] == newArr2[i]: ', newArr1[i],newArr2[i]);
//       if(i == cen-1 && !j){
//         flag = false;
//       } else {
//         return flag = false;
//       }
//     }
//   }
//   return flag;
// };


//新的解法
var isPalindrome = function(x) {
  if(0<= x && x <10) return true;
  if(x< 0) return false;
  let cur = 0;
  let num = x;  
  while(num >=1) {
    console.log('num: ', num);
    cur = cur * 10 + num % 10;
    num = Math.floor(num / 10)
    console.log('num: ', num);
  }

  console.log('cur: ', cur);
  return cur == x;
};
//1221  %10 122 
// 122 %10 12
//12 %10 1

// var isPalindrome = function (x) {
//   if(0<= x && x <10) return true;
//   if(x< 0) return false;
//   let s = 0;
//   let y = 0;
//   s = x;
//   while (s!=0) {
//     y = y * 10 + s % 10;
//     s = Math.floor(s / 10)
//   }
//   return y == x;
// };
// const flag = isPalindrome(123521);
// const flag = isPalindrome(10);

// const flag = isPalindrome(-10);
const flag = isPalindrome(1221); // true 为回文

// const flag = isPalindrome(-121);
// const flag = isPalindrome(8);

// const flag = isPalindrome(22);

// const flag = isPalindrome(9);

console.log('flag: ', flag);



