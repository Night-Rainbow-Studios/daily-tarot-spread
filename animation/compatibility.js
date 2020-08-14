
var percentage = document.getElementById("myp");
var heart = document.getElementById("heart");
var calculate = document.getElementById("calculate");

var already_calculated = false;

calculate.addEventListener("click", function(){
	if(!already_calculated){
		percentage.innerHTML = "" + Math.floor(Math.random() * 100) + "%";
		heart.style.opacity = 1;
		already_calculated = true;
	}
});