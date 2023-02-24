var configuredSettings = [];

//Array stores all settings for the website
var configuredSettings = [{name: "TimerInspect", value: false}]

function ApplySettingChanges(){
	//Checks all settings and applies their values
	if(document.getElementById("enableInspectionTimerCheck").checked){
		configuredSettings[0].value = true;
	}else{
		configuredSettings[0].value = false;
	}
}

function UpdateSettings(){
	//Updates the settings menus to match what is stored in localstorage
	document.getElementById("enableInspectionTimerCheck").checked = configuredSettings[0].value;
}

//For menus

function openNav() {
	if (!isSolving) {
		document.getElementById("settingsMenu").style.width = "100%";
		OnMainPage = false;
	}
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	document.getElementById("settingsMenu").style.width = "0%";
	OnMainPage = true;
}

function openInfo() {
	if (!isSolving) {
		document.getElementById("infoMenu").style.width = "100%";
		OnMainPage = false;
	}
}

function closeInfo() {
	document.getElementById("infoMenu").style.width = "0%";
	OnMainPage = true;
}

function OpenCustomization() {
	//Closes info box simontaneously
	document.getElementById("settingsMenu").style.width = "0%";
	OnMainPage = false;

	document.getElementById("customizationMenu").style.width = "100%";
	OnMainPage = false;
}

function OpenTimerSettings(){
	//Closes info box simontaneously
	document.getElementById("settingsMenu").style.width = "0%";
	OnMainPage = false;

	document.getElementById("timerSettingsMenu").style.width = "100%";
	OnMainPage = false;
}

function CloseTimerSettings(){
	document.getElementById("timerSettingsMenu").style.width = "0%";
	OnMainPage = true;
}

function CloseCustomization() {
	document.getElementById("customizationMenu").style.width = "0%";
	OnMainPage = true;
}

function OpenManual() {
	if (!isSolving) {
		document.getElementById("manuallyEnterTimeMenu").style.width = "100%";
		OnMainPage = false;
	}
}

function CloseManual() {
	document.getElementById("manuallyEnterTimeMenu").style.width = "0%";
	OnMainPage = true;
}