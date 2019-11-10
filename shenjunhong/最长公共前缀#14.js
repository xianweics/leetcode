/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     let arr = "";
//     let i = 1;
//     if(!strs.length) return "";
//     if(strs.length < 2 || strs[0]) return "";
//     for(i;i<strs[0].length;i++){
//         for(var j = 1; j< strs.length;j++){
//             let sjh = strs[0].slice(0,i);
//             if(strs[j].includes(sjh)){
//               arr = sjh;
//             } else if(arr){
//                 return arr.slice(0, arr.length-1);
//             }  else{
//                 return arr
//             }
//         }       
//     }
// };

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    let s = strs[0][i];  
    console.log('s: ', s);
    console.log('s: ', strs);
    if (strs.every(item => item[i] == s)) {
      result += s;
    } else {
      break;
    }
  }
  return result;
}
var val = longestCommonPrefix(["flower", "flow", "flight"])
// var val = longestCommonPrefix(["a"])
// var val = longestCommonPrefix([""])
console.log('val: ', val);

// ["dog","racecar","car"]


//解析 将得到的数组项一个个拆分：将 item 进行，
//这里有一个要注意的我有一点没有考虑到就是字符串也可以取[0] 跟数组的类似

//这里还有一个考虑错误： 以为一定要每个都考虑全面 但是这是一个误区 ，我们取得是交集  而不是并集 只要我们考虑的哪个元素能够匹配所有值。

