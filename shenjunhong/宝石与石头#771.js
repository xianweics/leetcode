/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const newSet  = [...new Set(J)];
    let len = 0;
    for(let i of newSet){
      for(let j of S){
        if(i == j){
          len++
        }
      }
    }
    return len;
};

// var J = 'aA';
// var S = 'aaaa';


var J = 'aA';
var S = 'aabA';
var val  = numJewelsInStones(J, S)
console.log('val: ', val);