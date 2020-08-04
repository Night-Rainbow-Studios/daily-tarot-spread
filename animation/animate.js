var half_height = parseInt(window.screen.height / 2);
var half_width = parseInt(window.screen.width / 2);

var cards = [ 
	document.getElementById("card3"),
	document.getElementById("card2"),
	document.getElementById("card1")]; //Definir una lista con todas las cartas.
var move = "0%";
move = "100%"; //Definir cuanto se va a mover dependiendo de la pantalla.
	if(window.screen.width > 1000){
		move = "200%";
	}


cards.forEach(function(item, index){ //Mover las cartas
	setTimeout(()=>{	
		item.style.transitionDuration = "100ms"; 
		item.classList.add("loaded");
		item.style.transform = "translate("+move+", 40%)";
	}, index*300);
});

document.getElementById("redirect").classList.add("loaded");



//var text = document.getElementById("redirect");
//text.scrollIntoView();