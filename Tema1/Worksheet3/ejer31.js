for (var i=0; i<3; i++){
	var age=prompt("Enter your age");
	var numPerDay=prompt("Enter numPerDay");
	calculateSupply(age, numPerDay);
}

function calculateSupply (age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  alert(message);
}