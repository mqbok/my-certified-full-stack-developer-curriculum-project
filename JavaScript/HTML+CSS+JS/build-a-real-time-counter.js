 const textareaContainer=document.querySelector("#text-input");
 const charCountContainer=document.querySelector("#char-count");
textareaContainer.addEventListener("input",()=> {
  let textLength=textareaContainer.value.length;
  if (textLength>=50) {
    charCountContainer.classList.add("over-input");
    textareaContainer.value=textareaContainer.value.substring(0,50); 
    textLength=textareaContainer.value.length;
  }
  charCountContainer.innerText=`Character Count: ${textLength}/50`;
});