var timer = document.getElementById("timer");
var background = document.getElementById("html");
var leftSideBarBackground = document.getElementById("Lsidenav")
var rightSideBarBackground = document.getElementById("Rsidenav")
var scrambleText = document.getElementById("ScrambleText")
var scrambleBackground = document.getElementById("header")
var titleTextColor = document.querySelectorAll('.title')
var titleStripeColor = document.querySelectorAll('.title')
var buttonBackgroundColor = document.getElementById("button")
var buttonBackgroundHover = document.getElementById("button:hover")
var buttonTextColor = document.getElementById("button")
var tableColor = document.getElementById("timeTable")
var tableTextColor = document.getElementById("tableBody")
var statColor = document.querySelectorAll('.Stat')

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
    buttonBackgroundHover: "#717171",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#00FF00",
    statColor: "#FFFFFF"
};

var DebugConfig = {
    name: "Debug",
    timerColor: "#000000",
    background: "#000000",
    leftSideBarBackground: "#000000",
    rightSideBarBackground: "#000000",
    scrambleText: "#000000",
    scrambleBackground: "#000000",
    titleTextColor: "#000000",
    titleStripeColor: "#000000",
    buttonBackgroundColor: "#000000",
    buttonBackgroundHover: "#000000",
    buttonTextColor: "#000000",
    tableColor: "#000000",
    tableTextColor: "#000000",
    statColor: "#FFFFFF"
}

var Configs = [];
Configs[0] = DefaultConfig;

//DEBUG
Configs[1] = DebugConfig;

setConfig = GetActiveConfig();
SetCustomizations(setConfig);

function GetActiveConfig(){
    //DEBUG, FIX LATER TO GRAB THE SET CONFIG
    return 0;
}

function SetCustomizations(layout) {
    timer.style.color = Configs[layout].timerColor;
    background.style.backgroundColor = Configs[layout].background;
    leftSideBarBackground.style.backgroundColor = Configs[layout].leftSideBarBackground;
    rightSideBarBackground.style.backgroundColor = Configs[layout].rightSideBarBackground;
    scrambleText.style.color = Configs[layout].scrambleText;
    scrambleBackground.style.backgroundColor = Configs[layout].scrambleBackground;

    titleTextColor.forEach(title => {
        title.style.color = Configs[layout].titleTextColor;
    });

    titleStripeColor.forEach(stripe => {
        stripe.style.borderTop = "solid " + Configs[layout].titleStripeColor;
        stripe.style.borderBottom = "solid " + Configs[layout].titleStripeColor;
    });
    
    buttonBackgroundColor = document.getElementById("button")
    buttonBackgroundHover = document.getElementById("button:hover")
    buttonTextColor = document.getElementById("button")
    tableColor = document.getElementById("timeTable")
    tableTextColor = document.getElementById("tableBody")

    statColor.forEach(stat => {
        stat.style.colorr = Configs[layout].titleTextColor;
    });
}