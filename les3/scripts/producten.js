const setup = () => {
    let btnHerbereken = document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click", bereken);
}

const bereken = () => {
    let btws=document.getElementsByClassName("btw");
    let prijzen = document.getElementsByClassName("prijs");
    let subs =document.getElementsByClassName("sub");
    let aantallen = document.getElementsByClassName("aantal");
    let totaal=document.getElementById("totaal");
    let prijs1=prijzen[0].innerHTML;
    let prijs2=prijzen[1].innerHTML;
    let prijs3=prijzen[2].innerHTML;
    let btw1=btws[0].innerHTML;
    let btw2=btws[1].innerHTML;
    let btw3=btws[2].innerHTML;
    let aantaal1=aantallen[0].value;
    let aantaal2=aantallen[1].value;
    let aantaal3=aantallen[2].value;
    let sub1=(parseFloat(prijs1, 10))*parseInt(aantaal1, 10);
    sub1=sub1 + sub1*(parseInt(btw1, 10)/100);
    subs[0].innerHTML = sub1;
    let sub2=(parseFloat(prijs2, 10))*parseInt(aantaal2, 10);
    sub2=sub2 + sub2*(parseInt(btw2, 10)/100);
    subs[1].innerHTML = sub2;
    let sub3=(parseFloat(prijs3, 10))*parseInt(aantaal3, 10);
    sub3=sub3 + sub3*(parseInt(btw3, 10)/100);
    subs[2].innerHTML = sub3;
    totaal.innerHTML = sub1 + sub2 + sub3;
}

window.addEventListener('load', setup);