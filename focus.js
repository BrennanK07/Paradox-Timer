main = document.getElementById("timer");
var IsFocused;

var testFunc = window.setInterval(function () {
	if (document.getElementById("Sessions") == document.activeElement || document.getElementById("ScrambleSelection") == document.activeElement) {
		console.log("Element Is not focused ")
		document.getElementById("timer").style.filter = "blur(8px)";
		IsFocused = false;
	} else {
		console.log("Element is focused");
		document.getElementById("timer").style.filter = "none";
		IsFocused = true;
	}
}, 10);