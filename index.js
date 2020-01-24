function zegar()
{
  var dzisiaj = new Date();
  var dzien = dzisiaj.getDate();
  var miesiac = dzisiaj.getMonth()+1;
  var rok = dzisiaj.getFullYear();
  var godzina = dzisiaj.getHours() < 10 ? "0"+dzisiaj.getHours() : dzisiaj.getHours();
  var minuty = dzisiaj.getMinutes() < 10 ? "0"+dzisiaj.getMinutes() : dzisiaj.getMinutes();;
  var sekunda = dzisiaj.getSeconds() < 10 ? "0"+dzisiaj.getSeconds() : dzisiaj.getSeconds();
document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuty;
  
}
 

const anchor = document.getElementById('anchor')
var oferta = [
    'Spotkanie z pingwinami',
    'Poznaj Grenlandię',
    'Mroźny relaks',
    'Pocałunek z fauną',
    'Pingwin'
]
zegar();
setInterval("zegar()",60000);

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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  anchor.innerHTML = oferta[slideIndex - 1];
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
anchor.onclick = function() {
    alert("Ten przycisk jest dla szpanu");
}




