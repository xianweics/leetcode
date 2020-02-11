/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let number = 1
    let record = []
    for (let i = 0; i < n; i++) {
        record[i] = []
        for (let j = 0; j < n; j++) {
            record[i][j] = '.'
        }
    }
    record[n] = []
    let dir = 'right'
    let i = 0
    let j = 0
    while (record[i][j] === '.') {
        record[i][j] = number
        number++
        switch (dir) {
            case "right": j++;break;
            case "down": i++; break;
            case "left": j--; break;
            case "top": i--; break;
        }
        if (record[i][j] !== '.') {
            switch (dir) {
                case "right": dir = "down";j--;i++;break;
                case "down": dir = "left";i--;j--; break;
                case "left": dir = "top";j++;i--; break;
                case "top": dir = "right";i++;j++; break;
            }
        }

    }
    record.pop()
    return record

};

console.log(generateMatrix(4))
