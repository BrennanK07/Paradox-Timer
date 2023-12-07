let table = document.getElementById("timeTable");
let keysPressed = [];
let average;

function addToTable(number, time, difference) {
	var row = table.insertRow(1);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	cell1.innerHTML = number;
	cell2.innerHTML = time;
	cell3.innerHTML = difference;
}

//state of 0 = completed, no penalties
//state of 1 = +2
//state of 2 = DNF
function addTimeToSession(number, time, scramble, timeSeconds, DNF, p2) { //DNF and plus 2
	//Updates customizations because they do not apply to newly created objects until re-run
	UpdateConfigs();

	CalculateAverage();
	sessions[currentActiveSession].totalSolves++;
	//addToTable(number + 1, time, CalculateDifference(timeSeconds)); Stuff is added to table on reload

	sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length] = { time: time, timeSeconds: timeSeconds, scramble: scramble, difference: CalculateDifference(timeSeconds), DNF: false, plus2: false, ao5: 0, ao12: 0 };

	//Recalculates Ao5 and Ao12
	sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1] = { time: time, timeSeconds: timeSeconds, scramble: scramble, difference: CalculateDifference(timeSeconds), DNF: false, plus2: false, ao5: CalculateAo5(), ao12: CalculateAo12() };

	//For ao5 and ao12
	if (sessions[currentActiveSession].totalSolves >= 5) {
		document.getElementById("ao5").innerHTML = "Ao5: " + SecondsToTime(CalculateAo5());
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].ao5 = CalculateAo5();
	} else {
		document.getElementById("ao5").innerHTML = "Ao5: -";
	}

	if (sessions[currentActiveSession].totalSolves >= 12) {
		document.getElementById("ao12").innerHTML = "Ao12: " + SecondsToTime(CalculateAo12());
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].ao12 = CalculateAo12();
	} else {
		document.getElementById("ao12").innerHTML = "Ao12: -";
	}

	console.log(sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1]);

	if (sessions[currentActiveSession].totalSolves != 0) {
		sessions[currentActiveSession].best = CalculatePB();
		document.getElementById("best").innerHTML = "Best: " + SecondsToTime(CalculatePB());
	} else {
		sessions[currentActiveSession].best = 0;
		document.getElementById("best").innerHTML = "Best: -";
	}

	if (sessions[currentActiveSession].totalSolves >= 5) {
		sessions[currentActiveSession].bestAo5 = CalculateBestAo5();
		document.getElementById("bestao5").innerHTML = "Best Ao5: " + SecondsToTime(CalculateBestAo5());
		//console.log(CalculateBestAo5());
	} else {
		sessions[currentActiveSession].bestAo5 = 0;
		document.getElementById("bestao5").innerHTML = "Best Ao5: -";
	}

	ReloadSessions();
}

function removeTimeFromSession() {
	CalculateAverage();
	ReloadSessions();
}

function removeRecentTime() {
	CalculateAverage();
	sessions[currentActiveSession].solves.pop();
	sessions[currentActiveSession].totalSolves--;
	table.deleteRow(1);
	ReloadSessions();
}

function CalculateDifference(solveTime) {
	if (sessions[currentActiveSession].totalSolves == 1) {
		return "0.000";
	}
	//console.log(solveTime + " " + average);
	return SecondsToTime(solveTime - average);
}

function CalculateAverage() {
	if (currentActiveSession != -1) {
		var average = 0
		for (let i = 0; i < sessions[currentActiveSession].solves.length; i++) {
			average += sessions[currentActiveSession].solves[i].timeSeconds;
		}
		average = average / sessions[currentActiveSession].solves.length;
		return average; //'average' returns in seconds form, can be converted later
	}
}

function CalculatePB() {
	let PBbuffer;
	PBbuffer = sessions[currentActiveSession].solves[0].timeSeconds;

	for (var i = 0; i < sessions[currentActiveSession].solves.length; i++) {
		if (sessions[currentActiveSession].solves[i].timeSeconds < PBbuffer) {
			PBbuffer = sessions[currentActiveSession].solves[i].timeSeconds;
		}
	}

	return PBbuffer;
}

function CalculateBestAo5() {
	let Ao5buffer;
	Ao5buffer = sessions[currentActiveSession].solves[4].ao5; //Starts reading at 4 because the first 4 don't have an ao5. (Yes I'm a dumbass and this took me over 2 weeks to debug)

	for (var i = 4; i < sessions[currentActiveSession].solves.length; i++) {
		if (sessions[currentActiveSession].solves[i].ao5 < Ao5buffer) {
			Ao5buffer = sessions[currentActiveSession].solves[i].ao5;
		}
	}

	return Ao5buffer;
}

function CalculateAo5() {
	let ao5 = 0;
	let solves = [];
	let index = 0;
	if (sessions[currentActiveSession].totalSolves >= 5) {
		for (let i = sessions[currentActiveSession].solves.length - 5; i < sessions[currentActiveSession].totalSolves; i++) {
			ao5 += sessions[currentActiveSession].solves[i].timeSeconds;
			solves[index] = sessions[currentActiveSession].solves[i].timeSeconds;
			index++;
		}

		ao5 = ao5 - Math.min.apply(Math, solves);
		ao5 = ao5 - Math.max.apply(Math, solves);

		ao5 = ao5 / 3;

		return ao5;
	} else {
		return "-";
	}
}

function ReloadStats() {
	//For ao5 and ao12
	if (sessions[currentActiveSession].totalSolves >= 5) {
		document.getElementById("ao5").innerHTML = "Ao5: <strong>" + SecondsToTime(CalculateAo5()) + "</strong>";
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].ao5 = CalculateAo5();
	} else {
		document.getElementById("ao5").innerHTML = "Ao5: -";
	}

	if (sessions[currentActiveSession].totalSolves >= 12) {
		document.getElementById("ao12").innerHTML = "Ao12: <strong>" + SecondsToTime(CalculateAo12()) + "</strong>";
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].ao12 = CalculateAo12();
	} else {
		document.getElementById("ao12").innerHTML = "Ao12: -";
	}

	if (sessions[currentActiveSession].totalSolves != 0) {
		sessions[currentActiveSession].PB = CalculatePB();
		document.getElementById("best").innerHTML = "Best: <strong>" + SecondsToTime(CalculatePB()) + "</strong>";
	} else {
		sessions[currentActiveSession].PB = 0;
		document.getElementById("best").innerHTML = "Best: -";
	}

	if (sessions[currentActiveSession].totalSolves >= 5) {
		sessions[currentActiveSession].bestAo5 = CalculateBestAo5();
		document.getElementById("bestao5").innerHTML = "Best Ao5: <strong>" + SecondsToTime(CalculateBestAo5()) + "</strong>";
	} else {
		sessions[currentActiveSession].bestAo5 = 0;
		document.getElementById("bestao5").innerHTML = "Best Ao5: -";
	}
}

function CalculateAo12() {
	let ao12 = 0;
	let solves = [];
	let index = 0;
	if (sessions[currentActiveSession].totalSolves >= 12) {
		for (let i = sessions[currentActiveSession].solves.length - 12; i < sessions[currentActiveSession].totalSolves; i++) {
			ao12 += sessions[currentActiveSession].solves[i].timeSeconds;
			solves[index] = sessions[currentActiveSession].solves[i].timeSeconds;
			index++;
		}
		ao12 = ao12 - Math.min.apply(Math, solves);
		ao12 = ao12 - Math.max.apply(Math, solves);

		ao12 = ao12 / 10;

		return ao12;
	} else {
		return "-";
	}
}

function GetSolveNumber() {
	return sessions[currentActiveSession].totalSolves;
}

function GetActiveSession() {
	let arrayIndex;
	arrayIndex = sessions.map(object => object.name).indexOf(document.getElementById("Sessions").value);
	return arrayIndex;
}

document.addEventListener('keydown', function (event) {
	keysPressed[event.key] = true;
	if (keysPressed['q'] && keysPressed['p'] && IsFocused && sessions[currentActiveSession].totalSolves > 0 && isSolving == false) {
		delete keysPressed['q'];
		delete keysPressed['p'];
		removeRecentTime();
	}

	if (keysPressed['k']) { //DNF
		delete keysPressed['k'];
		MakeTimeDNF();
	}

	if (keysPressed['l']) { //+2
		delete keysPressed['l'];
		MakeTimePlus2();
	}
});

function MakeTimeDNF() {
	if (sessions[currentActiveSession].solves.length == 0 || sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].plus2 == true) {
		return;
	}

	if (sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].DNF == false) {
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].DNF = true;
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time = "DNF";
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].difference = "-"
		//TimeSeconds is not modified and DNF is determined by the physical time rather than the seconds (If it were the seconds equalling "DNF" as well, it would not save the solve time in case of a misclick of the DNF button)
	} else {
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].DNF = false;
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time = SecondsToTime(sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds);
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].difference = CalculateDifference(sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds);
	}

	/*For re-calculating the ao5 / 12*/
	if (sessions[currentActiveSession].totalSolves >= 5) {
		document.getElementById("ao5").innerHTML = "Ao5: " + SecondsToTime(CalculateAo5());
	} else {
		document.getElementById("ao5").innerHTML = "Ao5: -";
	}

	if (sessions[currentActiveSession].totalSolves >= 12) {
		document.getElementById("ao12").innerHTML = "Ao12: " + SecondsToTime(CalculateAo12());
	} else {
		document.getElementById("ao12").innerHTML = "Ao12: -";
	}

	if (sessions[currentActiveSession].totalSolves != 0) {
		sessions[currentActiveSession].PB = CalculatePB();
		document.getElementById("best").innerHTML = "Best: " + SecondsToTime(CalculatePB());
	} else {
		sessions[currentActiveSession].PB = 0;
		document.getElementById("best").innerHTML = "Best: -";
	}

	ReloadSessions();
}

function MakeTimePlus2() {
	if (sessions[currentActiveSession].solves.length == 0 || sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].DNF == true) {
		return;
	}

	if (sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].plus2 == false) {
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].plus2 = true;
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds = sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds + 2;
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time = SecondsToTime(sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds);
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time = '+' + sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time;
	} else {
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].plus2 = false;
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds = sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds - 2;
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time = SecondsToTime(sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds);
		sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time = sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time = sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time = sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].time.replace('+', '');
	}

	sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].difference = CalculateDifference(sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1].timeSeconds);

	/*For re-calculating the ao5 / 12*/
	if (sessions[currentActiveSession].totalSolves >= 5) {
		document.getElementById("ao5").innerHTML = "Ao5: " + SecondsToTime(CalculateAo5());
	} else {
		document.getElementById("ao5").innerHTML = "Ao5: -";
	}

	if (sessions[currentActiveSession].totalSolves >= 12) {
		document.getElementById("ao12").innerHTML = "Ao12: " + SecondsToTime(CalculateAo12());
	} else {
		document.getElementById("ao12").innerHTML = "Ao12: -";
	}

	if (sessions[currentActiveSession].totalSolves != 0) {
		sessions[currentActiveSession].PB = CalculatePB();
		document.getElementById("best").innerHTML = "Best: " + SecondsToTime(CalculatePB());
	} else {
		sessions[currentActiveSession].PB = 0;
		document.getElementById("best").innerHTML = "Best: -";
	}

	ReloadSessions();
}

document.addEventListener('keyup', (event) => {
	delete keysPressed[event.key];
});

function manuallyAddTime() {
	var solveTime = document.getElementById("enteredTime").value;
	if (currentActiveSession == -1) {
		alert("There is no session active. Please open one of them to add a time to it");
		return;
	}

	if (isNaN(TimeToSeconds(solveTime))) {
		alert("Error! " + solveTime + " was not put into proper format");
		return;
	}

	addTimeToSession(sessions[currentActiveSession].length + 1, solveTime, "-", TimeToSeconds(solveTime), false, false);
	document.getElementById("enteredTime").value = "";
	//number, time, scramble, timeSeconds, DNF, p2
}

function IsAllDNF() {
	for (var i = 0; i < sessions[currentActiveSession].solves.length; i++){
		if(sessions[currentActiveSession].solves[i].DNF == false){
			return false;
		}
	}

	return true;
}

//For Extra Statistics Menu
function UpdateExtraStatisticsMenu(){

	if(currentActiveSession == -1){
		document.getElementById("errorFromEnteredValuesTextbox").innerHTML = "Error! Select a session from the main menu first";
		return;
	}

	startInputBox = document.getElementById("startIndexField");
	endInputBox = document.getElementById("endIndexField");


	startValue = parseInt(startInputBox.value);
	endValue = parseInt(endInputBox.value);

	//Adjusts because users don't understand that everything should start counting at 0
	startValue -= 1;
	endValue -= 1;


	if(isNaN(startValue) || isNaN(endValue) || startValue < 0 || endValue < 0 || startValue > endValue || endValue >= sessions[currentActiveSession].solves.length){
		//Failed, one or more of the values do not work.
		document.getElementById("errorFromEnteredValuesTextbox").innerHTML = "Error! The value(s) entered do not work!";

		return;
	}else{
		//Calcualtes data and puts it in the table
		document.getElementById("errorFromEnteredValuesTextbox").innerHTML = "";

		document.getElementById("extraStatAverage").innerHTML = SecondsToTime(CalculateAverageOverInterval(startValue, endValue));

		document.getElementById("extraStatMedian").innerHTML = SecondsToTime(CalculateMedianOverInterval(startValue, endValue));

		document.getElementById("extraStatWorstAo5").innerHTML = SecondsToTime(CalculateWorstAo5OverInterval(startValue, endValue));

		document.getElementById("extraStatWorstAo12").innerHTML = SecondsToTime(CalculateWorstAo12OverInterval(startValue, endValue));

		document.getElementById("extraStatPercentPlus2").innerHTML = CalculatePercentPlus2OverInterval(startValue, endValue);

		document.getElementById("extraStatAveragePercentDNF").innerHTML = CalculatePercentDNFOverInterval(startValue, endValue);
	}
}

function CalculateAverageOverInterval(min, max){
	if (currentActiveSession != -1) {
		var average = 0
		for (let i = min; i < max; i++) {
			average += sessions[currentActiveSession].solves[i].timeSeconds;
		}
		average = average / (max - min);
		return average; //'average' returns in seconds form, can be converted later
	}
}

function CalculateMedianOverInterval(min, max){
	let sortedTimes = sessions[currentActiveSession].solves.map(object => object.timeSeconds);

	//Adjusts array size to fit all values allowed
	sortedTimes = sortedTimes.slice(min, max);

	sortedTimes = sortedTimes.sort();
	//console.log(sortedTimes);

	if(sortedTimes.length % 2 == 0){
		//even, average the two middle values
		return (sortedTimes[Math.floor(sortedTimes.length / 2)] + sortedTimes[Math.floor(sortedTimes.length / 2) - 1]) / 2;
	}
	else{
		return sortedTimes[Math.floor(sortedTimes.length / 2)];
	}
}

function CalculateWorstAo5OverInterval(min, max){
	let ao5List = [];

	if((max - min) + 1 < 5){
		return "-";
	}
	else{
		//Adds all ao5's to a list and calculates which is the worst
		for(i = min; i < max - 4; i++){
			//console.log(i, i + 4);
			ao5List.push(CalculateAverageOverInterval(i, i + 4));
		}

		return Math.max(...ao5List);
	}
}

function CalculateWorstAo12OverInterval(min, max){
	let ao12List = [];

	if((max - min) + 1 < 12){
		return "-";
	}
	else{
		//Adds all ao12's to a list and calculates which is the worst
		for(i = min; i < max - 11; i++){
			//console.log(i, i + 11);
			ao12List.push(CalculateAverageOverInterval(i, i + 11));
		}

		return Math.max(...ao12List);
	}
}

function CalculateAverageOverInterval(minAOI, maxAOI){
	//Follows same algorithm as ao5, where highest and lowest values are subtracted
	let aoi = 0;
	let solves = [];
	let index = 0;

	if (sessions[currentActiveSession].totalSolves >= (maxAOI - minAOI + 1) || (maxAOI - minAOI) > 1) {
		for (let i = minAOI; i < maxAOI + 1; i++) {
			//console.log(minAOI, maxAOI, ":", i)
			aoi += sessions[currentActiveSession].solves[i].timeSeconds;
			solves[index] = sessions[currentActiveSession].solves[i].timeSeconds;
			index++;

			//console.log(aoi);
		}

		aoi = aoi - Math.min.apply(Math, solves);
		aoi = aoi - Math.max.apply(Math, solves);

		aoi = aoi / (maxAOI - minAOI - 1);

		return aoi;
	} 
	else {
		return "-";
	}
}

function CalculatePercentPlus2OverInterval(min, max){
	let totalPlus2 = 0;

	for(let i = min; i < max + 1; i++){
		if(sessions[currentActiveSession].solves[i].plus2 == true){
			totalPlus2++;
		}
	}

	return (Math.round((totalPlus2 / (max - min + 1)) * 1000) / 10) + "%";
}

function CalculatePercentDNFOverInterval(min, max){
	let totalDNF = 0;

	for(let i = min; i < max + 1; i++){
		if(sessions[currentActiveSession].solves[i].DNF == true){
			totalDNF++;
		}
	}

	return (Math.round((totalDNF / (max - min + 1)) * 1000) / 10) + "%";
}