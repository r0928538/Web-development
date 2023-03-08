const setup = () => {
    let button=document.getElementById("button");
    button.addEventListener("click", update);
}

const update = () => {
    let input = document.getElementById("zin");
    let letters = input.value.split("");
    let spatie = "";
    for(let i = 0; i < letters.length; i++){
        spatie += letters[i] + " ";
    }
    spatie = spatie.replace("  ", " ");
    let output = document.getElementById("output");
    output.innerHTML = spatie;
}

window.addEventListener("load", setup);