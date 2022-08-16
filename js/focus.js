main = document.getElementById("timer");
var IsFocused;

var testFunc = window.setInterval(function () {
	if (document.getElementById("Sessions") == document.activeElement || document.getElementById("ScrambleSelection") == document.activeElement) {
		document.getElementById("timer").style.filter = "blur(16px)";
		IsFocused = false;
		document.getElementById("InfoBox").innerHTML = "Click Here To Refocus";
	} else {
		document.getElementById("timer").style.filter = "none";
		IsFocused = true;
		document.getElementById("InfoBox").innerHTML = "";
	}
}, 10);