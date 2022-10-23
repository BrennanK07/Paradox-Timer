var timer = document.getElementById("timer");
var background = document.getElementById("html");
var leftSideBarBackground = document.getElementById("Lsidenav");
var rightSideBarBackground = document.getElementById("Rsidenav");
var scrambleText = document.getElementById("ScrambleText");
var scrambleBackground = document.getElementById("header");
var titleTextColor = document.querySelectorAll('.title');
var titleStripeColor = document.querySelectorAll('.title');
var buttonBackgroundColor = document.querySelectorAll('.button');
var buttonTextColor = document.querySelectorAll('.button');
var tableColor = document.querySelectorAll('td, th, tr');
var tableTextColor = document.getElementById("tableBody");
var statsTextColor = document.querySelectorAll('.Stat');

var setConfig;

//Presets for the settings
var DefaultConfig = {
    name: "Default",
    timerColor: "#FFFFFF",
    background: "#444444",
    leftSideBarBackground: "#333333",
    rightSideBarBackground: "#333333",
    scrambleText: "#FFFFFF",
    scrambleBackground: "#222222",
    titleTextColor: "#FFFFFF",
    titleStripeColor: "#4285EA",
    buttonBackgroundColor: "#212121",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#00FF00",
    statsTextColor: "#FFFFFF"
};

var Configs = [];
Configs[0] = DefaultConfig;

setConfig = GetActiveConfig();
SetCustomizations(setConfig);

function GetActiveConfig(){
    //DEBUG, FIX LATER
    return 0;
}

function SetCustomizations(layout) {
    timer.style.color = "#000000";

    document.body.style.backgroundColor = "#000000";

    leftSideBarBackground.style.backgroundColor = "#000000";

    rightSideBarBackground.style.backgroundColor = "#000000";

    scrambleText.style.color = "#000000";

    scrambleBackground.style.backgroundColor = "#000000";

    titleTextColor.forEach(textObject => {
        textObject.style.color = "#000000";
    });

    titleStripeColor.forEach(stripeObject => {
        stripeObject.style.borderTop = "#000000";
        stripeObject.style.borderBottom = "#000000";
    });

    buttonBackgroundColor.forEach(buttonObject =>{
        buttonObject.style.backgroundColor = "#000000";
    });

    buttonTextColor.forEach(buttonTextObject =>{
        buttonTextObject.style.color = "#000000";
    });

    tableColor.forEach(tableColorObject =>{
        tableColorObject.style.border = "2px " + "#000000" + " solid";
    });

    tableTextColor.style.color = "#000000";

    statsTextColor.forEach(statObject =>{
        statObject.style.color = "#000000";
    });
}