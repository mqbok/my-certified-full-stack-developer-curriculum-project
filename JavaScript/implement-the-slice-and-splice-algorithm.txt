
const frankenSplice=(arr1,arr2,index)=> {
  let resultArr=arr2.slice();
  resultArr.splice(index,0,...arr1);
  return resultArr;
}


