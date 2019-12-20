var multiply = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let sum = ''
  let zeroi = ''
  for (let i = 0; i < len1; i++) {
    let zeroj = ''
    let sumj = ''
    for (let j = 0; j < len2; j++) {
      let num = parseInt(num1[len1 - 1 - i] || 0) * parseInt(num2[len2 - 1 - j] || 0)
      if (num > 0) {
        sumj = addStrings(sumj, num + zeroj)
      }
      zeroj += '0'
    }
    if (sumj > 0) {
      sum = addStrings(sum, sumj + zeroi)
    }
    zeroi += '0'
  }
  return sum || '0'
};

// 两两字符串数字相加
var addStrings = function(num1, num2) {
  let len = Math.max(num1.length, num2.length)
  let len1 = num1.length
  let len2 = num2.length
  let sum = ''
  let carry = 0
  for (let i = 0; i <len; i++) {
    let num = parseInt(num1[len1 - 1 - i] || 0) + parseInt(num2[len2 - 1 - i] || 0) + carry
    carry = Math.floor(num / 10)
    sum = num % 10 + sum
  }
  return carry ? carry + sum : sum
};


console.log(multiply('98', '789'))
console.log(98*789)
