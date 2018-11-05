var ncolum=prompt("Introduce numero columnas");
var alto=prompt("Introduce el alto");
var ancho=prompt("Introduce el ancho");

document.write("<table border='0' cellspading='"+ncolum+"' bgColor='black' width'"+ancho*parseInt(ncolum)+"'>");
document.write("<tr bgColor='white' height='"+alto+"'>");
var i=0;
while (i < parseInt(ncolum)){
	if(i%2){
		document.write("<td width='"+ancho+"' bgColor='white'>&nbsp;</td>");
	}else{
		document.write("<td width='"+ancho+"' bgColor='black'>&nbsp;</td>");
	}
	i++
}

document.write("</tr>");
document.write("</table>");