const chunkArrayInGroups=(arr,num)=> {
  let arr1=[];
  let arr2=[];
  for (let i=0;i<arr.length;i++) {
      arr2.push(arr[i]);
      if (arr2.length==num || arr[i+1]==undefined) {
        arr1.push(arr2);
        arr2=[];
      }
  }
  return arr1;
}

/* Method from ai
const chunkArrayInGroups=(arr,num)=> {
  let result=[];
  for (let i=0;i<arr.length;i+=num) {
      result.push(arr.slice(i,i+num))
  }
  return arr1;
}
*/


