// JavaScript Document

function navMobile() {
	var x = document.getElementById("mobile_links");	
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