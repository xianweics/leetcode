/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
      
  let arr3=[];
      for(let i of A){
        let arr = i.reverse();
        console.log('arr: ', arr);
        let  arr1 =[];
        for(let j of arr){
          arr1.push(j = j===1 ? 0 : 1 )
        }
        arr3.push(arr1)
      }
      return arr3
 };
var arr =  [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]; 
 var val = flipAndInvertImage(arr)
 console.log('val: ', val);

//可以用异或 或者三目运算符

//  class Solution {
//   public int[][] flipAndInvertImage(int[][] A) {
//       int x=A.length,y=A[0].length;
//       int[][] B = new int[x][y];
//       for (int i=0;i<x;i++){
//           for (int j=0;j<y;j++){
//               B[i][y-j-1]=1-A[i][j];   //从后往前赋值，同时取反
//           }
//       }
//       return B;
//   }
// }