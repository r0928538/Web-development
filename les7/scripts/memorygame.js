let global = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    kaartnamen: ["achterkant", "kaart1", "kaart2", "kaart3", "kaart4", "kaart5", "kaart6"],
    timeoutId: 0,
    omgedraait: []
}

const setup = () => {
    plaatsRijen();
    plaatsKaarten();
}

const toonKaart = (event) => {
    event.target.src = "../images/" + event.target.id + ".jpg";
    event.target.style.pointerEvents = "none";
    let kaart = event.target;
    event.target.alt = altChecker(kaart);
    if(global.omgedraait.length === 1){
        alleKaartenUclickable();
        global.omgedraait.push(kaart);
        setTimeout(verwijderMatch, 10);
    }
    else{
        global.omgedraait.push(kaart);
    }
    console.log(global.omgedraait);
}

const verwijderMatch = () => {
    let id1 = global.omgedraait[0].id;
    let id2 = global.omgedraait[1].id;
    if(id1 === id2) {
        setTimeout(blinkGroen, 10);
    }
    else{
        setTimeout(hideKaart, 1000);
    }
}


const blinkGroen = () => {
    global.omgedraait[0].style.border = "10px solid green";
    global.omgedraait[1].style.border = "10px solid green";
    setTimeout(deleteMatchKaarten, 1000);
}

const hideKaart = () => {
    global.omgedraait[0].alt = global.kaartnamen[0];
    global.omgedraait[0].src = "../images/" + global.kaartnamen[0] + ".jpg";
    global.omgedraait[1].alt = global.kaartnamen[0];
    global.omgedraait[1].src = "../images/" + global.kaartnamen[0] + ".jpg";
    global.omgedraait = [];
    setTimeout(alleKaartenClickable, 100);
}

const deleteMatchKaarten = () => {
    let leeg1 = document.createElement("div");
    let leeg2 = document.createElement("div");
    leeg1.className = "leegruimte";
    leeg2.className = "leegruimte";
    let parent = global.omgedraait[0].parentElement;
    let parent2 = global.omgedraait[1].parentElement;
    parent.insertBefore(leeg1,global.omgedraait[0]);
    parent2.insertBefore(leeg2,global.omgedraait[1]);
    global.omgedraait[0].remove();
    global.omgedraait[1].remove();
    global.omgedraait = [];
    setTimeout(alleKaartenClickable, 100);
}

const alleKaartenUclickable = () => {
    let kaarten = document.querySelectorAll("img");
    for(let i = 0; i < kaarten.length; i++){
        kaarten[i].style.pointerEvents = "none";
    }
}

const alleKaartenClickable = () => {
    let kaarten = document.querySelectorAll("img");
    if(kaarten.length === 0){
        alert("Goed gedaan!!!!!! Je hebt alle kaarten gevonden.");
    }
    else{
        for(let i = 0; i < kaarten.length; i++){
            kaarten[i].style.pointerEvents = "auto";
        }
    }
}

const altChecker = (kaart) => {
    let id = kaart.id;
    if(id === global.kaartnamen[1]){
        return "kat";
    }
    else if(id === global.kaartnamen[2]){
        return "muis";
    }
    else if(id === global.kaartnamen[3]){
        return "konijn";
    }
    else if(id === global.kaartnamen[4]){
        return "vis";
    }
    else if(id === global.kaartnamen[5]){
        return "kikker";
    }
    else if(id === global.kaartnamen[6]){
        return "papegaai";
    }
    else{
        return "onbekend";
    }
}

const plaatsRijen = () => {
    let body = document.querySelector("body");
    for(let i = 0; i < global.AANTAL_VERTICAAL; i++){
        let div = document.createElement("div");
        body.appendChild(div);
    }
}

const plaatsKaarten = () => {
    let i = 0;
    let aantalgeplaats = [];
    for(let j = 1; j <= global.AANTAL_KAARTEN; j++){
        aantalgeplaats.push(0);
    }
    while(i < (global.AANTAL_KAARTEN)){
        let randomkaart = Math.random() * global.AANTAL_KAARTEN;
        randomkaart = Math.floor(randomkaart);
        if(aantalgeplaats[randomkaart] === 1){
            aantalgeplaats[randomkaart]++;
            plaatsKaart(randomkaart);
            i++;
        }
        else if(aantalgeplaats[randomkaart] === 0){
            aantalgeplaats[randomkaart]++;
            plaatsKaart(randomkaart);
        }
    }
}

const plaatsKaart = (randomkaart) => {
    let canvas = document.querySelectorAll("div");
    let kaart = document.createElement("img");
    kaart.alt = "kaart";
    kaart.id = "kaart" + (randomkaart + 1);
    kaart.src = "../images/" + global.kaartnamen[0] + ".jpg";
    let gelukt = false;
    let i = 0;
    while(!gelukt){
        if(canvas[i].children.length < global.AANTAL_HORIZONTAAL){
            canvas[i].appendChild(kaart);
            gelukt = true;
        }
        else{
            i++;
        }
    }
    kaart.addEventListener("click", toonKaart);
}


window.addEventListener("load", setup);
