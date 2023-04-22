let personen = [];

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonPersoon)
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
}

const toonPersoon = (event) => {
    let persoon = personen[event.target.options.selectedIndex];
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalkinderen;
}

const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let id = lstPersonen.options.selectedIndex;
    // valideer alle input data en controleer of er geen errors meer zijn
    if (valideer() === true && id !== -1) {
        let persoon;
        persoon = {
            voornaam: document.getElementById("txtVoornaam").value.trim(),
            familienaam: document.getElementById("txtFamilienaam").value.trim(),
            geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
            email: document.getElementById("txtEmail").value.trim(),
            aantalkinderen: document.getElementById("txtAantalKinderen").value.trim()
        }
        //hier persoon vervangen
        personen[id] = persoon;
        printPersonen();
    }
    else if(id === -1){
        bewerkNieuwePersoon();
    }
}

const bewerkNieuwePersoon = () => {
    // valideer alle input data en controleer of er geen errors meer zijn
    if (valideer() === true) {
        let persoon;
        persoon = {
            voornaam: document.getElementById("txtVoornaam").value.trim(),
            familienaam: document.getElementById("txtFamilienaam").value.trim(),
            geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
            email: document.getElementById("txtEmail").value.trim(),
            aantalkinderen: document.getElementById("txtAantalKinderen").value.trim()
        }
        personen.push(persoon);
        printPersonen();
    }
    leegmaken();
}
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
const printPersonen = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.replaceChildren();
    for (let i = 0; i < personen.length; i++) {
        let opt = document.createElement('option');
        opt.value = JSON.stringify(personen[i]);
        opt.innerHTML = (personen[i].voornaam + " " + personen[i].familienaam).trim();
        opt.id = i.toString();
        lstPersonen.add(opt);
    }
}

const leegmaken = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
}


window.addEventListener("load", setup);