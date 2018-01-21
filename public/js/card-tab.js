  

document.addEventListener("DOMContentLoaded", function(event) {
      p = PipefyApp.init();
      PipefyApp.resizeTo("#list");
      
      PipefyApp.render(function() {

      });

      /* popula shopping*/
      $.ajax({ 
          url: "/services/shoppings.json?"+Math.random()
      }).then(function(data) {
            //var data = JSON.parse(data);  
            for( var i = 0 ; i < data.length ; i++ ){
                $('#shopping').append('<option value=' + data[i].value + '>' + data[i].value + ' - ' +data[i].text + '</option>'); 
            } 
            if(data.length>0)
              populaEmpresa(data[0].value);
      });
      /* popula shopping*/

      function populaEmpresa(value){
        /* popula empresa*/
        $.ajax({ 
            url: "/services/empresas.json?"+Math.random()
        }).then(function(data) {
              //var data = JSON.parse(data);  
              $('#empresa').html('');
              for( var i = 0 ; i < data.length ; i++ ){
                  $('#empresa').append('<option value=' + data[i].value + '>id do shopping:' + value + ' - ' +data[i].text + '</option>'); 
              }     
        });
        /* popula empresa*/
      }

      function close(){
        p.set('card', 'public', 'empresa'.$('#empresa').val());
        p.get('card', 'public', 'empresa').then((empresa) => {
          console.log(empresa); // return actual value stored
        }).catch((error) => {
          // Handle error
          console.log(error);
        });
        p.showNotification('Formulario salvo!', 'success');
        
      }

});      