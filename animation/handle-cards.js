paths =[//direcciones de las imagenes de las cartas.
        '..\\assets\\big\\Cups01-b.jpg',
        '..\\assets\\big\\Cups02-b.jpg',
        '..\\assets\\big\\Cups03-b.jpg',
        '..\\assets\\big\\Cups04-b.jpg',
        '..\\assets\\big\\Cups05-b.jpg',
        '..\\assets\\big\\Cups06-b.jpg',
        '..\\assets\\big\\Cups07-b.jpg',
        '..\\assets\\big\\Cups08-b.jpg',
        '..\\assets\\big\\Cups09-b.jpg',
        '..\\assets\\big\\Cups10-b.jpg',
        '..\\assets\\big\\Cups11-b.jpg',
        '..\\assets\\big\\Cups12-b.jpg',
        '..\\assets\\big\\Cups13-b.jpg',
        '..\\assets\\big\\Cups14-b.jpg',
        '..\\assets\\big\\Major00-b.jpg',
        '..\\assets\\big\\Major01-b.jpg',
        '..\\assets\\big\\Major02-b.jpg',
        '..\\assets\\big\\Major03-b.jpg',
        '..\\assets\\big\\Major04-b.jpg',
        '..\\assets\\big\\Major05-b.jpg',
        '..\\assets\\big\\Major06-b.jpg',
        '..\\assets\\big\\Major07-b.jpg',
        '..\\assets\\big\\Major08-b.jpg',
        '..\\assets\\big\\Major09-b.jpg',
        '..\\assets\\big\\Major10-b.jpg',
        '..\\assets\\big\\Major11-b.jpg',
        '..\\assets\\big\\Major12-b.jpg',
        '..\\assets\\big\\Major13-b.jpg',
        '..\\assets\\big\\Major14-b.jpg',
        '..\\assets\\big\\Major15-b.jpg',
        '..\\assets\\big\\Major16-b.jpg',
        '..\\assets\\big\\Major17-b.jpg',
        '..\\assets\\big\\Major18-b.jpg',
        '..\\assets\\big\\Major19-b.jpg',
        '..\\assets\\big\\Major20-b.jpg',
        '..\\assets\\big\\Major21-b.jpg',
        '..\\assets\\big\\Pent01-b.jpg',
        '..\\assets\\big\\Pent02-b.jpg',
        '..\\assets\\big\\Pent03-b.jpg',
        '..\\assets\\big\\Pent04-b.jpg',
        '..\\assets\\big\\Pent05-b.jpg',
        '..\\assets\\big\\Pent06-b.jpg',
        '..\\assets\\big\\Pent07-b.jpg',
        '..\\assets\\big\\Pent08-b.jpg',
        '..\\assets\\big\\Pent09-b.jpg',
        '..\\assets\\big\\Pent10-b.jpg',
        '..\\assets\\big\\Pent11-b.jpg',
        '..\\assets\\big\\Pent12-b.jpg',
        '..\\assets\\big\\Pent13-b.jpg',
        '..\\assets\\big\\Pent14-b.jpg',
        '..\\assets\\big\\Sword01-b.jpg',
        '..\\assets\\big\\Sword02-b.jpg',
        '..\\assets\\big\\Sword03-b.jpg',
        '..\\assets\\big\\Sword04-b.jpg',
        '..\\assets\\big\\Sword05-b.jpg',
        '..\\assets\\big\\Sword06-b.jpg',
        '..\\assets\\big\\Sword07-b.jpg',
        '..\\assets\\big\\Sword08-b.jpg',
        '..\\assets\\big\\Sword09-b.jpg',
        '..\\assets\\big\\Sword10-b.jpg',
        '..\\assets\\big\\Sword11-b.jpg',
        '..\\assets\\big\\Sword12-b.jpg',
        '..\\assets\\big\\Sword13-b.jpg',
        '..\\assets\\big\\Sword14-b.jpg',
        '..\\assets\\big\\Wand01-b.jpg',
        '..\\assets\\big\\Wand02-b.jpg',
        '..\\assets\\big\\Wand03-b.jpg',
        '..\\assets\\big\\Wand04-b.jpg',
        '..\\assets\\big\\Wand05-b.jpg',
        '..\\assets\\big\\Wand06-b.jpg',
        '..\\assets\\big\\Wand07-b.jpg',
        '..\\assets\\big\\Wand08-b.jpg',
        '..\\assets\\big\\Wand09-b.jpg',
        '..\\assets\\big\\Wand10-b.jpg',
        '..\\assets\\big\\Wand11-b.jpg',
        '..\\assets\\big\\Wand12-b.jpg',
        '..\\assets\\big\\Wand13-b.jpg',
        '..\\assets\\big\\Wand14-b.jpg'];

const select_cards = document.getElementsByClassName("select-container");//cartas de arriba
const your_cards = document.getElementsByClassName("card");//cartas de abajo (ocultas)
const back = document.getElementsByClassName("back-img");//La imagen de la parte de atras (vacio hasta que se da click)
var total_cards = paths.length;
var counter = 0; //contador de clicks que le has dado a las cartas de arriba.
var card = 0;
var prediction = document.getElementById("pred"); 
/*var close = document.getElementById("close");
close.addEventListener("click", function(){
        prediction.style.opacity = 0;
        prediction.style.zIndex = 0;
        prediction.classList.add("fast-close");
});*/
select_cards[0].scrollIntoView();

var disapear = function(){ //Funcion para aparecer y desaparecer las cartas cuando das click.
	if(counter < 3){ //evitar que desaparezcan mas de 3 cartas.
		this.style.opacity = 0; //desaparecer carta de arriba.
		your_cards[counter].style.opacity = 1; //aparecer carta de abajo.
		//girar 
		your_cards[counter].style.transition = "transform 0.8s"; 
		your_cards[counter].style.transformStyle = "preserve-3d";
		your_cards[counter].style.transform = "rotateY(180deg)";

		var selected = Math.floor(Math.random() * total_cards); //Numero aleatorio entre 0 y el total de imagenes de cartas.
		
                back[counter].src = paths[selected]; //poner imagen en la parte de atras de la carta.
		
                //console.log(paths[selected])
		paths.splice(selected, 1)//Quitar esa imagen de la lista para que no se repitan cartas.
                total_cards -= 1;
		//console.log(paths[selected])
		counter += 1;
		console.log(counter);
	}
        if(counter == 3){
                counter += 1;
                prediction.style.display = "block";
                prediction.style.opacity = 1;   
                prediction.scrollIntoView({block:'end', behavior:'smooth'});  
        }
}

for(card; card < select_cards.length; card++){
	select_cards[card].addEventListener("click", disapear, false); //
}