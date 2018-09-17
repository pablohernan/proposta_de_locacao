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
	$('.pp-tab li').each(function(index){
		if($(this).find('.pp-error').length > 0){
			$(this).find('a').click();
		}
	})

}
