

function animate(item, index){
	item.style.transitionDuration = "1300ms";//La animacion dura 1.3 segundos.
	//console.log('Moving...');
	var add = 0; //Si la pantalla mide menos de 990 no se ocupa agregar nada
	if(window.screen.width > 990){ //Esto es porque en algunas pantallas no se centran bien las imagenes.
		add = window.screen.width - 990;
		add += 114;
	}
	 //Mover las imagenes.
	item.style.transform = "translate(30%)";
	item.style.transform = "translate("+ add + "px)"; //Esto es para asegurarse que las imagenes se centren bien en pantallas grandes.
	//console.log(add);

	//Ahora es para mover para abajo.

	//for(counter=1; counter<30; counter++){
	//	item.style.transform = "translate(0, "+counter+"%)";
	//}

}



var cards = [ 
	document.getElementById("card3"),
	document.getElementById("card2"),
	document.getElementById("card1")]; //Definir una lista con todas las cartas.

cards.forEach(animate); //Hacer que cada carta haga su animacion.

var text = document.getElementById("redirect");
text.scrollIntoView();