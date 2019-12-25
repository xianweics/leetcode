/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    //一开始没看懂题目  什么一个 1  两个 1 的 ，后面想 简单题啊 不可能太难
    if(n == 1 ){
      return 1
    }
    let num = '1';
    //建立映射表？ 
    for(let l = 0; l< n-1; l++){
        let sum= '';
        for(let i = 0,j=0;  i<num.length;){
          if(num[i]==num[i+j]){
              // console.log('num[i]==num[i+j]: ', num[i],num[i+j]);
              j++;
            }else{
                sum = sum+j+""+num[i]; 
                i += j;
                j=1;
            }
      };
      num = sum;
    }
    return num;
};








// 这是些比较优秀的写法
// var countAndSay = function(n) {
//   let prev = '1'
//   for(let i = 1; i < n; i++){
//       prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
//   }
//   return prev
// };




// var countAndSay = function(n) {
//   if(n==1){
//       return n.toString()
//   }
//   var tempArr = countAndSay(n-1).match(/(\d)\1*/g)  // 该正则进行相同分组，调用match方法得出接下来用的数组
//   var result = ""
//   tempArr.forEach((item)=>{              // 循环上面得到的数组，然后取每个的长度（题里说的几个），还有第一个数字（题里说的哪个数）
//       var lth = item.length.toString()
//       var num = item.substring(0,1)
//       result = result+lth+num
//   })
//   return result   //最后返回结果
  
// };














var a = 5;
var val = countAndSay(a);
console.log('val: ', val);
