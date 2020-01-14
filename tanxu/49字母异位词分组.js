var groupAnagrams = function(strs) {
  let result = []
  let map = new Map()
  let index = 0
  for (let i = 0; i < strs.length; i++) {
    let key = Array.from(strs[i]).sort().join('')
    let mapVal = map.get(key)
    if (mapVal === undefined) {
      map.set(key, index)
      mapVal = index
      index++
    }
    if (result[mapVal]) {
      result[mapVal].push(strs[i])
    } else {
      result[mapVal] = [strs[i]]
    }
  }
  return result
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
