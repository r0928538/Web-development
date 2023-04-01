let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "../images/hitanobject",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
    running: true
}

let imgAlts = {
    IMAGE_0: "bom",
    IMAGE_1: "donut",
    IMAGE_2: "fruitmuffin",
    IMAGE_3: "appeltaart",
    IMAGE_4: "chocotaart"
}

const setup = () => {
    maakStartButton();
}

const maakStartButton = () => {
    let aantalknopen = document.querySelectorAll("button").length;
    if(aantalknopen < 1){
        let start = document.createElement("button");
        start.textContent = "Start";
        start.style.width = "50px";
        start.style.height = "20px";
        let startEnScore = document.querySelectorAll("div");
        startEnScore = startEnScore[1];
        startEnScore.appendChild(start);
        start.addEventListener("click", starten);
    }
}

const starten = () => {
    deleteStart();
    let score = document.querySelector("#score");
    global.score = 0;
    global.running = true;
    score.textContent = global.score;
    speel();
}

const speel = () => {
    let img = document.querySelector("img");
    img.addEventListener("click", geklikt);
    global.timeoutId = setInterval(verplaats, global.MOVE_DELAY);
}

const deleteStart = () => {
    let button = document.querySelector("button");
    button.remove();
}

const geklikt = () => {
    if(isBom()){
        if(global.running){
            alert("Game over");
            global.running = false;
            clearTimeout(global.timeoutId);
        }
    }
    else {
        verplaats();
        global.score++;
        let score = document.querySelector("#score");
        score.textContent = global.score;
        clearTimeout(global.timeoutId);
        global.timeoutId = setInterval(verplaats, global.MOVE_DELAY);
    }
}

const verplaats = () => {
    changeImage();
    moveImage();
}

const isBom = () => {
    let img = document.querySelector("img");
    if(img.alt === "bom"){
        maakStartButton();
        return true;
    }
    else{
        return false;
    }
}

const changeImage = () => {
    let randomimage = Math.random() * global.IMAGE_COUNT;
    randomimage = Math.floor(randomimage);

    let img = document.querySelector("img");
    img.src = global.IMAGE_PATH_PREFIX + randomimage + global.IMAGE_PATH_SUFFIX;
    img.alt = getAlt(randomimage);
    img.style.width = global.IMAGE_SIZE;
    img.style.height = global.IMAGE_SIZE;
}

const moveImage = () => {
    let img = document.querySelector("img");
    let canvas=document.querySelector("div");
    let maxLeft=canvas.clientWidth - img.offsetWidth;
    let maxHeight=canvas.clientHeight - img.offsetHeight;
    let left= Math.floor(Math.random()*maxLeft) + "px";
    let top= Math.floor(Math.random()*maxHeight) + "px";
    img.style.left=left;
    img.style.top=top;
}

const getAlt = (randomimage) => {
    let imgalt = "";
    if(randomimage === 0){
        imgalt = imgAlts.IMAGE_0;
    }
    else if(randomimage === 1){
        imgalt = imgAlts.IMAGE_1;
    }
    else if(randomimage === 2){
        imgalt = imgAlts.IMAGE_2;
    }
    else if(randomimage === 3){
        imgalt = imgAlts.IMAGE_3;
    }
    else if(randomimage === 4){
        imgalt = imgAlts.IMAGE_4;
    }
    return imgalt;
}

window.addEventListener("load", setup);


