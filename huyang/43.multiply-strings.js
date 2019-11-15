import { maxHeaderSize } from "http"

/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
	// 	   1 2 3	  max
  	//   *   4 5	  min
    // --------------temp
	// 0 0 6 1 5	  tmp
	// 0 4 9 2 0	  tmp
	// --------------res
	// 0 5	5 3 5

var multiply = function(num1, num2) {
    if(parseInt(num1) == 0 || parseInt(num2) == 0) return "0";
    if(parseInt(num1) == 1) return num2;
    if(parseInt(num2) == 1) return num1;
    let max = [];
    let min = [];
    if(parseInt(num1)>=parseInt(num2)){
    	max = num1.split('');
    	min = num2.split('');
    } else{
    	min = num1.split('');
    	max = num2.split('');
    }
    let len = max.length + min.length;
    let tmp = new Array(len).fill(0);	// tmp的长度为max和min长度的和
    let temp = [];						// 临时数组，每一次乘积计算的数组，长度为min的长度
    let a = 0;
    let b = 0;
    let k = len-1;
    let res = new Array(len).fill(0);	
    for(let i=min.length-1;i>=0;i--){
    	for(let j=max.length-1;j>=0;j--){
    		a = (min[i]*max[j])%10 + b;
    		b = parseInt((min[i]*max[j])/10);
    		tmp[k] = a;
    		k--;
    		if(j == 0) tmp[k] = b;
    	}
    	temp.push(tmp);
    	tmp = new Array(len).fill(0);
    	k=len-1-(min.length-i);
    	a=0;
    	b=0;
    }
    k = len-1;
    for(let j=len-1;j>=0;j--){
    	for(let i in temp){
    		a+=temp[i][j];
    	}
    	a = a+b;
    	b = parseInt(a/10);
    	a = a%10;
    	res[k]=a;
    	k--;
    	a=0;
    }
    for(let i in res){
    	if(res[0] == 0){
    		res.shift();
    	} else{
    		break;
    	}
    }
    return res.join('');
};
// @lc code=end

