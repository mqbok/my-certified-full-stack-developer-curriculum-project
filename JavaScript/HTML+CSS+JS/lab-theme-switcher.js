const themes=[
  {
  "name":"light",
  "message":"Theme updated — you are now using Light mode."
  },
  {
    "name":"dark",
    "message":"Theme updated — you are now using Dark mode."
  }];
const themeSwitcherBtn=document.querySelector("#theme-switcher-button");
const themeDropdown=document.querySelector("#theme-dropdown");
const htmlBody=document.querySelector("body");
const textContainer=document.querySelector("#text-box");

themeSwitcherBtn.addEventListener("click",()=> {
  themeDropdown.hidden?themeDropdown.hidden=false:themeDropdown.hidden=true;
  themeSwitcherBtn.setAttribute("aria-expanded",String(!themeDropdown.hidden));
})

themeDropdown.querySelectorAll("li").forEach(li=> {
  li.addEventListener("click",()=> {
    htmlBody.setAttribute("class",`theme-${li.textContent.toLowerCase()}`);
    textContainer.innerText=themes.find(obj=>obj.name===li.textContent.toLowerCase()).message;
    themeDropdown.hidden=true;
  themeSwitcherBtn.setAttribute("aria-expanded", "false");
  });
})
