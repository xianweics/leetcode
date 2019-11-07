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

var longestCommonPrefix = function(strs){
  if(!strs.length) return '';
  let result = '';
  strs.sort((a,b)=> a-b)
  for(let i=0;i<strs[0].length;i++){
      let s = strs[0][i];
      if(strs.every(item => item[i] ==s)){
          result +=s; 
      } else {
          break;
      }
  }
  return result;
}