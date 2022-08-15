var sessions = [];
var sessionSelect = document.getElementById("Sessions");

//All info stored on one solve
class Solve{
	constructor(time, scramble, difference){
		this.time = time;
		this.scramble = scramble;
		this.difference = difference;
	}
}

function CreateNewSession(sessionName, scrambleType) {
	sessions[sessions.length] = {name: sessionName, Scramble: scrambleType, totalSolves: 0, solves: []};

	sessionSelect.innerHTML += "<option value = " + sessions[sessions.length - 1].name + ">" + sessions[sessions.length - 1].name + "</option>";

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