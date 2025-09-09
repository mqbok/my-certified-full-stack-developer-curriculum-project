const heartBtn=document.querySelectorAll(".favorite-icon");
const addClass=(genre)=> {
  if (genre.classList.contains("filled")) {
    genre.classList.remove("filled");
    genre.innerHTML="&#9825;";
  }
  else {
    genre.classList.add("filled");
    genre.innerHTML="&#10084;";
  }
}

heartBtn.forEach((btn)=> {
  btn.addEventListener("click",()=>addClass(btn));
});