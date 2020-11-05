const app = firebase.app();

console.log(app);

document.addEventListener("DOMContentLoaded", event =>{
	function goolgeLogin(){
	const provider  = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(
		result => {
			const user = result.user;
			document.getElementById("name").innerText = user.displayName;
				}
			);
		}
	goolgeLogin();

});




