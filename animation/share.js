console.log("loaded");
var share = document.getElementById("shrbt");

share.addEventListener("click", function(){
	html2canvas(document.getElementById("your-cards")).then(
		function(canvas){
			document.body.appendChild(canvas);
		}
	);
});	