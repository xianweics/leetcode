/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let arr = num.toString().split("").reverse();
    let brr = [];
    let m = "I";
    let n = "V";
    for(let i in arr){
    	if(i == 0){
   			m = "I";
   			n = "V";
       	} else if(i == 1){
    		m = "X";
   			n = "L";
    	} else if(i == 2){
   			m = "C";
   			n = "D";
    	} else{
    		m = "M";
    	}
    	switch(arr[i]){
            case "1":
           		brr.push(m);
               	break;
           	case "2":
               	brr.push(m,m);
               	break;
           	case "3":
               	brr.push(m,m,m);
               	break;
            case "4":
               	brr.push(n,m);
               	break;
            case "5":
           		brr.push(n);
               	break;
            case "6":
           		brr.push(m,n);
               	break;
            case "7":
           		brr.push(m,m,n);
               	break;
            case "8":
                brr.push(m,m,m,n);
               	break;
            case "9":
                if(i == 0){
    				brr.push("X","I");
    			} else if(i == 1){
    				brr.push("C","X");
    			} else{
    				brr.push("M","C");
    			}
                break;
            default:
               	break;
        }
    }
    return brr.reverse().join("");
};
// @lc code=end

