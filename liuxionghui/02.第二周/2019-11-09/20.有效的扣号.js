// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var test1 = ["(","{","["];
        var test2 = [")","}","]"];
        var stack = [];
        var arrString = s.split("");
        if(arrString.length==0){return true}
        if(getIndex(arrString[0])==-1){return false}
        
        for(var i=0;i<arrString.length;++i ){
            if(getIndex(arrString[i])>=0){
                stack.push(arrString[i]);
            }else{
                var index = getIndex(stack[stack.length-1]);
                if(test2[index]==arrString[i]){
                    stack.pop()
                }else{
                    return false;
                }
            }
        }
        
        if(stack.length==0){
            return true;
        }else{
            return false;
        }
        function getIndex(str){
            for(var i = 0;i<test1.length;i++){
                if(str==test1[i]){

                    return i;
                }

            }
                return -1;
            
        }

};




//使用栈，将开放括号添加到栈中，如果不是开放括号，进行判断之后决定是返回false还是进行出栈操作,最后判断栈是否为空