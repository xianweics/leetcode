var solveSudoku = function(board) {
    let column = new Map()
    let row = new Map()
    let boxs = new Map()
    let stack = []

    for (let i = 0; i < 9; i++) {
        column.set(i, {})
        row.set(i,{})
        boxs.set(i,{})
    }
    init()
    resolve(board, 0)

    function resolve(board, rowIdex) {
        for (let i = rowIdex; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let value = board[i][j]
                let boxIndex = parseInt((i/3)) * 3 + parseInt(j/3)
                if (value === '.') {
                    let isvalid = false
                    for (let k = 1; k < 10; k++) {
                        // 如果符合数独要求，进入下一个循环
                        if (isValid(i,j,boxIndex,k)) {
                            isvalid = true
                            break
                        }
                    }
                    // 如果当前位置写入任何值都不合法，退回
                    if (!isvalid) {
                        rowback(board)
                        return
                    }
                }
            }
        }
    }


    function init() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let value = board[i][j]
                let boxIndex = parseInt((i/3)) * 3 + parseInt(j/3)
                if(value !== '.') {
                    row.get(i)[value] = true
                    column.get(j)[value] = true
                    boxs.get(boxIndex)[value] = true
                }
            }
        }
    }

    function isValid(i, j , boxIndex, value) {
        if (row.get(i)[value] || column.get(j)[value] || boxs.get(boxIndex)[value]) {
            return false
        } else {
            // 合法即填入该值，并记录下标和所属块
            row.get(i)[value] = true
            column.get(j)[value] = true
            boxs.get(boxIndex)[value] = true
            stack.push([i,j,boxIndex,value])
            board[i][j] = value.toString()
            return true
        }
    }

    function rowback(board) {
        // 取得栈顶，即上一个填入的数组的  下标和值
        let index = stack.length - 1
        let i = stack[index][0]
        let j = stack[index][1]
        let boxIndex = stack[index][2]
        let value = stack[index][3]
        // 将上一个写入的数字相关信息出栈，还原为'.' 并删除保存的下标和所属块
        stack.pop()
        board[i][j] = '.'
        row.get(i)[value] = false
        column.get(j)[value] = false
        boxs.get(boxIndex)[value] = false
        // 让上一个写入的数字加一，再调用resolve去遍历整个数组
        while (value <= 8) {
            if (isValid(i,j,boxIndex,value + 1)) {
                resolve(board, i)
                return
            } else {
                value++
            }
        }
        // 如果上一个数字加到9都不满足数独，再次回滚
        rowback(board)
        return
    }
};


solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])

