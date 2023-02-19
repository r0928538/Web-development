const popup1 = () => {
    window.alert("Dit is een mededeling");
    console.log(confirm("Dit is een mededeling"));
    console.log(window.prompt("Wat is uw naam", "onbekend"));
}

window.addEventListener('load',popup1);