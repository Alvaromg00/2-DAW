'use strict';

let contIzquierda = document.getElementById("contenedorIzquierda");
let contDerecha = document.getElementById("contenedorDerecha");

let botonIzq = document.getElementById("moverIzquierda");
let botonDer= document.getElementById("moverDerecha");
let botonLimpiar = document.getElementById("limpiar");


let inputTexto = document.getElementById("nuevaEntrada");
let botonCrear = document.getElementById("creaEntrada");

botonCrear.addEventListener('click', ()=>{
    if(inputTexto.value.trim()==""){
        alert("No has introducido ninguna entrada");
    }else{
        let entrada=document.createElement("li");
        entrada.innerHTML=inputTexto.value;
        contIzquierda.appendChild(entrada);
        inputTexto.value="";
    }
})

contIzquierda.addEventListener('click', (event)=>{
    if(event.target.nodeName=="LI"){
        event.target.classList.toggle("seleccionado");
    }
})

contDerecha.addEventListener('click', (event)=>{
    if(event.target.nodeName=="LI"){
        event.target.classList.toggle("seleccionado");
    }
})


botonIzq.addEventListener('click', ()=>{
    let seleccionadoDer=document.querySelectorAll("#contenedorDerecha .seleccionado");
    for(let seleccionados of seleccionadoDer){
        contIzquierda.appendChild(seleccionados);
    }
})

botonDer.addEventListener('click', ()=>{
    let seleccionadoIzq=document.querySelectorAll("#contenedorIzquierda .seleccionado");
    for(let seleccionados of seleccionadoIzq){
        contDerecha.appendChild(seleccionados);
    }
})

botonLimpiar.addEventListener('click', ()=>{
    let seleccionado=document.querySelectorAll(".seleccionado");
    for(let elemento of seleccionado){
        elemento.classList.remove("seleccionado");
    }
})

contIzquierda.addEventListener('dblclick', (event)=>{
    if(event.target.nodeName=="LI"){
        event.target.remove();
    }
})

contDerecha.addEventListener('dblclick', (event)=>{
    if(event.target.nodeName=="LI"){
        event.target.remove();
    }
})

