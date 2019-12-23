/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // // n:2
    // ()()
    // (())


    // //n:3
    // ((()))  //3
    // (())() //2
    // ()(()) //2
    // (()())  //2
    // ()()  //1

    // //n:4
    // (((())))//4
    // ()((()))//3
    // ((()))()//3
    // (()())()//2
    // ()(()())//2
    // ()(())()//2
    // (())(())//2
   let str = "";
   let list = [];
    if(n==1){
      return ["()"]
    }

    generate(list,str,n,n);
    return list;
};

var generate = function(list, str, left, right){
  // console.log('list, str, left, right: ', list, str, left, right);

  if(left == 0 && right ==0){
    list.push(str);
    return;
  }
  if(left > 0){
    generate(list,str+'(',left-1,right);
  }
  if(right>left){
    generate(list,str+')',left,right-1);
  }
  return list
}
const val = generateParenthesis(4)
console.log('val: ', val);
