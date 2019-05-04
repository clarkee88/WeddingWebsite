// Images for venue section slideshow
var images = [
    "Img/shustoke.jpg",
    "Img/shustoke2.jpg",
    "Img/shustoke3.jpg",
    "Img/shustoke4.jpg",
    "Img/shustoke5.jpg",
    "Img/shustoke6.jpg",
  ]

var imageHead = document.getElementById("venue-section");

var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 5000);