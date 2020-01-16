/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  //回朔法
  var res = [];
  var n = candidates.length;
  let tmpPath = [];
  const start = 0;
  candidates = candidates.sort((a,b) => {return a - b})
  function backTrack(tmpPath, target, start){
    if(target == 0){
      res.push(tmpPath)
      return 
    }
    for(let i = start; i < n ; i++){
      if(target < candidates[i]) break;
      tmpPath.push(candidates[i])
      backTrack(tmpPath.slice(), target - candidates[i], i)
      tmpPath.pop()
    }
  }

  backTrack(tmpPath, target, start)
  return res
};

var candidates = [10,1,2,7,6,1,5], target = 8;
// var candidates = [2,3,7], target = 7;

var val = combinationSum2(candidates, target);
console.log('val: ', val);
/**
 * [
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
 */