/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 1、二分搜索的精髓： 
  // （1）单调性和计算内容重复 
  // （2）求答案的问题改成猜答案 
  // var i = 1;
  // while(x>=i*i){
  //     i++;
  // }
  // return i-1;
  //方法2 ES6
  return Math.floor(x ** 0.5);//向下取整 x^0.5


};

var  val = mySqrt(3);
console.log('val: ', val);