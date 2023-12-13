const contenedorGeneral = document.getElementById("contenedorGeneral");
const colores = ["red", "blue", "green", "yellow"];

function cambiarColor(event) {
    const celda = event.target;

    if (event.button === 1) {
        // Botón de la rueda del ratón
        celda.style.backgroundColor = "gray"; // Cambia a gris
        celda.dataset.currentIndex = -1; // Establece un valor no válido para el índice
    } else {
        if (!celda.dataset.currentIndex) {
            // Si la celda no tiene un índice, establecerlo en 0 (rojo) en el primer click
            celda.dataset.currentIndex = 0;
            celda.style.backgroundColor = colores[0];
        } else {
            const currentIndex = parseInt(celda.dataset.currentIndex);
            if (event.button === 0) {
                // Botón izquierdo del ratón
                const nuevoIndice = (currentIndex + 1) % colores.length;
                celda.dataset.currentIndex = nuevoIndice;
                celda.style.backgroundColor = colores[nuevoIndice];
            } else if (event.button === 2) {
                // Botón derecho del ratón
                const nuevoIndice = (currentIndex - 1 + colores.length) % colores.length;
                celda.dataset.currentIndex = nuevoIndice;
                celda.style.backgroundColor = colores[nuevoIndice];
            }
        }
    }
}

for (let i = 0; i < 10; i++) {
    const fila = document.createElement("div");
    fila.style.display = "flex";
    for (let j = 0; j < 10; j++) {
        const celda = document.createElement("div");
        celda.style.width = "25px";
        celda.style.height = "25px";
        celda.style.backgroundColor = "white";
        celda.style.border = "1px solid #ccc";
        celda.style.margin = "5px"; // 10px de separación (margen de 5px en cada lado)
        celda.addEventListener("mousedown", cambiarColor);
        fila.appendChild(celda);
    }
    contenedorGeneral.appendChild(fila);
}