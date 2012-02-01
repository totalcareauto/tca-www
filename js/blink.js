
jQuery(document).ready( blink );

jQuery(window).on('hashchange', blink);

function blink( ) {
	$(window.location.hash+'')
		.fadeOut( ).fadeIn( )
		.fadeOut( ).fadeIn( )
		.fadeOut( ).fadeIn( );
}


