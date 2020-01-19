/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 1、二分搜索的精髓： 
  // （1）单调性和计算内容重复 
  // （2）求答案的问题改成猜答案 
  let low = 0, high = x;
  let ans = 0;
  while(low <= high) {
    let mid = (low + high) / 2;
      if (mid * mid <= x) {
          ans = mid;
          low = mid + 1;
      } else if(mid * mid > x) {
          high = mid - 1;
      }
  }
  return Math.floor(ans);


  Math.floor(Math.sqrt(x));

  // var i = 1;
  // while(x>=i*i){
  //     i++;
  // }
  // return i-1;
  //方法2 ES6
  // return Math.floor(x ** 0.5);//向下取整 x^0.5


};

var  val = mySqrt(3);
console.log('val: ', val);