paths =new Array(
        '..\\assets\\big\\Back-b.jpg',
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
        '..\\assets\\big\\Wand14-b.jpg');
const select_cards = document.getElementsByClassName("select-container");
const your_cards = document.getElementsByClassName("card");
const back = document.getElementsByClassName("back-img");
var total_cards = paths.length;
var counter = 0;
var card = 0;

var disapear = function(){
	if(counter < 3){
		this.style.opacity = 0;
		your_cards[counter].style.opacity = 1;
		your_cards[counter].style.transition = "transform 0.8s";
		your_cards[counter].style.transformStyle = "preserve-3d";
		your_cards[counter].style.transform = "rotateY(180deg)";

		var selected = Math.floor(Math.random() * total_cards);
		back[counter].src = paths[selected];
		delete paths[counter] 
		counter += 1;
	}
}

for(card; card < select_cards.length; card++){
	select_cards[card].addEventListener("click", disapear, false);
}