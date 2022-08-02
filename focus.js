main = document.getElementById("timer");

var testFunc = window.setInterval(function () {
	if (main == document.activeElement) {
		console.log("Element Is Focused")
	} else {
		console.log("Element isnt focused");
	}
}, 10);