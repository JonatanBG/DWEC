for (var i=0; i<3; i++){
	var jobTitle=prompt("Enter job");
	var location=prompt("Enter location");
	var partner=prompt("Enter name partner");
	var numKids=prompt("Enter number of kids");
	tellFortune(jobTitle, location, partner, numKids);
}

function tellFortune (jobTitle, location, partner, numKids) {
    var future = "Serás un" + jobTitle + "en" + location + "y casado con" +
   partner + "" + "con" + numKids + "niños.";
    alert(future);
}

