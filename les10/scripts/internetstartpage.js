let global = {
    commandwoorden: ["y", "g", "t", "i"],
    history: []
}

const setup = () => {
    let btn = document.getElementById("buttongo");
    btn.addEventListener("click", commanduitvoeren);
    retrieveKaarten();
}

const commanduitvoeren = () => {
    let textinput = document.querySelector("input[type=text]").value;
    let commando = getCommando(textinput);
    if(commando === null){
        alert("Fout commando.");
    }
    else{
        let woorden = textinput.split(" ");
        woorden.shift(); //verwijder commando uit de array met woorden
        let textwaarde = "";
        for(let i = 0; i < woorden.length; i++) {
            textwaarde += woorden[i];
            if (i < woorden.length - 1) {
                textwaarde += "+";
            }
        }
        let historyCard = {
            title: getTitle(commando),
            text: textwaarde.replace("+", " "),
            url: getUrl(commando, textwaarde)
        }
            window.open(historyCard.url, "_blank"); //om dit te laten werken moeten pop-ups toegestaan zijn
            global.history.push(historyCard);
            genereerKaart(historyCard);
            localStorage.historycards = JSON.stringify(global.history);
        }

    }

const retrieveKaarten = () => {
    if (localStorage.hasOwnProperty("historycards")) {
        global.history = JSON.parse(localStorage.historycards);
        for(let i = 0; i < global.history.length; i++){
            genereerKaart(global.history[i]);
        }
    }
}

const genereerKaart = (cardinfo) => {
    let canvas = document.getElementById("history");
    if(canvas.children.length === 0){
        maakRow();
    }
    let laatstediv = canvas.children[canvas.children.length-1];
    if(laatstediv.children.length === 3){
        maakRow();
        laatstediv = canvas.children[canvas.children.length-1];
    }
    let card = document.createElement("div");
    card.classList.add("card", "col-4");
    let cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    card.appendChild(cardbody);
    let cardtitle = document.createElement("h5");
    cardtitle.classList.add("card-title");
    cardtitle.innerHTML = cardinfo.title;
    cardbody.appendChild(cardtitle);
    let cardtext = document.createElement("p");
    cardtext.classList.add("card-text");
    cardtext.innerHTML = cardinfo.text;
    cardbody.appendChild(cardtext);
    let cardlink = document.createElement("a");
    cardlink.classList.add("card-link");
    cardlink.href = cardinfo.url;
    cardlink.innerHTML = "Go!";
    cardbody.appendChild(cardlink);
    if(cardinfo.title === "Google"){
        cardbody.classList.add("google");
        cardlink.classList.add("google");
    }
    else if(cardinfo.title === "Instagram"){
        cardbody.classList.add("instagram");
        cardlink.classList.add("instagram");
    }
    else if(cardinfo.title === "Twitter"){
        cardbody.classList.add("twitter");
        cardlink.classList.add("twitter");
    }
    else{
        cardbody.classList.add("youtube");
        cardlink.classList.add("youtube");
    }
    laatstediv.appendChild(card);
}

const maakRow = () => {
    let canvas = document.getElementById("history");
    let row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);
}

const getTitle = (commando) => {
    if(commando === "y"){
        return "Youtube";
    }
    else if(commando === "t"){
        return "Twitter";
    }
    else if(commando === "i"){
        return "Instagram";
    }
    else{
        return "Google";
    }
}

const getUrl = (commando, text) => {
    let starturl;
    if(commando === "y"){
        starturl = "https://www.youtube.com/results?search_query=";
    }
    else if (commando === "t"){
        starturl = "https://twitter.com/hashtag/";
    }
    else if (commando === "i"){
        starturl = "http://www.instagram.com/explore/tags/"
    }
    else{
        starturl = "https://www.google.com/search?q=";
    }
    return (starturl + text);
}

const getCommando = (textinput) => {
    if(textinput === null || !textinput.startsWith("/", 0) || !global.commandwoorden.includes(textinput.substring(1, 2))){
        return null;
    }
    else{
       return textinput.substring(1, 2);
    }
}

window.addEventListener("load", setup);