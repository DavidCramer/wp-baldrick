/* WP-API Baldrick helpers */
var wp_api_endpoint = {};
+(function($){

	$.fn.baldrick.registerhelper('wp_api', {
		bind		: function(triggers){
			triggers.each(function(k,v){
				var trigger = $(v);

				// set request url to set endpoint
				if( trigger.data('endpoint') && wp_api_endpoint[trigger.data('endpoint')] ){
					trigger.data('request', wp_api_endpoint[trigger.data('endpoint')] ).attr('data-request', wp_api_endpoint[trigger.data('endpoint')] );
				}

			});
		},
		request_data	: function(obj){
			if(obj.params.trigger.data('endpoint') && wp_api_endpoint[obj.params.trigger.data('endpoint')] ){
				
				// update data filters
				var data = {};

				for ( var key in obj.data ){
					if( key.indexOf('filter') === 0){
						if(!data.filter){ data.filter = {} }
						if(key !== 'filter'){
							data.filter[key.substr(6).toLowerCase()] = obj.data[key];
						}else{
							data.filter = $.extend(data.filter, obj.data[key]);
						}
					}else{
						data[key] = obj.data[key];
					}
				}
				return data
			}
			
		},
		pre_filter	: function(obj, defaults){
			
			if(obj.params.dataType === 'json' && obj.params.trigger.data('endpoint') && wp_api_endpoint[obj.params.trigger.data('endpoint')] ){

				var new_object 		= {
					request			:	obj.params.requestData,
					headers			:	{
						total		:	obj.xhr.getResponseHeader('X-WP-Total'),
						total_pages	:	obj.xhr.getResponseHeader('X-WP-TotalPages')
					}
				};
				if( obj.data.length ){
					new_object.items = obj.data;
				}

				return new_object;

			}
		}
	});

})(jQuery);