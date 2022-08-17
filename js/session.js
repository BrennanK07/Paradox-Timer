var sessions = [];
var sessionSelect = document.getElementById("Sessions");
var currentActiveSession;

function GetSessionInfo(){ //For "Create New Session"
	let SessionName = document.getElementById("SessionName").value;
	let ScrambleType = document.getElementById("sessionScramble").value;
	CreateNewSession(SessionName, ScrambleType);
}

function CreateNewSession(sessionName, scrambleType) {
	if(sessionName == ""){
		alert("You didn't give it a name!")
		return;
	}

	if(scrambleType == "notSet"){
		alert("You didn't select a scramble type!")
		return;
	}

	sessions[sessions.length] = {name: "", Scramble: "", totalSolves: 0, solves: []};
	sessions[sessions.length - 1].Scramble = scrambleType;
	sessions[sessions.length - 1].name = sessionName;

	sessionSelect.innerHTML += "<option value = " + sessions[sessions.length - 1].name + ">" + sessions[sessions.length - 1].name + "</option>";

	CloseSessionGenerator();

	//Adds options to the "Delete Session" Menu
	document.getElementById("SessionDeleteMenu").innerHTML += "<option value = " + sessions[sessions.length - 1].name + ">" + sessions[sessions.length - 1].name + "</option>";
}

function RemoveSession(sessionToDelete){
	
}

function ReloadSessions(){

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