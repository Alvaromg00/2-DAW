//almaceno en constantes, tanto el botón como el div de HTML
const boton=document.getElementById("botonNota");
let contenedorNotas=document.getElementById("divNotas");

//Pongo a la escucha de eventos al botón
boton.addEventListener('click', ()=>
{

    const nota=document.getElementById("nota");
    if(nota.value!==""){
        //si el input no esta vacio, crea y añade el parrafo con la nota
        let parrafo=document.createElement("p");
        let texto=document.createTextNode(nota.value);

        parrafo.appendChild(texto);
        contenedorNotas.appendChild(parrafo);
        
        //quedo el input vacio de nuevo y le pongo el foco para que se pueda seguir añadiendo notas
        nota.value="";
        nota.focus();

        //Pongo los párrafos a la escucha
        let fondoRojo = false; // Estado del fondo del párrafo

        parrafo.addEventListener('click', (event) => {
            if (event.altKey && event.button === 0) {
                if (fondoRojo) {
                    parrafo.style.backgroundColor = "";
                } else {
                    parrafo.style.backgroundColor = "red";
                }
                fondoRojo = !fondoRojo; // Cambia el estado del fondo
            } else if (event.button === 0) {
                contenedorNotas.removeChild(parrafo);
            }
        });

    }else{
        
        alert("No has introducido texto");
    }
})