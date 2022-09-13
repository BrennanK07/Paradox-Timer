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

function addTimeToSession(number, time, scramble, timeSeconds) {
    CalculateAverage();
    sessions[currentActiveSession].totalSolves++;
    //addToTable(number + 1, time, CalculateDifference(timeSeconds)); Stuff is added to table on reload

    sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length] = { time: time, timeSeconds: timeSeconds, scramble: scramble, difference: CalculateDifference(time) };
    console.log(sessions[currentActiveSession].solves[sessions[currentActiveSession].solves.length - 1]);

    //For ao5 and ao12
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
}

function CalculateDifference(solveTime) {
    if (sessions[currentActiveSession].totalSolves == 1) {
        return "0.000";
    }
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
});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});