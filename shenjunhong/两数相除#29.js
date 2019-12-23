/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  //我想到的是不能使用乘法、除法和mod运算
  // 那么我可以使用加法 加到超过 记下值
  //判断双方的正负
  if(divisor == 0){
    return 0;
  }

  if(divisor == dividend){
    return 1
  }
  var nums = 0;
  var flag = true;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    flag = false;
  }
  var b = Math.abs(dividend)
  var a = Math.abs(divisor)
  divisor = Math.abs(divisor)

  if(!flag && a==b){
    return -1
  }
  while(divisor<b){
    divisor = divisor + a;
    nums++
  }
  if (flag && nums > (Math.pow(2, 31) - 1)) {
      return Math.pow(2, 31) - 1;
  } else if (!flag && nums < -Math.pow(2, 31)) {
      return -Math.pow(2, 31);
  }
  if(flag) {
      return nums;
  } else {
      return -nums;
  }  
};

// var dividend = 10, divisor = 3;
// var dividend = 7, divisor = -3;
// var dividend = -7, divisor = 3;
// var dividend = -1, divisor = 1;
// var dividend = -2147483648, divisor = -1;
var dividend = 2147483647, divisor = 1;



var val = divide(dividend, divisor);
console.log('val: ', val);

var divide = function (dividend, divisor) {
  let result = 0, sign = 1, mul = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
      sign = -1;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  divisor2 = divisor;

  while (dividend >= divisor2) {
      if (dividend > (divisor2 + divisor2)) {
          divisor2 += divisor2;
          mul += mul;
      }
      dividend -= divisor2;
      result += mul;
  }
  while (dividend >= divisor) {
      dividend -= divisor;
      result += 1;
  }

  if (sign == 1 && result > (Math.pow(2, 31) - 1)) {
      return Math.pow(2, 31) - 1;
  } else if (sign == -1 && result < -Math.pow(2, 31)) {
      return -Math.pow(2, 31);
  }
  if (sign == 1) {
      return result;
  } else {
      return -result;
  }
};

var divide = function(dividend, divisor) {
  let consult = dividend / divisor;
  if(consult >= Math.pow(2, 31) - 1)
      return Math.pow(2, 31) - 1;
  else if(consult <= Math.pow(2, 31) * (-1))
      return Math.pow(2, 31) * (-1);
  else if(consult > 0)
      return Math.floor(consult);
  else
      return Math.ceil(consult);
};