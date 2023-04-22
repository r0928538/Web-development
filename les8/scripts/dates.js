const setup = () => {
    let nu = new Date();
    let verjaardag = new Date(nu.getFullYear(), 0, 10);
    let verjaardagNext = new Date(verjaardag);
    if (nu > verjaardag) {
        verjaardagNext = verjaardagNext.setFullYear(nu.getFullYear() + 1);
    }
    let verschil = Math.abs(verjaardagNext - nu);
    let verschilInDagen = Math.ceil(verschil / (1000 * 60 * 60 * 24));
    console.log(verschilInDagen + " dagen tot volgende verjaardag");

    verjaardagNext = new Date(verjaardag);

    if(nu < verjaardag){
        verjaardagNext = verjaardagNext.setFullYear(nu.getFullYear() - 1);
    }
    verschil = Math.abs(nu - verjaardagNext);
    verschilInDagen = Math.ceil(verschil / (1000 * 60 * 60 * 24));
    console.log(verschilInDagen + " sinds vorige verjaardag");
}

window.addEventListener("load", setup);