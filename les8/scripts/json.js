const setup = () => {
    let student1 = {
        voornaam : "Piet",
        familienaam : "Pieters",
        geboorteDatum : new Date("2000-04-06")}
    let studentjson = JSON.stringify(student1);
    console.log(studentjson);

    let student2 = JSON.parse(studentjson);
    console.log(student2);
}


window.addEventListener("load", setup);