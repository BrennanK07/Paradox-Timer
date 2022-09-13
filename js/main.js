//This file contains all main controls that are executed in other scripts

let isSolving = false; //Used as a way to determine if the user is solving or not
let waitingToStart = false; //Active when waiting for the light to turn green
let isPressing = false; //If the user is interacting (Space / touch / mouse)
let pressTime; //Time the player press the start button
let justFinished = false;

let OnMainPage = true;

//The main repeating function that determines all other actions for the website
var mainFunction = window.setInterval(function () {

    var sessionSelected = document.getElementById("Sessions").value; //The session that's currently in use

    if (OnMainPage && IsFocused) {
        //Starts the timerQuery / timer if possible
        if (isPressing == true && isSolving == false && waitingToStart == false && justFinished == false) {
            //Checks to make sure there is a session selected
            if (sessionSelected == "notSet") {
                alert("You didn't select a session to use!")
                isPressing = false;
                return;
            }

            ChangeTimerColor("#FF2222");
            waitingToStart = true;
            pressTime = new Date().getTime() / 1000;

            //console.log("Started Query");
        }

        //Below runs when the timer is in the "red" state
        if (waitingToStart == true) {
            if ((new Date().getTime() / 1000 - pressTime) >= 0.5) {
                ChangeTimerColor("#22FF22");
                //console.log("Waiting to start");
            }
        }

        //Starts timer
        if (waitingToStart == true && isPressing == false) {
            waitingToStart = false;
            isSolving = true;

            StartTimer();
            //console.log("Timer Started");
        }

        //Stops timer
        if (isSolving == true && isPressing == true) {
            isSolving = false;
            justFinished = true;

            StopTimer();
            //console.log("Timer Stopping");

            //Code to add the solve time to the session
            sessionSelect.value.totalSolves++;
            addTimeToSession(GetSolveNumber(), SolveTime, document.getElementById("ScrambleText").innerHTML, SolveTimeInSeconds);

            //Reloads the table to display the right information
            ReloadSessions();

            //Regenerates Scramble
            GenerateScramble(GetScrambleFromUI());
        }

        if (isSolving == true) {
            ChangeTimerColor("#FFFFFF");
        }
    }

    currentActiveSession = GetActiveSession();

    average = CalculateAverage();
}, 1);

function ChangeTimerColor(colorToChangeTo) {
    document.getElementById("timer").style.color = colorToChangeTo.toString();
}



//Listens for keyboard actions
document.addEventListener('keydown', function (event) {
    if (event.code == 'Space' && IsFocused) {
        isPressing = true;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.code == 'Space' && IsFocused) {
        isPressing = false;
        justFinished = false;
        ChangeTimerColor("#FFFFFF");

        //Resets the query if the timer failed to stat
        if (waitingToStart == true && !((new Date().getTime() / 1000 - pressTime) >= 0.5)) {
            waitingToStart = false;
        }
    }
});