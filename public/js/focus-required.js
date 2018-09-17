/* Pablo Rapetti */
/* exibe as abas fechadas com required objects */

function fr_showRequired(){

	// collapse
	$('.pp-collapse').each(function(index) { 
		if ($(this).find('.pp-error').length > 0) { 
			$(this).addClass('pp-collapse-opened'); 
		}
	})

	// abas
	$('.pp-tab').each(function(index){
		if($(this).find('.pp-error').length > 0){
			$(this).click();
		}
	})

}
