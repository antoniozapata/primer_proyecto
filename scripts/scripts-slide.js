const images = [
    "../resources/slide/imagen1.png",
    "../resources/slide/imagen2.jpg",
    "../resources/slide/imagen3.jpg",
    "../resources/slide/imagen4.png",
    "../resources/slide/imagen5.jpg"];

let currentImageIndex = 0;
let currentImage = images[currentImageIndex];
const sliderElement = document.querySelector("#slide");
sliderElement.setAttribute("src", currentImage);
timeout();

function timeout() {
setTimeout(function () {
 if((currentImageIndex+1) < images.length){
        currentImageIndex = currentImageIndex +1;
    }else{
       currentImageIndex =0;
  }
    sliderElement.src = images[currentImageIndex];
 timeout();
}, 7000);
}