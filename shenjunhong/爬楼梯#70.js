/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //2
    //3
    //4
    // 有点像递归查询
    if(n<3){
      return n
    }
    var sum = [n+1];
    sum[0]=0;sum[1]=1;sum[2]=2;
    for(let i=3;i<=n;i++){
        sum[i]=sum[i-2]+sum[i-1];
    }
    return sum[n];
};
var val = climbStairs(5)
console.log('val: ', val);