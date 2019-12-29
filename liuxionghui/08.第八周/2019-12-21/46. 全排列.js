// 给定一个没有重复数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]



var permute = function(nums) {
    let temp=[],used=[],depth=0,result=[];
    backTrack(nums,used,result,temp,depth)
    return result;
};
function backTrack(nums,used,result,temp,depth){
    if(depth==nums.length){
        result.push(temp);
        return  ;
    }
    for(var i=0;i<nums.length;i++){
        if(!used[i]){
            used[i]=true;
            temp.push(nums[i]);
            arguments.callee(nums,used,result,[...temp],depth+1)
            used[i]=false;
            temp.pop();
        }
    }
}
