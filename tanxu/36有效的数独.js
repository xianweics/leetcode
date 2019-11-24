var isValidSudoku = function(board) {
    let column = new Map()
    let row = new Map()
    let boxs = new Map()
    for (let i = 0; i < 9; i++) {
        column.set(i, {})
        row.set(i,{})
        boxs.set(i,{})
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let value = board[i][j]
            if (value === '.') continue
            let boxIndex = parseInt((i/3)) * 3 + parseInt(j/3)
            if (row.get(i)[value] || column.get(j)[value] || boxs.get(boxIndex)[value]) {
                return false
            } else {
                row.get(i)[value] = true
                column.get(j)[value] = true
                boxs.get(boxIndex)[value] = true
            }
        }
    }
    return true
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))
