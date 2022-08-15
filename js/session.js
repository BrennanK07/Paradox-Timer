var sessions = [];
var sessionSelect = document.getElementById("Sessions");

class Session{
	constructor(name, scrambleType){
		this.sessionName = name;
		this.scrambleType = scrambleType;
		let totalSolves = 0;
	}
}

//All info stored on one solve
class Solve{
	constructor(time, scramble)
}

function CreateNewSession(sessionName, scrambleType) {
	

	sessionSelect.innerHTML += "<option value = " + Session[Session.length - 1] + ">" + Session[Session.length - 1] + "</option>";

	CloseSessionGenerator();

	//Adds options to the "Delete Session" Menu
	
}

function RemoveSession(sessionToDelete){
	
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