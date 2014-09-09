/* WP-API Baldrick helpers */
var wp_api_endpoint = {};
+(function($){

	$.fn.baldrick.registerhelper('wp_api', {
		bind		: function(triggers){
			triggers.each(function(k,v){
				var trigger = $(v);
				if( trigger.data('endpoint') && wp_api_endpoint[trigger.data('endpoint')] ){
					console.log(wp_api_endpoint);
					trigger.data('request', wp_api_endpoint[trigger.data('endpoint')] ).attr('data-request', wp_api_endpoint[trigger.data('endpoint')] );
				}
			});
		},
		pre_filter	: function(obj, defaults){
			
			if(obj.params.dataType === 'json'){
				console.log(obj);
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