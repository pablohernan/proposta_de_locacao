  

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

      }catch(e){console.log(e)}

      /* popula shopping*/
      $.ajax({ 
          url: path+ "/services/shoppings.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            for( var i = 0 ; i < data.length ; i++ ){
                $('#SHOPPING').append('<option value=' + data[i].value + '>' + data[i].value + ' - ' +data[i].text + '</option>'); 
            } 
            if(data.length>0)
              populaEmpresa(data[0].value);
      });
      /* popula shopping*/

      // popula todos los campos
      popular();

});      



function populaEmpresa(value){
  /* popula empresa*/
  $.ajax({ 
      url: path+ "/services/empresas.json?"+Math.random()
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
      var grupo = $( "#CLASSIFICACAO_DEPESA_COD" ).val();
      var centro = $( "#CENTRO_CUSTO_COD" ).val();
      var valor_custo = $( "#VALOR_GRID" ).val();

      /* insert db */
      db_insert(cardId,grupo,grupo,centro,centro,valor_custo);
      /* add line */
      grid_addLine(grupo,centro,valor_custo);
  }else{
      p.showNotification('Deve preencher os campos obrigatorios (*)', 'error');
      resize();
  }

}



function close(){

  if(!rc_showMesages()){
      salvar();
      p.showNotification('Formulario salvo!', 'success');
      p.closeCard();
  }else{
      p.showNotification('Deve preencher os campos obrigatorios (*)', 'error');
      resize();
  }


  
}

function resize(){
  PipefyApp.resizeTo("#list");
}


