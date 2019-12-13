function Node(key){
  this.key = key;
  this.next = null;
}

//链表类LinkedList
function LinkedList(){
  this.length = 0;
  this.head = null;
}

LinkedList.prototype.append = function(key){
  var node= new Node(key);
  if(!this.head){
    this.head = node;
  } else {
    //通过循环找到最后一个节点，然后让最后一个节点指向新节点
    var current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
  //修改链表的长度
  this.length++
}

// var mergeTwoLists = function(list1,list2){
//   var array = [];
//   var list = new LinkedList();

//   var listHead1 = list1.head;
//   var listHead2 = list2.head;

//   while(listHead1){
//     array.push(listHead1.key);
//     listHead1 = listHead1.next
//   }

//   while (listHead2) {
//     array.push(listHead2.key);
//     listHead2 = listHead2.next;
//   }


//   // 对数组排序
//   array = array.sort(function(a, b){
//       return a - b;
//   })
//   // 使用数组重新构建一个链表
//   array.forEach(function(key){
//       list.append(key);
//   });

//   return list;
// }
var arr1 = [2, 4, 6, 8];
var arr2 = [1, 3, 5, 7];
var list1 = new LinkedList();
var list2 = new LinkedList();
arr1.forEach(function(key){
    list1.append(key);
});
arr2.forEach(function(key){
    list2.append(key);
});
var list = mergeTwoLists(list1, list2);
// console.log('list: ', list);


//
// var l1 = [2, 4, 6, 8];
// var l2 = [1, 3, 5, 7];

var mergeTwoLists = function(l1, l2) {
  if ( l1 == null) return l2;
  if ( l2 == null) return l1;
if( l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next,l2);
    return l1
}else {
    l2.next = mergeTwoLists(l1,l2.next);
    return l2
}

};
var slsl = mergeTwoLists(list1, list2)
console.log('slsl: ', slsl);