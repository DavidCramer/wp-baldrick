jQuery(document).ready(function($){

	// initialise baldrick triggers
	$('.wp-ajax').baldrick({
		request			:	ajaxurl,
		method			:	'POST'
	});

});