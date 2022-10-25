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
    tableTextColor: "#FFFFFF",
    statsTextColor: "#FFFFFF"
};

var Configs = [];
Configs[0] = DefaultConfig;

setConfig = GetActiveConfig();
SetCustomizations(Configs[setConfig]);

function GetActiveConfig() {
    //DEBUG, FIX LATER
    return 0;
}

var UpdateConfigs = window.setInterval(function () {
    var layout = Configs[GetActiveConfig()];
    var tableColor = document.querySelectorAll('td, th, tr');
    var tableTextColor = document.getElementById("tableBody");

    tableColor.forEach(tableColorObject => {
        tableColorObject.style.border = "2px " + layout.tableColor + " solid";
    });

    tableTextColor.style.color = layout.tableTextColor;
}, 10);

function SetCustomizations(layout) {
    timer.style.color = layout.timerColor;

    document.body.style.backgroundColor = layout.background;

    leftSideBarBackground.style.backgroundColor = layout.leftSideBarBackground;

    rightSideBarBackground.style.backgroundColor = layout.rightSideBarBackground;

    scrambleText.style.color = layout.scrambleText;

    scrambleBackground.style.backgroundColor = layout.scrambleBackground;

    titleTextColor.forEach(textObject => {
        textObject.style.color = layout.titleTextColor;
    });

    titleStripeColor.forEach(stripeObject => {
        stripeObject.style.borderTop = "solid " + layout.titleStripeColor + " 2px";
        stripeObject.style.borderBottom = "solid " + layout.titleStripeColor + " 2px";
    });

    buttonBackgroundColor.forEach(buttonObject => {
        buttonObject.style.backgroundColor = layout.buttonBackgroundColor;
    });

    buttonTextColor.forEach(buttonTextObject => {
        buttonTextObject.style.color = layout.buttonTextColor;
    });

    tableColor.forEach(tableColorObject => {
        tableColorObject.style.border = "2px " + layout.tableColor + " solid";
    });

    tableTextColor.style.color = layout.tableTextColor;

    statsTextColor.forEach(statObject => {
        statObject.style.color = layout.statsTextColor;
    });
}