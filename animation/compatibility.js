
var percentage = document.getElementById("myp");
var heart = document.getElementById("heart");
var body = document.getElementById("amor");
var calculate = document.getElementById("calculate");
var selected = document.getElementsByClassName("select-sign");
var redirect = document.getElementById("rdrct");

var already_calculated = false;
var sign1 = selected[0].value;
var sign2 = selected[1].value;
var lasts1 = "";
var lasts2 = "";
var put_inside = ""
var signs = {} //guardar valores ya seleccionados para no parecer falso 


calculate.addEventListener("click", function(){
	sign1 = selected[0].value;
	sign2 = selected[1].value;
	hash1 = sign1+sign2;
	hash2 = sign2+sign1;
	if(lasts1 != sign1 || lasts2 != sign2){
			already_calculated = false; //Checar si se ha interactuado con las cajas de select
	}
	if(!already_calculated){ //Si las cajas han cambiado: hacer calculos.
		if(hash1 in signs || hash2 in signs){
			percentage.innerHTML = signs[hash1] //Si ya se habia calculado esa pareja: poner resultado anterior.
		}
		else{
			if((sign1 == "Gemini ♊" && sign2 == "Virgo ♍") || (sign2 == "Gemini ♊" && sign1 == "Virgo ♍")){
				percentage.innerHTML = "10000%"; //Mi novia y yo.
			}
			else{
				percentage.innerHTML = "" + (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 40)) + "%"; //Si nunca se habia calculado esta pareja: atribuir valor.
				signs[hash1] = percentage.innerHTML; //guardar valor.
				signs[hash2] = percentage.innerHTML;
			}
			heart.style.opacity = 1; //aparecer corazon.
			redirect.style.opacity = 1;
			already_calculated = true;
		
		}
	}
	
	lasts1 = sign1;
	lasts2 = sign2;
});