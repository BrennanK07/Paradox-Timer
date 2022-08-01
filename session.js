var Session = [];
var SessionScrambles = [];

function CreateNewSession() {
	for (var i = 0; i < Session.length; i++) {
		if (document.getElementById("SessionName").value == Session[i]) {
			alert("This session name already exists!")
		}
	}

	Session[Session.length] = document.getElementById("SessionName").value;

	document.getElementById("Sessions").add(Session[Session.length])
	CloseSessionGenerator();
}

function OpenSessionGenerator() {
	document.getElementById("sessionMenu").style.width = "100%";
	OnMainPage = false;
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function CloseSessionGenerator() {
	document.getElementById("sessionMenu").style.width = "0%";
	OnMainPage = true;
}