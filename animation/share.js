var share = document.getElementById("shrbt");

share.addEventListener("click", function(){
	html2canvas(document.getElementById("your-cards")).then(function(canvas){
		console.log(canvas.toDataURL("image/jpeg", 0.9));
	});
});