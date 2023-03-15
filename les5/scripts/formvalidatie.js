const setup = () => {
    let btnValideer=document.getElementById("valideer");
    btnValideer.addEventListener("click", valideer);
}

const valideer = () => {
    let valvoornaam = valideervoornaam();
    let valfamilienaam = valideerfamilienaam();
    let valgeboortedatum = valideergeboortedatum();
    let valemail = valideeremail();
    let valaantalkinderen = valideeraantalkinderen();
    if(valvoornaam && valfamilienaam && valgeboortedatum && valemail && valaantalkinderen){
        confirm("Proficiaat!");
    }
}

const valideervoornaam = () => {
    let txtid = "voornaam";
    let txtvoornaam = document.getElementById(txtid);
    let errorvoornaam = document.getElementById("errorVoornaam");

    txtvoornaam = txtvoornaam.value.trim();

    if(txtvoornaam.length > 30){
        nieuwError(txtid, errorvoornaam, "max. 30 karakters");
        return false;
    }
    else{
        verwijderError(txtid, errorvoornaam);
        return true;
    }
}

const valideerfamilienaam = () => {
    let txtid = "familienaam";
    let txtfamilienaam = document.getElementById(txtid);
    let errorfamilienaam = document.getElementById("errorFamilienaam");

    txtfamilienaam = txtfamilienaam.value.trim();

    if(txtfamilienaam.length < 1){
        nieuwError(txtid, errorfamilienaam, "verplicht veld");
        return false;
    }
    else if(txtfamilienaam.length > 50){
        nieuwError(txtid, errorfamilienaam, "max. 50 karakters");
        return false;
    }
    else{
        verwijderError(txtid, errorfamilienaam);
        return true;
    }
}

const valideergeboortedatum = () => {
    let txtid = "geboortedatum";
    let txtgeboortedatum = document.getElementById(txtid).value;
    let errorgeboortedatum = document.getElementById("errorGeboortedatum");

    if(!txtgeboortedatum){
        nieuwError(txtid, errorgeboortedatum, "verplicht veld");
        return false;
    }
    else {
        let index1 = txtgeboortedatum.indexOf("-");
        let index2 = txtgeboortedatum.lastIndexOf("-");
        let nancheck = true;
        let cijfersapart = txtgeboortedatum.replaceAll("-", "").split("");
        for(let i = 0; i < cijfersapart.length; i++){
            if(!parseInt(cijfersapart[i])){
                nancheck = false;
            }
        }
        if (index1 === 4 && index2 === 7 && txtgeboortedatum.length === 10 && nancheck === true) {
            verwijderError(txtid, errorgeboortedatum);
            return true;
        } else {
            nieuwError(txtid, errorgeboortedatum, "formaat is niet jjjj-mm-dd");
            return true;
        }
    }
}

const valideeremail = () => {
    let txtid = "email";
    let txtemail = document.getElementById(txtid);
    let erroremail = document.getElementById("errorEmail");

    txtemail = txtemail.value.trim();
    let i = 0;

    if(txtemail.length < 1){
        nieuwError(txtid, erroremail, "verplicht veld");
        return false;
    }
    else{
        let position = txtemail.indexOf("@");
        while (position !== -1) {
            i++;
            position = txtemail.indexOf("@", position + 1);
        }

        if(i !== 1){
            nieuwError(txtid, erroremail, "geen geldig email adres");
            return false;
        }
        else if(txtemail.substring(0, txtemail.indexOf("@")).length < 1 || txtemail.substring(txtemail.indexOf("@")).length < 2){
            nieuwError(txtid, erroremail, "geen geldig email adres");
            return false;
        }
        else{
            verwijderError(txtid, erroremail);
            return true;
        }
    }
}

const valideeraantalkinderen = () =>{
    let numid = "aantalKinderen";
    let numaantalkinderen = document.getElementById(numid).value;
    let erroraantalkinderen = document.getElementById("errorAantalKinderen");
    if(numaantalkinderen < 0){
        nieuwError(numid, erroraantalkinderen, "is geen positief getal");
        return false;
    }
    else if(numaantalkinderen > 99){
        nieuwError(numid, erroraantalkinderen, "is te vruchtbaar");
        return false;
    }
    else{
        verwijderError(numid, erroraantalkinderen);
        return true;
    }
}

const nieuwError = (idelement, errorelement, melding) => {
    document.getElementById(idelement).style.border = "2px solid red";
    errorelement.innerHTML = melding;
    document.getElementById(idelement).className="invalid";
}

const verwijderError = (idelement, errorelement) => {
    document.getElementById(idelement).style.border = "1px solid black";
    document.getElementById(idelement).className="";
    errorelement.innerHTML = "";
}

window.addEventListener("load", setup);