/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let arr = []
  for(let i = 1; i <= n; i++){
      arr.push(i)
  }
  let res = []

  //将我们[1,2,3,4]，，，n 进行 k 组合
  function helper(arr, tmp){
      if(tmp.length === k){
          res.push(tmp)
          return
      }
      //这一步产生arr.lengt h
      for(let i = 0; i < arr.length; i++){
          let array = arr.slice(i+1)  //进行一个个排列
          helper(array, [...tmp, arr[i]])
      }
  }
  helper(arr,[])
  return res
};

var n = 4, k = 2
/**
 * [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
  ]
 * 
 */

 var val = combine(3, 2);
 console.log('val: ', val);
