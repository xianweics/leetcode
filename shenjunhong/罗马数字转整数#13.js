/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  switch (s) {
    case 1:
      return  'I'
      break;
    case 5:
      return 'V'
      break;
    case 10:
      return 'X'
      break;
    case 50:
      return 'L'
      break;

    case 100:
      return 'C'
      break;

    case 500:
      return 'D'
      break;

    case 1000:
      return 'M'
      break;
    default:
      // code block
  }
};
var val = romanToInt(1)
console.log('val: ', val);