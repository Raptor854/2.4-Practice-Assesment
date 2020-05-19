// JavaScript Document

function navMobile() {
	var x = document.getElementById("mobile_links");
	/*
	if (document.getElementById("wowslider-container0")) {
		var y = document.getElementById("wowslider-container0")
		if (x.style.display === "block") {
			y.style.display = "block";
		} else {
			y.style.display = "none";
		}
	}*/
	
	var z = document.getElementById("nav_spacer");
	if (x.style.height === '197px') {
		x.style.height = '0px';
		z.style.height = "0px";
		setTimeout(function() {x.style.display = "none";},500)
	} else {
		x.style.display = "block";
		setTimeout(function() {x.style.height = '197px';z.style.height = "197px";},0)
	}
}