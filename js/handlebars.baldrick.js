/* custom helpers */
  Handlebars.registerHelper("even", function(options) {
  	var intval = options.data.index / 2;
  	if( intval === Math.ceil( intval ) ){
  		return options.fn(this);
  	}else{
  		return false;
  	}
  	
  });
  Handlebars.registerHelper("odd", function(options) {
  	var intval = options.data.index / 2;
  	if( intval === Math.ceil( intval ) ){
  		return false;
  	}else{
  		return options.fn(this);
  	}
  });
  Handlebars.registerHelper("script", function(options) {
    if(options.hash.src){
      return '<script type="text/javascript" src="' + options.fn(this) + '"></script>';
    }else{
      return '<script type="text/javascript">' + options.fn(this) + '</script>';
    }
  });
  Handlebars.registerHelper("is", function(value, options) {
    

    if(options.hash.value === '@key'){
      options.hash.value = options.data.key;
    }
    if(options.hash.value === value){
      return options.fn(this);
    }else{
      if(this[options.hash.value]){
        if(this[options.hash.value] === value){
          return options.fn(this);
        }
      }
      return false;
    }
  });
  Handlebars.registerHelper('include', function(template){

    var include = '';
    if(field_type_templates[template]){
      include = field_type_templates[template](this);
    }else{
      include = field_type_templates._no_config_(this);
    }
    
    return new Handlebars.SafeString( include );

  });

/* Baldrick handlebars.js templating plugin */
+(function($){
	var compiledTemplates	= {};
	$.fn.baldrick.registerhelper('handlebars', {
		bind	: function(triggers, defaults){
			var	templates = triggers.filter("[data-template-url]");
			if(templates.length){
				templates.each(function(){
					var trigger = $(this);
					//console.log(trigger.data());
					if(typeof compiledTemplates[trigger.data('templateUrl')] === 'undefined'){
						compiledTemplates[trigger.data('templateUrl')] = true;

						if(typeof(Storage)!=="undefined"){

							var cache, key;
							
							if(trigger.data('cacheLocal')){
								
								key = trigger.data('cacheLocal');
								
								cache = localStorage.getItem( 'handlebars_' + key );
							
							}else if(trigger.data('cacheSession')){

								key = trigger.data('cacheSession');

								cache = sessionStorage.getItem( 'handlebars_' + key );
							}

						}
						
						if(cache){
							compiledTemplates[trigger.data('templateUrl')] = Handlebars.compile(cache);
						}else{
							/*$.get(trigger.data('templateUrl'), function(data, ts, xhr){
								
								if(typeof(Storage)!=="undefined"){

									var key;
									
									if(trigger.data('cacheLocal')){
										
										key = trigger.data('cacheLocal');

										localStorage.setItem( 'handlebars_' + key, xhr.responseText );
									
									}else if(trigger.data('cacheSession')){
										
										key = trigger.data('cacheSession');

										sessionStorage.setItem( 'handlebars_' + key, xhr.responseText );
									}
								}

								compiledTemplates[trigger.data('templateUrl')] = Handlebars.compile(xhr.responseText);
							});*/
						}
					}
				});
			}

		},
		params	: function(params){
			if((params.trigger.data('templateUrl') || params.trigger.data('template')) && typeof Handlebars === 'object'){
				params.dataType = 'json';
				return params;
			}
		},
		request			: function(obj, defaults){
			if(obj.params.trigger.data('templateUrl')){
				if( typeof compiledTemplates[obj.params.trigger.data('templateUrl')] === 'boolean' ){
					$.get(obj.params.trigger.data('templateUrl'), function(data, ts, xhr){
						compiledTemplates[obj.params.trigger.data('templateUrl')] = Handlebars.compile(xhr.responseText);
						obj.params.trigger.trigger(obj.params.event);
					});
					return false;
				}
			}
			return obj;
		},
		filter			: function(opts, defaults){
			console.log(opts.data);
			if(opts.params.trigger.data('templateUrl')){
				if( typeof compiledTemplates[opts.params.trigger.data('templateUrl')] === 'function' ){
					opts.data = compiledTemplates[opts.params.trigger.data('templateUrl')](opts.data);
				}
			}else if(opts.params.trigger.data('template')){
				if( typeof compiledTemplates[opts.params.trigger.data('template')] === 'function' ){
					opts.data = compiledTemplates[opts.params.trigger.data('template')](opts.data);
				}else{
					if($(opts.params.trigger.data('template'))){
						compiledTemplates[opts.params.trigger.data('template')] = Handlebars.compile($(opts.params.trigger.data('template')).html());
						opts.data = compiledTemplates[opts.params.trigger.data('template')](opts.data);
					}
				}
			}

			return opts;
		}
	});

})(jQuery);