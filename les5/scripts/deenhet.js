const setup = () => {
    //kies tekst en vindt eerste de
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let position = tekst.toLowerCase().indexOf("de");
    //indexen van "de"'s opslaan
    let indexen = [];

    //sla op waar alle "de"'s zijn
    while (position !== -1) {
        indexen.push(position);
        position = tekst.toLowerCase().indexOf("de", position + 1);;
    }

    let output = "";
    position = 0;

    //naar index van elke "de" gaan en net voor "de" knippen en vervangen door het
    for(let i = 0; i <= indexen.length; i++){
        output += tekst.substring(position, indexen[i]);
        position = indexen[i] + 2;
        if(i < indexen.length){
            //bij laatste stuk niks meer om te vervangen
            output += "het";
        }
    }
    console.log(output);
}

window.addEventListener("load", setup);