/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	if(n===1)
   		return "1";
	var s = "1";
	for(var i=1;i<n;i++){
		var res = "";
		var count = 1;
		for(var j=0;j<s.length;j++){
			if(j===s.length-1){
				res = res + count + s[j];
			}else if(s[j]===s[j+1]){
				count++;
			}else{
				res = res + count + s[j];
				count = 1;
			}
		}
		s = res;
   }
   return s;
};