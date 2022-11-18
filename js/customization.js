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

var LightConfig = {
    name: "Default",
    timerColor: "#111111",
    background: "#AAAAAA",
    leftSideBarBackground: "#DDDDDD",
    rightSideBarBackground: "#DDDDDD",
    scrambleText: "#222222",
    scrambleBackground: "#FFFFFF",
    titleTextColor: "#222222",
    titleStripeColor: "#4285EA",
    buttonBackgroundColor: "#BBBBBB",
    buttonTextColor: "#000000",
    tableColor: "#000000",
    tableTextColor: "#000000",
    statsTextColor: "#000000"
};

var SolarizedDarkConfig = {
    name: "Default",
    timerColor: "#FFFFFF",
    background: "#000000",
    leftSideBarBackground: "#111111",
    rightSideBarBackground: "#111111",
    scrambleText: "#FFFFFF",
    scrambleBackground: "#151515",
    titleTextColor: "#FFFFFF",
    titleStripeColor: "#4285EA",
    buttonBackgroundColor: "#212121",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#FFFFFF",
    statsTextColor: "#FFFFFF"
};

var NavyBlueConfig = {
    name: "NavyBlueConfig",
    timerColor: "#FFFFFF",
    background: "#244455",
    leftSideBarBackground: "#133344",
    rightSideBarBackground: "#133344",
    scrambleText: "#FFFFFF",
    scrambleBackground: "#022233",
    titleTextColor: "#FFFFFF",
    titleStripeColor: "#2285CA",
    buttonBackgroundColor: "#012131",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#FFFFFF",
    statsTextColor: "#FFFFFF"
};

var GreenConfig = {
    name: "GreenConfig",
    timerColor: "#FFFFFF",
    background: "#446444",
    leftSideBarBackground: "#335333",
    rightSideBarBackground: "#335333",
    scrambleText: "#FFFFFF",
    scrambleBackground: "#224222",
    titleTextColor: "#FFFFFF",
    titleStripeColor: "#42A57A",
    buttonBackgroundColor: "#214121",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#FFFFFF",
    statsTextColor: "#FFFFFF"
};

var OrangeConfig = {
    name: "OrangeConfig",
    timerColor: "#FFFFFF",
    background: "#645444",
    leftSideBarBackground: "#534333",
    rightSideBarBackground: "#534333",
    scrambleText: "#FFFFFF",
    scrambleBackground: "#423222",
    titleTextColor: "#FFFFFF",
    titleStripeColor: "#A29500",
    buttonBackgroundColor: "#313121",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#FFFFFF",
    statsTextColor: "#FFFFFF"
};

var YellowConfig = {
    name: "YellowConfig",
    timerColor: "#FFFFFF",
    background: "#848444",
    leftSideBarBackground: "#838333",
    rightSideBarBackground: "#838333",
    scrambleText: "#FFFFFF",
    scrambleBackground: "#626222",
    titleTextColor: "#FFFFFF",
    titleStripeColor: "#C2B500",
    buttonBackgroundColor: "#515121",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#FFFFFF",
    statsTextColor: "#FFFFFF"
};

var RedConfig = {
    name: "RedConfig",
    timerColor: "#FFFFFF",
    background: "#744444",
    leftSideBarBackground: "#633333",
    rightSideBarBackground: "#633333",
    scrambleText: "#FFFFFF",
    scrambleBackground: "#522222",
    titleTextColor: "#FFFFFF",
    titleStripeColor: "#725050",
    buttonBackgroundColor: "#512121",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#FFFFFF",
    statsTextColor: "#FFFFFF"
};

var PurpleConfig = {
    name: "PurpleConfig",
    timerColor: "#FFFFFF",
    background: "#744474",
    leftSideBarBackground: "#633363",
    rightSideBarBackground: "#633363",
    scrambleText: "#FFFFFF",
    scrambleBackground: "#522252",
    titleTextColor: "#FFFFFF",
    titleStripeColor: "#725070",
    buttonBackgroundColor: "#512151",
    buttonTextColor: "#FFFFFF",
    tableColor: "#FFFFFF",
    tableTextColor: "#FFFFFF",
    statsTextColor: "#FFFFFF"
};

var Configs = [];
Configs[0] = DefaultConfig;
Configs[1] = NavyBlueConfig;
Configs[2] = GreenConfig;
Configs[3] = OrangeConfig;
Configs[4] = YellowConfig;
Configs[5] = RedConfig;
Configs[6] = PurpleConfig;
Configs[7] = SolarizedDarkConfig;
Configs[8] = LightConfig;

setConfig = GetActiveConfig();
SetCustomizations(Configs[setConfig]);

var testing = 0;

function GetActiveConfig() {
    //DEBUG, FIX LATER
    return 7;
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