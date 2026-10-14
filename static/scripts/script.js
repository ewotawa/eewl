/* ----- AUTOMATIC SLIDESHOW ----- */
/* https://www.w3schools.com/howto/howto_js_slideshow.asp */

console.log("script loaded");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("gallery__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); //change image every 2 seconds
}

