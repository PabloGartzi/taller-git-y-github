const boton = document.querySelector("#divBoton")
const fragment = document.createDocumentFragment();

const botones = [
    {
        id: 1,
        nombre: "Benito",
    },
    {
        id: 2,
        nombre: "Camelas",
    },
    {
        id: 3,
        nombre: "Mucho",
    },
];

const pintarBotones = () => {
    botones.forEach((boton) => {
        const newBoton = document.createElement("BUTTON");
        newBoton.classList.add("btn");
        newBoton.textContent = boton.nombre
        fragment.append(newBoton);
    })
    boton.append(fragment);
}

pintarBotones();