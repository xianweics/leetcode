/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  //   var result,
  //     result1;
  //     // 27 xxvii
  //     // 12 xii
  //   for (let i = 0; i < num; i++) {
  //     result = i   //算出 各位  十位   百位 各几个
  //   }
  //   for (let i in result1) {
  //     switch (c) {
  //       case 1:
  //         result += 'I';
  //         break;
  //       case 5:
  //         result += 'V';
  //         break;
  //       case 10:
  //         result += 'X';
  //         break;
  //       case 50:
  //         result += 'L';
  //         break;
  //       case 100:
  //         result += 'C';
  //         break;
  //       case 500:
  //         result += 'D';
  //         break;
  //       case 1000:
  //         result += 'M';
  //         break;
  //     }
  //   }
  //   return result
  // };

  nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  romans = ['M', 'CM', 'D', 'CD ', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  index = 0;
  result = '';
  while (index < 13) {
    while (num >= nums[index]) {
      console.log('index: ', index);
      result += romans[index];
      num -= nums[index];
      index += 1
    }
  }
  return result
}

//

  var val = intToRoman(3);
  console.log('val: ', val);

var intToRoman = function(num) {
  var Q = ["", "M", "MM", "MMM"];
  var B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return Q[Math.floor(num/1000)] + B[Math.floor((num%1000)/100)] + S[Math.floor((num%100)/10)] + G[num%10];
};