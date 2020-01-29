/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let record = []
    for (let i = 0; i < matrix.length; i++) {
        record[i] = []
        for (let j = 0; j < matrix[i].length; j++) {
            record[i][j] = true
        }
    }
    record[matrix.length] = []
    let res = []
    let dir = 'right'
    let i = 0
    let j = 0
    while (record[i][j]) {
        console.log(i,j, dir)
        res.push(matrix[i][j])
        record[i][j] = false
        switch (dir) {
            case "right": j++;break;
            case "down": i++; break;
            case "left": j--; break;
            case "top": i--; break;
        }


        if (!record[i][j]) {
            switch (dir) {
                case "right": dir = "down";j--;i++;break;
                case "down": dir = "left";i--;j--; break;
                case "left": dir = "top";j++;i--; break;
                case "top": dir = "right";i++;j++; break;
            }
        }
    }

    return res

};


console.log(spiralOrder([[1,2,3], [4,5,6], [7,8,9]]))
