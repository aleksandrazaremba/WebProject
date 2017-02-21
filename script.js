
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
  var slides = document.getElementsByClassName("text");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/*--------------Video-----------------*/


var vid = document.getElementById("bgvid");
var playButton = document.querySelector("#polina button");


if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


playButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    playButton.style.background = "url(img/pauseicon.png) no-repeat center" ;
  } else {
    vid.paused();
    playButton.style.background = "url(img/playicon.png) no-repeat center";
  }
})

/*-------------- Slider -----------------*/

$(document).ready(function(){	
	$('.center').slick({
		 centerMode: true,
		 arrows:true,
		 infinite: true,
	     centerPadding: '0px',
		slidesToShow: 5,
		 speed: 500,
		 variableWidth: false,
	});
	$('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		 console.log('beforeChange', currentSlide, nextSlide);
	});
	$('.center').on('afterChange', function(event, slick, currentSlide){
	  console.log('afterChange', currentSlide);
	});
});



