var letterCombinations = function(digits) {
    digits = digits.toString()
    let result = []
    let map = new Map()
    map.set('2', ['a', 'b', 'c'])
    map.set('3', ['d', 'e', 'f'])
    map.set('4', ['g', 'h', 'i'])
    map.set('5', ['j', 'k', 'l'])
    map.set('6', ['m', 'n', 'o'])
    map.set('7', ['p', 'q', 'r', 's'])
    map.set('8', ['t', 'u', 'v'])
    map.set('9', ['w', 'x', 'y', 'z'])
    for (let i = 0; i < digits.length; i++) {
        let letters = map.get(digits[i])
        if (!letters) {
            continue
        }
        let array = []
        for (let i = 0; i < letters.length; i++){
            if (result.length > 0) {
                for (let j = 0; j < result.length; j++) {
                    array.push(result[j] + letters[i])
                }
            } else {
                array.push(letters[i])
            }
        }
        result = array
    }
    return result
};

console.log(letterCombinations(12347829368769876))
