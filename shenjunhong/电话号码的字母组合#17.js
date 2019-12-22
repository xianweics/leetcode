/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function(digits) {
//   console.log('digits: ', digits.length);

//     //根据 9 宫格上面的字母做对应的排序
//     // 例如 2 3  abc, def
//     // 我们是否要建立一张映射表
//     var hash  = {
//       2: ['a', 'b', 'c'],
//       3: ['d', 'e', 'f'],
//       4: ['g', 'h', 'f'],
//       5: ["j", "k", "l"],
//       6: ["m", "n", "o"],
//       7: ["p", "q", "r", "s"],
//       8: ["t", "u", "v"],
//       9: ["w", "x", "y", 'z'],
//     }
//     var len = digits.length;
//     var arr =[];
//     var lenNum = [];
//     // 当数组大于等于2个的时候
//     if(len >= 2){
//         // 第一个数组的长度
//         for(let i = 0; i < len; i++){
//           arr[i] = hash[(digits[i])];
//           lenNum[i] = arr[i].length;
//         }
//         var lenBoth =1;
//         for(let i in lenNum){
//           lenBoth = lenNum[i]*lenBoth;
//         }
//         //  申明一个新数组,做数据暂存
//         var items = new Array(lenBoth);
//         // 申明新数组的索引
//         var index = 0;
//         // 2层嵌套循环,将组合放到新数组中
//         for(var i=0; i<lenNum[0]; i++){
//             for(var j=0; j<lenNum[1]; j++){
//                 items[index] = arr[0][i] + arr[1][j];
//                 index++;
//             }
//         }
//         // 将新组合的数组并到原数组中
//         var newArr = new Array(len -1);
//         for(var i=2;i<arr.length;i++){
//             newArr[i-1] = arr[i];
//         }
//         newArr[0] = items;
//         // 执行回调
//         return letterCombinations(newArr);
//     }else{
//         return hash[(digits[0])];
//     }
// };



var letterCombinations = function(digits) {
  if(digits == 0) return []
  var hash  = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", 'z'],
  }
  var len = digits.length;
  var arr =[];
  // 第一个数组的长度
  for(let i = 0; i < len; i++){
    arr[i] = hash[(digits[i])];
  }
  // 当数组大于等于2个的时候
  function doExchange(arr){
    // console.log('arr: ', arr);
    var len = arr.length;
    // 当数组大于等于2个的时候
    if(len >= 2){
        // 第一个数组的长度
        var len1 = arr[0].length;
        // 第二个数组的长度
        var len2 = arr[1].length;
        // 2个数组产生的组合数
        var lenBoth = len1 * len2;
        // console.log('lenBoth: ', lenBoth);
        //  申明一个新数组,做数据暂存
        var items = new Array(lenBoth);
        // 申明新数组的索引
        var index = 0;
        // 2层嵌套循环,将组合放到新数组中
        for(var i=0; i<len1; i++){
            for(var j=0; j<len2; j++){
                //将第一个数组和第二个数组拼接起来
                items[index] = arr[0][i] + arr[1][j];
                index++;
            }
        }
        // 将新组合的数组并到原数组中
        var newArr = new Array(len -1);
        // console.log('newArr: ', newArr);
        for(var i=2;i<arr.length;i++){
            //从2开始，第三位 保持不变合并到原数组
            newArr[i-1] = arr[i];
            // console.log('arr[i]: ', arr[i]);
        }
        //第2和第三 合并变成 第一位
        newArr[0] = items;
        // 执行回调
        //循环函数
        return doExchange(newArr);
    }else{
      return arr[0];
    }
  }
  return doExchange(arr)
}
var digits = "2"
var val = letterCombinations(digits);
console.log('val: ', val);