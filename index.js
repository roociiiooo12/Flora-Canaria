

let granCanaria = document.getElementById("granCanaria");
let tenerife = document.getElementById("tenerife");
let lanzarote = document.getElementById("lanzarote");
let fuerteventura = document.getElementById("fuerteventura");
let gomera = document.getElementById("gomera");
let hierro = document.getElementById("hierro");
let palma = document.getElementById("palma");

let tajinaste = document.getElementById("tajinaste");
let cardon = document.getElementById("cardon");
let drago = document.getElementById("drago");
let violeta = document.getElementById("violeta");
let tilo = document.getElementById("tilo");
let helecho = document.getElementById("helecho");

tajinaste.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
})
tajinaste.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
})



violeta.addEventListener("mouseenter", () => {
    tenerife.style.fill = "#FF0000";
})
violeta.addEventListener("mouseleave", () => {
    tenerife.style.fill = "";
})


helecho.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
    tenerife.style.fill = "#FF0000";
    fuerteventura.style.fill = "#FF0000";
    lanzarote.style.fill = "#FF0000";
    gomera.style.fill = "#FF0000";
    hierro.style.fill = "#FF0000";
    palma.style.fill = "#FF0000";

})
helecho.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
    tenerife.style.fill = "";
    fuerteventura.style.fill = "";
    lanzarote.style.fill = "";
    gomera.style.fill = "";
    hierro.style.fill = "";
    palma.style.fill = "";
})



tilo.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
    tenerife.style.fill = "#FF0000";
    gomera.style.fill = "#FF0000";
    hierro.style.fill = "#FF0000";
    palma.style.fill = "#FF0000";
})
tilo.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
    tenerife.style.fill = "";
    gomera.style.fill = "";
    hierro.style.fill = "";
    palma.style.fill = "";
})



cardon.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
    tenerife.style.fill = "#FF0000";
    fuerteventura.style.fill = "#FF0000";
    gomera.style.fill = "#FF0000";
    hierro.style.fill = "#FF0000";
    palma.style.fill = "#FF0000";

})
cardon.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
    tenerife.style.fill = "";
    fuerteventura.style.fill = "";
    gomera.style.fill = "";
    hierro.style.fill = "";
    palma.style.fill = "";
})


drago.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
    tenerife.style.fill = "#FF0000";
    gomera.style.fill = "#FF0000";
    hierro.style.fill = "#FF0000";
    palma.style.fill = "#FF0000";

})
drago.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
    tenerife.style.fill = "";
    gomera.style.fill = "";
    hierro.style.fill = "";
    palma.style.fill = "";
})
/* separacion*/



let fichaTajinaste = document.getElementById("fichaTajinaste");
let fichaVioleta = document.getElementById("fichaVioleta");
let fichaHelecho = document.getElementById("fichaHelecho");
let fichaTilo = document.getElementById("fichaTilo");
let fichaCardon = document.getElementById("fichaCardon");
let fichaDrago = document.getElementById("fichaDrago");

/* tajinaste.addEventListener("click", () => {
    fichaTajinaste.scrollIntoView({
        behavior:"smooth"
    })
}) */

let fichaMap = {
    tajinaste: fichaTajinaste,
    violeta: fichaVioleta,
    helecho: fichaHelecho,
    tilo: fichaTilo,
    cardon: fichaCardon,
    drago: fichaDrago
}

const btn = document.getElementsByClassName("cajaflora");
let vistaActual = null

console.log(btn)

Array.from(btn).forEach((img) => {
    img.addEventListener("click", () => {
        console.log("click")
        vistaActual = fichaMap[img.id].scrollIntoView({behavior: "smooth"})
    })
})