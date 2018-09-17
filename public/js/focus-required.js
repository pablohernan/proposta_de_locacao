/* Pablo Rapetti */
/* exibe as abas fechadas com required objects */

function fr_showRequired(){

	// collapse
	$('.pp-collapse').each(function(index) { 
		if ($(this).find('.pp-error').length > 0) { 
			if($(this).hasClass('pp-collapse-closed')){
				$( this ).addClass('pp-collapse-opened');		
				$( this ).removeClass('pp-collapse-closed');		
			} 
		}
	})

	// abas
	var index = ''
	$('.tabs').each(function(index){
		$(this).find('.tab').each(function(){
			if($(this).find('.pp-error').length > 0){
				index = $(this).attr('tabindex');
			}
		})

		if(index != ''){
		 	$(this).find('a').each(function(){
				if( index == $(this).attr('tabindex') ){
					$(this).click();
				}
			})
		}

	})

}
