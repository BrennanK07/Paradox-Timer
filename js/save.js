//This file contains all information that allows the user to save their data

function SaveData(){
    var SessionData = sessions;
    localStorage.setItem("SessionArray", JSON.stringify(SessionData));
    console.log(JSON.stringify(sessions))

    console.log(JSON.parse(localStorage.getItem("SessionArray")));

    localStorage.setItem("Test", 1); //Value indicates if a save has happened already, and will make the load system attempt to load
}

window.addEventListener("beforeunload", function(e){
    SaveData();
 }, false);

document.addEventListener("DOMContentLoaded", function() {
    LoadData();
});

function LoadData() {
    //console.log("Loading Website Data");
    if (localStorage.getItem("Test") == 1) {
        sessions = JSON.parse(localStorage.getItem("SessionArray"));

        for(var i = 0; i < sessions.length; i++){
            AddSessionToList(sessions[i]);
        }

        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
        } else {
            alert("WARNING! Your browser does not support Web Storage! Please use another browser to ensure that your data is saved.");
        }
    }else{
        console.log("No Save Data Found");
    }
}