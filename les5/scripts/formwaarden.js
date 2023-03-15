const setup = () => {
    let submitBtn = document.getElementById("resultaat");
    submitBtn.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    const outputtxt = document.getElementById("outputTxt");
    const roker = document.getElementById("isRoker").checked;
    let output = "";
    if(roker === true){
        output = "is wel roker";
    }
    else{
        output = "is geen roker.";
    }

    let moedertaalLijst = document.getElementsByName("moedertaal");
    let moedertaal = null;
    for(let i = 0; i < moedertaalLijst.length; i++){
        if(moedertaalLijst[i].checked){
            moedertaal = moedertaalLijst[i];
        }
    }
    if(moedertaal == null){
        output += "<br> moedertaal is: niet gekozen"
    }
    else{
        output += "<br> moedertaal is: " + moedertaal.value;
    }

    let buurland = document.querySelector("#favorieteBuurland");
    buurland = buurland.value;
    if(buurland == null){
        output += "<br> favoriete buurland is: niet gekozen";
    }
    else{
        output += "<br> favoriete buurland is: " + buurland;
    }

    let bestelling = document.querySelector("#bestelling");
    output += "<br> bestelling bestaat uit: ";
    for(let i = 0; i < bestelling.length; i++){
        if(bestelling[i].selected){
            output += bestelling[i].value + " ";
        }
    }
    output = output.trim();
    outputtxt.innerHTML = output;
}

window.addEventListener("load", setup);
window.addEventListener("submit", toonResultaat)