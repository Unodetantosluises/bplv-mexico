(function($) {
	
	"use strict";
	
	
	//Add OnepageNav / Sidebar
	function sideNav() {
		if($('.menu-box .sticky-menu').length){
			$('.menu-box .sticky-menu ul').onePageNav();
		}
	}
	
	//Add Scroll Bar To Sidebar
	if($('#sidebar .menu-box').length){
		$("#sidebar .menu-box").mCustomScrollbar({
			axis:"y",
			autoExpandScrollbar:false
		});
	}
	
	//animate to top on Page Refresh
    $('html, body').animate({
	   scrollTop: $('html, body').offset().top
	}, 1000);

	$('pre.code').highlight();


/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).on('ready', function() {
		sideNav();
	});

	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow", // animated element css class (default is wow)
			animateClass: "animated", // animation css class (default is animated)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}


})(window.jQuery);