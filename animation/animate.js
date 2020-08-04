var half_height = parseInt(window.screen.height / 2);
var half_width = parseInt(window.screen.width / 2);

var cards = [ 
	document.getElementById("card3").classList.add("loaded"),
	document.getElementById("card2").classList.add("loaded"),
	document.getElementById("card1").classList.add("loaded")]; //Definir una lista con todas las cartas.
var move = "0%";
move = "300%"; //Definir cuanto se va a mover dependiendo de la pantalla.
	if(window.screen.width > 1000){
		move = "400%";
	}
cards.forEach(function(item, index){ //Mover las cartas
	console.log(".")
});
document.getElementById("redirect").classList.add("loaded");



//var text = document.getElementById("redirect");
//text.scrollIntoView();