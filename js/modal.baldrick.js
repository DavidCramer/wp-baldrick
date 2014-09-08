/* Baldrick handlebars.js templating plugin */
(function($){

	var wm_hasModal = false;
	
	$.fn.baldrick.registerhelper('baldrick_modal', {
		close_modal: function(modal, modalBackdrop, trigger, size_cycle, ev){
			ev.preventDefault();
			modalBackdrop.fadeOut(200);
			modal.fadeOut(200, function(){
				$(this).remove();
				modalBackdrop.remove();
				clearTimeout( size_cycle );
				trigger.removeClass( ( trigger.data('activeClass') ? trigger.data('activeClass') : 'active' ) );
				$('.baldrick-modal-wrap').css('zIndex' , '');
			});
		},
		resize_modal: function(modal, trigger){

			
			var windowWidth = $(window).width(),
				windowHeight = $(window).height(),
				leftMargin = 0,
				modalHeight = modal.height(),
				modalWidth = modal.width(),
				body = modal.find('.baldrick-modal-body')
				footer = modal.find('.baldrick-modal-footer'),
				title = modal.find('.baldrick-modal-title');
			
			if( modal.data('size_key') === ( windowHeight + '-' + windowWidth + '-' + modalHeight + '-' + modalWidth ) ){
				return;
			}
			if(trigger.data('modalWidth')){
				modal.width( trigger.data('modalWidth') );
			}

			if(trigger.data('modalHeight') && windowWidth > 780){
				modalHeight = trigger.data('modalHeight');
				modal.height( modalHeight );
				if( windowHeight < modal.height() ){
					modal.height('auto');
				}
			}

			if(windowWidth <= 780 ){
				if(windowWidth > 600){
					modal.height( windowHeight - 30 ).css('top', 15);
				}else{
					modal.height( windowHeight ).css('top', 0);
				}
			}
			
			body.css( { 
				top		: title.is(':visible') ? title.height() : 0,
				bottom	: footer.is(':visible') ? footer.outerHeight() : 0
			} );
			
			var useable_width = ( windowWidth - modal.width() );			
			
			if( useable_width < 30 || windowWidth <= 780){
				if(windowWidth > 600){
					modal.width( ( windowWidth - 30 ) );
				}else{
					modal.width( ( windowWidth ) );
				}
				useable_width = 30;
			}

			modal.css({
				left	:	windowWidth > 600 ? useable_width / 2 : 0
			});

			//if(trigger.data('modalCenter')){
			var useable_area = windowHeight - modal.height();
			if( useable_area > 30 ){
				modal.css({ top: ( useable_area / 2 ) - ( title.height() ? title.height() : 25 ) });
			}
			//}
			modal.data('size_key', windowHeight + '-' + windowWidth + '-' + modalHeight + '-' + modalWidth );

		},
		refresh: function(obj){
			if(obj.params.trigger.data('modalAutoclose')){
				$('#' + obj.params.trigger.data('modalAutoclose') + '_baldrickModalCloser').trigger('click');
			}
		},
		event : function(el, obj){
			var trigger = $(el), modal_id = 'wm';			
			if(trigger.data('modal') && wm_hasModal === false){
				if(trigger.data('modal') !== 'true'){
					modal_id = trigger.data('modal');
				}
				if(!$('#' + modal_id + '_baldrickModal').length){
					$('.baldrick-modal-wrap').css('zIndex' , '100099');
					//wm_hasModal = true;
					// write out a template wrapper.
					var modal = $('<form>', {
							id          : modal_id + '_baldrickModal',
							tabIndex      : -1,
							"ariaLabelled-by" : modal_id + '_baldrickModalLable',
							"class"       : "baldrick-modal-wrap ",
						}),					
					//modalDialog = $('<div>', {"class" : "modal-dialog"});
					//modalBackdrop = $('.baldrick-backdrop').length ? $('.baldrick-backdrop') : $('<div>', {"class" : "baldrick-backdrop"});
					modalBackdrop = $('.baldrick-backdrop').length ? $('<div>', {"class" : "baldrick-backdrop-invisible"}) : $('<div>', {"class" : "baldrick-backdrop"});
					modalContent = $('<div>', {"class" : "baldrick-modal-body",id: modal_id + '_baldrickModalBody'});
					modalFooter = $('<div>', {"class" : "baldrick-modal-footer",id: modal_id + '_baldrickModalFooter'});
					modalHeader = $('<div>', {"class" : "baldrick-modal-title", id : modal_id + '_baldrickModalTitle'});
					modalCloser = $('<a>', { "href" : "#close", "class":"baldrick-modal-closer", "data-dismiss":"modal", "aria-hidden":"true",id: modal_id + '_baldrickModalCloser'}).html('&times;');
					modalTitle = $('<h3>', {"class" : "modal-label", id : modal_id + '_baldrickModalLable'});
					
					modalHeader.append(modalCloser).appendTo(modal);

					if(trigger.data('modalTitle')){
						modalHeader.append(modalTitle);	
					}else{
						modalHeader.height(0).hide();
					}
					if(!trigger.data('modalButtons')){
						modalFooter.height(0).hide();
					}
					if(trigger.data('modalClass')){
						modal.addClass(trigger.data('modalClass'));
					}

					var resize_modal = this.resize_modal,
						size_cycle = setInterval(function(){
							resize_modal( modal, trigger );
						}, 400),
						close_modal = this.close_modal,
						modal_closer = function(e){
							if(e.type === 'keypress'){
								if(e.keyCode !== 27){									
									return;
								}
							}
							$(window).off('keypress', modal_closer );
							close_modal(modal, modalBackdrop, trigger, size_cycle, e);
						};

					modalBackdrop.on('click', modal_closer );
					modalCloser.on('click', modal_closer );
					$(window).on('keypress', modal_closer )
					
					modal.on('keyup', 'select,input,checkbox,radio,textarea', function(){
						$(window).off('keypress', modal_closer );
					})

					modalContent.appendTo(modal);
					modalFooter.appendTo(modal);

					modal.appendTo($('body')).hide().fadeIn(200);
					modalBackdrop.insertBefore(modal).hide().fadeIn(200);

				}
			}
		},
		request_complete  : function(obj, params){
			if(obj.params.trigger.data('modal')){
				var modal_id = 'wm',loadClass = 'spinner', modal, modalBody;
				if(obj.params.trigger.data('modal') !== 'true'){
					modal_id = obj.params.trigger.data('modal');
				}

				modal 			= $('#' + modal_id + '_baldrickModal');
				modalBody 	= $('#' + modal_id + '_baldrickModalBody');
				modalTitle 	= $('#' + modal_id + '_baldrickModalTitle');
				modalButtons= $('#' + modal_id + '_baldrickModalFooter button');
				modalButtons.prop('disabled', false);

				if(obj.params.trigger.data('loadClass')){
					loadClass = obj.params.trigger.data('loadClass');
				}

				if(obj.params.trigger.data('modalLife')){
					var delay = parseFloat(obj.params.trigger.data('modalLife'));
					if(delay > 0){
						setTimeout(function(){
							$('#' + modal_id + '_baldrickModalCloser').trigger('click');
						}, delay);
					}else{
						$('#' + modal_id + '_baldrickModalCloser').trigger('click');
					}
				}
				//$('#' + modal_id + '_baldrickModalLoader').hide();
				modalBody.removeClass(loadClass).show();
				
				if(obj.params.trigger.data('modalCenter')){
					this.resize_modal( modal, obj.params.trigger );
				}
			}
		},
		after_filter  : function(obj){
			if(obj.params.trigger.data('modal')){
				if(obj.params.trigger.data('targetInsert')){
					var modal_id = 'wm';
					if(obj.params.trigger.data('modal') !== 'true'){
						modal_id = obj.params.trigger.data('modal');
					}
					var data = $(obj.data).prop('id', modal_id + '_baldrickModalBody');
					obj.data = data;
				}
			}
			return obj;
		},
		params  : function(params,defaults){

			var trigger = params.trigger, modal_id = 'wm', loadClass = 'spinner';
			if(params.trigger.data('modal') !== 'true'){
				modal_id = params.trigger.data('modal');
			}
			if(params.trigger.data('loadClass')){
				loadClass = params.trigger.data('loadClass');
			}

			if(trigger.data('modal') && (params.url || trigger.data('modalContent'))){
				var modal;

				if(params.url){
					params.target = $('#' + modal_id + '_baldrickModalBody');
					params.loadElement = $('#' + modal_id + '_baldrickModalLoader');
					params.target.empty();
				}

				if(trigger.data('modalTemplate')){
					modal = $(trigger.data('modalTemplate'));
				}else{
					modal = $('#' + modal_id + '_baldrickModal');
				}
				// close if already open
				if($('.modal-backdrop').length){
					//modal.modal('hide');
				}

				// get options.
				var label = $('#' + modal_id + '_baldrickModalLable'),
					//loader  = $('#' + modal_id + '_baldrickModalLoader'),
					title  = $('#' + modal_id + '_baldrickModalTitle'),
					body  = $('#' + modal_id + '_baldrickModalBody'),
					footer  = $('#' + modal_id + '_baldrickModalFooter');

				// reset modal
				//modal.removeClass('fade');

				label.empty().parent().hide();
				body.addClass(loadClass);

				footer.empty().hide();
				if(trigger.data('modalTitle')){
					label.html(trigger.data('modalTitle')).parent().show();
				}
				if(trigger.data('modalButtons')){
					var buttons = $.trim(trigger.data('modalButtons')).split(';'),
						button_list = [];

					body.addClass('has-buttons');

					if(buttons.length){
						for(b=0; b<buttons.length;b++){
							var options   = buttons[b].split('|'),
								buttonLabel = options[0],
								callback  = options[1].trim(),
								atts    = $.extend({}, {"type": "button", "class":'button '}, ( callback.substr(0,1) === '{' ? jQuery.parseJSON(callback) : {"data-callback" : callback} ) ),
								button    = $('<button>', atts);
							if(options[2]){
								button.addClass(options[2]);
							}
							if(atts['data-modal-close']){
								button.data('callback', function(){
									$('#' + modal_id + '_baldrickModalCloser').trigger('click');
								});
							}
							if(callback === 'dismiss'){
								button.on('click', function(){
									$('#' + modal_id + '_baldrickModalCloser').trigger('click');
								})
							}else{
								button.addClass(defaults.triggerClass.substr(1));
							}
							button.prop('disabled', true);
							
							footer.append(button.html(buttonLabel));
							if(b<buttons.length){
								footer.append('&nbsp;');
							}
						}
						footer.show();
					}

				}



				//optional content
				if(trigger.data('modalContent')){
					body.html($(trigger.data('modalContent')).html());
					loader.hide();
					body.show();
					$(defaults.triggerClass).baldrick(defaults);
				}

				// RESET SIZE
				var resize_modal = this.resize_modal;
				resize_modal( modal, trigger );
				$(window).on('resize', function(){
					resize_modal( modal, trigger );
				});

				// launch
				/*modal.modal('show').on('hidden.bs.modal', function (e) {
					wm_hasModal = false;
					$(this).remove();
				});*/
			}
		}
	});

})(jQuery);