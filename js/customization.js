var timer = document.getElementById("timer");
var background = document.getElementById("html");
var leftSideBarBackground = document.getElementById("Lsidenav")
var rightSideBarBackground = document.getElementById("Rsidenav")
var scrambleText = document.getElementById("ScrambleText")
var scrambleBackground = document.getElementById("header")
var titleTextColor = document.getElementById("title")
var titleStripeColor = document.getElementById("title")
var buttonBackgroundColor = document.getElementById("button")
var buttonBackgroundHover = document.getElementById("button:hover")
var buttonTextColor = document.getElementById("button")
var tableColor = document.getElementById("timeTable")
var tableTextColor = document.getElementById("tableBody")

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
    tableTextColor: "#00FF00"
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
    
}