  

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
          // populo com os dados da tabela
          db_select(popular_grid);
        });
/*
        p.modal({
          url: './images/icon_grande.svg',
          height: '70%',
          width: '70%',
        });
*/
      }catch(e){console.log(e)}


      // popula todos los campos
      //setTimeout( function(){popular();}, 1000);

});

/* popular */
function popular_grid(obj){
  for(var i = 0; i<obj.length ; i++){
    if(obj[i].CARDID == cardId)
      grid_addLine(obj[i].GRUPODEPAGAMENTO ,obj[i].CENTRODECUSTO,obj[i].VALOR);
  }
  setEntradas(populaSelects);
}

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



function popula_EMPRESA_COD(popular,callbackFn){
      /* EMPRESA_COD*/
      $.ajax({ 
          url: path+ "/services/EMPRESA_COD.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#EMPRESA_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                var selected = '';
                if(popular && getEntrada('EMPRESA_COD') == data[i].value)    
                  selected = 'selected'; 
                $('#EMPRESA_COD').append('<option '+selected+' value=' + data[i].value + '>' + data[i].text + '</option>'); 
            } 

            $('#NRO_DO_DOCUMENTO').change(function(){
              popula_NRO_DO_DOCUMENTO(false,function(){});
              popula_CENTRO_CUSTO_COD(false,function(){});
            });             

            callbackFn();        

      });
      /* EMPRESA_COD*/   
}


function popula_NRO_DO_DOCUMENTO(popular,callbackFn){
      /* NRO_DO_DOCUMENTO*/
      $.ajax({ 
          url: path+ "/services/NRO_DO_DOCUMENTO.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#NRO_DO_DOCUMENTO').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                if($('#EMPRESA_COD').val()==data[i].empresa){
                  var selected = '';
                  if(popular && getEntrada('NRO_DO_DOCUMENTO') == data[i].value)  
                    selected = 'selected';
                  $('#NRO_DO_DOCUMENTO').append('<option '+selected+' vencimento="'+data[i].vencimento+'" valor="'+data[i].valor+'" value="' + data[i].value + '">' + data[i].text + '</option>'); 
                }
            } 

            $('#NRO_DO_DOCUMENTO').change(function(){
              populaVencimento(this.options[this.selectedIndex].getAttribute('vencimento'));
              populaValor(this.options[this.selectedIndex].getAttribute('valor'));
            });

            callbackFn();

      });
      /* NRO_DO_DOCUMENTO*/  
}


function popula_FORNECEDOR_COD(popular,callbackFn){
     /* FORNECEDOR_COD*/
      $.ajax({ 
          url: path+ "/services/FORNECEDOR_COD.json?"+Math.random(),
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#FORNECEDOR_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                var selected = '';
                if(popular && getEntrada('FORNECEDOR_COD') == data[i].value)
                  selected = 'selected';
                $('#FORNECEDOR_COD').append('<option '+selected+' value=' + data[i].value + '>' + data[i].text + '</option>'); 
            } 

            callbackFn();

      });
      /* FORNECEDOR_COD*/

}

function popula_CONDICAO_DE_PAGAMENTO_COD(popular,callbackFn){
      /* CONDICAO_DE_PAGAMENTO_COD*/
      $.ajax({ 
          url: path+ "/services/CONDICAO_DE_PAGAMENTO_COD.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#CONDICAO_DE_PAGAMENTO_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                var selected = '';
                if(popular && getEntrada('CONDICAO_DE_PAGAMENTO_COD') == data[i].value)
                  selected = 'selected';
                $('#CONDICAO_DE_PAGAMENTO_COD').append('<option '+selected+' value=' + data[i].value + '>' + data[i].text + '</option>'); 
            }   

            callbackFn();

      });
      /* CONDICAO_DE_PAGAMENTO_COD*/

}


function popula_CLASSIFICACAO_DESPESA_COD(popular,callbackFn){
      /* CLASSIFICACAO_DESPESA_COD*/
      $.ajax({ 
          url: path+ "/services/CLASSIFICACAO_DESPESA_COD.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#CLASSIFICACAO_DESPESA_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
                var selected = '';
                if(popular && getEntrada('CLASSIFICACAO_DESPESA_COD') == data[i].value)
                  selected = 'selected';
                $('#CLASSIFICACAO_DESPESA_COD').append('<option '+selected+' value=' + data[i].value + '>' + data[i].text + '</option>'); 
            } 

            callbackFn();

      });
      /* CLASSIFICACAO_DESPESA_COD*/

}

function popula_CENTRO_CUSTO_COD(popular,callbackFn){
      /* CENTRO_CUSTO_COD*/
      $.ajax({ 
          url: path+ "/services/CENTRO_CUSTO_COD.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            $('#CENTRO_CUSTO_COD').append('<option value="" selected>::selecione::</option>'); 
            for( var i = 0 ; i < data.length ; i++ ){
              if($('#EMPRESA_COD').val()==data[i].empresa){
                var selected = '';
                if(popular && getEntrada('CENTRO_CUSTO_COD') == data[i].value)
                  selected = 'selected';
                $('#CENTRO_CUSTO_COD').append('<option '+selected+' value=' + data[i].value + '>' + data[i].text + '</option>'); 
              }
            } 

            callbackFn();

      });
      /* CENTRO_CUSTO_COD*/

}

function populaSelects(){


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

      popula_EMPRESA_COD(true,function(){
        popula_NRO_DO_DOCUMENTO(true,function(){
          popula_CENTRO_CUSTO_COD(true,function(){
            popula_FORNECEDOR_COD(true,function(){
              popula_CONDICAO_DE_PAGAMENTO_COD(true,function(){
                popula_CLASSIFICACAO_DESPESA_COD(true,function(){
                  popular();
                });
              });
            });
          });
        });
      });

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



function popular(){
try{

  p.fields().then((fields) => {
    console.log(fields); 
  });

  console.log('## get ##');
  $( ".save" ).each(function( index ) {   
    $( '#' + $( this ).attr('id') ).val(getEntrada($( this ).attr('id')));
  });
  }catch(e){}
  
  showList();

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

function showList(){
  $('#load').hide();
  $('#list').show();
  resize();
}




