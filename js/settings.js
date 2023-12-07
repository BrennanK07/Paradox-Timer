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
		timerStyle.style.fontSize = "11.5vw";
	}
	else if(configuredSettings[1].value == 1){
		timerStyle.style.fontFamily = "Calculator";
		timerStyle.style.fontWeight = "bold";
		timerStyle.style.fontSize = "10.5vw";
	}
	else if(configuredSettings[1].value == 2){
		timerStyle.style.fontFamily = "LCD";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "13.5vw";
	}
	else if(configuredSettings[1].value == 3){
		timerStyle.style.fontFamily = "LCD2";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "15vw";
	}
	else if(configuredSettings[1].value == 4){
		timerStyle.style.fontFamily = "Pixel";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "9.5vw";
	}
	else if(configuredSettings[1].value == 5){
		timerStyle.style.fontFamily = "Retro";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "13.5vw";
	}
	else if(configuredSettings[1].value == 6){
		timerStyle.style.fontFamily = "Retro2";
		timerStyle.style.fontWeight = "normal";
		timerStyle.style.fontSize = "8.5vw";
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

function OpenExtraStats() {
	if (!isSolving && !inspectionStart) {
		document.getElementById("extraStatisticsMenu").style.width = "100%";
		OnMainPage = false;
	}
}

function CloseExtraStats() {
	document.getElementById("extraStatisticsMenu").style.width = "0%";
	OnMainPage = true;
}

function OpenWelcome() {
	document.getElementById("welcomeMenu").style.width = "100%";
	OnMainPage = false;
}

function CloseWelcome() {
	document.getElementById("welcomeMenu").style.width = "0%";
	OnMainPage = true;
}

function openPage(evt, pageName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
  }