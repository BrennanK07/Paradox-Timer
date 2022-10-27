//This file contains all information that allows the user to save their data

function SaveData(){
    console.log("Saving Website Data");
    localStorage.setItem("SessionArray", sessions);
    localStorage.setItem("Test", 1); //Value indicates if a save has happened already, and will make the load system attempt to load
}

window.onload = LoadData;

function LoadData() {
    console.log("Loading Website Data");
    if (localStorage.getItem("Test") != 1) {
        sessions = localStorage.getItem("SessionArray");

        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
        } else {
            alert("WARNING! Your browser does not support Web Storage! Please use another browser to ensure that your data is saved.");
        }
    }
}