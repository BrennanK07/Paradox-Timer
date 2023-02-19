//This file contains all information that allows the user to save their data

function SaveData(){
    var SessionData = sessions;
    var ConfigData = GetConfigs();
    localStorage.setItem("SessionArray", JSON.stringify(SessionData));

    localStorage.setItem("configurationInUse", setConfig);

    InitializeDefaultConfigs();
    localStorage.setItem("ConfigsArray", JSON.stringify(ConfigData));
    //console.log(JSON.stringify(sessions))

    //console.log(JSON.parse(localStorage.getItem("SessionArray")));

    localStorage.setItem("Test", 1); //Value indicates if a save has happened already, and will make the load system attempt to load

    //For backups
    localStorage.setItem("SessionArrayBkp", JSON.stringify(SessionData));

    localStorage.setItem("configurationInUseBkp", setConfig);

    InitializeDefaultConfigs();
    localStorage.setItem("ConfigsArrayBkp", JSON.stringify(ConfigData));

    localStorage.setItem("Bkp", 1);
}

window.addEventListener("beforeunload", function(){
    SaveData();
 }, false);

document.addEventListener("DOMContentLoaded", function() {
    LoadData();
    //console.log("Loading data");
});

function LoadData() {
    //console.log("Loading Website Data");
    if (localStorage.getItem("Test") == 1) {
        sessions = JSON.parse(localStorage.getItem("SessionArray"));

        //console.log(JSON.parse(localStorage.getItem("ConfigsArray")));
        Configs = JSON.parse(localStorage.getItem("ConfigsArray")); //Function re-runs as the configuration settings are initialized

        for(var i = 0; i < sessions.length; i++){
            AddSessionToList(sessions[i]);
        }

        setConfig = localStorage.getItem("configurationInUse");
        configurationMenu.selectedIndex = setConfig;
        if(configurationMenu.selectedIndex == -1){
            configurationMenu.selectedIndex = 0;
        }

        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
        } else {
            alert("WARNING! Your browser does not support Web Storage! Please use another browser to ensure that your data is saved.");
        }

        InitializeDefaultConfigs();
    /*}else if(localStorage.getItem("Bkp") == 1){
        //console.log("No Save Data Found");

        sessions = JSON.parse(localStorage.getItem("SessionArrayBkp"));

        //console.log(JSON.parse(localStorage.getItem("ConfigsArray")));
        Configs = JSON.parse(localStorage.getItem("ConfigsArrayBkp")); //Function re-runs as the configuration settings are initialized

        for(var i = 0; i < sessions.length; i++){
            AddSessionToList(sessions[i]);
        }

        setConfig = localStorage.getItem("configurationInUseBkp");
        configurationMenu.selectedIndex = setConfig;
        if(configurationMenu.selectedIndex == -1){
            configurationMenu.selectedIndex = 0;
        }

        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
        } else {
            alert("WARNING! Your browser does not support Web Storage! Please use another browser to ensure that your data is saved.");
        }*/
    }
}