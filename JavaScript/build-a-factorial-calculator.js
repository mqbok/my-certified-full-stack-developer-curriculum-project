
let num=5;
const factorialCalculator=num=> {
  let result=1;
  while (num>0) {
    result*=num;
    num--;
  }
  return result;
}
let factorial=factorialCalculator(num);
let resultMsg=`Factorial of ${num} is ${factorial}`;
console.log(resultMsg)


