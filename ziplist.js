const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
function zipList(list1, list2){
  let length = list1.length + list2.length;
  let random = [];
  let x = 0;
  let z = 1;
  for (let i = 0; i < length; i += 2){
    random[i] = list1[x];
    random[z] = list2[x];
    x++;
    z += 2;
  }
  return random;
}

function zipListTheSimpleWay(list1 ,list2){
  return _.flatten(_.zip(list1, list2));
}
console.log(zipList(list1,list2));
console.log("test", zipListTheSimpleWay(list1,list2));