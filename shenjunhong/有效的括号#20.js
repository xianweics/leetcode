/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var flag, result = [],
    arr1 = [],
    arr2 = [];
  var len = s.length;
  if(s == "") return true;
  if (len <= 1) return false;
  if (len < 0) return;
  var cen = len / 2
  if (len % 2 == 0) {   
    //第一种顺序
    while(s.includes('{}') || s.includes('()' )  || s.includes('[]') ){
      s.replace("{}", "") || s.replace("()", "") || s.replace("[]", "")
    }
    // console.log('11')
    //第二种正确顺序闭合
    for (let i = 0; i <= cen - 1; i++) {
      arr1.push(s[i])
    }
    for (let i = len - 1; i > 0; i--) {
      arr2.push(s[i])
    }
    // console.log('result: ', arr1, arr2);    
    for (let c of arr1) {
      switch (c) {
        case "{":
          result.push("}");
          break;
        case "[":
          result.push("]");
          break;
        case ")":
          result.push("(");
          break;
          case "}":
            result.push("{");
            break;
          case "]":
            result.push("[");
            break;
          case "(":
            result.push(")");
            break;
      }
    }

    for (i in result) {
      console.log('result: ', result[i], arr2[i]);
      if (result[i] == arr2[i]) {
        flag = true;
      } else {
        return flag = false
      }
    }
  } else {
    flag = false
  }
  return flag;
};

// var val = isValid("{[]}");
// var val = isValid("([)]");
// var val = isValid('()[]{}');
// var val = isValid("){");
// var val = isValid("([]")
// var val = isValid('(]');
// var val = isValid('()');
var val = isValid("(()(")
console.log('val: ', val);


//网络上大神的解法

var isValid = function (s) {
  var map = {
      "(": ")",
      "[": "]",
      "{": "}"
  }
  var leftArr = []
  for (var ch of s){
      if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
      else { //为右括号时，与数组末位匹配
          if(ch != map[leftArr.pop()]) return false;
      }
  }
  return !leftArr.length //防止全部为左括号
};

//  解法一
var isValid = function (s) {
  while (s.length) {
    var temp = s;
    s = s.replace('()', '');
    s = s.replace('[]', '');
    s = s.replace('{}', '');
    if (s == temp) return false
}
return true;
};
