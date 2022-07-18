//This file contains all main controls that are executed in other scripts

let isSolving = false; //Used as a way to determine if the user is solving or not
let waitingToStart = false; //Active when waiting for the light to turn green
let isPressing = false; //If the user is interacting (Space / touch / mouse)
let pressTime; //Time the player press the start button

//The main repeating function that determines all other actions for the website
var mainFunction = window.setInterval(function(){

    //Starts the timerQuery / timer if possible
    if(isPressing == true && isSolving == false && waitingToStart == false){
        ChangeTimerColor("#FF2222");
        waitingToStart = true;
        pressTime = Date.parse(new Date());
    }

    if(waitingToStart == true){
        
    }


}, 10);

function ChangeTimerColor(colorToChangeTo){
    document.getElementById("timer").style.color = colorToChangeTo.toString();
}



//Listens for keyboard actions
document.addEventListener('keydown', function(event) {
    if(event.code == 'Space'){
        isPressing = true;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.code == 'Space'){
        isPressing = false;
        ChangeTimerColor("#FFFFFF");

        //Resets the query if the timer failed to stat
        if(waitingToStart == true){
            waitingToStart = false;
        }
    }
});