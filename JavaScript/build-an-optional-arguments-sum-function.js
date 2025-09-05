function addTogether(num1,num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1+num2;
  }
  else if (typeof num1 === "number" && arguments.length==1) {
    return function(num3) {
      if (typeof num3 === "number") {
        return num1+num3;
      }
      else {
        return undefined;
      }
    }
  }
  else {
    return undefined;
  }
}


