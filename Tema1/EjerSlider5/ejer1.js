function suma(){
	var s=0;
	for(var i=0; i < arguments.length; i++){
		s+=arguments[i];
	}
	return s;
}

alert (suma(2, 3));             
alert (suma(1, 1, 1, 1));  