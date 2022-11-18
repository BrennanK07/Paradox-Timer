var sessions = [];
var sessionSelect = document.getElementById("Sessions");
var currentActiveSession;

function GetSessionInfo() { //For "Create New Session"
	let SessionName = document.getElementById("SessionName").value;
	let ScrambleType = document.getElementById("sessionScramble").value;
	CreateNewSession(SessionName, ScrambleType);
}

function GetSessionData() {
	return sessions;
}


function CreateNewSession(sessionName, scrambleType) {
	if (sessions.map(object => object.name).indexOf(sessionName) != -1) {
		alert("Session Name Already Exists!");
		return;
	}

	if (sessionName == "") {
		alert("You didn't give it a name!")
		return;
	}

	if (scrambleType == "notSet") {
		alert("You didn't select a scramble type!")
		return;
	}

	sessions[sessions.length] = { name: "", Scramble: "", totalSolves: 0, solves: [], best: 0, bestAo5: 0, bestAo12: 0, PB: 0 };
	sessions[sessions.length - 1].Scramble = scrambleType;
	sessions[sessions.length - 1].name = sessionName;

	sessionSelect.innerHTML += `<option value = "` + sessions[sessions.length - 1].name + `">` + sessions[sessions.length - 1].name + "</option>";

	CloseSessionGenerator();

	//Adds options to the "Delete Session" Menu
	document.getElementById("SessionDeleteMenu").innerHTML += `<option value = "` + sessions[sessions.length - 1].name + `">` + sessions[sessions.length - 1].name + "</option>";
}

function AddSessionToList(sessionToAdd) {
	sessionSelect.innerHTML += `<option value = "` + sessionToAdd.name + `">` + sessionToAdd.name + "</option>";
	document.getElementById("SessionDeleteMenu").innerHTML += `<option value = "` + sessionToAdd.name + `">` + sessionToAdd.name + "</option>";
}

function RemoveSession(sessionToDelete) {
	if (confirm("Are you sure you want to delete " + sessionToDelete + "?") == true) {
		let index = sessions.map(object => object.name).indexOf(sessionToDelete)

		sessions.splice(index, 1);

		window.location.reload();
	}
}

function ReloadSessions() {
	while (table.rows.length > 1) {
		table.deleteRow(1);
	}

	if (sessions[currentActiveSession] != null && sessions[currentActiveSession].solves != null) { //Prevents errors by checking for data within that area
		for (var i = 0; i < sessions[currentActiveSession].totalSolves; i++) {
			addToTable(i + 1, sessions[currentActiveSession].solves[i].time, sessions[currentActiveSession].solves[i].difference);
		}
	}

	console.log("Reloading Session");

	if (currentActiveSession != -1) {
		ReloadStats();
	}

	ForceDrawChart();
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

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}