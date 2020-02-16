/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
   if ([6, 28, 496, 8128, 33550336].includes(num)) return true
   else return false
};

// var val = checkPerfectNumber(28);
var val = checkPerfectNumber(29)

console.log('val: ', val);