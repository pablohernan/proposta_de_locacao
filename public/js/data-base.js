/*
ALTERACAOPAGAMENTO_GRID1

CARDID
INDEX
GRUPODEPAGAMENTO
GRUPODEPAGAMENTOID
CENTRODECUSTO
CENTRODECUSTOID
VALOR
*/

var apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxMzI5NjcsImVtYWlsIjoicHJhcGV0dGlAZ21haWwuY29tIiwiYXBwbGljYXRpb24iOjQ2MzF9fQ.jXx183WEqstCvgJkxQHFN72IMNklPqdM5IT0txevy_S5PPdQ_bcKaflGGVE1YjFrP7aX7XS7pdxjrMk27CHN8A';
var tableId = "UXvncDbC";

function db_insert(cardid,index,grupodepagamento,grupodepagamentoid,centrodecusto,centrodecustoid,valor,callBackFn){

  var request = new XMLHttpRequest();

  request.open('POST', 'https://app.pipefy.com/queries');

  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'Bearer '+apiKey);

  request.onreadystatechange = function () {
    callBackFn(this);
  };

  var body = {
    'query': 'mutation { createTableRecord( input: { '+    
    'table_id: "'+tableId+'"  '+    
    'fields_attributes: ['+        
      '{ field_id: "cardid", field_value: "'+cardid+'" },'+        
      '{ field_id: "index", field_value: "'+index+'" }, '+       
      '{ field_id: "grupodepagamento", field_value: "'+grupodepagamento+'" },'+    
      '{ field_id: "grupodepagamentoid", field_value: "'+grupodepagamentoid+'" },'+       
      '{ field_id: "centrodecusto", field_value: "'+centrodecusto+'" },'+        
      '{ field_id: "centrodecustoid", field_value: "'+centrodecustoid+'" },'+        
      '{ field_id: "valor", field_value: "'+valor+'" },'+
    ']}  ) {table_record { id } }}'
  };
  request.send(JSON.stringify(body));
}

function db_insertCallBackFn(response){
    if (response.readyState === 4) {
      console.log('Status:', response.status);
      console.log('Headers:', response.getAllResponseHeaders());
      console.log('Body:', response.responseText);
    }
}
/* insert */

/* count */
function db_count(callBackFn){

  var request = new XMLHttpRequest();

  request.open('POST', 'https://app.pipefy.com/queries');

  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'Bearer '+apiKey);

  request.onreadystatechange = function () {
    callBackFn(this);
  };

  var body = {
    'query': 'query {table(id: "UXvncDbC") {table_records_count}}'
  };
  request.send(JSON.stringify(body));

}

function db_countCallBackFn(response){
    if (response.readyState === 4) {
      console.log('Status:', response.status);
      console.log('Headers:', response.getAllResponseHeaders());
      console.log('Body:', response.responseText);
      return JSON.parse(response.responseText).data.table.table_records_count;
    }
}



