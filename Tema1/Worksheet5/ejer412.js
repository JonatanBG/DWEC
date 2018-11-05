var ncolum=prompt("Introduce numero columnas");
var alto=prompt("Introduce el alto");
var ancho=prompt("Introduce el ancho");

document.write("<table border='0' cellspading='"+ncolum+"' bgColor='black' width'"+ancho*parseInt(ncolum)+"'>");
document.write("<tr bgColor='white' height='"+alto+"'>");
for (let i=0; i < parseInt(ncolum); i++){
	if(i%2){
		document.write("<td width='"+ancho+"' bgColor='white'>&nbsp;</td>");
	}else{
		document.write("<td width='"+ancho+"' bgColor='black'>&nbsp;</td>");
	}
}

document.write("</tr>");
document.write("</table>");