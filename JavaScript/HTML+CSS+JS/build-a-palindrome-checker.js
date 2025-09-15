const textInput=document.querySelector("#text-input");
const button=document.querySelector("#check-btn");
const result=document.querySelector("#result");
const nonWordRegex=/[\W_]/g;

const isPalindrome=input=> {
  input=input.replaceAll(nonWordRegex,"");
  return input.toLowerCase()===input.split("").reverse().join("").toLowerCase();
}

button.addEventListener("click",()=> {
  if (textInput.value=="") {
    alert("Please input a value");
    return;
  }
  else if (isPalindrome(textInput.value)) {
    result.innerText=`${textInput.value} is a palindrome`;
  }
  else {
    result.innerText=`${textInput.value} is not a palindrome`;
  }
  result.style.display="block";
  setTimeout(()=> {
    result.style.display="none";
  },4000)
})
