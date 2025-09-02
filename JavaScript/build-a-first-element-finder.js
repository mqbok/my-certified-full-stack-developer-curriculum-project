
const findElement=(arr,func)=> {
  for (let i of arr) {
    if (func(i)) {
      return i;
    }
  }
}


