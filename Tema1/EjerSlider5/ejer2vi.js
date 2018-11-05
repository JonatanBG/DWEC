function countTheArgs(){
		var s=0;
	for(var i=0; i < arguments.length; i++){
		s++;
	}
	return s;
}

 
alert (countTheArgs(2, 3));             
alert (countTheArgs(1, 1, 1, 1));  