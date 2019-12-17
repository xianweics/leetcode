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
  var nums = 0;
  var flag = true;
  if(divisor > 0){
    var a = divisor
  } else{
    var flag = false;
    var a = Math.abs(divisor)
    divisor = Math.abs(divisor)
  }
  while(divisor<dividend){
    divisor = divisor + a;
    console.log('divisor: ', divisor);
    nums++
  }
  console.log('nums : ~nums: ', nums, ~nums);
  return flag ? nums : ~nums
};

// var dividend = 10, divisor = 3;
var dividend = 7, divisor = -3
var val = divide(dividend, divisor);
console.log('val: ', val);