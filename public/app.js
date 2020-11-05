

document.addEventListener("DOMContentLoaded", event =>{
	const app = firebase.app();
	const db = firebase.firestore();
	const myPost = db.collection("notifications").doc("notif");
	myPost.get().then(
		doc=>{
			const data = doc.data();
			console.log(data);
			alert(data["n1"]);
		}
		);
});




