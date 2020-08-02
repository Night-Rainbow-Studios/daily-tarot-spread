var cards = [ 
	document.getElementById("card3"),
	document.getElementById("card2"),
	document.getElementById("card1")]; //Definir una lista con todas las cartas.


cards.forEach(function(item, index){ //Mover las cartas
	var move = "250%"; //Definir cuanto se va a mover dependiendo de la pantalla.
	item.style.transitionDuration = "1300ms"; 
	item.style.transform = "translate("+move+", 140%)";
})



//var text = document.getElementById("redirect");
//text.scrollIntoView();