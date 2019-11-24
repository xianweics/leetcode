/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  // var ary = [];
  var reg = /\./g
  var sjh = address.replace(reg, '[.]')
  return sjh
  console.log('sjh: ', sjh);
};


var val = defangIPaddr('1.1.1.1');
console.log('defangIPaddr: ', defangIPaddr);


var defangIPaddr = function(address){
  // for(let i in address) {
  //   if(reg.test(address[i])){
  //     var j = i;
  //     ary[j] = '[';
  //     ary[j+1] = '.';
  //     ary[j+2] =  ']';
  //     i = i+2;
  //   } else {
  //     ary.push(address[i])
  //   }
  // }
  // console.log('ary: ', ary);
}
//最开始的话 想了replace替换
// 可是后面走偏了，想到直接用数组的特性去i +i +i
//后面发现不行 这样太笨了 每次都要去数数  直接用replace替换当成死的东西 直接替换不更好吗