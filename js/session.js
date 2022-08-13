var Session = [];
var SessionScrambles = [];
var sessionSelect = document.getElementById("Sessions");

function CreateNewSession(sessionName, scrambleType) {
	if(sessionName == null){
		sessionName = document.getElementById("SessionName").value;
	}

	if(scrambleType == null){
		scrambleType = document.getElementById("sessionScramble").value;
	}

	for (var i = 0; i < Session.length; i++) {
		if (document.getElementById("SessionName").value == Session[i]) {
			alert("This session name already exists!")
			return;
		}
	}

	if(document.getElementById("sessionScramble").value == "notSet"){
		alert("You didn't select a scramble type!");
		return;
	}

	Session[Session.length] = sessionName;
	SessionScrambles[Session.length] = scrambleType;

	sessionSelect.innerHTML += "<option value = " + Session[Session.length - 1] + ">" + Session[Session.length - 1] + "</option>";

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

function AddTimeToSession(time, scramble, session){
	
}