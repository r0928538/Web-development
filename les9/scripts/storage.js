

const storeSliderValues = (red, green, blue) => {
    if(typeof(Storage)=="undefined") {
        alert("Sorry, uw browser ondersteunt geen web storage...");
    } else {
        localStorage.setItem("colorpicker.red", red.toString());
        localStorage.setItem("colorpicker.green", green.toString());
        localStorage.setItem("colorpicker.blue", blue.toString());
    }
};

const restoreSliderValues = () => {
    if(typeof(Storage)=="undefined") {
        alert("Sorry, uw browser ondersteunt geen web storage...");
    } else {
        let red = localStorage.getItem("colorpicker.red");
        let green = localStorage.getItem("colorpicker.green");
        let blue = localStorage.getItem("colorpicker.blue");

        document.getElementById("sldRed").value = red;
        document.getElementById("sldGreen").value = green;
        document.getElementById("sldBlue").value = blue;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = document.getElementById("swatchComponents").children;
    let attributes = [];
    for(let i = 0; i <swatches.length; i++){
            attributes.push(swatches[i].getAttribute("data-red").toString() + " " +
            swatches[i].getAttribute("data-green").toString() + " " +
            swatches[i].getAttribute("data-blue").toString());
    }
    localStorage.swatches = JSON.stringify(attributes);
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.swatches);
    for(let i = 0; i < swatches.length; i++){
        let kleuren = swatches[i].split(" ");
        addSwatchComponent(kleuren[0], kleuren[1], kleuren[2]);
    }
};
