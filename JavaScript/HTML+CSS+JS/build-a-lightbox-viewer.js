const lightboxContainer=document.querySelector(".lightbox");
const galleryItem=document.querySelectorAll(".gallery-item");
const lightboxImg=document.querySelector("#lightbox-image");
const closeBtn=document.querySelector("#close-btn");

function removeThumbnail(url) {
  let newUrl = url.replace("-thumbnail","");
  return newUrl;
}

galleryItem.forEach((img)=> {
  img.addEventListener("click",()=> {
    lightboxContainer.style.display="flex";
    lightboxImg.setAttribute("src",removeThumbnail(img.src));
  });
})

closeBtn.addEventListener("click",()=>lightboxContainer.style.display="none");

lightboxContainer.addEventListener("click",()=>lightboxContainer.style.display="none")