const setup = () => {
    let button1=document.getElementById("indexof");
    let button2=document.getElementById("lastindexof");
    button1.addEventListener("click", indexOfTeller);
    button2.addEventListener("click", lastIndexOfTeller);
}

const indexOfTeller = () => {
    let input = document.getElementById("zin");
    let output = document.getElementById("output");

    let i = 0;
    let position = input.value.toLowerCase().indexOf("an");
    while (position !== -1) {
        i++;
        position = input.value.toLowerCase().indexOf("an", position + 1);
    }
    output.innerHTML = "Aantal keer 'an' in de zin: " + i;
}

const lastIndexOfTeller = () => {
    let input = document.getElementById("zin");
    let output = document.getElementById("output");

    let i = 0;
    let position = input.value.toLowerCase().lastIndexOf("an");
    while (position !== -1) {
        i++;
        position = input.value.toLowerCase().lastIndexOf("an", position - 1);
    }
    output.innerHTML = "Aantal keer 'an' in de zin: " + i;
}

window.addEventListener("load", setup);