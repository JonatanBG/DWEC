	var language=prompt("Select the language you prefer, en, es and de");
	helloWorld (language);


function helloWorld (language){
	if(language=="en"){
		alert("Hello world");
	}
	else if(language=="es"){
		alert("Hola mundo");
	}
	else if(language=="de"){
		alert("Hallo welt");
	}else{
		alert("Hello world");
	}
}