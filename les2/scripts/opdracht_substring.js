const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substringBerekenen);
}

const substringBerekenen = () => {
    let txtInput=document.getElementById("txtInput");
    let txtOutput=document.getElementById("txtOutput");
    let txtLinks=document.getElementById("txtLinks");
    let txtRechts=document.getElementById("txtRechts");
    let links=parseInt(txtLinks.value, 10);
    let rechts=parseInt(txtRechts.value, 10);
    let tekst=txtInput.value;
    tekst = tekst.substring(links, rechts);
    txtOutput.innerHTML= tekst;
}

window.addEventListener('load', setup);