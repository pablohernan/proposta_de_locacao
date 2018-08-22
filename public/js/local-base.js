




function local_base (name) {

		this.name = name;
		this.obj = new Array();

    this.item_set = function( name , value){
			var item = new Object;
			item.name = name;
			item.value = value;
			this.obj.push(item);
		}

    this.item_get = function( name ){
			return this.obj.filter(function(obj) {
			    return obj.name === name;
			});
		}

}

