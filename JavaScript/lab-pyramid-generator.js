
const pyramid=(str,int,bool)=> {
  let result="";
  if (bool) {
    for (let i=int;i>0;i--) {
      result=result.concat(`\n${" ".repeat(int-i)}${str.repeat(i*2-1)}`)
    }
  }
  else {
    for (let i=1;i<=int;i++) {
      result=result.concat(`\n${" ".repeat(int-i)}${str.repeat(i*2-1)}`);
    }
  }
  result+="\n";
  return result;
}


