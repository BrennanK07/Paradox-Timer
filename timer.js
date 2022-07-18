var intervalId = window.setInterval(function(){
    document.getElementById('timer').innerHTML = new Date().toLocaleString('en-US', { timeZone: 'EST' });

}, 100);

function CountSeconds(startTime, currentTime){

}

function TimeToSeconds(formattedTime){ //Converts XX:YY.ZZZ to seconds
    let formattedSeconds = 0;
    let timeArray = "";
    timeArray = formattedTime.toString();

    timeArray = timeArray.split([':', '.']);

    formattedSeconds = parseInt(timeArray[0]) * 60;
    formattedSeconds += parseInt(timeArray[1]);
    formattedSeconds += parseint(timeArray[2]) / 1000;

    console.log("Formatted Seconds: " + formattedSeconds);
    return(formattedSeconds);
}

function SecondsToTime(timeInSeconds){ //Converts seconds to proper time format as XX:YY.ZZZ
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds % 60);
    let milliseconds = Math.floor((timeInSeconds - Math.floor(timeInSeconds)) * 1000);

    console.log("Formatted Time: " + minutes.toString() + ":" + seconds.toString() + "." + milliseconds);

    return(minutes.toString() + ":" + seconds.toString() + "." + milliseconds)
}
