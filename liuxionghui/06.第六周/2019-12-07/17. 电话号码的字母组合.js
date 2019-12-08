// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。


const letterCombinations = (num) => {
    if(!num) return [];
    const arr = [['a','b','c'], ['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    let result = [];
    let numArr = num.toString().split('');
    for(let i = 0, len = numArr.length; i < len; i++) {
      result.push(arr[numArr[i]-2]);
    }
  
    // 1、使用while方法递归, 执行用时：64ms，内存占用：33.6M
    while(result.length > 1) {
      let arr1 = result[0], arr2 = result[1], temp = [];
      for(let i = 0, len1 = arr1.length; i < len1; i++) {
        for(let j = 0, len2 = arr2.length; j < len2; j++) {
          temp.push(arr1[i] + arr2[j]);
        }
      }
      result.splice(0, 2, temp);  // 生成的数组替换前两个数组
    }
  
    return result[0];
  
    // 2、使用Array.prototype.reduce, 执行用时：68ms，内存占用：33.7M
    /* return result.reduce((arr1, arr2) => {
      let temp = [];
      arr1.map(item1 => {
        arr2.map(item2 => {
          temp.push(item1 + item2);
        })
      })
      return temp;
    }) */
  }


  
  // 解题思路：
// 假设生成的数组长度为3:[['d','e','f'],['g','h','i'],['j','k','l']]
// 先把前两个数组循环组合，生成的数组替换前两个数组，再与下一个数组循环组合
// 递归就行
