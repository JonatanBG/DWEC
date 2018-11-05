for (var i=0; i<1; i++){
	var radius=prompt("Enter radius");
	calcGeometry (radius);
}

function calcGeometry(radius) {
  var circumference = Math.PI*2*radius;
  alert("The circumference is "+circumference);
  var area = Math.PI*radius*radius;
  alert("The area is " + area);
}