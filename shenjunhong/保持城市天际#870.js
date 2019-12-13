/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let row = [];
  let col = [];
  let total = 0;
  for (let i = 0; i < m; i++) {
    let max = grid[i][0];
    for (let j = 0; j < n; j++) {
      let n = grid[i][j];
      console.log('n: ', n);
      total += n;
      if (n > max) {
        max = n;
      }
    }
    row.push(max);
  }
  for (let i = 0; i < n; i++) {
    let max = grid[0][i];
    for (let j = 0; j < m; j++) {
      let n = grid[j][i];
      if (n > max) {
        max = n;
      }
    }
    col.push(max);
  }
  let result = 0;
  for (let i = 0; i < m; i++) {
    let temp = row[i];
    for (let j = 0; j < n; j++) {
      if (temp < col[j]) {
        result += temp;
      } else {
        result += col[j];
      }
    }
  }
  console.log(result, total);
  return result - total;
};

// [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]

// [ [3, 0, 8, 4], 
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// [9, 4, 8, 7]
// [8, 7, 9, 3]


gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ];

          
const  val =  maxIncreaseKeepingSkyline(gridNew)
console.log('val: ', val);



