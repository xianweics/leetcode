/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (arr) {
  // var newArr = [];
  // arr.sort();
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] == arr[i + 1] && (newArr.indexOf(arr[i]) == -1)) {
  //     newArr.push(arr[i]);
  //     i++;
  //   }
  // }
  // return newArr;
  //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
  var a = [],
    b = [];
  //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
  for (var i = 0; i < arr.length; i++) {
    if (!b[arr[i]]) {
      b[arr[i]] = 1;
      continue;
    }
    b[arr[i]]++;
  }
  //遍历b数组，将其中元素值大于1的元素下标存入a数组中
  for (var i = 0; i < b.length; i++) {
    if (b[i] > 1) {
      a.push(i);
    }
  }
  return a;
}

function duplicates(array) {
  var n = []; //一个新的临时数组
  //遍历当前数组
  for(var i = 0; i < array.length; i++){
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
};

// var arr = [1,2,4,4,3,3,1,5,3];
var arr = [1, 1, 2];
var val = duplicates(arr);
console.log('val: ', val);