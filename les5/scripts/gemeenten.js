const setup = () => {
    let gemeentes = [];
    let nieuweGemeente = "";
    while(nieuweGemeente !== "stop"){
        nieuweGemeente = prompt("Gemeente toevoegen", "stop");
        if(nieuweGemeente !== "stop"){
            gemeentes.push(nieuweGemeente)
        }
    }
    plaatsGemeentesOpDOM(gemeentes);
}

const plaatsGemeentesOpDOM = (gemeentes) =>{
    let keuzeBox = document.querySelector('select');
    for(let i = 0; i < gemeentes.length; i++){
        let opt = document.createElement('option');
        opt.value = gemeentes[i];
        opt.innerHTML = gemeentes[i];
        keuzeBox.add(opt);}
}


window.addEventListener("load", setup);