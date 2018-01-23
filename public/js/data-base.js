



var apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxMzI5NjcsImVtYWlsIjoicHJhcGV0dGlAZ21haWwuY29tIiwiYXBwbGljYXRpb24iOjQ2MzF9fQ.jXx183WEqstCvgJkxQHFN72IMNklPqdM5IT0txevy_S5PPdQ_bcKaflGGVE1YjFrP7aX7XS7pdxjrMk27CHN8A';

var request = new XMLHttpRequest();

request.open('POST', 'https://app.pipefy.com/queries');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', 'Bearer '+apiKey);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'query': 'mutation { createTableRecord(input: '+
  	'{ table_id: "ALTERACAOPAGAMENTO_GRID1" '+
  		'title: "exemplo 1" '+
  		'due_date: "2017-12-31T00:00-03:00" '+
  		'fields_attributes: ['+
  		'{  field_id: "CARDID", field_value: "2" }, '+
  		'{  field_id: "INDEX", field_value: "2" }, '+
  		'{  field_id: "GRUPODEPAGAMENTO", field_value: "2" }, '+
  		'{  field_id: "GRUPODEPAGAMENTOID", field_value: "2" }, '+
  		'{  field_id: "CENTRODECUSTO", field_value: "2" }, '+
  		'{  field_id: "CENTRODECUSTOID", field_value: "2" }, '+
  		'{  field_id: "VALOR", field_value: "1" }] '+
  	'}) { table_record { id title due_date record_fields { name value } } } }'
}

var body = {
    'query': 'mutation { createTable(input: { organization_id: 1 name: "Table example"description: "Table that comtain some data"public: true authorization: write }) { table { id name description public authorization } } }'
};



request.send(JSON.stringify(body));

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