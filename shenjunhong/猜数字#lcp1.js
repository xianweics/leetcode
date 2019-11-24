/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  var len = 0;
  for (let i in guess) {
    if (guess[i] != 1 && guess[i] != 2 && guess[i] != 3) {
      console.log('guess[i]: ', guess[i]);
      return false
    }
    if (guess[i] === answer[i]) {
      len++
    }
  }
  return len
};
var guess = [2, 3, 1]
var answer = [3, 2, 1]
var val = game(guess, answer)
console.log('val: ', val);