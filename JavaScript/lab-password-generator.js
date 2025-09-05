const generatePassword=length=> {
  let pw="";
  let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  for (let i=0;i<length;i++) {
    pw+=char[Math.floor(Math.random() * 73)];
  }
  return pw;
}

let password=generatePassword(10);
console.log(`Generated password: ${password}`);


