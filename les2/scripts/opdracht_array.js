const setup = () => {
    let familieLeden = ["sven", "szymon", "emi", "pyro", "hubert"];
    console.log("Aantal familieleden: " + familieLeden.length);
    console.log("1: " + familieLeden[0]);
    console.log("3: " + familieLeden[2]);
    console.log("5: " + familieLeden[4]);
    voegNaamToe(familieLeden);
    for (let i=0 ; i<familieLeden.length ; i++)
    {
        console.log((i + 1) + ": " + familieLeden[i] );
    }
}
const voegNaamToe = (familieLeden) => {
    let nieuwelid = prompt("Familieleed toevoegen", "marta");
    console.log("Aantal familieleden: " + familieLeden.push(nieuwelid));
}
window.addEventListener('load', setup);