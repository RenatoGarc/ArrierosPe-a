/* Transición de elementos carousel*/

jQuery(document).ready(function(){
  
  $('#slider-home').carousel({
  interval: 4000,
  pause: "hover"
      
})  
    
});

/* Efecto Navbar*/

$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});
 
});