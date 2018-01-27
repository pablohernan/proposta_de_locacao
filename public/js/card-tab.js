  

var localVersion = false;

var path = '';
if(localVersion){
 path = 'http://localhost/pipefy/forms/start-form-js/public'
}

var cardId;

document.addEventListener("DOMContentLoaded", function(event) {
      
      try{
        p = PipefyApp.init();
        PipefyApp.resizeTo("#list");
        
        PipefyApp.render(function() {

        });

        p.card().then(function(card) {
          console.log('CARD_ID:'+card.id) // { id: '23abc', ... }
          cardId = card.id;
        });

        p.modal({
          url: './images/icon_grande.svg',
          height: '70%',
          width: '70%',
        });

      }catch(e){console.log(e)}

      /* SHOPPING
      $.ajax({ 
          url: path+ "/services/SHOPPING.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#SHOPPING').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                $('#SHOPPING').append('<option value=' + data[i].value + '>' + data[i].value + ' - ' +data[i].text + '</option>'); 
            } 

            // set value apos carregar
            p.get('card', 'public', 'SHOPPING' ).then((campo) => {
              if(campo != 'null' && campo != null && campo != '')
                $( '#' + $( '#SHOPPING' ).attr('id') ).val(campo);
            }).catch((error) => {
              console.log(error);
            }); 

            //if(data.length>0)
              //populaEmpresa(data[0].value);
      });
      *//* SHOPPING*/

      /* CENTRO_CUSTO_COD*/
      $.ajax({ 
          url: path+ "/services/CENTRO_CUSTO_COD.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#CENTRO_CUSTO_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                $('#CENTRO_CUSTO_COD').append('<option value=' + data[i].value + '>' + data[i].value + ' - ' +data[i].text + '</option>'); 
            } 

            // set value apos carregar
            p.get('card', 'public', 'CENTRO_CUSTO_COD' ).then((campo) => {
              if(campo != 'null' && campo != null && campo != '')
                $( '#' + $( '#CENTRO_CUSTO_COD' ).attr('id') ).val(campo);
            }).catch((error) => {
              console.log(error);
            });   

      });
      /* CENTRO_CUSTO_COD*/

      /* CLASSIFICACAO_DESPESA_COD*/
      $.ajax({ 
          url: path+ "/services/CLASSIFICACAO_DESPESA_COD.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#CLASSIFICACAO_DESPESA_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                $('#CLASSIFICACAO_DESPESA_COD').append('<option value=' + data[i].value + '>' + data[i].value + ' - ' +data[i].text + '</option>'); 
            } 

            // set value apos carregar
            p.get('card', 'public', 'CLASSIFICACAO_DESPESA_COD' ).then((campo) => {
              if(campo != 'null' && campo != null && campo != '')
                $( '#' + $( '#CLASSIFICACAO_DESPESA_COD' ).attr('id') ).val(campo);
            }).catch((error) => {
              console.log(error);
            });   

      });
      /* CLASSIFICACAO_DESPESA_COD*/

      /* CONDICAO_DE_PAGAMENTO_COD*/
      $.ajax({ 
          url: path+ "/services/CONDICAO_DE_PAGAMENTO_COD.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#CONDICAO_DE_PAGAMENTO_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                $('#CONDICAO_DE_PAGAMENTO_COD').append('<option value=' + data[i].value + '>' + data[i].value + ' - ' +data[i].text + '</option>'); 
            } 

            // set value apos carregar
            p.get('card', 'public', 'CONDICAO_DE_PAGAMENTO_COD' ).then((campo) => {
              if(campo != 'null' && campo != null && campo != '')
                $( '#' + $( '#CONDICAO_DE_PAGAMENTO_COD' ).attr('id') ).val(campo);
            }).catch((error) => {
              console.log(error);
            });   

      });
      /* CONDICAO_DE_PAGAMENTO_COD*/

      /* FORNECEDOR_COD*/
      $.ajax({ 
          url: path+ "/services/FORNECEDOR_COD.json?"+Math.random(),
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#FORNECEDOR_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                $('#FORNECEDOR_COD').append('<option value=' + data[i].value + '>' + data[i].value + ' - ' + data[i].text + '</option>'); 
            } 

            // set value apos carregar
            p.get('card', 'public', 'FORNECEDOR_COD' ).then((campo) => {
              if(campo != 'null' && campo != null && campo != '')
                $( '#' + $( '#FORNECEDOR_COD' ).attr('id') ).val(campo);
            }).catch((error) => {
              console.log(error);
            });   

      });
      /* FORNECEDOR_COD*/

      /* NRO_DO_DOCUMENTO*/
      $.ajax({ 
          url: path+ "/services/NRO_DO_DOCUMENTO.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#NRO_DO_DOCUMENTO').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                $('#NRO_DO_DOCUMENTO').append('<option vencimento="'+data[i].vencimento+'" valor="'+data[i].valor+'" value="' + data[i].value + '">' + data[i].value + ' - ' +data[i].text + '</option>'); 
            } 

            $('#NRO_DO_DOCUMENTO').change(function(){
              populaVencimento(this.options[this.selectedIndex].getAttribute('vencimento'));
              populaValor(this.options[this.selectedIndex].getAttribute('valor'));
            })

            // set value apos carregar
            p.get('card', 'public', 'NRO_DO_DOCUMENTO' ).then((campo) => {
              if(campo != 'null' && campo != null && campo != '')
                $( '#' + $( '#NRO_DO_DOCUMENTO' ).attr('id') ).val(campo);
            }).catch((error) => {
              console.log(error);
            });   

      });
      /* FORNECEDOR_COD*/      


      /* EMPRESA_COD*/
      $.ajax({ 
          url: path+ "/services/EMPRESA_COD.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#EMPRESA_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                $('#EMPRESA_COD').append('<option value=' + data[i].value + '>' + data[i].text + '</option>'); 
            }   

            // set value apos carregar
            p.get('card', 'public', 'EMPRESA_COD' ).then((campo) => {
              if(campo != 'null' && campo != null && campo != '')
                $( '#' + $( '#EMPRESA_COD' ).attr('id') ).val(campo);
            }).catch((error) => {
              console.log(error);
            });              

      });
      /* EMPRESA_COD*/

      // popula todos los campos
      setTimeout( function(){popular();}, 1000);

});      



function populaEmpresa(value){
  /* popula empresa*/
  $.ajax({ 
      url: path+ "/services/EMPRESA_COD.json?"+Math.random()
  }).then(function(data) {
        //var data = JSON.parse(data);  
        $('#EMPRESA_COD').html('');
        for( var i = 0 ; i < data.length ; i++ ){
            $('#EMPRESA_COD').append('<option value=' + data[i].value + '>id do shopping:' + value + ' - ' +data[i].text + '</option>'); 
        }     

        // set value apos carregar
        p.get('card', 'public', 'EMPRESA_COD' ).then((campo) => {
          if(campo != 'null' && campo != null && campo != '')
            $( '#' + $( '#EMPRESA_COD' ).attr('id') ).val(campo);
        }).catch((error) => {
          console.log(error);
        });

  });
  /* popula empresa*/
}


/* salvar */
function salvar(){

  console.log('## set ##');
  $( ".save" ).each(function( index ) {
    console.log( $( this ).attr('id') + ' : ' + String($( this ).val()) );
    p.set('card', 'public', $( this ).attr('id') , String($( this ).val()) );
  }); 

}
/* salvar */ 


/* popular */
function popular_grid(obj){
  for(var i = 0; i<obj.length ; i++){
    if(obj[i].CARDID == cardId)
      grid_addLine(obj[i].GRUPODEPAGAMENTO ,obj[i].CENTRODECUSTO,obj[i].VALOR);
  }
}

function popular(){
try{

  // populo com os dados da tabela
  db_select(popular_grid);

  p.fields().then((fields) => {
    console.log(fields); 
  });

  console.log('## get ##');
  $( ".save" ).each(function( index ) {   
    p.get('card', 'public', $( this ).attr('id') ).then((campo) => {
      if(campo != 'null' && campo != null && campo != ''){
        console.log( $( this ).attr('id') + ' : ' + campo );
        $( '#' + $( this ).attr('id') ).val(campo);
      }
    }).catch((error) => {
      console.log(error);
    });

  });
}catch(e){}

}

function addLine(){

  if(!rc_showMesagesGrid('grid1')){
      var grupo = $( "#CLASSIFICACAO_DESPESA_COD" ).val();
      var centro = $( "#CENTRO_CUSTO_COD" ).val();
      var valor_custo = $( "#VALOR_GRID" ).val();

      /* insert db */
      db_insert(cardId,grupo,grupo,centro,centro,valor_custo);
      /* add line */
      grid_addLine(grupo,centro,valor_custo);
  }else{
      p.showNotification('Deve preencher os campos obrigatórios (*)', 'error');
      resize();
  }

}



function close(){

  if(!rc_showMesages()){
      salvar();
      p.showNotification('Formulario salvo!', 'success');
      p.closeCard();
  }else{
      p.showNotification('Deve preencher os campos obrigatórios (*)', 'error');
      resize();
  }


  
}

function resize(){
  PipefyApp.resizeTo("#list");
}

function populaVencimento(vencimento){
  $('#VENCIMENTO_ANTERIOR').val(vencimento);
}

function populaValor(valor){
  $('#VALOR').val(valor);
}




