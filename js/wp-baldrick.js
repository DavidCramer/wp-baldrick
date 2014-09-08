jQuery(document).ready(function($){

	$.fn.baldrick.registerhelper('baldrick_form', {
		params	:	function(params){

			if(!params.trigger.data('form')){
				return;
			}

			var config			= {},
				data_fields		= $(params.trigger.data('form')).find('input,radio,checkbox,select,textarea,file'),
				objects			= [],
				arraynames		= {};

			// no fields - exit			
			if(!data_fields.length){
				return;
			}

			for( var v = 0; v < data_fields.length; v++){
				if( data_fields[v].getAttribute('name') === null){
					continue;
				}
				var field 		= $(data_fields[v]),
					basename 	= field.prop('name').replace(/\[/gi,':').replace(/\]/gi,''),//.split('[' + id + ']')[1].substr(1),
					name		= basename.split(':'),
					value 		= ( field.is(':checkbox,:radio') ? field.filter(':checked').val() : field.val() ),
					lineconf 	= {};					

				for(var i = name.length-1; i >= 0; i--){
					var nestname = name[i];
					if(nestname.length === 0){
						if( typeof arraynames[name[i-1]] === 'undefined'){
							arraynames[name[i-1]] = 0;
						}else{
							arraynames[name[i-1]] += 1;
						}
						nestname = arraynames[name[i-1]];
					}
					if(i === name.length-1){
						lineconf[nestname] = value;
					}else{
						var newobj = lineconf;
						lineconf = {};
						lineconf[nestname] = newobj;
					}		
				}
				
				$.extend(true, config, lineconf);
			};
			// give json object to trigger
			//params.data = JSON.stringify(config);
			params.data = config;
			return params;
		}
	});


	// initialise baldrick triggers
	$('.wp-ajax').baldrick({
		request			:	ajaxurl,
		method			:	'POST'
	});

});


/*

return true;
*/