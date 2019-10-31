/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if(x > -Math.pow(2, 31) || x < -65535) return 0
  let arr;
  if(typeof x == 'string') {
    arr = x.split('');
  } else {
    arr = (x.toString()).split('');
  }
  const len = arr.length;
  let newArr = [];
  for (let i = len - 1; i >= 0; i--) {
    if (i == (len - 1) && arr[i] == 0) {
    } else if(i == 0 && arr[i] == '-'){
      console.log('val=0,', arr[i], newArr)
      newArr = ['-'].concat(newArr)
    }
    else{
      newArr.push(arr[i])
    }
  }
  const sum = newArr.join('');
  if(sum > (Math.pow(2, 31) - 1) || sum < -Math.pow(2, 31)-1) return 0;
  return sum;
};

// const newVal = reverse('361');
// const newVal = reverse(123);
// const newVal = reverse(120);
const newVal = reverse(-1534236469);

console.log('newVal: ', Math.pow(2, 31)-1,  );


// 遇到的坑点 :
/*数组里面是string,还不能用全等了
arr[i] === 0 //直接抛错 
typeof arr = object
typeof arr[i] = string 
*/

/*
测试的时候遇到的坑： 这两种情况还不一致：
'-'.concat(['1,2,3'])
"-1,2,3"
&&
var val = ['-'].concat(['1,2,3']); val.join()
"-,1,2,3"
*/