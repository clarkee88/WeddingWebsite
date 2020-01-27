// Images for venue section slideshow
// var images = [
//     "Img/shustoke.jpg",
//     "Img/shustoke2.jpg",
//     "Img/shustoke3.jpg",
//     "Img/shustoke4.jpg",
//     "Img/shustoke5.jpg",
//     "Img/shustoke6.jpg",
//   ]

// var imageHead = document.getElementById("venue-section");

// var i = 0;
// setInterval(function() {
//       imageHead.style.backgroundImage = "url(" + images[i] + ")";
//       i = i + 1;
//       if (i == images.length) {
//         i =  0;
//       }
// }, 5000);

//backstretch
$("#venue-section").backstretch([
  "Img/shustoke.jpg"
, "Img/shustoke2.jpg"
, "Img/shustoke3.jpg"
, "Img/shustoke4.jpg"
, "Img/shustoke5.jpg"
], {duration: 3000, fade: 750});

//hamburger button
$("#hamburger-button").on("click",function(){ 
  $('.hamburger-menu').toggleClass('nav-active');
  $("body").css("overflow", "hidden");
  $("body").stopBodyScrolling(true);
})

$("#close-menu-button").on("click",function(){ 
  $('.hamburger-menu').toggleClass('nav-active');
  $("body").css("overflow", "visible");
  $("body").stopBodyScrolling(false);
})

//hamburger menu links
$(".hamburger-menu li a").on("click",function(){ 
  $('.hamburger-menu').toggleClass('nav-active');
  $("body").css("overflow", "visible");
  $("body").stopBodyScrolling(false);
})

//prevent iphone scrolling when menu is active
function stopBodyScrolling (bool) {
  if (bool === true) {
      document.body.addEventListener("touchmove", freezeVp, false);
  } else {
      document.body.removeEventListener("touchmove", freezeVp, false);
  }
}

var freezeVp = function(e) {
  e.preventDefault();
};

//fix for toggle options in form so they can have differnt names
$("input[type=radio]").on("click",function(){ 
  $("#radio-button-validation").css("display", "none");  
  $("input[type=radio]").prop("checked",false);
   $(this).prop("checked",true);
});

//Form submission
$("#rsvpform").submit(function(e) {
  e.preventDefault();

  var shouldSubmit = 1;

  if(!$("#customRadioInline1").prop("checked")) { 
    if(!$("#customRadioInline2").prop("checked")) { 
      shouldSubmit = 0;
      $("#radio-button-validation").css("display", "block");
      // alert("Nothing checked!");
    }
  }

  if(shouldSubmit == 1){
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    //alert("Thank you!");
    $("#exampleModalCenter").modal();

  });

  }

});

$('#exampleModalCenter').on('hidden.bs.modal', function () {
  $('#rsvpform')[0].reset();
  $("#radio-button-validation").css("display", "none");
  $("#attendingOptions").fadeOut();
});


//fade in/out attending options
$("#customRadioInline1").on("click",function(){
  $("#attendingOptions").fadeIn();
})

$("#customRadioInline2").on("click",function(){
  $("#attendingOptions").fadeOut();
})




//Fix for paralex effect on Iphone
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     $(window).scroll(function() {
//       var scrolledY = $(window).scrollTop();
//       $('#topImage').css('background-position', 'left ' + ((scrolledY)) + 'px');
//     });
//   } 
// }

// var x = window.matchMedia("(max-width: 499px)")
//myFunction(x) // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes 



