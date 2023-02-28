//This file contains all information that allows the user to save their data

var dataLoaded = false;

function SaveData() {
    if(!dataLoaded){
        SaveData();
    }

    var SessionData = sessions;
    var ConfigData = GetConfigs();

    if (ConfigData == [] || configuredSettings == []) {
        //Executes when null values may override stored values
        return;
    }

    localStorage.setItem("SessionArray", JSON.stringify(SessionData));

    localStorage.setItem("configurationInUse", setConfig);

    InitializeDefaultConfigs();
    localStorage.setItem("ConfigsArray", JSON.stringify(ConfigData));

    localStorage.setItem("SettingsArray", JSON.stringify(configuredSettings));

    localStorage.setItem("Test", 1); //Value indicates if a save has happened already, and will make the load system attempt to load
}

window.addEventListener("beforeunload", function () {
    SaveData();
}, false);

document.addEventListener("DOMContentLoaded", function () {
    InitConfigSettings();
    LoadData();
    //console.log("Loading data");
});

function LoadData() {
    //console.log("Loading Website Data");
    if (localStorage.getItem("Test") == 1 && localStorage.getItem("SettingsArray") != []) {
        sessions = JSON.parse(localStorage.getItem("SessionArray"));

        //console.log(JSON.parse(localStorage.getItem("ConfigsArray")));
        Configs = JSON.parse(localStorage.getItem("ConfigsArray")); //Function re-runs as the configuration settings are initialized

        //var configuredSettings = [{name: "TimerInspect", value: false}, {name: "TimerFont", value: 0}];
        for (var i = 0; i < JSON.parse(localStorage.getItem("SettingsArray")).length; i++) {
            configuredSettings[i] = JSON.parse(localStorage.getItem("SettingsArray"))[i];
        }

        for (var i = 0; i < sessions.length; i++) {
            AddSessionToList(sessions[i]);
        }

        setConfig = localStorage.getItem("configurationInUse");
        configurationMenu.selectedIndex = setConfig;
        if (configurationMenu.selectedIndex == -1) {
            configurationMenu.selectedIndex = 0;
        }

        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
        } else {
            alert("WARNING! Your browser does not support Web Storage! Please use another browser to ensure that your data is saved.");
        }

        InitializeDefaultConfigs();
        UpdateSettings();
    } else {
        //console.log("No Save Data Found");
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
        } else {
            alert("WARNING! Your browser does not support Web Storage! Please use another browser to ensure that your data is saved.");
        }
    }

    dataLoaded = true;
}