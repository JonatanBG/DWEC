for (let i=0; i<2; i++){
	var value1=prompt("Enter firt value");
	var value2=prompt("Enter second value");
	greaterNum (value1, value2);
}

function greaterNum (value1, value2) {
 if (value1 > value2){
	 alert("The greater number of "+value1+" and "+value2+" is "+value1);
 }else{
	 alert("The greater number of "+value1+" and "+value2+" is "+value2);
 }
}