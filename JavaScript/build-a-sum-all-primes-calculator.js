const sumPrimes=num=> {
  let isPrime=true;
  let result=0;
  if (num < 2) return 0;
  for (let i=2;i<=num;i++) {
    for (let j=2;j*j<=i;j++) {
      if (i%j===0) {
        isPrime=false;
      }
    }
    if (isPrime) {
      result+=i;
    }
    isPrime=true;
  }
  return result;
}


