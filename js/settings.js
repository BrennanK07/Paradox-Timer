var configuredSettings = [];

//Array stores all settings for the website
var configuredSettings = [{name: "TimerInspect", value: false}, {name: "TimerFont", value: 0}];

function InitConfigSettings(){
	var configuredSettings = [{name: "TimerInspect", value: false}, {name: "TimerFont", value: 0}]
}

function ApplySettingChanges(){
	//Checks all settings and applies their values
	if(document.getElementById("enableInspectionTimerCheck").checked){
		configuredSettings[0].value = true;
	}else{
		configuredSettings[0].value = false;
	}

	configuredSettings[1].value = document.getElementById("timerFontSelect").selectedIndex;

	UpdateUI();
}

function UpdateSettings(){
	//Updates the settings menus to match what is stored in localstorage
	document.getElementById("enableInspectionTimerCheck").checked = configuredSettings[0].value;

	document.getElementById("timerFontSelect").selectedIndex = configuredSettings[1].value;

	UpdateUI();
}

function UpdateUI(){
	var timerStyle = document.getElementById("timer");
	//For font changing

	if(configuredSettings[1].value == 0){
		timerStyle.style.fontFamily = "sans-serif";
		timerStyle.style.fontWeight = "bold";
		timerStyle.style.fontSize = "10vw";
	}
	else if(configuredSettings[1].value == 1){
		timerStyle.style.fontFamily = "Calculator";
		timerStyle.style.fontWeight = "bold";
		timerStyle.style.fontSize = "9vw";
	}
	else if(configuredSettings[1].value == 2){
		timerStyle.style.fontFamily = "LCD";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "12vw";
	}
	else if(configuredSettings[1].value == 3){
		timerStyle.style.fontFamily = "LCD2";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "15vw";
	}
	else if(configuredSettings[1].value == 4){
		timerStyle.style.fontFamily = "Pixel";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "8vw";
	}
	else if(configuredSettings[1].value == 5){
		timerStyle.style.fontFamily = "Retro";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "12vw";
	}
	else if(configuredSettings[1].value == 6){
		timerStyle.style.fontFamily = "Retro2";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "7vw";
	}
}

//For menus

function openNav() {
	if (!isSolving && !inspectionStart) {
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
	if (!isSolving && !inspectionStart) {
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
	if (!isSolving && !inspectionStart) {
		document.getElementById("manuallyEnterTimeMenu").style.width = "100%";
		OnMainPage = false;
	}
}

function CloseManual() {
	document.getElementById("manuallyEnterTimeMenu").style.width = "0%";
	OnMainPage = true;
}