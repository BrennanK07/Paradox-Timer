var startTime;
var TimerString;
var SolveTime;
var SolveTimeInSeconds;
var inspecitonStartTime;
var inspectionStart = false;

//Main timekeeping function
var intervalId = window.setInterval(function () {
    let CurrentTime = new Date().getTime() / 1000;

    TimeString = SecondsToTime((CompareTime(startTime, new Date().getTime() / 1000)));
    //console.log(CompareTime(startTime, new Date().getTime() / 1000))

    if (isSolving == true) {
        document.getElementById("timer").innerHTML = TimeString.slice(0, -2);
    }
    else if (inspectionStart == true) {
        document.getElementById("timer").innerHTML = SecondsToTime(15 - (CompareTime(inspecitonStartTime, new Date().getTime() / 1000))).slice(0, -2);

        if (15 - (CompareTime(inspecitonStartTime, new Date().getTime() / 1000)) < 0) { //Ran out of inspection time; Make DNF
            isSolving = false;
            waitingToStart = false;
            if (isPressing) {
                justFinished = true;
            }
            inspectionStart = false;
            sessionSelect.value.totalSolves++;

            addTimeToSession(GetSolveNumber(), 0.000, document.getElementById("ScrambleText").innerHTML, 0, true, false);
            MakeTimeDNF();
        }
    }
    else {
        if (SolveTime == undefined) {
            document.getElementById("timer").innerHTML = "0.000";
        }
        else {
            document.getElementById("timer").innerHTML = SolveTime;
        }
    }

}, 1);

function StartTimer() {
    startTime = new Date().getTime() / 1000;
}

function StartInspectionTimer() {
    inspecitonStartTime = new Date().getTime() / 1000;
    waitingToStart = false;
    inspectionStart = true;
}

function StopTimer() {
    SolveTime = SecondsToTime((CompareTime(startTime, new Date().getTime() / 1000)));
    SolveTimeInSeconds = CompareTime(startTime, new Date().getTime() / 1000);
}

function CompareTime(startingTime, currentTime) {
    return (currentTime - startingTime);
}

function SecondsToTime(timeInSeconds) { //Converts seconds to proper time format as XX:YY.ZZZ
    let isNegataive = false;

    if (timeInSeconds == NaN) {
        return (0.000);
    }

    if (timeInSeconds < 0) {
        isNegataive = true;
        timeInSeconds = timeInSeconds.toString().replace('-', '')
    }

    let hours = Math.floor(timeInSeconds / 3600);
    if (hours == 0) {
        hours = "";
    } else {
        hours += ":";
    }

    let minutes = Math.floor(timeInSeconds / 60) - (Math.floor(timeInSeconds / 3600) * 60);
    if (minutes < 10 && minutes != 0) {
        minutes = "" + minutes.toString() + ":";
    }
    else if (minutes == 0 && hours == 0) {
        minutes = "";
    }
    else if (minutes < 10 && hours != 0) {
        minutes = "0" + minutes.toString() + ":";
    } else {
        minutes = minutes.toString() + ":";
    }

    let seconds = Math.floor(timeInSeconds % 60);
    if (seconds < 10 && minutes != 0) {
        seconds = "0" + seconds.toString() + ".";
    } else {
        seconds = seconds.toString() + ".";
    }

    let milliseconds = Math.floor((timeInSeconds - Math.floor(timeInSeconds)) * 1000);
    //console.log(Math.floor((timeInSeconds - Math.floor(timeInSeconds)) * 1000));
    if (milliseconds < 10 && milliseconds != 0) {
        milliseconds = "0" + milliseconds.toString();
    }

    if (milliseconds < 100 && milliseconds != 0) {
        milliseconds = "0" + milliseconds.toString();
    }

    if (milliseconds == 0) {
        milliseconds = "000";
    }

    if (isNegataive == false) {
        return (hours.toString() + minutes.toString() + seconds.toString() + milliseconds)
    } else {
        return ('-' + hours.toString() + minutes.toString() + seconds.toString() + milliseconds)
    }
}

function TimeToSeconds(time) { //Converts XX:YY.ZZZ to X.XXXXXXXXXXXXX (Seconds)
    let outputTime = 0;

    time = time.split(":");

    for (var i = 0; i < time.length; i++) {
        time[i] = parseFloat(time[i]);
    }

    if (ContainsErrors(time)) {
        alert("Error: Format was not entered properly");
        return;
    }

    for (var i = 0; i < time.length; i++) {
        outputTime += time[i] * Math.pow(60, (time.length - i - 1));
    }

    return outputTime;
}

function ContainsErrors(stringArray) {
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i] == NaN) {
            return true;
        }
    }

    return false;
}