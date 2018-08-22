




function local_base () {

		this.name = 'jsonFields';
		this.obj = new Array();
		this.p = p;

    this.item_set = function( name , value){
			var item = new Object;
			item.name = name;
			item.value = value;
			this.obj.push(item);
		}

    this.item_get = function( name ){
			var arr = this.obj.filter(function(obj) {
			    return obj.name === name;
			});

			if(arr.length>0)
				return arr[0].value;

			return '';

		}

		this.set = function(obj){
			this.obj = obj;
		}

}

