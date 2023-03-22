const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	let savebtn = document.getElementById("save");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	savebtn.addEventListener("click", save);
};

const save = () => {
	let rgb = returnRGB();
	let swatch=document.createElement("div");
	let div = document.getElementsByClassName("components");
	div = div[1];
	div.appendChild(swatch);
	swatch.className = "saved";
	swatch.style.backgroundColor=rgb;

	let deleter=document.createElement("button");
	deleter.style.backgroundColor= "red";
	deleter.textContent = "x";
	deleter.style.color = "white";
	deleter.style.height = "20px";
	deleter.style.float = "right";
	swatch.appendChild(deleter);

	deleter.addEventListener("click", deleteSwatch,);
	swatch.addEventListener("click", kleurPlaatsenOpColorPicker,);
}

const kleurPlaatsenOpColorPicker = (event) => {
	let color = getComputedStyle(event.target).backgroundColor;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor=color;
	let kleuren = splitsKleur(color);

	let red=document.getElementById("sldRed"); //input always value
	let green=document.getElementById("sldGreen");
	let blue=document.getElementById("sldBlue");

	red.value = kleuren[0];
	green.value = kleuren[1];
	blue.value = kleuren[2];

	update();
}

const splitsKleur = (color) => {
	color = color.replaceAll("(", "");
	color = color.replaceAll(")", "");
	color = color.replaceAll("rgb", "");
	color = color.split(",");
	for(let i = 0; i < color.length; i++){
		color[i] = color[i].replaceAll(" ", "");
	}
	return color;
}

const deleteSwatch = (event) => {
	event.target.parentElement.remove();
	event.stopPropagation();
}

const update = () => {
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor=returnRGB();
}

const returnRGB = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	return "rgb("+red+","+green+","+blue+")";
}

window.addEventListener("load", initialize);