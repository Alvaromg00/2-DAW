'use strict';

//se asignan los elementos del html a las variables
let bNombre = document.getElementById("botonNombre");
let cNombre = document.getElementById("contenedorNombres");


let bFotos = document.getElementById("botonFotos");
let cFotos = document.getElementById("contenedorFotos");


let tNombreFiltrado = document.getElementById("filtrarNombre");
let bNombreFiltrado = document.getElementById("botonFiltrarNombre");
let cNombreFiltrado = document.getElementById("contenedorNombresFiltrados");

let urlPeticion = "https://raw.githubusercontent.com/fsangar/PracticaBuscaminas-BASE18-19/master/json/PasoProcesional.json";

//añado el boton de los nombres a la escucha, y hace un peticion fetch a la url, la pasa a json
bNombre.addEventListener('click', ()=>{
    fetch(urlPeticion).then(response=>response.json()).then(objJSON=>{
        cNombre.textContent="";
        //aqui hago un bucle que recorra los elementos de json, me cree un li y me añada al li el contenido de rdfs_label.value(el nombre de los pasos)y cuelga de contenedorNombres
        for(let pasos of objJSON.results.bindings){
            let entrada=document.createElement("li");
            entrada.textContent=pasos.rdfs_label.value;
            cNombre.appendChild(entrada);
        }
    }).catch(error=>console.log(error.message));
})

//añado el boton de las fotos a la escucha, y hace un peticion fetch a la url, la pasa a json
bFotos.addEventListener('click', ()=>{
    fetch(urlPeticion).then(response=>response.json()).then(objJSON=>{
        cNombre.textContent="";
        cFotos.textContent="";
        //aqui hago un bucle que recorra los elementos de json, me cree un p y me añada al parrafo el contenido de rdfs_label.value(el nombre de los pasos)y cuelga de contenedorFotos, tambien creo un img, le asigno a ese img un atributo src con el valor de schema_image.value y le digo que cuelgue de contenedorFotos
        for(let pasos of objJSON.results.bindings){
            let entrada=document.createElement("p");
            entrada.textContent=pasos.rdfs_label.value;
            cFotos.appendChild(entrada);

            let foto=document.createElement("img");
            foto.src=pasos.schema_image.value;
            cFotos.appendChild(foto);
        }
    }).catch(error=>console.log(error.message));
})

//añado el boton del filtrado a la escucha, y hace un peticion fetch a la url, la pasa a json
bNombreFiltrado.addEventListener('click', ()=>{
    fetch(urlPeticion).then(response.response.json()).then(objJSON=>{
        //bucle for que recorre objJSON, me crea un li, le agrega el contenido de rdfs_label.value y cuelga de cNombreFiltrado
        for(let elemento of objJSON.results.bindings){
            if(tNombreFiltrado.value==elemento.rdfs_label.value){
                let entrada=document.createElement("li");
                entrada.textContent= elemento.rdfs_label.value;
                cNombreFiltrado.appendChild(elemento);
            }
        }
    }).catch(error=>console.log(error.message));
})