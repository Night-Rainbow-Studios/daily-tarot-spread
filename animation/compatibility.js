
var percentage = document.getElementById("myp");
var heart = document.getElementById("heart");
var calculate = document.getElementById("calculate");
var selected = document.getElementsByClassName("select-sign");

var already_calculated = false;
var sign1 = selected[0].value;
var sign2 = selected[1].value;
var lasts1 = "";
var lasts2 = "";
calculate.addEventListener("click", function(){
	sign1 = selected[0].value;
	sign2 = selected[1].value;
	console.log(lasts1);
	console.log(lasts2);
	if(lasts1 != sign1 || lasts2 != sign2){
		console.log("uf");
		already_calculated = false;
	}
	lasts1 = sign1;
	lasts2 = sign2;
	
	if(!already_calculated){
		if((sign1 == "Gemini ♊" && sign2 == "Virgo ♍") || (sign2 == "Gemini ♊" && sign1 == "Virgo ♍")){
			percentage.innerHTML = "10000%";
		}
		else{
			percentage.innerHTML = "" + Math.floor(Math.random() * 100) + "%";
		}
		heart.style.opacity = 1;
		already_calculated = true;
	}
});