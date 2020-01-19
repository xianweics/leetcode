/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {
//     //回朔法
//     var res = [];
//     var n = candidates.length;
//     let tmpPath = [];
//     const start = 0;
//     function backTrack(tmpPath, target, start){
//       if(target < 0){
//         return 
//       }
//       if(target == 0){
//         res.push(tmpPath)
//         return 
//       }
//       for(let i = start; i < n ; i++){
//         tmpPath.push(candidates[i])
//         // console.log('tmpPath: ', tmpPath.slice(), tmpPath);
//         backTrack(tmpPath.slice(), target - candidates[i], i)
//         tmpPath.pop()
//       }
//     }

//     backTrack(tmpPath, target, start)
//     return res
// };


//dsf 回溯 + 剪枝

var combinationSum = function(candidates, target) {
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




var candidates = [2,3,7], target = 7;
// candidates = [2,3,5], target = 8
/**
 * [
    [7],
    [2,2,3]
  ]
 * 
 */

 var val = combinationSum(candidates, target);
 console.log('val: ', val);