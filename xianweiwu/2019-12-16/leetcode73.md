## 矩阵置零

> 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例1:
```text
输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

示例2:
```text
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

- 解法
  - 解题思路: 
    1. 遍历整个矩阵，查找矩阵的值为`0`的坐标，并使用对象去保存坐标
    2. 重新遍历整个矩阵，如果矩阵的行、列存在于对象中，则至于`0`
    
  - 代码
    ```javascript
    /**
     * @param {number[][]} matrix
     * @return {void} Do not return anything, modify matrix in-place instead.
     */
    const setZeroes = function(matrix) {
      const zeros = {
        'row': [],
        'column': []
      };
      matrix.forEach((item, i) =>{
        item.forEach((subitem, j) => {
          if(subitem === 0){
            zeros.row.push(i);
            zeros.column.push(j);
          }
        })
      });
      for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
          if(matrix[i][j] === 0) continue;
          if(zeros.row.includes(i) || zeros.column.includes(j)){
            matrix[i][j] = 0;
          }
        }
      }
    };
    ```
    
  - 测试结果
  ![](result73-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n*m)`
    - 空间复杂度: `O(n+m)`