const regexPattern=document.querySelector("#pattern");
const stringToTest=document.querySelector("#test-string");
const testButton=document.querySelector("#test-btn");
const testResult=document.querySelector("#result");
const flagsContainer=document.querySelector("#flags-container");
const caseInsensitiveFlag=document.querySelector("#i");
const globalFlag=document.querySelector("#g");

const getFlags=()=> {
  let flag="";
  if (caseInsensitiveFlag.checked) {
    flag+="i";
  }
   if (globalFlag.checked) {
    flag+="g";
  }
  return flag;
}

const getResult=()=> {
  let regex=new RegExp(regexPattern.value,getFlags());
  let result=stringToTest.textContent.match(regex);
  if (result==null) {
    testResult.innerText="no match"; 
  }
  else {
    testResult.innerText=result.join(", ");
    if (getFlags().includes("g")) {
      stringToTest.innerHTML=stringToTest.textContent.replaceAll(regex,"<span class=\"highlight\">$&</span>");
    }
    else {
      stringToTest.innerHTML=stringToTest.textContent.replace(regex,"<span class=\"highlight\">$&</span>");
    }
  }
}
  
flagsContainer.addEventListener("change",()=> {
  getFlags();
});

testButton.addEventListener("click",()=> {
  getResult();
});
