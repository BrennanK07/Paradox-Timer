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
    CalculateAverage();
    sessions[currentActiveSession].totalSolves++;
    //addToTable(number + 1, time, CalculateDifference(timeSeconds)); Stuff is added to table on reload

    sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length] = { time: time, timeSeconds: timeSeconds, scramble: scramble, difference: CalculateDifference(timeSeconds), DNF: false, plus2: false, ao5: 0, ao12: 0 };
    
    //Recalculates Ao5 and Ao12
    sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1] = { time: time, timeSeconds: timeSeconds, scramble: scramble, difference: CalculateDifference(timeSeconds), DNF: false, plus2: false, ao5: CalculateAo5(), ao12: CalculateAo12()};

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
    }else{
        sessions[currentActiveSession].best = 0;
        document.getElementById("best").innerHTML = "Best: -";
    }
    
    if (sessions[currentActiveSession].totalSolves >= 5) {
        sessions[currentActiveSession].bestAo5 = CalculateBestAo5();
        document.getElementById("bestao5").innerHTML = "Best Ao5: " + SecondsToTime(CalculateBestAo5());
        console.log(CalculateBestAo5());
    }else{
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
    }else{
        sessions[currentActiveSession].PB = 0;
        document.getElementById("best").innerHTML = "Best: -";
    }

    if (sessions[currentActiveSession].totalSolves >= 5) {
        sessions[currentActiveSession].bestAo5 = CalculateBestAo5();
        document.getElementById("bestao5").innerHTML = "Best Ao5: <strong>" + SecondsToTime(CalculateBestAo5()) + "</strong>";
    }else{
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
    }else{
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
    }else{
        sessions[currentActiveSession].PB = 0;
        document.getElementById("best").innerHTML = "Best: -";
    }

    ReloadSessions();
}

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});