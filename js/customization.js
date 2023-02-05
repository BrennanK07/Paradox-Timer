var Configs = [];

var timer = document.getElementById("timer");
var background = document.getElementById("html");
var leftSideBarBackground = document.getElementById("Lsidenav");
var rightSideBarBackground = document.getElementById("Rsidenav");
var scrambleText = document.getElementById("ScrambleText");
var scrambleBackground = document.getElementById("header");
var titleTextColor = document.querySelectorAll('.title');
var titleStripeColor = document.querySelectorAll('.title');
var buttonBackgroundColor = document.querySelectorAll('.MMbutton');
var buttonTextColor = document.querySelectorAll('.MMbutton');
var tableColor = document.querySelectorAll('td, th, tr');
var tableTextColor = document.getElementById("tableBody");
var statsTextColor = document.querySelectorAll('.Stat');

var newConfigName = document.getElementById("ConfigurationName");
var configurationMenu = document.getElementById("configSelection");
var configurationMenuForMod = document.getElementById("configSelectionforModifications");

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
    name: "Light",
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
    name: "Midnight",
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

var BlueConfig = {
    name: "Blue",
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
    name: "Green",
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
    name: "Orange",
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
    name: "Yellow",
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
    name: "Red",
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
    name: "Purple",
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
//For NavyBlue
var NavyPallette = ["#D8DBE2", "#A9BCD0", "#58A4B0", "#373F51", "#1B1B1E"];

var NavyBlueConfig = {
    name: "Navy Blue",
    timerColor: NavyPallette[0],
    background: NavyPallette[4],
    leftSideBarBackground: NavyPallette[3],
    rightSideBarBackground: NavyPallette[3],
    scrambleText: NavyPallette[3],
    scrambleBackground: NavyPallette[0],
    titleTextColor: NavyPallette[0],
    titleStripeColor: NavyPallette[2],
    buttonBackgroundColor: NavyPallette[1],
    buttonTextColor: NavyPallette[4],
    tableColor: NavyPallette[0],
    tableTextColor: NavyPallette[0],
    statsTextColor: NavyPallette[0]
};

InitializeDefaultConfigs();
function InitializeDefaultConfigs() {
    Configs = [];
    GetDefaultConfigs();

    if (localStorage.getItem("Test") == 1) {
        var newConfigs = JSON.parse(localStorage.getItem("ConfigsArray"));

        console.log(newConfigs);
        
        for(var i = Configs.length; i < newConfigs.length; i++){
            Configs[i] = newConfigs[i];
        }
    }
}

function GetDefaultConfigs() {
    Configs[0] = DefaultConfig;
    Configs[1] = BlueConfig;
    Configs[2] = GreenConfig;
    Configs[3] = OrangeConfig;
    Configs[4] = YellowConfig;
    Configs[5] = RedConfig;
    Configs[6] = PurpleConfig;
    Configs[7] = SolarizedDarkConfig;
    Configs[8] = LightConfig;
    Configs[9] = NavyBlueConfig;
}

UpdateConfigurationSelectionMenu();
setConfig = GetActiveConfig();
SetCustomizations(Configs[setConfig]);

var testing = 0;

function UpdateConfigurationSelectionMenu() {
    configurationMenu.innerHTML = "";
    configurationMenuForMod.innerHTML = "";
    for (var i = 0; i < Configs.length; i++) {
        configurationMenu.innerHTML += `<option value = "` + i + `">` + Configs[i].name + "</option>"
        configurationMenuForMod.innerHTML += `<option value = "` + i + `">` + Configs[i].name + "</option>";
    }
}

function GetIndexOfConfigSelectMenu(){ //Function not working; returning -1
    var indexValueName = parseInt(document.getElementById("configSelectionforModifications").value);
    console.log(indexValueName); //Number is the index value of the config
    return indexValueName;
}

function SetCustomizationBoxes(indexValue){
    //Changes the customization boxes to the color corresponding to the current values
    document.getElementById("timerTextConf").value = Configs[indexValue].timerColor;
    document.getElementById("backgroundConf").value = Configs[indexValue].background;
    document.getElementById("leftSideBarConf").value = Configs[indexValue].leftSideBarBackground;
    document.getElementById("rightSideBarConf").value = Configs[indexValue].rightSideBarBackground;
    document.getElementById("scrambleTextConf").value = Configs[indexValue].scrambleText;
    document.getElementById("scrambleTextBackgroundConf").value = Configs[indexValue].scrambleBackground;
    document.getElementById("titleTextConf").value = Configs[indexValue].titleTextColor;
    document.getElementById("titleStripeConf").value = Configs[indexValue].titleStripeColor;
    document.getElementById("buttonBackgroundConf").value = Configs[indexValue].buttonBackgroundColor;
    document.getElementById("buttonTextConf").value = Configs[indexValue].buttonTextColor;
    document.getElementById("tableBorderConf").value = Configs[indexValue].tableColor;
    document.getElementById("tableTextConf").value = Configs[indexValue].tableTextColor;
    document.getElementById("statsTextConf").value = Configs[indexValue].statsTextColor;
}

function SaveCustomizations(){
    var configIndex = GetIndexOfConfigSelectMenu();

    Configs[configIndex].timerColor = document.getElementById("timerTextConf").value;
    Configs[configIndex].background = document.getElementById("backgroundConf").value;
    Configs[configIndex].leftSideBarBackground = document.getElementById("leftSideBarConf").value;
    Configs[configIndex].rightSideBarBackground = document.getElementById("rightSideBarConf").value;
    Configs[configIndex].scrambleText = document.getElementById("scrambleTextConf").value;
    Configs[configIndex].scrambleBackground = document.getElementById("scrambleTextBackgroundConf").value;
    Configs[configIndex].titleTextColor = document.getElementById("titleTextConf").value;
    Configs[configIndex].titleStripeColor = document.getElementById("titleStripeConf").value;
    Configs[configIndex].buttonBackgroundColor = document.getElementById("buttonBackgroundConf").value;
    Configs[configIndex].buttonTextColor = document.getElementById("buttonTextConf").value;
    Configs[configIndex].tableColor = document.getElementById("tableBorderConf").value;
    Configs[configIndex].tableTextColor = document.getElementById("tableTextConf").value;
    Configs[configIndex].statsTextColor = document.getElementById("statsTextConf").value;

    SetCustomizations(Configs[configIndex]);
}

var customizationWatch = window.setInterval(function () {
    if (IsSelectionChanged() == true) {
        setConfig = GetActiveConfig();
        
        ForceDrawChart();
    }

}, 10);

var OldValue;
function IsSelectionChanged() {
    if (configurationMenu.value != OldValue) {
        OldValue = configurationMenu.value;
        google.charts.setOnLoadCallback(drawChart);
        return true;
    } else {
        OldValue = configurationMenu.value;
        return false;
    }
}

function GetActiveConfig() {
    let currentIndex = configurationMenu.value;
    SetCustomizations(Configs[currentIndex]);
    return currentIndex;
}

function GetConfigs() {
    return Configs;
}

/*var UpdateConfigs = window.setInterval(function () {
    var layout = Configs[GetActiveConfig()];
    var tableColor = document.querySelectorAll('td, th, tr');
    var tableTextColor = document.getElementById("tableBody");

    tableColor.forEach(tableColorObject => {
        tableColorObject.style.border = "2px " + layout.tableColor + " solid";
    });

    tableTextColor.style.color = layout.tableTextColor;
}, 10);*/ //Wrote this function months ago, dk tf it was for

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

function CreateNewConfiguration() {
    if (newConfigName.value == "") {
        alert("You didn't give the new configuration a name!");
        return;
    }
    else if (Configs.map(object => object.name).indexOf(newConfigName.value) != -1) {
        alert("Session Name Already Exists!");
        return;
    }

    Configs[Configs.length] = {
        name: newConfigName.value,
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

    UpdateConfigurationSelectionMenu();
}