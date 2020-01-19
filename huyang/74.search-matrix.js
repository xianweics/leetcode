// 搜索二维矩阵
// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 先找到在哪一行
// 再从这行中找
var searchMatrix = function(matrix, target) {
    // 空矩阵
    if(matrix.length == 0)  return false;
    if(matrix[0].length == 0)  return false;
    // target小于最小值
    if(matrix[0][0] > target) return false;
    if(matrix[0][0] == target) return true;
    // target大于最大值
    if(matrix[matrix.length -1][matrix[0].length - 1] < target) return false;
    if(matrix[matrix.length -1][matrix[0].length - 1] < target) return true;
    for(let i in matrix){
        if(matrix[i][matrix[0].length - 1] >= target){
            for(let j in matrix[i]){
                if(matrix[i][j] == target)   return true;
            }
            return false;
        }
    }    
    return false;
};