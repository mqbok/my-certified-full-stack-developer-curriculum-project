
const repeatStringNumTimes=(str,num)=> {
  let newStr="";
  if (num<=0) {
    return "";
  }
  else {
    for (let i=0;i<num;i++) {
      newStr=newStr.concat(str);
    }
    return newStr;
  }
}


