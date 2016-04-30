var isMobile = false;
var isDesktop = false;

$(window).on("load resize",function(e){
		//mobile detection
		if(Modernizr.mq('only all and (max-width: 767px)') ) {
			isMobile = true;
		}else{
			isMobile = false;
		}

		//tablette and mobile detection
		if(Modernizr.mq('only all and (max-width: 1024px)') ) {
			isDesktop = false;
		}else{
			isDesktop = true;
		}
});

$(document).ready(function() {
    "use strict";

    if ($('#homeFullScreen').length) {
     fullscreenImage();
    }

    var $starter = $(window).height()-($('#mainHeader').height());

    $(window).scroll(function() {
	     if ($('#fullScreen').length) {
				 if ($(window).scrollTop()>= $starter) {
		    	$('#mainHeader').slideDown();
	       } else if ($(window).scrollTop()==0) {
		    	$('#mainHeader').slideUp();
	       }
	   	}
		});

		$('.nav a').on('click', function(){
			if($('.navbar-toggle').css('display') != 'none')
		    $('.navbar-toggle').click();
		});
});

$(window).on("resize", function(e){
	if ($('#fullScreen').length) {
		fullscreenImage();
  }
});

function fullscreenImage(){
	$('#homeFullScreen').css({height:$(window).height()})
}
