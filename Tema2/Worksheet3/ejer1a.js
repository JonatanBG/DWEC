invierteCadena("Hello");
function invierteCadena(cad_arg){
	var x = cad_arg.length;
	var cadenaInvertida = " ";

	while(x>=0){
		cadenaInvertida += cad_arg.charAt(x);
		x--;
	}
	document.write(cadenaInvertida + "</br>");
}