let global = {
    tafelsnummers: [],
    tafeldatums: []
}

const setup = () => {
    let btn = document.getElementById("buttongo");
    btn.addEventListener("click", tafelToevoegen);
}

const tafelToevoegen = () => {
    let tekst = document.getElementById("input").value;
    if(isNumber(tekst)){
        let date = new Date();
        global.tafeldatums.push(date);
        global.tafelsnummers.push(tekst);
        genereerAlleTafels();
        document.getElementById("input").value = "";
    }
    else{
        alert("Vul een getal in.");
    }
}

const genereerAlleTafels = () => {
    let canvas = document.querySelector("div");
    canvas.replaceChildren();
    for(let i = 0; i < global.tafelsnummers.length; i++){
        genereerTafel(global.tafelsnummers[i], global.tafeldatums[i]);
    }
}

const genereerTafel = (getal, date) => {
    //tafel + header aanmaken
    let canvas = document.querySelector("div");
    let tafel = document.createElement("div");
    let header = document.createElement("div");

    //kleurtjes en klassen
    tafel.classList.add("tafel");
    header.style.backgroundColor = "darkblue";
    header.style.color = "white";
    header.classList.add("tafelrij");

    //datum bij header
    header.innerHTML = "Tafel van " + getal + " aangemaakt op: " + date.getHours()+":"+
    date.getMinutes()+":"+date.getSeconds();

    //voeg header toe
    tafel.appendChild(header);

    //voeg vermenigvuldigingen toe
    for(let i = 1; i < 11; i++){
        let tafelrij = document.createElement("div");
        tafelrij.classList.add("tafelrij");
        tafelrij.innerHTML=getal + " x " + i + " = " + (getal * i);
        if(i % 2===0){
            tafelrij.style.backgroundColor = "lightgray";
        }
        else{
            tafelrij.style.backgroundColor = "white";
        }
        tafel.appendChild(tafelrij);
    }

    //voeg toe
    canvas.appendChild(tafel);
}

const isNumber = (text) => {
    let number=parseInt(text, 10);
    return !isNaN(number);
}






window.addEventListener("load", setup);