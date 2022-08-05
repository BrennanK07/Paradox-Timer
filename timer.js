var startTime;
var TimerString;
var SolveTime;

//Main timekeeping function
var intervalId = window.setInterval(function () {
    let CurrentTime = new Date().getTime() / 1000;

    TimeString = SecondsToTime((CompareTime(startTime, new Date().getTime() / 1000)));

    if (isSolving == true) {
        document.getElementById("timer").innerHTML = TimeString.slice(0, -2);
    } else {
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

function StopTimer() {
    SolveTime = SecondsToTime((CompareTime(startTime, new Date().getTime() / 1000)));
}

function CompareTime(startingTime, currentTime) {
    return (currentTime - startingTime);
}

//Not working and not useful
function TimeToSeconds(formattedTime) { //Converts XX:YY.ZZZ to seconds
    let formattedSeconds = 0;
    let timeArray = "";
    timeArray = formattedTime.toString();

    timeArray = timeArray.split([':', '.']);

    formattedSeconds = parseInt(timeArray[0]) * 3600;
    formattedSeconds += parseInt(timeArray[1]) * 60;
    formattedSeconds += parseint(timeArray[2]);
    ormattedSeconds += parseint(timeArray[3]) / 1000;

    return (formattedSeconds);
}

//Not working, outputting 123:2:24.123
function SecondsToTime(timeInSeconds) { //Converts seconds to proper time format as XX:YY.ZZZ
    let hours = Math.floor(timeInSeconds / 3600);
    if(hours == 0){
        hours = "";
    }else{
        hours += ":";
    }

    let minutes = Math.floor(timeInSeconds / 60) - (Math.floor(timeInSeconds / 3600) * 60);
    if (minutes < 10 && minutes != 0) {
        minutes = "" + minutes.toString() + ":";
    }
    else if (minutes == 0 && hours == 0) {
        minutes = "";
    }
    else if(minutes < 10 && hours != 0){
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
    if (milliseconds < 10 && milliseconds != 0) {
        milliseconds = "0" + milliseconds.toString();
    }

    if (milliseconds < 100) {
        milliseconds = "0" + milliseconds.toString();
    }

    else if (milliseconds == 0) {
        milliseconds = "000";
    }

    return (hours.toString() + minutes.toString() + seconds.toString() + milliseconds)
}