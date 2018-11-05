var ncolum=prompt("Introduce numero columnas");
var alto=prompt("Introduce el alto");
var ancho=prompt("Introduce el ancho");

document.write("<table border='0' cellspading='"+ncolum+"' bgColor='black' width'"+ancho*parseInt(ncolum)+"'>");
document.write("<tr bgColor='white' height='"+alto+"'>");
var i=0;
while (i < parseInt(ncolum)){
	document.write("<td width='"+ancho+"'>&nbsp;</td>");
	i++
}

document.write("</tr>");
document.write("</table>");