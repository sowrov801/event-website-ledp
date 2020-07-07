$(document).ready(function() {


//countdown plagin

 $("#getting-started")
  .countdown("2020/07/11", function(event) {
    $('#day').text(
      event.strftime('%D-')
    );
	
	    $('#hours').text(
      event.strftime('%H-')
    );
	
	    $('#minutes').text(
      event.strftime('%M-')
    );
	
	    $('#seconds').text(
      event.strftime('%S')
    );
  });


//Owl-Carousel plagin

$(".owl-carousel").owlCarousel({

autoPlay: 3000,
items : 3,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3],
center: true,
nav:true,
loop:true,
responsive: {
600: {
items: 4
}
}

});
     
	 // back button script
	 
      $('.back-to-top').click(function(){ 
	        $("html, body").animate({ scrollTop: 0 }, 1600); 
	        return false; 
	    });


    new WOW().init();

});