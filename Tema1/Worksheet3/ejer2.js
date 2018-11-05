for (var i=0; i<3; i++){
	var birthYear=prompt("Enter year of birth");
	var currentYear=prompt("Enter current year");
	calculateAge(birthYear, currentYear);
}

function calculateAge (birthYear, currentYear) {
    var age = currentYear - birthYear;
    alert ("Your age is " + age + ' or ' + (age - 1));
}