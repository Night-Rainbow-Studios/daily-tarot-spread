
var percentage = document.getElementById("myp");
var heart = document.getElementById("heart");
var calculate = document.getElementById("calculate");
var selected = document.getElementsByClassName("select-sign");

var already_calculated = false;
calculate.addEventListener("click", function(){
	var sign1 = selected[0].value;
	var sign2 = selected[1].value;
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