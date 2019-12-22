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

console.log(addStrings('99', '9'))
