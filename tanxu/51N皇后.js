/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let result = []
  let ary = []
  for (let i = 0; i < n; i++) {
    ary.push([])
    for (let j = 0; j < n; j++) {
      ary[i][j] = '.'
    }
  }
  fun(n, 0, ary, result)
  return result
};

function fun (n, index, resItem, result) {
  for (let i = 0; i < resItem[index].length; i++) {
    // 如果判定不能被攻击到
    if (!canBeAttacked(resItem, index, i, n)) {
      resItem[index][i] = 'Q'
      if (index === n - 1) {
        result.push(resolveResult(deepCopy(resItem)))
      } else {
        index++
        fun(n, index, deepCopy(resItem), result)
        // 还原
        index--
      }
    }
    resItem[index][i] = '.'
  }
}

function deepCopy (array) {
  let ary = []
  for (let i = 0; i < array.length; i++) {
    ary.push(array[i].slice())
  }
  return ary
}
// 只用检查同列，左上，右上是否存在Q，即可判断
function canBeAttacked (array, row, col, n) {
  // 判断同列
  for (let i = 0; i < n; i++) {
    if (array[i][col] === 'Q')
      return true;
  }
  // 判断左上
  for (let i = row - 1,j = col - 1; i >=0 && j >=0; i--,j--) {
    if (array[i][j] === 'Q') return true
  }

  // 判断右上
  for (let i = row - 1,j = col + 1; i >=0 && j >=0; i--,j++) {
    if (array[i][j] === 'Q') return true
  }
  return false
}

function resolveResult (array) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    res.push(array[i].join(''))
  }
  return res
}

console.log(solveNQueens(4))
