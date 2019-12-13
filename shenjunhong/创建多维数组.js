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
              items[index] = arr[0][i] +"|"+ arr[1][j];
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
    console.log(arr[0])
      return arr[0];
  }
}



var array = [['a', 'b', 'c'], [1, 2, 3], ['x', 'y', 'z'], ['A', 'B', 'C']];

console.log(doExchange(array));
