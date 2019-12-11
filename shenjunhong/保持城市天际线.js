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
//在返回党当组的分析后的想要的数组




