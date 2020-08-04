var half_height = parseInt(window.screen.height / 2);
var half_width = parseInt(window.screen.width / 2);
var text = document.getElementById("redirect");
var cards = [ 
	document.getElementById("card1"),
	document.getElementById("card2"),
	document.getElementById("card3")]; //Definir una lista con todas las cartas.
var move = "0%";
move = "100%"; //Definir cuanto se va a mover dependiendo de la pantalla.
if(window.screen.width > 1000){ //Responsive hacks 
	move = "200%";  //Cuando la pantalla es muy grande no se centra bien
	text.style.height = "25vh"; //Cuando la pantalla es muy grande, el redirect div es muy corto
	text.style.marginTop = "10%"; //Y esta muy separado.
}


cards.forEach(function(item, index){ //Mover las cartas
	setTimeout(()=>{	
		item.classList.add("loaded");
		item.style.transform = "translate("+move+", 30%)";
	}, index*300);
});

document.getElementById("redirect").classList.add("loaded");




text.classList.add("loaded")