
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
var vid, playbtn, seekslider;

function initializePlayer(){
	
	/*Set object references*/
	vid = document.getElementById("myVideo");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");

	/*Add event listeners*/
	playbtn.addEventListener("click", playPause, false);
	seekslider.addEventListener("change", vidSeek, false);
	vid.addEventListener("timeupdate", seektimeuptade, false);
	
}
window.onload = initializePlayer;


function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.innerHTML = "Pause";
	}else{
		vid.pause();
		playbtn.innerHTML = "Play";
	}	
}


function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}

function seektimeuptade(){
	var nt = vid.currentTime * (100 / vid.duration); /*new time*/
	seekslider.value = nt;
}