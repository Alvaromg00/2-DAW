"use strict";

//TODA LA TAREA SE HACE EDITANDO EXCLUSIVAMENTE ESTE FICHERO
const body=document.body;

let nombre=document.querySelector("#nombre");
let nombreInvalido=document.querySelector("#nombre ~ .invalid-feedback");

let descripcion=document.querySelector("#descripcion");
let descripcionInvalido=document.querySelector("#descripcion ~ .invalid-feedback");

let cocina=document.querySelector("#cocina");
let cocinaInvalido=document.querySelector("#cocina ~ .invalid-feedback");

let diasApertura=document.querySelectorAll('[id^="check"]');
let diasAperturaInvalido=document.querySelector("#diasError");

let telefono=document.querySelector("#telefono");
let telefonoInvalido=document.querySelector("#telefono ~ .invalid-feedback");

let foto=document.querySelector("#foto");
let fotoInvalido=document.querySelector("#foto ~ .invalid-feedback");

const boton=document.querySelector(".btn.btn-primary");

document.getElementById("foto").addEventListener('change', event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
    })
})

function validaNombre(){
    if(/^[a-zA-Z][a-zA-Z\s]*$/.test(nombre.value)){
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
        nombreInvalido.style.display="none";
        
    }else{
        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid");
        nombreInvalido.style.display="block";
        
    }
}

function validaDescripcion(){
    if(/^(?!\s*$).+/.test(descripcion.value)){
        descripcion.classList.add("is-valid");
        descripcion.classList.remove("is-invalid");
        descripcionInvalido.style.display="none";
        
    }else{
        descripcion.classList.add("is-invalid");
        descripcion.classList.remove("is-valid");
        descripcionInvalido.style.display="block";
        
    }
}

function validaCocina(){
    if(/^(?!\s*$).+/.test(cocina.value)){
        cocina.classList.add("is-valid");
        cocina.classList.remove("is-invalid");
        cocinaInvalido.style.display="none";
        
    }else{
        cocina.classList.add("is-invalid");
        cocina.classList.remove("is-valid");
        cocinaInvalido.style.display="block";
        
    }
}

function validaDias(){
    const errorDias= [...diasApertura].some(checkbox => checkbox.checked);
    if(errorDias){
        diasAperturaInvalido.classList.add("d-none");
    }else{
        diasAperturaInvalido.classList.remove("d-none");
    }
}

function validaTelefono(){
    if(/^\d{9}$/.test(telefono.value)){
        telefono.classList.add("is-valid");
        telefono.classList.remove("is-invalid");
        telefonoInvalido.style.display="none";
        
    }else{
        telefono.classList.add("is-invalid");
        telefono.classList.remove("is-valid");
        telefonoInvalido.style.display="block";
        
    }
}

function validaFoto(){
    if (foto.files.length !== 0) {
        foto.classList.add("is-valid");
        foto.classList.remove("is-invalid");
        fotoInvalido.style.display="none";
        
    }else{
        foto.classList.add("is-invalid");
        foto.classList.remove("is-valid");
        fotoInvalido.style.display="block";
        
    }
}

nombre.addEventListener('input', validaNombre);
descripcion.addEventListener('input', validaDescripcion);
cocina.addEventListener('input', validaCocina);
telefono.addEventListener('input', validaTelefono);
foto.addEventListener('change', validaFoto);
diasApertura.forEach(checkbox => {
checkbox.addEventListener('change', ()=>{
    validaDias();
});
});

boton.addEventListener('click', (event)=>{

    validaNombre();
    validaDescripcion();
    validaCocina();
    validaTelefono();
    validaFoto();
    validaDias();

    if(nombreInvalido.style.display=="block" || descripcionInvalido.style.display=="block" || cocinaInvalido.style.display=="block" || telefonoInvalido.style.display=="block" || fotoInvalido.style.display=="block" || diasAperturaInvalido.style.display=="block"){
        event.preventDefault();
    }else{
    
    }
});
let form=document.getElementById("newPlace");

function getDiasAbierto(diasCheckboxes) {
    const nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const diasAbiertos = Array.from(diasCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => nombresDias[parseInt(checkbox.value)]);

    return diasAbiertos.join(", ");
}

form.addEventListener('submit', (event) => {
    // Crear el elemento <div> con la clase "card"
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    // Crear el elemento <img> dentro de la card
    const cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = document.getElementById("imgPreview").src;
    cardDiv.appendChild(cardImg);

    // Crear el elemento <div> con la clase "card-body" dentro de la card
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);

    // Crear el título h5
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = nombre.value;
    cardBodyDiv.appendChild(cardTitle);

    // Crear el párrafo
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = descripcion.value;
    cardBodyDiv.appendChild(cardText);

    const diasCheck = document.querySelectorAll('input[name="dias"]');

    const diasAbierto = getDiasAbierto(diasCheck);
    // Crear el párrafo para "Abre: Lun, Mar, Mié, Jue, Vie, Sáb, Dom"
    const abreText = document.createElement("small");
    abreText.className = "text-muted";
    abreText.innerHTML = `<strong>Abre: </strong> ${diasAbierto} `;
    cardBodyDiv.appendChild(abreText);


    let hoy=new Date().getDay;


    
    // Crear las etiquetas "Abierto" y "Cerrado" como badges
    const abiertoBadge = document.createElement("span");
    abiertoBadge.className = "badge badge-success";
    abiertoBadge.textContent = "Abierto";
    cardBodyDiv.appendChild(abiertoBadge);

    const cerradoBadge = document.createElement("span");
    cerradoBadge.className = "badge badge-danger";
    cerradoBadge.textContent = "Cerrado";
    cardBodyDiv.appendChild(cerradoBadge);

    // Crear el párrafo para "Teléfono: 934823234"
    const telefonoText = document.createElement("small");
    telefonoText.className = "text-muted";
    telefonoText.innerHTML = '<strong>Teléfono: </strong>'+telefono.value;
    cardBodyDiv.appendChild(telefonoText);

    // Crear el elemento <div> con la clase "card-footer" dentro de la card
    const cardFooterDiv = document.createElement("div");
    cardFooterDiv.className = "card-footer";
    cardDiv.appendChild(cardFooterDiv);

    // Crear el párrafo para "Tipo de Cocina"
    const tipoCocinaText = document.createElement("small");
    tipoCocinaText.className = "text-muted";
    tipoCocinaText.textContent = cocina.value;
    cardFooterDiv.appendChild(tipoCocinaText);

    // Agregar la card al documento
    const placesContainer = document.getElementById("placesContainer");
    placesContainer.appendChild(cardDiv);
    form.reset();
});


