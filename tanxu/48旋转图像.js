var rotate = function(matrix) {
  let len = matrix.length
  for (let i = 0; i < len; i++) {
    for (let j = 0 ; j < len - i; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[len - j - 1][len - i - 1]
      matrix[len - j - 1][len - i - 1] = temp
    }
  }

  for (let i = 0; i < Math.floor(len / 2); i++) {
    let temp = matrix[i]
    matrix[i] = matrix[len - i - 1]
    matrix[len - i - 1] = temp
  }
  console.log(matrix)
};

rotate([[1,2,3],[4,5,6],[7,8,9]])
