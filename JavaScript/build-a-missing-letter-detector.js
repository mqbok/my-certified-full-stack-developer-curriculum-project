function fearNotLetter(str){
  let code=str.charCodeAt(0);
  for (let i=0;i<str.length;i++){
    if (code!=str[i].charCodeAt(0)){
      return String.fromCharCode(code);
    }
    code++;
  }
}

