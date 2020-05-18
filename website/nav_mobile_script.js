// JavaScript Document
function navMobile() {
	var x = document.getElementById("mobile_links");
	if (document.getElementById("wowslider-container0")) {
		var y = document.getElementById("wowslider-container0")
		if (x.style.display === "block") {
			y.style.display = "block";
		} else {
			y.style.display = "none";
		}
	}
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}