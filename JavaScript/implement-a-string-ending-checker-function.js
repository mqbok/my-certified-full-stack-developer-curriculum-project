
const confirmEnding=(str1,str2)=> {
  if (str1.slice(str1.length-str2.length) == str2) {
    return true;
  }
  else {
    return false;
  }
}


