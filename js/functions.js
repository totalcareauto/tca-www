var ta = false; // timer
var bh = 0; // background image height - change this if the background image changes
var wh = 0; // window height
var bottom = 0; // bottom of page (roughly)

function make_active(clss) {
	jQuery('#nav .section ul li').removeClass('active')
		.filter('li.'+clss).addClass('active');
}

$(document).ready( function( ) {

	// get some other measurements
	wh = $(window).height( );
	bottom = $('#bottom').position( ).top;

	$(window).scroll( function( ) {
		// we need to put the div_top inside the
		// function, because it might change
		var top = $(this).scrollTop( );

		var nav_top = $("#nav-container").position( ).top;
		var $nav = $("#nav-container");

		$nav.toggleClass('sticky', top > nav_top);

		move_background(top);

		// now make the highlights for the nav work
		if ($('div.content > div#bottom:in-viewport').size( )) {
			make_active('contact');
		}
		else {
			make_active($('div.content > div:in-viewport:first').attr('id'));
		}
	});

	// fake a window scroll event so we update everything as needed
	$(window).scroll( );

	$('#nav').localScroll( );
});