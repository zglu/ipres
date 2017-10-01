$(document).keydown(function(e) {
    switch(e.which) {
	case 37: //left
	plusSlides(-1);
	break;

	case 38: // up
	plusSlides(-1);
	break;

	case 39: //right
	plusSlides(1);
	break;

	case 40: //down
	plusSlides(1);
	break;	

	default: return;
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $( ".mySlide" );
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

