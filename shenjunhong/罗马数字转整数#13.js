/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  //建立一种映射 map key
  let result = 0;
  if(s.includes("IV") || s.includes("IX")) result -=2;
  if(s.includes("XL") || s.includes("XC")) result -=20;
  if(s.includes("CD") || s.includes("CM")) result -=200;
  for(let c of s){
      switch (c) {
          case "I": 
          result +=1;break;
          case "V":
          result +=5;break;
          case "X": 
          result +=10;break;
          case "L": 
          result +=50;break;
          case "C": 
          result +=100;break;
          case "D": 
          result +=500;break;           
          case "M": 
          result +=1000;break;         
      }
  }
  return result
};


//看到这个题目第一反应就是switch。
//但是有三个需要注意的,但是我的第一想法却是遇到这几个的时候怎么判断 陷入了一个误区。
IV || IX 

XL || XC 

CD || CM  
//以为只要单独判断这些就好了，但是这些值的情况太多。
//没有寻找到他们的共性。-2 -20 -200
// 还有就是没有把字符串当作数组来考虑