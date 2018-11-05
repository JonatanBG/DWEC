inviertePalabra("Hello");
function inviertePalabra(cad_arg){
	var x = cad_arg.length;
	var palabraInvertida = " ";

	while(x>=0){
		palabraInvertida += cad_arg.charAt(x);
		x--;
	}
	document.write(palabraInvertida + "</br>");
}