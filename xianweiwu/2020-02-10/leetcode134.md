## 加油站

> 在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。<br/>
> 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。<br/>
> 你从其中的一个加油站出发，开始时油箱为空。<br/>
> 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。
  
示例1: 
```text
输入: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

输出: 3

解释:
从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
因此，3 可为起始索引。
```

示例2: 
```text
输入: 
gas  = [2,3,4]
cost = [3,4,3]

输出: -1

解释:
你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。
我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油
开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油
开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油
你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。
因此，无论怎样，你都不可能绕环路行驶一周。
```
- 解法
  - 解题思路: 
    1. 通过观察可知如果`gas[i] < cost[i]`，则该`i`号出发不能到达`i+1`号
    2. 把`i`号后面的部分跟`i`前面的组合一起形成新`newGas` `newCost`
    3. 通过`newGas[i] - newCost[i]`判断`i`是否可以到达`i+1`号
    
  - 代码
    ```javascript
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    const canCompleteCircuit = function(gas, cost) {
      const l = gas.length;
      for(let i = 0; i < l; i++){
        let newGas = [];
        let newCost = [];
        
        if(gas[i] < cost[i]){
          continue;
        }
    
        for(let j = i; j < l; j++){
          newGas.push(gas[j]);
          newCost.push(cost[j]);
        }
        for(let j = 0; j < i; j++){
          newGas.push(gas[j]);
          newCost.push(cost[j]);
        }
        
        let rest = 0;
        let k = 0;
        while(k < l){
          rest += newGas[k] - newCost[k];
          if(rest < 0){
            break;
          }
          k++;
        }
        if(k === l){
          return i;
        }
      }
      return -1;
    };
    ```
    
  - 测试结果
  ![](result134-1.jpg)
  
  - 算法分析
    - 时间复杂度: `O(n2)`
    - 空间复杂度: `O(n)`