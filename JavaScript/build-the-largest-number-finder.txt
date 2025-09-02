
const largestOfAll=arr=> {
  let tempLargestNum;
  let largestNumArr=[];
  for (let i=0;i<arr.length;i++) {
    tempLargestNum=arr[i][0];
    for (let j=0;j<arr[i].length;j++) {
      if (arr[i][j]>tempLargestNum) {
        tempLargestNum=arr[i][j];
      }
    }
    largestNumArr.push(tempLargestNum);
  }
  return largestNumArr;
}

