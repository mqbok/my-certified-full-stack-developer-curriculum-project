const markdownInput=document.querySelector("#markdown-input");
const htmlOutput=document.querySelector("#html-output");
const preview=document.querySelector("#preview");

const h1=/^#\s(.*)/gm;
const h2=/^#{2}\s(.*)/gm;
const h3=/^#{3}\s(.*)/gm;
const strong=/(\*\*|__)(.*)\1/g;
const em=/(\*|_)(.*)\1/g;
const img=/!\[(.*)\]\((.*)\)/g;
const a=/\[(.*)\]\((.*)\)/g;
const blockquote=/^>\s(.*)/gm;

const convertMarkdown=()=> {
  let input=markdownInput.value;
  input=input.replace(blockquote,"<blockquote>$1</blockquote>");
  input=input.replace(h3,"<h3>$1</h3>");
  input=input.replace(h2,"<h2>$1</h2>");
  input=input.replace(h1,"<h1>$1</h1>");
  input=input.replace(strong,"<strong>$2</strong>");
  input=input.replace(em,"<em>$2</em>");
  input=input.replace(img,"<img alt=\"$1\" src=\"$2\">");
  input=input.replace(a,"<a href=\"$2\">$1</a>");
  return input;
}

markdownInput.addEventListener("input",()=> {
  htmlOutput.innerText=convertMarkdown(markdownInput.value);
  preview.innerHTML=convertMarkdown();
  console.log(convertMarkdown())
});
