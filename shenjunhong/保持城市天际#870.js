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


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let firArr = [], secArr = [], thiArr =[], fouArr =[];
  let n = grid.length;
  new arr = []
  let obj = []
  let newArr2 =[];
  for(let i of grid){
    console.log('i: ', i);
    newArr2.push(Math.max(...i))
    firArr.push(i[0])
    secArr.push(i[1])
    thiArr.push(i[2])
    fouArr.push(i[3])
    console.log('newArr2: ', newArr2);

    
  }
  const MaxFir = Math.max(...firArr)
  const MaxSec = Math.max(...secArr)
  const MaxThi = Math.max(...thiArr)
  const MaxFou = Math.max(...fouArr); 
  
  const newArr = [MaxFir, MaxSec, MaxThi, MaxFou]
  console.log('newArr: ', newArr);



   
  obj.push(firArr, secArr, thiArr, fouArr)
  return obj
};



grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]

const val = maxIncreaseKeepingSkyline(grid);
console.log('val: ', val);


//根据leecode 上面的分析 我们去最大数
//the new grid

//我们根据取每组的第一位 第二位 第三位 第四位 拼成新数组
//在返回当组的分析后的想要的数组



