/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
  //想了下思路， 以数组的形式 相加，进位， 逢二进位
//   const aArr =a.split('').reverse();
//   console.log('aArr: ', aArr);
//   const bArr = b.split('').reverse();
//   if(a>b){
//     for(let i = aArr.length -1; i< aArr.length; i++){
//       if(aArr[i] != 0 && bArr[i] != 0){
//         aArr[i--]++;

//       }   
//     }
//   } else {
//     for(let i = bArr.length -1; i< bArr.length; i++){

//     }
//   }
//   return a ,b
// };

var addBinary = function(a, b) {
  const bArr = b.split('').reverse();
  const aArr =a.split('').reverse();
  //这个写法挺有趣的
  var [lena, lenb, carry, result] = [a.length, b.length, 0, []];

  var lenMax = Math.max(lena,lenb);
  for (var i = 0; i < lenMax; i++) {
      //每一项的值为两数组对应项数字和加上进位值
      //括号前面的加号代表类型转换，转换不了就置0
      var itemSum = +(a2Arr[i] || 0) + +(b2Arr[i] || 0) + carry;
      //根据每项值来定义结果位和进位
      if(itemSum == 0){
          result[i] = 0;
          carry = 0;
      }else if(itemSum == 1){
          result[i] = 1;
          carry = 0;
      }else if(itemSum == 2){
          result[i] = 0;
          carry = 1;
      }else{
          result[i] = 1;
          carry = 1;
      }
  }
  //若最高位发生进位，插入1
  if (carry == 1) result.push(1);
  //反序并连接为字符串
  return result.reverse().join("");

};

var a = "11", b = "1";  // 100
var a = "1010", b = "1011";  // 10101

var val = addBinary(a, b)
console.log('val: ', val);
















