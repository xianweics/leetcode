/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  //我们分析了一下题目
  //传入的如果是单纯的字符串 直接转

  //   首字符去掉空格
  var fl = Trim(str)
  console.log('fl:', fl);
  //第一个是 - 号  /[1-9]\d{1,}/g  获取到连续的数字
  if(fl. /^-/){
    var arr = fl.match(/[1-9]\d{1,}/g)
    return arr
    console.log('arr: ', arr);
  }
  console.log('arr: ', arr[0]);
  
  // 第一个非空字符串是w， 在不用进行转换 直接输入0
  if(fl.Regle(/^D+$g/)){

  }
  //超过32位有符号整数范围

  //如果转换的字符 下一个字符不为数字 


};

function Trim(str){ 
  return str.replace(/(^\s*)|(\s*$)/g, ""); 
}

//先规定好益出的大小值
const MIN = -1 * Math.pow(2, 31);
const MAX = Math.pow(2, 31) - 1;

var myAtoi = function(str) {
    str = str.trim();  //去空
    let result = '', symbol = '';
    let idx = 0;

    if(str.charCodeAt(0) === 45){  //判断正负号
        idx++;
        symbol = '-';
    }
    else if(str.charCodeAt(0) === 43){
        idx++;
    }
    else if(str.charCodeAt(0) < 48 || str.charCodeAt(0) > 57){   //若是英文直接返回零
        return 0;
    }

    for(let i = idx; i < str.length; i++){  // 若数字则不取
        if(str.charCodeAt(i) === 46){
            break;
        }
        else if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
            result += str[i];
        }
        else{
            break
        }
    }

    result = symbol.toString() + result.toString();  //数组转成字符串

    if(Number(result) !== Number(result)){
        return 0;
    }
    else if(Number(result) < MIN){
        return MIN;
    }
    else if(Number(result) > MAX){
        return MAX;
    }
    else{
        return Number(result)
    }
};


console.log(myAtoi('     92re222eewe22'))