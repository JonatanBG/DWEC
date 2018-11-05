function addOnlyNums(){
	var s=0;
	for(var i=0; i < arguments.length; i++){
		if (typeof (arguments[i]) == "number"){
			s+=arguments[i];
		}
	}
	return s;
}

 
alert (addOnlyNums("hola", 2, 3));             
alert (addOnlyNums(1, 1, 1, 1));  