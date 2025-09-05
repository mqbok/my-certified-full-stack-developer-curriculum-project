
const getIndexToIns=(arr,num)=> {
  return arr.sort((num1,num2)=>num1-num2).findIndex(num1=>num<=num1); 
}



