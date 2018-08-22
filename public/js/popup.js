var serverPath = 'https://wiseitcsc.partage.com.br:8445';
var codEmpreendimento = '1';



var localVersion = false;

var phase_1 = 2617647; 
var phase_2 = 2617648;
var phase_3 = 2617649;
var phase_4 = 2617650;

var path = '';
if(localVersion){
 path = 'http://localhost/pipefy/forms/proposta_de_locacao/public';
 showList();
}

var cardId;

document.addEventListener("DOMContentLoaded", function(event) {
      
     // try{
        p = PipefyApp.init();
        //PipefyApp.resizeTo("#list");
        
        //PipefyApp.render(function(){
        //});

        

        p.card().then(function(card) {
          console.log('CARD_ID:'+card.id) // { id: '23abc', ... }
          cardId = card.id;

          init();


          
          console.log(card.current_phase.id);
           /* se é outra phase */
      //    if(card.current_phase.id != phase_1)//2462801)
      //      disableForm();

          // populo com os dados da tabela
          setEntradas(popular);
        });
     // }catch(e){console.log(e)}

});




function init(){
	
	/*	$('*').each(function(){
	if ( $(this).attr('title') !== undefined && $(this).attr('title') != '' && $(this).attr('class')=='toolTip' ){
			$(this).tipTip();
		}
	});	
	*/

/*
	$('.money').val('0,00');
	$('.money').maskMoney({
		thousands:'.', decimal:',', 
		allowZero:true , 
		precision:2, 
		allowNegative:true
	});
	
	$('.valorCalculoDecimal1').val('0,0');
	$('.valorCalculoDecimal1').maskMoney({
		thousands:'.', decimal:',', 
		allowZero:true , 
		precision:1, 
		allowNegative:true
	});
	
	//$('.valorSingularidade').val('0,00000');
	$('.valorSingularidade').maskMoney({
		thousands:'.', decimal:',', 
		allowZero:true , 
		precision:5, 
		allowNegative:true
	});

		
	$('.percentDois').mask('#.###.##0,00%', {reverse: true});
	
	$('.percentUm').mask('#.###.#0,0%', {reverse: true});
*/
	addOriginalClass();
	populaCombos();
	getCoeficientes();
	getEntradasFormulario();		
	//InitEntradas();		
	initFormulario();
	//selecionaTipoNegociacao($('id="DADOS_GERAIS.TIPO_NEGOCIACAO"').val());

	
	//if(FORM.modo.value == 'visualizacao')
		//wiseit.dom.setFormDisable("formulario");
}

function addOriginalClass(){
	// money 
	$( '[id=\'DADOS_GERAIS.SHOPPING\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_ABL_M2\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_FPP\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_AMM_MEDIO_R\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_UTIMO_AMM_R_M2\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_AMM_R\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_AMM_R\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_CONDOMINIO_R\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_FPP_R\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_TOTAL_R\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ABL\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ASSUNCAO_DIVIDA\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_FACHADA_M\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_CRD\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.MEDIAPORSEGMENTO_ABL\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.MEDIAPORSEGMENTO_AMM_MEDIO\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.MEDIAPORSEGMENTO_A_PERC\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.MEDIAPORMARCA_ABL\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.MEDIAPORMARCA_AMM_MEDIO\']' ).addClass('money');
	$( '[id=\'DADOS_GERAIS.MEDIAPORMARCA_A_PERC\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.1ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.1ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.1ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.1ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.1ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.2ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.2ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.2ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.2ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.2ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.3ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.3ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.3ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.3ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.3ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.4ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.4ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.4ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.4ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.4ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.5ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.5ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.5ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.5ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.5ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.6ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.6ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.6ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.6ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.6ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.7ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.7ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.7ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.7ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.7ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.8ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.8ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.8ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.8ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.8ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.9ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.9ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.9ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.9ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.9ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.10ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.10ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.10ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.10ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.10ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_AMM_DOBRADO_DEZEMBRO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_CARENCIA\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.TABELA_CDU\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.TABELA_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.TABELA_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.TABELA_MUTUO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_CDU\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_MUTUO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_CDU\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_MUTUO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SINAL_CDU\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SINAL_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SINAL_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SINAL_MUTUO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SALDO_CDU\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SALDO_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SALDO_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SALDO_MUTUO\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_VGL.VGL_R\']' ).addClass('money');
	$( '[id=\'CONVENCIONAL_VGL.COMERCIALIZACAO_R\']' ).addClass('money');
	$( '[id=\'POPUP_ALUGUEL.1ANO_ALUGUELMINIMOMENSAL_R\']' ).addClass('money');
	$( '[id=\'POPUP_ALUGUEL.1ANO_ALUGUELMINIMOMENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'POPUP_ALUGUEL.1ANO_PONTODEEQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'POPUP_ALUGUEL.1ANO_PONTODEEQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'POPUP_ALUGUEL.1ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'POPUP_ALUGUEL.TOTAL_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'POPUP_VGL.VGL_R\']' ).addClass('money');
	$( '[id=\'POPUP_VGL.COMERCIALIZACAO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.1ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.1ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.1ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.1ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.1ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.2ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.2ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.2ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.2ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.2ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.3ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.3ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.3ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.3ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.3ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.4ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.4ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.4ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.4ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.4ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.5ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.5ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.5ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.5ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.5ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.6ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.6ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.6ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.6ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.6ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.7ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.7ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.7ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.7ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.7ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.8ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.8ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.8ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.8ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.8ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.9ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.9ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.9ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.9ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.9ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.10ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.10ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.10ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.10ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.10ANO_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_ALUGUEL.TOTAL_AMM_ANO_R\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.TABELA_CDU\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.TABELA_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.TABELA_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.TABELA_MUTUO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.PROPOSTA_CDU\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.PROPOSTA_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.PROPOSTA_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.PROPOSTA_MUTUO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.PROPOSTAM2_CDU\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.PROPOSTAM2_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.PROPOSTAM2_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.PROPOSTAM2_MUTUO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.SINAL_CDU\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.SINAL_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.SINAL_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.SINAL_MUTUO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.SALDO_CDU\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.SALDO_TAXA_TRANSFERENCIA\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.SALDO_TAXA_ADESAO\']' ).addClass('money');
	$( '[id=\'OUTROS_CDU_TT.SALDO_MUTUO\']' ).addClass('money');
	$( '[id=\'OUTROS_VGL.VGL_R\']' ).addClass('money');
	$( '[id=\'OUTROS_VGL.COMERCIALIZACAO_R\']' ).addClass('money');


	// valorCalculoDecimal1
	$( '[id=\'CONVENCIONAL_ALUGUEL.1ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.2ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.3ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.4ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.5ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.6ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.7ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.8ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.9ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'CONVENCIONAL_ALUGUEL.10ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'POPUP_ALUGUEL.1CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'POPUP_ALUGUEL.1ANO_ALUGUELMINIMOMENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'POPUP_ALUGUEL.TOTAL_R_M2\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'POPUP_ALUGUEL.TOTAL_AMM_DOBRADO_DEZEMBRO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'POPUP_ALUGUEL.TOTAL_CARENCIA\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.1CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.1ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.2CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.2ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.3CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.3ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.4CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.4ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.5CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.5ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.6CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.6ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.7CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.7ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.8CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.8ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.9CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.9ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.10CTO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.10ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.TOTAL_AMM_DOBRADO_DEZEMBRO\']' ).addClass('valorCalculoDecimal1');
	$( '[id=\'OUTROS_ALUGUEL.TOTAL_CARENCIA\']' ).addClass('valorCalculoDecimal1');

	// valorSingularidade
	$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_SINGULARIDADE\']' ).addClass('valorSingularidade');

	// percentDois
	$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_FPP\']' ).addClass('percentDois');
	$( '[id=\'CONVENCIONAL_VGL.COMERCIALIZACAO_PERC\']' ).addClass('percentDois');
	$( '[id=\'POPUP_VGL.COMERCIALIZACAO_PERC\']' ).addClass('percentDois');
	$( '[id=\'OUTROS_VGL.COMERCIALIZACAO_PERC\']' ).addClass('percentDois');
}


function valida(codItemOcorrencia) {
	
	var existeMidia = $( '[id=\'DADOS_GERAIS.EXISTE_MIDIA\']' ).val();		
	if(existeMidia==null || existeMidia==''){
		msgwiseit('exclamacao',"Selecione uma opção no campo 'existe mídia'",'Ok,fecharmsg()');
		return "Selecione uma opção no campo 'existe mídia'";
	}
	
	var razaoSocial = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_RAZAOSOCIAL\']' ).val();		
	if(razaoSocial==null || razaoSocial==''){
		msgwiseit('exclamacao','Informe uma razão social em proposta comercial','Ok,fecharmsg()');
		return 'Informe uma razão social em proposta comercial';
	}
	
	var cnpj = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_CNPJ\']' ).val();		
	if(cnpj==null || cnpj==''){
		msgwiseit('exclamacao','Informe um cpf ou cnpj em proposta comercial','Ok,fecharmsg()');
		return 'Informe um cpf ou cnpj em proposta comercial';
	}

	return true;
}


function formataCampoCpfCnpj(obj){
	
	var texto = obj.value;
	
	texto = texto.replace('.','');
	texto = texto.replace('.','');
	texto = texto.replace('/','');
	texto = texto.replace('-','');
	
	if(texto.length > 11){//cnpj
		FormatCnpj(obj);
	}
	else{//cpf
		FormatCpf(obj);
	}
	
}

function validaCampoCpfCnpj(obj){
	
	var texto = obj.value;
	
	texto = texto.replace('.','');
	texto = texto.replace('.','');
	texto = texto.replace('/','');
	texto = texto.replace('-','');
	
	var isCNPJ = (texto.length > 11);
			
	formataCampoCpfCnpj(obj);
			
	//essas funções são as mesmas do wiseit, com alguma alteração. 
	//gambiarra para fazer a mensagem aparecer corretamente e não ter que alterar o core.
	if(isCNPJ){
		validaCNPJ_partage(obj); 
	}
	else{
		isCpf_partage(obj); 
	}
	
}


function isCpf_partage(obj) {
	var valor = obj.value;
	/* tiro os pontos e o hifen se � que tem.*/
	valor = valor.replace('.','');
	valor = valor.replace('.','');
	valor = valor.replace('-','');
	
	if (valor.length==11){
	
		var cpfsDeTeste = '11111111111'
						+'#22222222222'
						+'#33333333333'
						+'#44444444444'
						+'#55555555555'
						+'#66666666666'
						+'#77777777777'
						+'#88888888888'
						+'#99999999999'
						+'#00000000000';
		if (cpfsDeTeste.indexOf(valor)>-1){
			msgwiseit("exclamacao","CPF inv\u00E1lido!",resources.getMessage('labels.alert.opcao.ok')+",fecharmsg()", msgdoc);
			obj.value = "";
			return false;
		}
	
		var aux = 0;
		for (var i=0; i<9; i++){
			aux = aux + parseInt(valor.substr(i,1),10) * parseInt(i+1,10);
		} 

		var resto = aux%11
		if (resto==10) resto=0;

		if(resto==valor.substr(9,1)){
			var aux = 0;
			for (var i=1; i<10; i++){
				aux = aux + parseInt(valor.substr(i,1),10) * parseInt(i,10);
			} 

			var resto = aux%11
			if (resto==10) resto=0;
			if(resto==valor.substr(10,1)){
				return true;
			} else {
				msgwiseit("exclamacao","CPF inv\u00E1lido!",resources.getMessage('labels.alert.opcao.ok')+",fecharmsg()", msgdoc);
				obj.value = "";
				return false;
			}
		} else {
			msgwiseit("exclamacao","CPF inv\u00E1lido!",resources.getMessage('labels.alert.opcao.ok')+",fecharmsg()", msgdoc);
			obj.value = "";
			return false;
		}
	}else{
		if(valor.length != 0){
			msgwiseit("exclamacao","Digite os 11 n\u00FAmeros do seu CPF!",resources.getMessage('labels.alert.opcao.ok')+",fecharmsg()", msgdoc);
			obj.value = "";
			return false;
		}
	}
	
	return true;
}

function validaCNPJ_partage(obj) {
	//CNPJ = document.validacao.CNPJID.value;
	var CNPJ = obj.value;
	/* limpo os caracteres especiais*/
	CNPJ = CNPJ.replace('.','');
	CNPJ = CNPJ.replace('.','');
	CNPJ = CNPJ.replace('/','');
	CNPJ = CNPJ.replace('-','');	
	
	erro = new String;
	
	var nonNumbers = /\D/;
	if (nonNumbers.test(CNPJ)) erro += "";
	var a = [];
	var b = new Number;
	var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
	for (i=0; i<12; i++){
		a[i] = CNPJ.charAt(i);
		b += a[i] * c[i+1];
	}
	if ((x = b % 11) < 2) { a[12] = 0 } else { a[12] = 11-x }
		b = 0;
	for (y=0; y<13; y++) {
		b += (a[y] * c[y]);
	}
	if ((x = b % 11) < 2) { a[13] = 0; } else { a[13] = 11-x; }
	if ((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])){
		erro +="CNJP inv\u00E1lido.";
	}
	if (erro.length > 0){
		msgwiseit("exclamacao", erro, resources.getMessage('labels.alert.opcao.ok')+",fecharmsg()", msgdoc);
		obj.value = "";
		return false;
	} else {
		//alert("CNPJ valido!");
	}
	return true;
}






function gravar(){
	msgwiseit('ampuleta', 'Aguarde...',"");
	GravaEntradas();
	fecharmsg();
	parent.close();
}

function fecharTela(){
	parent.close();
}

function ValidaEntradasPersonalizado() {
	return true;
}






function restCall( url_ ){
	$.ajax({
		async:false,
		type: 'GET',
		url: url_,
		success: function( dados ){
			ret = dados;
		},
		error: function(xhr,err){
			ret = {'error':xhr.responseText};
		}
	});	
	return ret;
}

function restCallPost( url_ , data){
	$.ajax({
		async:false,
		type: 'POST',
		url: url_,

		data: JSON.stringify(data),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
		
		success: function( dados ){
			ret = dados;
		},
		error: function(xhr,err){
			ret = {'error':xhr.responseText};
		}
	});	
	return ret;
}

function populaCombos(){
	populaComboMarca();
	populaComboSegmento();
	populaComboLocalizacao();
	populaComboValorPadrao();
}


function populaComboMarca(){
	var data = restCall(serverPath + '/PartageWEB/rest/marca/all');
			
	var comoboId = 'DADOS_GERAIS.SITUACAOANTERIOR_MARCA';
	$( '[id=\'' + comoboId + '\']' ).append('<option value="">' + ':: SELECIONAR ::' + '</option>');
	$.each(data, function(i, item) {
	    $( '[id=\'' + comoboId + '\']' ).append('<option value=' + item.codigo + '>' + item.nome + '</option>');
	})
	
	
	comoboId = 'DADOS_GERAIS.PROPOSTACOMERCIAL_MARCA';
	$( '[id=\'' + comoboId + '\']' ).append('<option value="">' + ':: SELECIONAR ::' + '</option>');
	$.each(data, function(i, item) {
	    $( '[id=\'' + comoboId + '\']' ).append('<option value=' + item.codigo + '>' + item.nome + '</option>');
	})
	
}


function populaComboSegmento(){
	var data = restCall(serverPath + '/ShoppingWEB/rest/segmento/all/folha');
			
	var comoboId = 'DADOS_GERAIS.SITUACAOANTERIOR_SEGMENTO';
	$( '[id=\'' + comoboId + '\']' ).append('<option value="">' + ':: SELECIONAR ::' + '</option>');
	$.each(data, function(i, item) {
	    $( '[id=\'' + comoboId + '\']' ).append('<option value=' + item.codigo + '>' + item.nome + '</option>');
	})
	
	
	comoboId = 'DADOS_GERAIS.PROPOSTACOMERCIAL_SEGMENTO';
	$( '[id=\'' + comoboId + '\']' ).append('<option value="">' + ':: SELECIONAR ::' + '</option>');
	$.each(data, function(i, item) {
	    $( '[id=\'' + comoboId + '\']' ).append('<option value=' + item.codigo + '>' + item.nome + '</option>');
	})
}


function populaComboLocalizacao(){
	var _url = serverPath + '/ShoppingWEB/rest/areamall/all/'+codEmpreendimento;
	var data = restCall(_url);
			
	var comoboId = 'DADOS_GERAIS.PROPOSTACOMERCIAL_LOCALIZACAO';
	$( '[id=\'' + comoboId + '\']' ).append('<option value="">' + ':: SELECIONAR ::' + '</option>');
	$.each(data, function(i, item) {
	    $( '[id=\'' + comoboId + '\']' ).append('<option value=' + item.codigo + '>' + item.nome + '</option>');
	})
}

function populaComboValorPadrao(){
	
	//CONVENCIONAL_ALUGUEL.1ANO_AMM_DOBRADO_DEZEMBRO
	//POPUP_ALUGUEL.1ANO_AMM_DOBRADO_DEZEMBRO
	//OUTROS_ALUGUEL.1ANO_AMM_DOBRADO_DEZEMBRO
	var total = 10;
	for(var i = 1; i <= total; i++ ){
		$( '[id=\'CONVENCIONAL_ALUGUEL.'+i+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).append('<option value=' + 0 + '>' + 0 + '</option>');			
		$( '[id=\'CONVENCIONAL_ALUGUEL.'+i+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).append('<option value=' + 1 + '>' + 1 + '</option>');
								
		$( '[id=\'POPUP_ALUGUEL.'+i+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).append('<option value=' + 0 + '>' + 0 + '</option>');
		$( '[id=\'POPUP_ALUGUEL.'+i+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).append('<option value=' + 1 + '>' + 1 + '</option>');			
				
		$( '[id=\'OUTROS_ALUGUEL.'+i+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).append('<option value=' + 0 + '>' + 0 + '</option>');
		$( '[id=\'OUTROS_ALUGUEL.'+i+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).append('<option value=' + 1 + '>' + 1 + '</option>');	
	}
	
	//CONVENCIONAL_ALUGUEL.1ANO_CARENCIA	
	//POPUP_ALUGUEL.1ANO_CARENCIA
	//OUTROS_ALUGUEL.1ANO_CARENCIA
	for(var i = 1; i <= total; i++ ){
		for(var j = 0; j <= 12; j++ ){
			$( '[id=\'CONVENCIONAL_ALUGUEL.'+i+'ANO_CARENCIA\']' ).append('<option value=' + j + '>' + j + '</option>');
			
			$( '[id=\'POPUP_ALUGUEL.'+i+'ANO_CARENCIA\']' ).append('<option value=' + j + '>' + j + '</option>');
			
			$( '[id=\'OUTROS_ALUGUEL.'+i+'ANO_CARENCIA\']' ).append('<option value=' + j + '>' + j + '</option>');
		}
	}
	
	//POPUP_ALUGUEL.1ANO_MODELO
	//OUTROS_ALUGUEL.1ANO_MODELO
	for(var i = 1; i <= total; i++ ){			
		$( '[id=\'POPUP_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'AMM01' + ' title="AMM fixo + AL % + CRD + FPP (20%)" alt="AMM fixo + AL % + CRD + FPP (20%)" >' + 'AMM.01' + '</option>');			
		$( '[id=\'POPUP_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'AMM02' + ' title="AMM fixo - Condomínio Fixo (R$) + FPP (definir) - Para Âncoras e Megalojas" alt="AMM fixo - Condomínio Fixo (R$) + FPP (definir) - Para Âncoras e Megalojas" >' + 'AMM.02' + '</option>');
		$( '[id=\'POPUP_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'CTO1' + ' title="% Faturamento Bruto, Sem Garantia" alt="% Faturamento Bruto, Sem Garantia" >' + 'CTO.1' + '</option>');			
		$( '[id=\'POPUP_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'CTO2' + ' title="% Faturamento Bruto, Com Garantia de Condomínio" alt="% Faturamento Bruto, Com Garantia de Condomínio" >' + 'CTO.2' + '</option>');
		$( '[id=\'POPUP_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'CMM' + ' title="Valor Fixo, com destinação para Aluguel, Condomínio e FPP já predeterminado" alt="Valor Fixo, com destinação para Aluguel, Condomínio e FPP já predeterminado" >' + 'CMM' + '</option>');			
		
		$( '[id=\'OUTROS_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'AMM01' + ' title="AMM fixo + AL % + CRD + FPP (20%)" alt="AMM fixo + AL % + CRD + FPP (20%)" >' + 'AMM.01' + '</option>');			
		$( '[id=\'OUTROS_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'AMM02' + ' title="AMM fixo - Condomínio Fixo (R$) + FPP (definir) - Para Âncoras e Megalojas" alt="AMM fixo - Condomínio Fixo (R$) + FPP (definir) - Para Âncoras e Megalojas" >' + 'AMM.02' + '</option>');
		$( '[id=\'OUTROS_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'CTO1' + ' title="% Faturamento Bruto, Sem Garantia" alt="% Faturamento Bruto, Sem Garantia" >' + 'CTO.1' + '</option>');			
		$( '[id=\'OUTROS_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'CTO2' + ' title="% Faturamento Bruto, Com Garantia de Condomínio" alt="% Faturamento Bruto, Com Garantia de Condomínio" >' + 'CTO.2' + '</option>');
		$( '[id=\'OUTROS_ALUGUEL.'+i+'ANO_MODELO\']' ).append('<option value=' + 'CMM' + ' title="Valor Fixo, com destinação para Aluguel, Condomínio e FPP já predeterminado" alt="Valor Fixo, com destinação para Aluguel, Condomínio e FPP já predeterminado" >' + 'CMM' + '</option>');
	}
	
}


function initFormulario(){
	
	{
		var valor = $( '[id=\'DADOS_GERAIS.NUM_OCORRENCIA\']' ).val();
		if(valor==null || valor == ''){
			var _numOcorrencia = "";
			if(_numOcorrencia!=null && _numOcorrencia!=''){
				$( '[id=\'DADOS_GERAIS.NUM_OCORRENCIA\']' ).val(_numOcorrencia);
			}
		}
	}
	
	
	// selecionaTipoNegociacao(entrada('DADOS_GERAIS').get('TIPO_NEGOCIACAO'));
			
	{
		var valor = $( '[id=\'CONVENCIONAL_VGL.COMERCIALIZACAO_PERC\']' ).val();
		if(valor==null || valor == '')
			$( '[id=\'CONVENCIONAL_VGL.COMERCIALIZACAO_PERC\']' ).val('5%');
	}
	
	{
		var valor = $( '[id=\'POPUP_VGL.COMERCIALIZACAO_PERC\']' ).val();
		if(valor==null || valor == '')
			$( '[id=\'POPUP_VGL.COMERCIALIZACAO_PERC\']' ).val('5%');
	}
	
	{
		var valor = $( '[id=\'OUTROS_VGL.COMERCIALIZACAO_PERC\']' ).val();
		if(valor==null || valor == '')
			$( '[id=\'OUTROS_VGL.COMERCIALIZACAO_PERC\']' ).val('5%');
	}		
	
	{
		var singularidade = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_SINGULARIDADE\']' ).val();
		if(singularidade==''){
			$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_SINGULARIDADE\']' ).val('1,00000') // padrão singularidade igual a 1,00000
		}
	}
	
	{
		var meses = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_PRAZO_MESES\']' ).val();
		if(meses==''){
			$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_PRAZO_MESES\']' ).val('60') // padrão 5 anos (60 meses)
		}
		controlaQtdLinhas();
	}
	
	
	
	{
		$( '[id=\'PARECERES.SUPERINTENDENTE_DESCRICAO\']' ).prop("disabled",true);
		$( '[id=\'PARECERES.SUPERINTENDENTE_DESCRICAO\']' ).addClass("readonly");
		
		$( '[id=\'PARECERES.DIRETORIACOMERCIAL_DESCRICAO\']' ).prop("disabled",true);
		$( '[id=\'PARECERES.DIRETORIACOMERCIAL_DESCRICAO\']' ).addClass("readonly");
		
		$( '[id=\'PARTAGE COMERCIALIZAÇÃO.OBS COMERCIAL\']' ).prop("disabled",true);
		$( '[id=\'PARTAGE COMERCIALIZAÇÃO.OBS COMERCIAL\']' ).addClass("readonly");
					
		$( '[id=\'PARECERES.DIRETORFINANCEIRO_DESCRICAO\']' ).prop("disabled",true);
		$( '[id=\'PARECERES.DIRETORFINANCEIRO_DESCRICAO\']' ).addClass("readonly");
		
		
		
		$( '[id=\'COMITE.DESCRICAO\']' ).prop("disabled",true);
		$( '[id=\'COMITE.DESCRICAO\']' ).addClass("readonly");

		$( '[id=\'COMITE.CEO_AJUSTE\']' ).prop("disabled",true);
		$( '[id=\'COMITE.CEO_AJUSTE\']' ).addClass("readonly");
		
		$( '[id=\'COMITE.SUPERINTENDENTE\']' ).prop("disabled",true);
		$( '[id=\'COMITE.SUPERINTENDENTE\']' ).addClass("readonly");
		
		$( '[id=\'COMITE.DIRETORIA_COMERCIAL\']' ).prop("disabled",true);
		$( '[id=\'COMITE.DIRETORIA_COMERCIAL\']' ).addClass("readonly");
								
		$( '[id=\'COMITE.NOME_CORRETOR\']' ).prop("disabled",true);
		$( '[id=\'COMITE.NOME_CORRETOR\']' ).addClass("readonly");
		
		$( '[id=\'COMITE.DATA_DO_COMITE\']' ).prop("disabled",true);
		$( '[id=\'COMITE.DATA_DO_COMITE\']' ).addClass("readonly");		

		$( '[id=\'COMITE.SUPERINTENDENTE_COMERCIAL\']' ).prop("disabled",true);
		$( '[id=\'COMITE.SUPERINTENDENTE_COMERCIAL\']' ).addClass("readonly");

		$( '[id=\'COMITE.DIRETORIA_FINANCAS\']' ).prop("disabled",true);
		$( '[id=\'COMITE.DIRETORIA_FINANCAS\']' ).addClass("readonly");	

		$( '[id=\'COMITE.NOME_CEO\']' ).prop("disabled",true);
		$( '[id=\'COMITE.NOME_CEO\']' ).addClass("readonly");					
	}
	
}



function selecionaTipoNegociacao(tipoNegociacao){
	//CONVENCIONAL
	//POP_UP
	//OUTROS
	
	if(tipoNegociacao == 'OUTROS'){
		$(".tbl_convencional").hide();
		$(".tbl_popup").hide();
		$(".tbl_outros").show();
	}
	else if(tipoNegociacao == 'POP_UP'){
		$(".tbl_convencional").hide();
		$(".tbl_popup").show();
		$(".tbl_outros").hide();
	}
	else{//convencional. padrao selecionado
		$(".tbl_convencional").show();
		$(".tbl_popup").hide();
		$(".tbl_outros").hide();
	}	
	calcularDadosTipoNegociacao();
}


var numLinhas = 5;
var totalLinhasPossiveis = 10;
	
function controlaQtdLinhas(){				
	var meses = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_PRAZO_MESES\']' ).val();		
	var result = parseFloat(meses) / 12;		
	numLinhas = Math.ceil(result);		
	if(numLinhas > totalLinhasPossiveis)
		numLinhas = totalLinhasPossiveis;
					
	for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
		if(i > numLinhas){
			$( '[id=\'tr'+i+'CONVENCIONAL_ALUGUEL\']' ).hide();
			$( '[id=\'tr'+i+'OUTROS_ALUGUEL\']' ).hide();
		}
		else{
			$( '[id=\'tr'+i+'CONVENCIONAL_ALUGUEL\']' ).show();
			$( '[id=\'tr'+i+'OUTROS_ALUGUEL\']' ).show();
		}
	}
	
	calcularDadosTipoNegociacao();
}


function calculaDataTermino(){
	
	var data = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_INICIO\']' ).val();
	var prazoMeses = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_PRAZO_MESES\']' ).val();	
	
	if(data!='' && prazoMeses!=''){			
		try{				
			var diadata = '';
			var mesdata = '';
			var anodata = '';
		
			var dataArray = data.split("/");
			
			anodata = dataArray[2];		
			if(dataArray[1]<10){
				mesdata = ((dataArray[1]).replace("0", ""))-1;
			}else{
				mesdata = (dataArray[1])-1;					
			}
			diadata = dataArray[0];
		
		
			//data de término = inicio + meses - 1 dia 
			var d = new Date(anodata, mesdata, diadata);
			d.setMonth( d.getMonth( ) + parseInt(prazoMeses) );
			d.setDate(d.getDate() -1 );
				
						
			var dataTermino = '';				
			if(d.getDate() < 10){
				dataTermino += '0'
			}
			dataTermino += d.getDate();				
			dataTermino += '/';				
			if( (d.getMonth() + 1) < 10 ){
				dataTermino += '0'
			}	
			dataTermino += d.getMonth() + 1;				
			dataTermino += '/';				
			dataTermino += d.getFullYear();
			
		
			$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_TERMINO\']' ).val(dataTermino);
			
		} catch(e) {
			console.log("Não é possível calcular a data de termino: " + e)
		}			
	}
	
}


function controlaDadosCalculadosDataInicio(){
	
	//var dataInicio = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_INICIO\']' ).val();
	//var dataAtual = hoje();
	
	//var numDiasData = getNumDiasEntreDatas(dataInicio, dataAtual);
	
	//if(numDiasData < 0){
	//	$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_INICIO\']' ).val('');
	//	msgwiseit('exclamacao','A data início não pode ser anterior a data atual','Ok,fecharmsg()');
	//}
	//else{
		calculaDataTermino();
	//}
}

function controlaDadosCalculadosDataInauguracao(){
	
	var dataInauguracao = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_INAUGURACAO\']' ).val();
	var dataAtual = hoje();
	
	var numDiasData = getNumDiasEntreDatas(dataInauguracao, dataAtual);
	
	if(numDiasData < 0){
		$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_INAUGURACAO\']' ).val('');
		msgwiseit('exclamacao','A data de inaguração não pode ser anterior a data atual','Ok,fecharmsg()');
	}		
}



function controlaDadosCalculadosPrazo(){
	controlaQtdLinhas();
	calculaDataTermino();
}



var vlrAtualSuc = "";

//pesquisa situacao anterior Enter e Tab
$(function(){		
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_SUC_N\']' ).keypress(function (e) {
		if (e.keyCode == 13) {				
			pesquisarSituacaoAnteriorBySucNumero();				
		}
	});
	$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_SUC_N\']' ).keydown(function (e) {
		if (e.keyCode == 9) {				
			pesquisarSituacaoAnteriorBySucNumero();				
		}
	});
});


function pesquisarSituacaoAnteriorBySucNumero(){
	
	var vlrPreenchido = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_SUC_N\']' ).val();				
			
	//if(vlrPreenchido != '' && vlrAtualSuc != vlrPreenchido){
	if(vlrPreenchido != ''){

		var obj = {
				'suc': vlrPreenchido,
				'codEmpreendimento': codEmpreendimento,
		}
		
		var data = restCallPost(serverPath + '/PartageWEB/rest/situacaoatual/suc', obj);


		if(!data.existeSuc){
			msgwiseit('exclamacao','Não foi encontrado um número de suc com valor informado','Ok,fecharmsg()');
			return;
		}

		
		vlrAtualSuc = data.suc;					
		
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_MARCA\']' ).val(data.marca.codigo);
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_SEGMENTO\']' ).val(data.segmento.codigo);
		
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_FANTASIA\']' ).val(data.fantasia);
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_SUC_N\']' ).val(data.suc);
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_ABL_M2\']' ).val(data.abl);
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_ALUGUEL_PERC\']' ).val(data.aluguelPorcentagem + "%");
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_FPP\']' ).val(data.fpp);
		
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_AMM_MEDIO_R\']' ).val(data.ammMedio);
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_UTIMO_AMM_R_M2\']' ).val(data.ultimoAmm);
								
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_AMM_R\']' ).val(data.dividaAmm);
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_CONDOMINIO_R\']' ).val(data.dividaCondominio);
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_FPP_R\']' ).val(data.dividaFpp);


		calcularDadosGerais();
		calcularDadosTipoNegociacao();
		
	}
	
}


function calcularDadosGerais(){
	
	{			
		var total = '';
	
		var abl = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_ABL_M2\']' ).val();
		var ammMedio = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_AMM_MEDIO_R\']' ).val();			
				
		if(abl=='')
			abl = "0,00";
		abl = abl.replace(/\./g, '');
		abl = abl.replace(/,/g, '.');
				
		if(ammMedio=='')
			ammMedio = "0,00";
		ammMedio = ammMedio.replace(/\./g, '');
		ammMedio = ammMedio.replace(/,/g, '.');
				
		
		if(parseFloat(abl) == 0){
			total = "0,00";
		}
		else{
			total = parseFloat(ammMedio) / parseFloat(abl);

			total = total.toFixed(2);		
			total = total.replace(/\./g, ',');
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		}	
		
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_AMM_R\']' ).val(total);			
	}
	
	{			
		var total = '';
	
		var dividaAmm = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_AMM_R\']' ).val();
		var dividaCondominio = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_CONDOMINIO_R\']' ).val();
		var dividaFpp = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_FPP_R\']' ).val();
				
		if(dividaAmm=='')
			dividaAmm = "0,00";
		dividaAmm = dividaAmm.replace(/\./g, '');
		dividaAmm = dividaAmm.replace(/,/g, '.');
				
		if(dividaCondominio=='')
			dividaCondominio = "0,00";
		dividaCondominio = dividaCondominio.replace(/\./g, '');
		dividaCondominio = dividaCondominio.replace(/,/g, '.');
		
		if(dividaFpp=='')
			dividaFpp = "0,00";
		dividaFpp = dividaFpp.replace(/\./g, '');
		dividaFpp = dividaFpp.replace(/,/g, '.');
				
		
		total = parseFloat(dividaAmm) + parseFloat(dividaCondominio) + parseFloat(dividaFpp);

		total = total.toFixed(2);		
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		
		$( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_DIVIDA_TOTAL_R\']' ).val(total);			
	}
	
}



function getMediaSegmento(combo){
	
	var segmento = '';
	var abl = '0,00';
	var ammMedio = '0,00';
	var aPorcentagem = '0,00';
	var prazoMeses = '';		
			
	var codSegmento = combo.value;
	if(codSegmento!=''){			
		var _url = serverPath + '/PartageWEB/rest/situacaoatual/media/segmento/'+codSegmento+'/'+codEmpreendimento;
		
		var data = restCall(_url);
		
		segmento = $(combo).find('option:selected').text();	
					
		abl = data.abl;
		ammMedio = data.ammMedio;
		aPorcentagem = data.aPorcentagem;
		prazoMeses = data.prazoMeses;
	}		
	
	$( '[id=\'DADOS_GERAIS.MEDIAPORSEGMENTO_SEGMENTO\']' ).val(segmento);
	$( '[id=\'DADOS_GERAIS.MEDIAPORSEGMENTO_ABL\']' ).val(abl);
	$( '[id=\'DADOS_GERAIS.MEDIAPORSEGMENTO_AMM_MEDIO\']' ).val(ammMedio);
	$( '[id=\'DADOS_GERAIS.MEDIAPORSEGMENTO_A_PERC\']' ).val(aPorcentagem);
	$( '[id=\'DADOS_GERAIS.MEDIAPORSEGMENTO_PRAZO\']' ).val(prazoMeses);		
	
}

function getMediaMarca(combo){
	
	var marca = '';
	var abl = '0,00';
	var ammMedio = '0,00';
	var aPorcentagem = '0,00';
	var prazoMeses = '';		
			
	var codMarca = combo.value;
	if(codMarca!=''){			
		var _url = serverPath + '/PartageWEB/rest/situacaoatual/media/marca/'+codMarca;
		
		var data = restCall(_url);
		
		marca = $(combo).find('option:selected').text();	
					
		abl = data.abl;
		ammMedio = data.ammMedio;
		aPorcentagem = data.aPorcentagem;
		prazoMeses = data.prazoMeses;
	}		
	
	$( '[id=\'DADOS_GERAIS.MEDIAPORMARCA_MARCA\']' ).val(marca);
	$( '[id=\'DADOS_GERAIS.MEDIAPORMARCA_ABL\']' ).val(abl);
	$( '[id=\'DADOS_GERAIS.MEDIAPORMARCA_AMM_MEDIO\']' ).val(ammMedio);
	$( '[id=\'DADOS_GERAIS.MEDIAPORMARCA_A_PERC\']' ).val(aPorcentagem);
	$( '[id=\'DADOS_GERAIS.MEDIAPORMARCA_PRAZO\']' ).val(prazoMeses);		
	
}




var entradasFormulario;

function getEntradasFormulario(){		
	var _url = serverPath + '/PartageWEB/rest/propostalocacao/entradas';
	entradasFormulario = restCall(_url);
}



var fatoresArea;
var fatoresForma;
var coeficientesSegmento;
var coeficientesPosicao;

function getCoeficientes(){		
	var _url = serverPath + '/PartageWEB/rest/fator/area/'+codEmpreendimento;
	fatoresArea = restCall(_url);
			
	_url = serverPath + '/PartageWEB/rest/fator/forma';
	fatoresForma = restCall(_url);
	
	_url = serverPath + '/PartageWEB/rest/segmento/coeficiente';
	coeficientesSegmento = restCall(_url);
	
	_url = serverPath + '/PartageWEB/rest/posicao/coeficiente/'+codEmpreendimento;
	coeficientesPosicao = restCall(_url);		
}



function calculaCRD(){
	
	var FA = 0;
	var FM = 0;
	var FP = 0;
	var FF = 0;
	var FS = 0;
	
	
	//FA
	var abl = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ABL\']' ).val();
	abl = abl.replace(/\./g, '');
	abl = abl.replace(/,/g, '.');
	abl = parseFloat(abl);
	
	if(fatoresArea.length > 0){			
		for(var i = 0; i < fatoresArea.length; i++ ){
			var fatorArea = fatoresArea[i];
			var maior = fatorArea.maior;
			var menorIgual = fatorArea.menorIgual;								
			var valor = fatorArea.valor;
														
			if(maior==null && menorIgual!=null){//primeiro registro					
				if(abl <= menorIgual){						
					FA = valor;
					break;
				}
			}
			else if(maior!=null && menorIgual==null){//ultimo registro
				if(abl > maior){
					FA = valor;
					break;
				}
			}
			else{
				if(abl > maior && abl <= menorIgual){
					FA = valor;
					break;
				}
			}
			
		}
	}
	
	
	//FM
	var codSegmento = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_SEGMENTO\']' ).val();
	
	if(codSegmento!='' && coeficientesSegmento.length > 0){			
		for(var i = 0; i < coeficientesSegmento.length; i++ ){
			var coeficiente = coeficientesSegmento[i];
			
			var codSegmentoCoeficiente = coeficiente.codSegmento;
			var valor = coeficiente.valor;
			
			if(codSegmento == codSegmentoCoeficiente){
				FM = valor;
				break;
			}
			
		}
	}
	
	
	//FP
	var codAreaMall = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_LOCALIZACAO\']' ).val();
	
	if(codAreaMall!='' && coeficientesPosicao.length > 0){		
		for(var i = 0; i < coeficientesPosicao.length; i++ ){	
			var coeficiente = coeficientesPosicao[i];
			
			var codAreaMallCoeficiente = coeficiente.codAreaMall;
			var valor = coeficiente.valor;
							
			if(codAreaMall == codAreaMallCoeficiente){
				FP = valor;
				break;
			}
			
		}
	}
	
	
	//FF
	var fachada = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_FACHADA_M\']' ).val();
	fachada = fachada.replace(/\./g, '');
	fachada = fachada.replace(/,/g, '.');
	fachada = parseFloat(fachada);
	
	if(abl!=0){			
		var fachada_area = fachada / abl;
		
		if(fatoresForma.length > 0){			
			for(var i = 0; i < fatoresForma.length; i++ ){
				var fatorForma = fatoresForma[i];
				var maior = fatorForma.maior;
				var menorIgual = fatorForma.menorIgual;								
				var valor = fatorForma.valor;
															
				if(maior==null && menorIgual!=null){//primeiro registro					
					if(fachada_area <= menorIgual){						
						FF = valor;
						break;
					}
				}
				else if(maior!=null && menorIgual==null){//ultimo registro
					if(fachada_area > maior){
						FF = valor;
						break;
					}
				}
				else{
					if(fachada_area > maior && fachada_area <= menorIgual){
						FF = valor;
						break;
					}
				}
				
			}
		}
		
	}
	
	
	//FS
	FS = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_SINGULARIDADE\']' ).val();
	FS = FS.replace(/\./g, '');
	FS = FS.replace(/,/g, '.');
	FS = parseFloat(FS);
	
	
	
	
	/*
	CRD = (FA x ABL) x FM x FP x FF X FS
					
	CRD=	Coeficiente Rateio Despesas			
	FA=	Fator Área			
	FM=	Fator Mix			
	FP=	Fator Posição			
	FF=	Fator Forma (Dimensão)			
	FS=	Fator Singularidade			
	*/
	
	var CRD = (FA * abl) * FM * FP * FF * FS;		
	
	CRD = CRD.toFixed(2);		
	CRD = CRD.replace(/\./g, ',');
	
	$( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_CRD\']' ).val(CRD);		
}



	
function calcularDadosTipoNegociacao(){
	var tipoNegociacao = $( '[id=\'DADOS_GERAIS.TIPO_NEGOCIACAO\']' ).val();
	
	if(tipoNegociacao == 'OUTROS'){
		calcularDadosTabelaOutros();
	}
	else if(tipoNegociacao == 'POP_UP'){
		calcularDadosTabelaPopUp();
	}
	else{
		calcularDadosTabelaConvencional();
	}		
}
	
function calcularDadosTabelaPopUp(){
	
	var numLinhasPopUp = 1;
	var totalLinhasPossiveisPopUp = 1;
	
	//ALUGUEL MÍNIMO MENSAL
	//Degrau		
	//nao tem calculdo de degrau
	/*for(var i = 2; i <= numLinhasPopUp; i++ ){
		
		var linhaAnterior = i-1;
		var linhaAtual = i;
		
		var F36 = $( '[id=\'OUTROS_ALUGUEL.'+linhaAnterior+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
		F36 = F36.replace(/\./g, '');
		F36 = F36.replace(/,/g, '.');
		F36 = parseFloat(F36);
		
		var F37 = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
		F37 = F37.replace(/\./g, '');
		F37 = F37.replace(/,/g, '.');
		F37 = parseFloat(F37);
		
		var result = 0;
		if(F36==0 || F37==0){
			result = 0;
		} 
		else{
			result = (F37 - F36) / F36;
		}
		result = result * 100;
		result = result.toFixed(1);		
		result = result.replace(/\./g, ',');
		
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).val(result);			
	}*/
	
	
	//ANO_MODELO	
/*		
Se AMM.01 – Seguir regra de Preenchimento definida na negociação convencional; Coluna CTO fica desabilitada
Se AMM.02 – Seguir regra de Preenchimento definida na negociação convencional com a inclusão de um campo “observações” 
em algum lugar visível e de preenchimento obrigatório; Coluna CTO fica desabilitada
Se CTO.01 – habilita a coluna CTO, e DESABILITA todas de ALUGUEL MÍNIMO MENSAL, PONTO DE EQUILÍBRIO, AMM ANO. 
Inclusão de um campo “observações” em algum lugar visível e de preenchimento obrigatório
Se CTO.02 - habilita a coluna CTO, e DESABILITA todas de ALUGUEL MÍNIMO MENSAL, PONTO DE EQUILÍBRIO, AMM ANO. 
Inclusão de um campo “observações” em algum lugar visível e de preenchimento obrigatório
Se CMM - Seguir regra de Preenchimento definida na negociação convencional com a inclusão de um campo “observações”
em algum lugar visível e de preenchimento obrigatório. Coluna CTO fica desabilitada
*/
	
	for(var i = 1; i <= numLinhasPopUp; i++ ){
		var linhaAtual = i;
		
		var valorAnoModelo = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_MODELO\']' ).val();

		
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'CTO\']' ).prop("disabled",false);
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'CTO\']' ).removeClass("readonly");
		
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).prop("disabled",false);
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).removeClass("readonly");	
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_DEGRAU\']' ).prop("disabled",false);
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_DEGRAU\']' ).removeClass("readonly");
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R_M2\']' ).prop("disabled",false);
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R_M2\']' ).removeClass("readonly");

		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R\']' ).prop("disabled",false);
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R\']' ).removeClass("readonly");
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R_M2\']' ).prop("disabled",false);
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R_M2\']' ).removeClass("readonly");

		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).prop("disabled",false);
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).removeClass("readonly");
		
		
		if(valorAnoModelo == 'AMM01'){
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'CTO\']' ).prop("disabled",true);
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'CTO\']' ).addClass("readonly");
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'CTO\']' ).val('0,0');
		}
		else if(valorAnoModelo == 'AMM02' || valorAnoModelo == 'CMM'){
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'CTO\']' ).prop("disabled",true);
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'CTO\']' ).addClass("readonly");
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'CTO\']' ).val('0,0');
			//obersacoes
		}
		else if(valorAnoModelo == 'CTO1' || valorAnoModelo == 'CTO2'){
			
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).prop("disabled",true);
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).addClass("readonly");				
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).val('0,00');
			
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_DEGRAU\']' ).prop("disabled",true);
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_DEGRAU\']' ).addClass("readonly");				
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_DEGRAU\']' ).val('0,0');
			
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R_M2\']' ).prop("disabled",true);
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R_M2\']' ).addClass("readonly");				
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R_M2\']' ).val('0,00');
			
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R\']' ).prop("disabled",true);
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R\']' ).addClass("readonly");				
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R\']' ).val('0,00');
			
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R_M2\']' ).prop("disabled",true);
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R_M2\']' ).addClass("readonly");				
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R_M2\']' ).val('0,00');
			
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).prop("disabled",true);
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).addClass("readonly");				
			$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).val('0,00');
			
			//obersacoes
		}
		
	}
	
	
	
	//R$/M2
	var abl = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ABL\']' ).val();
	abl = abl.replace(/\./g, '');
	abl = abl.replace(/,/g, '.');
	abl = parseFloat(abl);
	
	for(var i = 1; i <= numLinhasPopUp; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(abl!=0){
			var campoReal = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			result = campoReal / abl;
		}
		
		result = result.toFixed(2);		
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');	
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R_M2\']' ).val(result);			
	}
			
	
	//PONTO DE EQUILÍBRIO
	//R$
	var aluguel = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ALUGUEL_PERC\']' ).val();
	aluguel = aluguel.replace('%', '');
	aluguel = aluguel.replace(/\./g, '');
	aluguel = aluguel.replace(/,/g, '.');
	aluguel = parseFloat(aluguel);
	
	for(var i = 1; i <= numLinhasPopUp; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(aluguel!=0){								
			var campoReal = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			result = campoReal / (aluguel /100);//tira porcentagem
		}
		
		result = result.toFixed(2);		
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");						
		
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R\']' ).val(result);			
	}
	
	//R$/M2
	for(var i = 1; i <= numLinhasPopUp; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(abl!=0){
			var campoReal = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			if(i <= numLinhasPopUp)
				result = campoReal / abl;
		}
		
		result = result.toFixed(2);	
		if(isNaN(result))
			result = '0.00';				
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");	

		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_PONTODEEQUILIBRIO_R_M2\']' ).val(result);			
	}
	
	
	
	//TOTAL
	//AMM DOBRADO DEZEMBRO
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveisPopUp; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
					
			if(i <= numLinhasPopUp)//para nao dar erro no total						
				total += valor;
		}
		
		total = total.toFixed(1);
		if(isNaN(total))
			total = '0.0';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'POPUP_ALUGUEL.TOTAL_AMM_DOBRADO_DEZEMBRO\']' ).val(total);			
	}
	
	//total CARÊNCIA
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveisPopUp; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_CARENCIA\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhasPopUp)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(1);
		if(isNaN(total))
			total = '0.0';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'POPUP_ALUGUEL.TOTAL_CARENCIA\']' ).val(total);			
	}		

	
	//TOTAL DE MESES
	
	var vlrUltimoMes = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_PRAZO_MESES\']' ).val();
	if(vlrUltimoMes!=''){
		vlrUltimoMes = parseInt(vlrUltimoMes);
		//for(var i = 1; i < numLinhas; i++ ){
		//	vlrUltimoMes = vlrUltimoMes - 12;
		//}
	}	
	
	for(var i = 1; i <= totalLinhasPossiveisPopUp; i++ ){
					
		var linhaAtual = i;
		var result = 0;

		var Q36 = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).val();
		Q36 = Q36.replace(/\./g, '');
		Q36 = Q36.replace(/,/g, '.');
		Q36 = parseFloat(Q36);
		
		var S36 = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_CARENCIA\']' ).val();
		S36 = S36.replace(/\./g, '');
		S36 = S36.replace(/,/g, '.');
		S36 = parseFloat(S36);
		
		if(i <= numLinhasPopUp){//para nao dar erro no total				
			//if(i < numLinhas){
			//	result = 12+Q36-S36;
			//}
			//else{
				result = vlrUltimoMes+Q36-S36;
			//}
		}
		
		result = result.toFixed(0);
		if(isNaN(result))
			result = '0';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			

		
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val(result);			
	}
	
	//AMM ANO R$
	for(var i = 1; i <= totalLinhasPossiveisPopUp; i++ ){
					
		var linhaAtual = i;
		var result = 0;

		var F36 = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_ALUGUELMINIMOMENSAL_R\']' ).val();
		F36 = F36.replace(/\./g, '');
		F36 = F36.replace(/,/g, '.');
		F36 = parseFloat(F36);
		
		var T36 = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val();
		T36 = T36.replace(/\./g, '');
		T36 = T36.replace(/,/g, '.');
		T36 = parseFloat(T36);
		
		if(i <= numLinhasPopUp)//para nao dar erro no total
			result = F36*T36;
		
		result = result.toFixed(2);
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				

		
		$( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).val(result);			
	}
	
	
	
	//total de TOTAL DE MESES
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveisPopUp; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhasPopUp)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(0);
		if(isNaN(total))
			total = '0';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				
		
		$( '[id=\'POPUP_ALUGUEL.TOTAL_TOTAL_DE_MESES\']' ).val(total);			
	}
	
	//total de total AMM ANO R$
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveisPopUp; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'POPUP_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhasPopUp)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(2);
		if(isNaN(total))
			total = '0.00';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				
		
		$( '[id=\'POPUP_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val(total);			
	}
	
	
	//VGL (R$)
	//=X72+I76+O76-V76
	//X72 = total de AMM ANO R$
	//I76 = PROPOSTA (R$) de CDU
	//O76 = PROPOSTA (R$) de TAXA TRANSFERÊNCIA		
	//V76 = PROPOSTA (R$) de MÚTUO
	//nao tem
	/*{
		var total = parseFloat(0);

		var X72 = $( '[id=\'POPUP_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val();
		X72 = X72.replace(/\./g, '');
		X72 = X72.replace(/,/g, '.');
		X72 = parseFloat(X72);

		var I76 = $( '[id=\'POPUP_VGL.PROPOSTA_CDU\']' ).val();
		I76 = I76.replace(/\./g, '');
		I76 = I76.replace(/,/g, '.');
		I76 = parseFloat(I76);
		
		var O76 = $( '[id=\'POPUP_VGL.PROPOSTA_TAXA_TRANSFERENCIA\']' ).val();
		O76 = O76.replace(/\./g, '');
		O76 = O76.replace(/,/g, '.');
		O76 = parseFloat(O76);
		
		var V76 = $( '[id=\'POPUP_VGL.PROPOSTA_MUTUO\']' ).val();
		V76 = V76.replace(/\./g, '');
		V76 = V76.replace(/,/g, '.');
		V76 = parseFloat(V76);
		
		total = X72+I76+O76-V76;
		
		total = total.toFixed(2);		
		total = total.replace(/\./g, ',');
		
		$( '[id=\'POPUP_VGL.VGL_R\']' ).val(total);			
	}*/

	
	//LEASING SPREAD	
	{
		//( (TOTAL AMM ANO / TOTAL MESES) / AMM(R$/M2) -1 )* 100
		
		var totalAmmAno = $( '[id=\'POPUP_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val();
		totalAmmAno = totalAmmAno.replace(/\./g, '');
		totalAmmAno = totalAmmAno.replace(/,/g, '.');
		totalAmmAno = parseFloat(totalAmmAno);
		
		var totalMeses = $( '[id=\'POPUP_ALUGUEL.1ANO_TOTAL_DE_MESES\']' ).val();
		totalMeses = totalMeses.replace(/\./g, '');
		totalMeses = totalMeses.replace(/,/g, '.');
		totalMeses = parseFloat(totalMeses);

		var ammMedio = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_AMM_MEDIO_R\']' ).val();
		ammMedio = ammMedio.replace(/\./g, '');
		ammMedio = ammMedio.replace(/,/g, '.');
		ammMedio = parseFloat(ammMedio);
	
		
		var total = ( (totalAmmAno / totalMeses) / ammMedio -1 )* 100;
		
		total = total.toFixed(2);
		if(isNaN(total))
			total = '0.00';		
		
		if(!isFinite(total))
			total = '0.00';
		
		total = total.replace(/\./g, ',');		
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		total = total + "%";
		
		$( '[id=\'POPUP_VGL.LEASING_SPREAD\']' ).val(total);			
	}
	
	
	//COMERCIALIZAÇÃO valor
	{
		var total = parseFloat(0);
		
		var H52 = $( '[id=\'POPUP_VGL.VGL_R\']' ).val();
		H52 = H52.replace(/\./g, '');
		H52 = H52.replace(/,/g, '.');
		H52 = parseFloat(H52);
		
		var T52 = $( '[id=\'POPUP_VGL.COMERCIALIZACAO_PERC\']' ).val();
		T52 = T52.replace('%', '');
		T52 = T52.replace(/\./g, '');
		T52 = T52.replace(/,/g, '.');
		T52 = parseFloat(T52);
		
		total = H52 * (T52 / 100);
		
		total = total.toFixed(2);
		if(isNaN(total))
			total = '0.00';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");	
		
		
		$( '[id=\'POPUP_VGL.COMERCIALIZACAO_R\']' ).val(total);		
	}
	
}

function calcularDadosTabelaOutros(){
	
	
	
	//ANO_MODELO	
/*		
Se AMM.01 – Seguir regra de Preenchimento definida na negociação convencional; Coluna CTO fica desabilitada
Se AMM.02 – Seguir regra de Preenchimento definida na negociação convencional com a inclusão de um campo “observações” 
em algum lugar visível e de preenchimento obrigatório; Coluna CTO fica desabilitada
Se CTO.01 – habilita a coluna CTO, e DESABILITA todas de ALUGUEL MÍNIMO MENSAL, PONTO DE EQUILÍBRIO, AMM ANO. 
Inclusão de um campo “observações” em algum lugar visível e de preenchimento obrigatório
Se CTO.02 - habilita a coluna CTO, e DESABILITA todas de ALUGUEL MÍNIMO MENSAL, PONTO DE EQUILÍBRIO, AMM ANO. 
Inclusão de um campo “observações” em algum lugar visível e de preenchimento obrigatório
Se CMM - Seguir regra de Preenchimento definida na negociação convencional com a inclusão de um campo “observações”
em algum lugar visível e de preenchimento obrigatório. Coluna CTO fica desabilitada
*/
	
	for(var i = 1; i <= totalLinhasPossiveis; i++ ){
		var linhaAtual = i;
		
		var valorAnoModelo = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_MODELO\']' ).val();

		
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'CTO\']' ).prop("disabled",false);
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'CTO\']' ).removeClass("readonly");
		
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).prop("disabled",false);
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).removeClass("readonly");	
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).prop("disabled",false);
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).removeClass("readonly");
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).prop("disabled",false);
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).removeClass("readonly");

		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).prop("disabled",false);
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).removeClass("readonly");
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).prop("disabled",false);
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).removeClass("readonly");

		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).prop("disabled",false);
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).removeClass("readonly");
		
		
		if(valorAnoModelo == 'AMM01'){
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'CTO\']' ).prop("disabled",true);
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'CTO\']' ).addClass("readonly");
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'CTO\']' ).val('0,0');
		}
		else if(valorAnoModelo == 'AMM02' || valorAnoModelo == 'CMM'){
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'CTO\']' ).prop("disabled",true);
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'CTO\']' ).addClass("readonly");
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'CTO\']' ).val('0,0');
			//obersacoes
		}
		else if(valorAnoModelo == 'CTO1' || valorAnoModelo == 'CTO2'){
			
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).prop("disabled",true);
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).addClass("readonly");				
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val('0,00');
			
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).prop("disabled",true);
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).addClass("readonly");				
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).val('0,0');
			
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).prop("disabled",true);
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).addClass("readonly");				
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).val('0,00');
			
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).prop("disabled",true);
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).addClass("readonly");				
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).val('0,00');
			
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).prop("disabled",true);
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).addClass("readonly");				
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).val('0,00');
			
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).prop("disabled",true);
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).addClass("readonly");				
			$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).val('0,00');
			
			//obersacoes
		}
		
	}		
	
	
	//ALUGUEL MÍNIMO MENSAL
	//Degrau		
	for(var i = 2; i <= numLinhas; i++ ){
		
		var linhaAnterior = i-1;
		var linhaAtual = i;
		
		var F36 = $( '[id=\'OUTROS_ALUGUEL.'+linhaAnterior+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
		F36 = F36.replace(/\./g, '');
		F36 = F36.replace(/,/g, '.');
		F36 = parseFloat(F36);
		
		var F37 = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
		F37 = F37.replace(/\./g, '');
		F37 = F37.replace(/,/g, '.');
		F37 = parseFloat(F37);
		
		var result = 0;
		if(F36==0 || F37==0){
			result = 0;
		} 
		else{
			result = (F37 - F36) / F36;
		}
		result = result * 100;
		result = result.toFixed(1);
		if(isNaN(result))
			result = '0.0';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");	
		
		
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).val(result);			
	}
	
	
	//R$/M2
	var abl = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ABL\']' ).val();
	abl = abl.replace(/\./g, '');
	abl = abl.replace(/,/g, '.');
	abl = parseFloat(abl);
	
	for(var i = 1; i <= numLinhas; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(abl!=0){
			var campoReal = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			result = campoReal / abl;
		}
		
		result = result.toFixed(2);	
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				
		
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).val(result);			
	}
			
	
	//PONTO DE EQUILÍBRIO
	//R$
	var aluguel = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ALUGUEL_PERC\']' ).val();
	aluguel = aluguel.replace('%', '');
	aluguel = aluguel.replace(/\./g, '');
	aluguel = aluguel.replace(/,/g, '.');
	aluguel = parseFloat(aluguel);
	
	for(var i = 1; i <= numLinhas; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(aluguel!=0){								
			var campoReal = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			result = campoReal / (aluguel /100);//tira porcentagem
		}
		
		result = result.toFixed(2);
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				
		
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).val(result);			
	}
	
	//R$/M2
	for(var i = 1; i <= numLinhas; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(abl!=0){
			var campoReal = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			if(i <= numLinhas)
				result = campoReal / abl;
		}
		
		result = result.toFixed(2);
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				

		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).val(result);			
	}
	
	
	
	//TOTAL
	//AMM DOBRADO DEZEMBRO
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
					
			if(i <= numLinhas)//para nao dar erro no total						
				total += valor;
		}
		
		total = total.toFixed(1);
		if(isNaN(total))
			total = '0.0';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				
		
		$( '[id=\'OUTROS_ALUGUEL.TOTAL_AMM_DOBRADO_DEZEMBRO\']' ).val(total);			
	}
	
	//total CARÊNCIA
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_CARENCIA\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhas)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(1);
		if(isNaN(total))
			total = '0.0';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'OUTROS_ALUGUEL.TOTAL_CARENCIA\']' ).val(total);			
	}		

	
	//TOTAL DE MESES
	
	var vlrUltimoMes = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_PRAZO_MESES\']' ).val();
	if(vlrUltimoMes!=''){
		vlrUltimoMes = parseInt(vlrUltimoMes);
		for(var i = 1; i < numLinhas; i++ ){
			vlrUltimoMes = vlrUltimoMes - 12;
		}
	}
	
	for(var i = 1; i <= totalLinhasPossiveis; i++ ){
					
		var linhaAtual = i;
		var result = 0;

		var Q36 = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).val();
		Q36 = Q36.replace(/\./g, '');
		Q36 = Q36.replace(/,/g, '.');
		Q36 = parseFloat(Q36);
		
		var S36 = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_CARENCIA\']' ).val();
		S36 = S36.replace(/\./g, '');
		S36 = S36.replace(/,/g, '.');
		S36 = parseFloat(S36);
		
		if(i <= numLinhas){//para nao dar erro no total				
			if(i < numLinhas){
				result = 12+Q36-S36;
			}
			else{
				result = vlrUltimoMes+Q36-S36;
			}
		}
		
		result = result.toFixed(0);
		if(isNaN(result))
			result = '0';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			

		
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val(result);			
	}
	
	//AMM ANO R$
	for(var i = 1; i <= totalLinhasPossiveis; i++ ){
					
		var linhaAtual = i;
		var result = 0;

		var F36 = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
		F36 = F36.replace(/\./g, '');
		F36 = F36.replace(/,/g, '.');
		F36 = parseFloat(F36);
		
		var T36 = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val();
		T36 = T36.replace(/\./g, '');
		T36 = T36.replace(/,/g, '.');
		T36 = parseFloat(T36);
		
		if(i <= numLinhas)//para nao dar erro no total
			result = F36*T36;
		
		result = result.toFixed(2);	
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				

		
		$( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).val(result);			
	}
	
	
	
	//total de TOTAL DE MESES
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhas)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(0);
		if(isNaN(total))
			total = '0';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");				
		
		$( '[id=\'OUTROS_ALUGUEL.TOTAL_TOTAL_DE_MESES\']' ).val(total);			
	}
	
	//total de total AMM ANO R$
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhas)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(2);
		if(isNaN(total))
			total = '0.00';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'OUTROS_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val(total);			
	}
	
	
	
	//PROPOSTA (R$/m2)
	{
		{
			//OUTROS_CDU_TT.PROPOSTAM2_MUTUO
			var total = parseFloat(0);
			
			var proposta = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_MUTUO\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
							
			if(abl!=0){
				total = proposta / abl;
			}
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'OUTROS_CDU_TT.PROPOSTAM2_MUTUO\']' ).val(total);			
		}			
		{
			//OUTROS_CDU_TT.PROPOSTAM2_TAXA_ADESAO
			var total = parseFloat(0);
			
			var proposta = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_TAXA_ADESAO\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
							
			if(abl!=0){
				total = proposta / abl;
			}
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'OUTROS_CDU_TT.PROPOSTAM2_TAXA_ADESAO\']' ).val(total);			
		}			
		{
			//OUTROS_CDU_TT.PROPOSTAM2_TAXA_TRANSFERENCIA
			var total = parseFloat(0);
			
			var proposta = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_TAXA_TRANSFERENCIA\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
							
			if(abl!=0){
				total = proposta / abl;
			}
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'OUTROS_CDU_TT.PROPOSTAM2_TAXA_TRANSFERENCIA\']' ).val(total);			
		}			
		{
			//OUTROS_CDU_TT.PROPOSTAM2_CDU
			var total = parseFloat(0);
			
			var proposta = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_CDU\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
							
			if(abl!=0){
				total = proposta / abl;
			}
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'OUTROS_CDU_TT.PROPOSTAM2_CDU\']' ).val(total);			
		}
	}				
	
	//SALDO (R$) : ALLOWANCE	
	//COMERCIALIZAÇÃO valor
	//=SE(T45=0;"";T45-T47)
	//T45 = PROPOSTA (R$) :	ALLOWANCE
	//T47 = SINAL (R$) : ALLOWANCE
	{
		{
			//CONVENCIONAL_CDU_ADESAO_TT.SALDO_CDU
			var total = parseFloat(0);
		
			var proposta = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_CDU\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
			
			var sinal = $( '[id=\'OUTROS_CDU_TT.SINAL_CDU\']' ).val();
			sinal = sinal.replace(/\./g, '');
			sinal = sinal.replace(/,/g, '.');
			sinal = parseFloat(sinal);
			
			if(proposta!=0){
				total = proposta-sinal;
			}			
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'OUTROS_CDU_TT.SALDO_CDU\']' ).val(total);			
		}
		{
			//OUTROS_CDU_TT.SALDO_TAXA_TRANSFERENCIA
			var total = parseFloat(0);
		
			var proposta = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_TAXA_TRANSFERENCIA\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
			
			var sinal = $( '[id=\'OUTROS_CDU_TT.SINAL_TAXA_TRANSFERENCIA\']' ).val();
			sinal = sinal.replace(/\./g, '');
			sinal = sinal.replace(/,/g, '.');
			sinal = parseFloat(sinal);
			
			if(proposta!=0){
				total = proposta-sinal;
			}			
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'OUTROS_CDU_TT.SALDO_TAXA_TRANSFERENCIA\']' ).val(total);			
		}
		{
			//OUTROS_CDU_TT.SALDO_TAXA_ADESAO
			var total = parseFloat(0);
		
			var proposta = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_TAXA_ADESAO\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
			
			var sinal = $( '[id=\'OUTROS_CDU_TT.SINAL_TAXA_ADESAO\']' ).val();
			sinal = sinal.replace(/\./g, '');
			sinal = sinal.replace(/,/g, '.');
			sinal = parseFloat(sinal);
			
			if(proposta!=0){
				total = proposta-sinal;
			}			
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'OUTROS_CDU_TT.SALDO_TAXA_ADESAO\']' ).val(total);			
		}			
		{
			//OUTROS_CDU_TT.SALDO_MUTUO
			var total = parseFloat(0);
		
			var proposta = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_MUTUO\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
			
			var sinal = $( '[id=\'OUTROS_CDU_TT.SINAL_MUTUO\']' ).val();
			sinal = sinal.replace(/\./g, '');
			sinal = sinal.replace(/,/g, '.');
			sinal = parseFloat(sinal);
			
			if(proposta!=0){
				total = proposta-sinal;
			}			
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'OUTROS_CDU_TT.SALDO_MUTUO\']' ).val(total);			
		}
	}
	
	
	
	
	//VGL (R$)
	//=X72+I76+O76-V76
	//X72 = total de AMM ANO R$
	//I76 = PROPOSTA (R$) de CDU
	//O76 = PROPOSTA (R$) de TAXA TRANSFERÊNCIA		
	//V76 = PROPOSTA (R$) de MÚTUO
	{
		var total = parseFloat(0);

		var X72 = $( '[id=\'OUTROS_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val();
		X72 = X72.replace(/\./g, '');
		X72 = X72.replace(/,/g, '.');
		X72 = parseFloat(X72);

		var I76 = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_CDU\']' ).val();
		I76 = I76.replace(/\./g, '');
		I76 = I76.replace(/,/g, '.');
		I76 = parseFloat(I76);
		
		var O76 = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_TAXA_TRANSFERENCIA\']' ).val();
		O76 = O76.replace(/\./g, '');
		O76 = O76.replace(/,/g, '.');
		O76 = parseFloat(O76);
		
		var V76 = $( '[id=\'OUTROS_CDU_TT.PROPOSTA_MUTUO\']' ).val();
		V76 = V76.replace(/\./g, '');
		V76 = V76.replace(/,/g, '.');
		V76 = parseFloat(V76);
		
		total = X72+I76+O76-V76;
		
		total = total.toFixed(2);
		if(isNaN(total))
			total = '0.00';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		
		$( '[id=\'OUTROS_VGL.VGL_R\']' ).val(total);			
	}
	
	//LEASING SPREAD	
	//O cálculo só deve ser feito somente se todos os “MODELOS” de aluguel forem iguais a "AMM.01" ou "AMM.02", 
	//caso contrário o cálculo não deve ser feito. 
	{
		var total = parseFloat(0);
		var totalAluguel = parseFloat(0);
		var mediaAluguel = parseFloat(0);
		
		var calcular = true;
		
		for(var i = 1; i <= numLinhas; i++ ){
			var linhaAtual = i;
			
			var valor = $( '[id=\'OUTROS_ALUGUEL.'+linhaAtual+'ANO_MODELO\']' ).val();
			
			if(valor!='AMM01' && valor!='AMM02'){
				calcular = false;
				break;
			}
		}
		
		if(calcular){
			//( (TOTAL AMM ANO / TOTAL MESES) / AMM(R$/M2) -1 )* 100
	
			var totalAmmAno = $( '[id=\'OUTROS_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val();
			totalAmmAno = totalAmmAno.replace(/\./g, '');
			totalAmmAno = totalAmmAno.replace(/,/g, '.');
			totalAmmAno = parseFloat(totalAmmAno);
			
			var totalMeses = $( '[id=\'OUTROS_ALUGUEL.TOTAL_TOTAL_DE_MESES\']' ).val();
			totalMeses = totalMeses.replace(/\./g, '');
			totalMeses = totalMeses.replace(/,/g, '.');
			totalMeses = parseFloat(totalMeses);

			var ammMedio = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_AMM_MEDIO_R\']' ).val();
			ammMedio = ammMedio.replace(/\./g, '');
			ammMedio = ammMedio.replace(/,/g, '.');
			ammMedio = parseFloat(ammMedio);
		
			
			var total = ( (totalAmmAno / totalMeses) / ammMedio -1 )* 100;
			
			total = total.toFixed(2);
			if(isNaN(total))
				total = '0.00';		
			
			if(!isFinite(total))
				total = '0.00';
			
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
			total = total + "%";
			
			$( '[id=\'OUTROS_VGL.LEASING_SPREAD\']' ).val(total);
			
		}
		else {
			$( '[id=\'OUTROS_VGL.LEASING_SPREAD\']' ).val('');
		}
	}
	
	
	//COMERCIALIZAÇÃO valor
	{
		var total = parseFloat(0);
		
		var H52 = $( '[id=\'OUTROS_VGL.VGL_R\']' ).val();
		H52 = H52.replace(/\./g, '');
		H52 = H52.replace(/,/g, '.');
		H52 = parseFloat(H52);
		
		var T52 = $( '[id=\'OUTROS_VGL.COMERCIALIZACAO_PERC\']' ).val();
		T52 = T52.replace('%', '');
		T52 = T52.replace(/\./g, '');
		T52 = T52.replace(/,/g, '.');
		T52 = parseFloat(T52);
		
		total = H52 * (T52 / 100);
		
		total = total.toFixed(2);
		if(isNaN(total))
			total = '0.00';
		total = total.replace(/\./g, ',');
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		
		
		$( '[id=\'OUTROS_VGL.COMERCIALIZACAO_R\']' ).val(total);		
	}
	
}

function calcularDadosTabelaConvencional(){
	

	//ALUGUEL MÍNIMO MENSAL
	//Degrau		
	//=SE(OU(F36=0;F37=0);0;(F37-F36)/F36)		
			
	/*
	var F36 = $( '[id=\'CONVENCIONAL_ALUGUEL.1ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
	F36 = F36.replace(/\./g, '');
	F36 = F36.replace(/,/g, '.');
	F36 = parseFloat(F36);
	
	var F37 = $( '[id=\'CONVENCIONAL_ALUGUEL.2ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
	F37 = F37.replace(/\./g, '');
	F37 = F37.replace(/,/g, '.');
	F37 = parseFloat(F37);
	
	var result = 0;
	if(F36==0 || F37==0){
		result = 0;
	} 
	else{
		result = (F37 - F36) / F36;
	}
	result = result * 100;
	result = result.toFixed(1);		
	result = result.replace(/\./g, ',');
	
	$( '[id=\'CONVENCIONAL_ALUGUEL.2ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).val(result);
	*/
	
	for(var i = 2; i <= numLinhas; i++ ){
		
		var linhaAnterior = i-1;
		var linhaAtual = i;
		
		var F36 = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAnterior+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
		F36 = F36.replace(/\./g, '');
		F36 = F36.replace(/,/g, '.');
		F36 = parseFloat(F36);
		
		var F37 = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
		F37 = F37.replace(/\./g, '');
		F37 = F37.replace(/,/g, '.');
		F37 = parseFloat(F37);
		
		var result = 0;
		if(F36==0 || F37==0){
			result = 0;
		} 
		else{
			result = (F37 - F36) / F36;
		}
		result = result * 100;
		result = result.toFixed(1);	
		if(isNaN(result))
			result = '0.0';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		
		$( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_DEGRAU\']' ).val(result);			
	}		
	
	
	
	//R$/M2
	//=SE($T$12="";0;F36/$T$12)
	//F36 = campo R% de aluguel minino mensal
	//$T$12 = campo ABL proposta comercial
	
	var abl = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ABL\']' ).val();
	abl = abl.replace(/\./g, '');
	abl = abl.replace(/,/g, '.');
	abl = parseFloat(abl);
	
	for(var i = 1; i <= numLinhas; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(abl!=0){
			var campoReal = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			result = campoReal / abl;
		}
		
		result = result.toFixed(2);		
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R_M2\']' ).val(result);			
	}
	
	
	//PONTO DE EQUILÍBRIO
	//R$
	//=SE($P$14="";0;F36/$P$14)
	//F36 = campo R% de aluguel minino mensal
	//$P$14 = campo aluguel em proposta comercial
	
	var aluguel = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_ALUGUEL_PERC\']' ).val();
	aluguel = aluguel.replace('%', '');
	aluguel = aluguel.replace(/\./g, '');
	aluguel = aluguel.replace(/,/g, '.');
	aluguel = parseFloat(aluguel);
	
	for(var i = 1; i <= numLinhas; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(aluguel!=0){
							
			var campoReal = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			result = campoReal / (aluguel /100);//tira porcentagem
		}
		
		result = result.toFixed(2);
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).val(result);			
	}
	
	
	//R$/M2
	//=SE($T$12="";0;L36/$T$12)
	//L36 = campo R$ em PONTO DE EQUILÍBRIO
	//$T$12 = campo ABL proposta comercial
	
	for(var i = 1; i <= numLinhas; i++ ){
					
		var linhaAtual = i;
		var result = 0;
		
		if(abl!=0){
			var campoReal = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R\']' ).val();
			
			campoReal = campoReal.replace(/\./g, '');
			campoReal = campoReal.replace(/,/g, '.');
			campoReal = parseFloat(campoReal);
			
			if(i <= numLinhas)
				result = campoReal / abl;
		}
		
		result = result.toFixed(2);
		if(isNaN(result))
			result = '0.00';
		result = result.replace(/\./g, ',');
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			

		$( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_PONTO_DE_EQUILIBRIO_R_M2\']' ).val(result);			
	}
	
			
	
	//TOTAL
	//AMM DOBRADO DEZEMBRO
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
					
			if(i <= numLinhas)//para nao dar erro no total						
				total += valor;
		}
		
		total = total.toFixed(1);	
		if(isNaN(total))
			total = '0.0';
		total = total.replace(/\./g, ',');	
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");		
		
		$( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_AMM_DOBRADO_DEZEMBRO\']' ).val(total);			
	}
	
	
	//total CARÊNCIA
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_CARENCIA\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhas)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(1);	
		if(isNaN(total))
			total = '0.0';		
		total = total.replace(/\./g, ',');	
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_CARENCIA\']' ).val(total);			
	}		
	
	//TOTAL DE MESES
	//=12+Q36-S36
	//Q36 = AMM DOBRADO DEZEMBRO
	//S36 = CARÊNCIA
	
	var vlrUltimoMes = $( '[id=\'DADOS_GERAIS.PROPOSTACOMERCIAL_PRAZO_MESES\']' ).val();
	if(vlrUltimoMes!=''){
		vlrUltimoMes = parseInt(vlrUltimoMes);
		for(var i = 1; i < numLinhas; i++ ){
			vlrUltimoMes = vlrUltimoMes - 12;
		}
	}		
	
	for(var i = 1; i <= totalLinhasPossiveis; i++ ){
					
		var linhaAtual = i;
		var result = 0;

		var Q36 = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_AMM_DOBRADO_DEZEMBRO\']' ).val();
		Q36 = Q36.replace(/\./g, '');
		Q36 = Q36.replace(/,/g, '.');
		Q36 = parseFloat(Q36);
		
		var S36 = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_CARENCIA\']' ).val();
		S36 = S36.replace(/\./g, '');
		S36 = S36.replace(/,/g, '.');
		S36 = parseFloat(S36);
		
		if(i <= numLinhas){//para nao dar erro no total				
			if(i < numLinhas){
				result = 12+Q36-S36;
			}
			else{
				result = vlrUltimoMes+Q36-S36;
			}
		}
		
		result = result.toFixed(0);	
		if(isNaN(result))
			result = '0';		
		result = result.replace(/\./g, ',');	
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			

		
		$( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val(result);			
	}
	
	
	//AMM ANO R$
	//=F36*T36
	//=F36 = ALUGUEL MÍNIMO MENSAL R$
	//=T36 = TOTAL DE MESES		
	
	for(var i = 1; i <= totalLinhasPossiveis; i++ ){
					
		var linhaAtual = i;
		var result = 0;

		var F36 = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_ALUGUEL_MINIMO_MENSAL_R\']' ).val();
		F36 = F36.replace(/\./g, '');
		F36 = F36.replace(/,/g, '.');
		F36 = parseFloat(F36);
		
		var T36 = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val();
		T36 = T36.replace(/\./g, '');
		T36 = T36.replace(/,/g, '.');
		T36 = parseFloat(T36);
		
		if(i <= numLinhas)//para nao dar erro no total
			result = F36*T36;
		
		result = result.toFixed(2);	
		if(isNaN(result))
			result = '0.00';				
		result = result.replace(/\./g, ',');	
		result = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			

		
		$( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).val(result);			
	}
	
	
	//total de TOTAL DE MESES
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_TOTAL_DE_MESES\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhas)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(0);	
		if(isNaN(total))
			total = '0';				
		total = total.replace(/\./g, ',');		
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");		
		
		$( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_TOTAL_DE_MESES\']' ).val(total);			
	}		
	
	
	//total total de AMM ANO R$
	{
		var total = parseFloat(0);
		
		for(var i = 1; i <= totalLinhasPossiveis; i++ ){						
			var linhaAtual = i;

			var valor = $( '[id=\'CONVENCIONAL_ALUGUEL.'+linhaAtual+'ANO_AMM_ANO_R\']' ).val();
			valor = valor.replace(/\./g, '');
			valor = valor.replace(/,/g, '.');
			valor = parseFloat(valor);
			
			if(i <= numLinhas)//para nao dar erro no total
				total += valor;
		}
		
		total = total.toFixed(2);	
		if(isNaN(total))
			total = '0.00';				
		total = total.replace(/\./g, ',');		
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		
		$( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val(total);			
	}
	
	
	
	//PROPOSTA (R$/m2)
	{
		{
			//CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_CDU
			var total = parseFloat(0);
			
			var proposta = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_CDU\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
							
			if(abl!=0){
				total = proposta / abl;
			}
			
			total = total.toFixed(2);	
			if(isNaN(total))
				total = '0.00';				
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_CDU\']' ).val(total);			
		}			
		{
			//CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_TAXA_TRANSFERENCIA
			var total = parseFloat(0);
			
			var proposta = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_TAXA_TRANSFERENCIA\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
							
			if(abl!=0){
				total = proposta / abl;
			}
			
			total = total.toFixed(2);	
			if(isNaN(total))
				total = '0.00';					
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_TAXA_TRANSFERENCIA\']' ).val(total);			
		}			
		{
			//CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_TAXA_ADESAO
			var total = parseFloat(0);
			
			var proposta = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_TAXA_ADESAO\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
							
			if(abl!=0){
				total = proposta / abl;
			}
			
			total = total.toFixed(2);	
			if(isNaN(total))
				total = '0.00';					
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_TAXA_ADESAO\']' ).val(total);			
		}			
		{
			//CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_MUTUO
			var total = parseFloat(0);
			
			var proposta = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_MUTUO\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
							
			if(abl!=0){
				total = proposta / abl;
			}
			
			total = total.toFixed(2);	
			if(isNaN(total))
				total = '0.00';					
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTAM2_MUTUO\']' ).val(total);			
		}
	}				
	
	//SALDO (R$) : ALLOWANCE	
	//COMERCIALIZAÇÃO valor
	//=SE(T45=0;"";T45-T47)
	//T45 = PROPOSTA (R$) :	ALLOWANCE
	//T47 = SINAL (R$) : ALLOWANCE
	{
		{
			//CONVENCIONAL_CDU_ADESAO_TT.SALDO_CDU
			var total = parseFloat(0);
		
			var proposta = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_CDU\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
			
			var sinal = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SINAL_CDU\']' ).val();
			sinal = sinal.replace(/\./g, '');
			sinal = sinal.replace(/,/g, '.');
			sinal = parseFloat(sinal);
			
			if(proposta!=0){
				total = proposta-sinal;
			}			
			
			total = total.toFixed(2);	
			if(isNaN(total))
				total = '0.00';					
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SALDO_CDU\']' ).val(total);			
		}
		{
			//CONVENCIONAL_CDU_ADESAO_TT.SALDO_CDU
			var total = parseFloat(0);
		
			var proposta = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_TAXA_TRANSFERENCIA\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
			
			var sinal = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SINAL_TAXA_TRANSFERENCIA\']' ).val();
			sinal = sinal.replace(/\./g, '');
			sinal = sinal.replace(/,/g, '.');
			sinal = parseFloat(sinal);
			
			if(proposta!=0){
				total = proposta-sinal;
			}			
			
			total = total.toFixed(2);	
			if(isNaN(total))
				total = '0.00';					
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SALDO_TAXA_TRANSFERENCIA\']' ).val(total);			
		}
		{
			//CONVENCIONAL_CDU_ADESAO_TT.SALDO_TAXA_ADESAO
			var total = parseFloat(0);
		
			var proposta = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_TAXA_ADESAO\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
			
			var sinal = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SINAL_TAXA_ADESAO\']' ).val();
			sinal = sinal.replace(/\./g, '');
			sinal = sinal.replace(/,/g, '.');
			sinal = parseFloat(sinal);
			
			if(proposta!=0){
				total = proposta-sinal;
			}			
			
			total = total.toFixed(2);	
			if(isNaN(total))
				total = '0.00';					
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SALDO_TAXA_ADESAO\']' ).val(total);			
		}			
		{
			//CONVENCIONAL_CDU_ADESAO_TT
			var total = parseFloat(0);
		
			var proposta = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_MUTUO\']' ).val();
			proposta = proposta.replace(/\./g, '');
			proposta = proposta.replace(/,/g, '.');
			proposta = parseFloat(proposta);
			
			var sinal = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SINAL_MUTUO\']' ).val();
			sinal = sinal.replace(/\./g, '');
			sinal = sinal.replace(/,/g, '.');
			sinal = parseFloat(sinal);
			
			if(proposta!=0){
				total = proposta-sinal;
			}			
			
			total = total.toFixed(2);	
			if(isNaN(total))
				total = '0.00';					
			total = total.replace(/\./g, ',');		
			total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
			
			$( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.SALDO_MUTUO\']' ).val(total);			
		}
	}
	
	
	
	
	//VGL (R$)	
	//=U41+G45+M45
	//U41 = total de AMM ANO R$
	//G45 = PROPOSTA (R$) de CDU
	//M45 = PROPOSTA (R$) de TAXA TRANSFERÊNCIA	
	
	{
		var total = parseFloat(0);
		
		var U41 = $( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val();
		U41 = U41.replace(/\./g, '');
		U41 = U41.replace(/,/g, '.');
		U41 = parseFloat(U41);
		
		var G45 = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_CDU\']' ).val();
		G45 = G45.replace(/\./g, '');
		G45 = G45.replace(/,/g, '.');
		G45 = parseFloat(G45);
		
		var M45 = $( '[id=\'CONVENCIONAL_CDU_ADESAO_TT.PROPOSTA_TAXA_TRANSFERENCIA\']' ).val();
		M45 = M45.replace(/\./g, '');
		M45 = M45.replace(/,/g, '.');
		M45 = parseFloat(M45);
		
		total = U41+G45+M45;
		
		total = total.toFixed(2);	
		if(isNaN(total))
			total = '0.00';					
		total = total.replace(/\./g, ',');		
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		
		$( '[id=\'CONVENCIONAL_VGL.VGL_R\']' ).val(total);			
	}
	
	
	//LEASING SPREAD	
	{		
	//( (TOTAL AMM ANO / TOTAL MESES) / AMM(R$/M2) -1 )* 100
	
		var totalAmmAno = $( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_AMM_ANO_R\']' ).val();
		totalAmmAno = totalAmmAno.replace(/\./g, '');
		totalAmmAno = totalAmmAno.replace(/,/g, '.');
		totalAmmAno = parseFloat(totalAmmAno);
		
		var totalMeses = $( '[id=\'CONVENCIONAL_ALUGUEL.TOTAL_TOTAL_DE_MESES\']' ).val();
		totalMeses = totalMeses.replace(/\./g, '');
		totalMeses = totalMeses.replace(/,/g, '.');
		totalMeses = parseFloat(totalMeses);

		var ammMedio = $( '[id=\'DADOS_GERAIS.SITUACAOANTERIOR_AMM_MEDIO_R\']' ).val();
		ammMedio = ammMedio.replace(/\./g, '');
		ammMedio = ammMedio.replace(/,/g, '.');
		ammMedio = parseFloat(ammMedio);
	
		
		var total = ( (totalAmmAno / totalMeses) / ammMedio -1 )* 100;
		
		total = total.toFixed(2);
		if(isNaN(total))
			total = '0.00';		
		
		if(!isFinite(total))
			total = '0.00';
		
		total = total.replace(/\./g, ',');		
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");			
		total = total + "%";
		
		$( '[id=\'CONVENCIONAL_VGL.LEASING_SPREAD\']' ).val(total);
	}
	
	
	//COMERCIALIZAÇÃO valor
	//=H52*T52
	//H52 = VGL (R$)
	//T52 porcentagem de COMERCIALIZACAO
	
	{
		var total = parseFloat(0);
		
		var H52 = $( '[id=\'CONVENCIONAL_VGL.VGL_R\']' ).val();
		H52 = H52.replace(/\./g, '');
		H52 = H52.replace(/,/g, '.');
		H52 = parseFloat(H52);
		
		var T52 = $( '[id=\'CONVENCIONAL_VGL.COMERCIALIZACAO_PERC\']' ).val();
		T52 = T52.replace('%', '');
		T52 = T52.replace(/\./g, '');
		T52 = T52.replace(/,/g, '.');
		T52 = parseFloat(T52);
		
		total = H52 * (T52 / 100);
		
		total = total.toFixed(2);	
		if(isNaN(total))
			total = '0.00';					
		total = total.replace(/\./g, ',');		
		total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		
		
		$( '[id=\'CONVENCIONAL_VGL.COMERCIALIZACAO_R\']' ).val(total);		
	}
	
}


function selecionarAba(abaSelecionada, arrayAbaDeselecionadas){
		
	for(var i=0; i < arrayAbaDeselecionadas.length; i++) {
		$('#'+arrayAbaDeselecionadas[i]).removeClass("selecionadoAba");
	}
	
	$('#'+abaSelecionada).addClass("selecionadoAba");
}



function abreImpressao(){
	
	var cod = FORM.codOcorrencia.value;		
	
	window.open('/CCenterWeb/Relatorio.dm?modoCrud=cadastrar&codAnexo=&method=visualizaRelatorio&nomeRelatorio=RelatorioAnalitico_Impressao&Edit_Distinto_0=' + cod + '&TipoDoParametro_0=texto&idComboParametroChanged=10&comboFormatoDoRelatorio=PDF_NO_BROWSER','impressao','menubar,scrollbars=no,width=800,height=600');
}




/* Pipefy functions */


var entradas = [];
function setEntradas(callBackFn){

  if($( ".save" ).length == entradas.length)
    return callBackFn();

  var objsArray = $( ".save" ).toArray();
  p.get('card', 'public', objsArray[entradas.length].id ).then((campo) => {
      entradas.push({'name' : objsArray[entradas.length].id , 'value' : campo});
      setEntradas(callBackFn);
  }).catch((error) => {
      entradas.push({'name' : objsArray[entradas.length].id , 'value' : null});
      setEntradas(callBackFn);
  });

}

function getEntrada(name){
  for(var i=0; i<entradas.length; i++){
    if(entradas[i].name == name)
      return entradas[i].value;
  }
  return false;
}





var entradasSalvas = [];
function salvaDados(callBackFn){


	var lb = new local_base('jsonFields');

	$('.save').each(function( index ) {
	  lb.lb_item_set($( this ).attr('id') ,  $( this ).val() );
	});


	console.log(lb.obj);

/*
  if($( ".save" ).length == entradasSalvas.length)
    return callBackFn();

  var objsArray = $( ".save" ).toArray();
  setTimeout(function(){
    

		var val = $( '[id=\''+objsArray[entradasSalvas.length].id+'\']' ).val();

    //if ( val !== undefined && val !== null){
    	p.set('card', 'public', objsArray[entradasSalvas.length].id , String(val) );
    	console.log( objsArray[entradasSalvas.length].id + ' : ' + String(val) );
    //}
    
    entradasSalvas.push({'name' : objsArray[entradasSalvas.length].id , 'value' : String(val)});
    salvaDados(callBackFn);

  }, 300)
  */

}


/* salvar */
function salvar(){

  var fromPhaseId = phase_1;
  var toPhaseId;
  if($('#MULTA_JUROS_COD').val() == 1){
    toPhaseId = $('#SHOPPING option:selected').attr('phases'); // phase 2
  }
  else
    toPhaseId = phase_4;

  p.moveCard(cardId, { phaseId: fromPhaseId}, {phaseId: toPhaseId}).then(moved => {
    console.log('## Move Card ##');
    console.log('phase : ' + toPhaseId);
  })  

  p.showNotification('Formulario salvo!', 'success');
  p.closeCard();  


}
/* salvar */ 

function disableForm(){
  $('#container').find('input, textarea, button, select').attr('disabled','disabled');
  $('#btnSalvar').hide();
  $('#radios_CPF_CNPJ').hide();
  $('.pp-ico-add').hide();
  
}



function popular(){
try{

  p.fields().then((fields) => {
    console.log(fields); 
  });

  console.log('## get ##');
  $( ".save" ).each(function( index ) { 
    $( '[id=\''+ $( this ).attr('id')+'\']' ).val(getEntrada($( this ).attr('id')));
    console.log( $( this ).attr('id') + ' : ' + getEntrada($( this ).attr('id')) );
  });
  }catch(e){}
  
  showList();

}

function close(){

  //if( !rc_showMesages() && !rc_showMesagesData() ){
      salvaDados(salvar);
  //}else{
   //   p.showNotification('Deve preencher os campos obrigatórios (*)', 'error');
      //resize();
  //}
 
}






