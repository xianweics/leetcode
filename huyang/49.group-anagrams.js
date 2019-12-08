/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 初始想到每个字母都对应唯一的ASCII码，然后让每个元素所有字母的ACSII码的和来比较，但ill和duh的和相同，
// 然后看评论【质数】这个概念有了启发，可以用乘积来做唯一性比较
var groupAnagrams = function(strs) {
    let res = [];
	let temp = [];
	let tmp = 1;
	let word = '';
	for(let i in strs){
		word = strs[i].split('');
		for(let j in word){
			switch(word[j]){
				case 'a':
					tmp *= 2;
					break;
				case 'b':
					tmp *= 3;
					break;
				case 'c':
					tmp *= 5;
					break;
				case 'd':
					tmp *= 7;
					break;
				case 'e':
					tmp *= 11;
					break;
				case 'f':
					tmp *= 13;
					break;
				case 'g':
					tmp *= 17;
					break;
				case 'h':
					tmp *= 19;
					break;
				case 'i':
					tmp *= 23;
					break;
				case 'j':
					tmp *= 29;
					break;
				case 'k':
					tmp *= 31;
					break;
				case 'l':
					tmp *= 37;
					break;
				case 'm':
					tmp *= 41;
					break;
				case 'n':
					tmp *= 43;
					break;
				case 'o':
					tmp *= 47;
					break;
				case 'p':
					tmp *= 53;
					break;
					case 'q':
					tmp *= 59;
					break;
				case 'r':
					tmp *= 61;
					break;
				case 's':
					tmp *= 67;
					break;
				case 't':
					tmp *= 71;
					break;
				case 'u':
					tmp *= 73;
					break;
				case 'v':
					tmp *= 79;
					break;
				case 'w':
					tmp *= 83;
					break;
				case 'x':
					tmp *= 89;
					break;
				case 'y':
					tmp *= 97;
					break;
				case 'z':
					tmp *= 101;
					break;
			}
		}
		if(temp.indexOf(tmp) < 0){
			temp.push(tmp);
		}
		if(!res[temp.indexOf(tmp)])	res[temp.indexOf(tmp)] = [];			
		res[temp.indexOf(tmp)].push(strs[i]);
		tmp = 1;
	}
	return res;
};
// @lc code=end

