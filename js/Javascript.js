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

// var message = "";

// $("#sendMessage").on("click", function() {
//     message = $("#contactform").serialize();
//     $.ajax({
//         url: "//formspree.io/eclarke64@gmail.com", 
//         method: "POST",
//         data: {message: message},
//         dataType: "json"
//     });
//     alert('Thanks for the email, we\'ll be in touch promptly.');
//     return false;
// });

//Fix for paralex effect on Iphone
function myFunction(x) {
  if (x.matches) { // If media query matches
    $(window).scroll(function() {
      var scrolledY = $(window).scrollTop();
      $('#topImage').css('background-position', 'left ' + ((scrolledY)) + 'px');
    });
  } 
}

var x = window.matchMedia("(max-width: 499px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 



