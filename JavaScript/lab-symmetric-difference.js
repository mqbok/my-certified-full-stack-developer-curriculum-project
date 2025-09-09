
const diffArray=(arr1,arr2)=> {
  let rst=arr1.filter(n=>!arr2.includes(n));
  return rst;
}


