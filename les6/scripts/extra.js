const initialize = () => {
    opdracht1();
    opdracht2();
    opdracht3();
}

const opdracht1 = () => {
    let ps = document.querySelectorAll('p');
    ps[1].textContent = '"Good Job!"';
}

const opdracht2 = () => {
    let lis = document.querySelectorAll('li');
    for(let i = 0; i < lis.length; i++){
        lis[i].className = "listitem";
    }
    let foto = document.createElement('img');
    foto.src = "../images/Untitled.png";
    foto.alt = "ik";
    let ps = document.querySelectorAll('p');
    ps[3].appendChild(foto);
}

const opdracht3 = () => {
    let button = document.getElementById("append");
    button.addEventListener("click", append);
}

const append = () => {
    let p = document.createElement('p');
    p.textContent = "Dit is een paragraaf";
    let div = document.getElementById("myDIV");
    div.appendChild(p);
}

window.addEventListener("load", initialize);