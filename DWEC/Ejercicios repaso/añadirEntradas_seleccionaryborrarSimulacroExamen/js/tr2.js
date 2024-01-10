'use strict';

let contIzquierda = document.getElementById("contenedorIzquierda");
let contDerecha = document.getElementById("contenedorDerecha");

let botonIzq = document.getElementById("moverIzquierda");
let botonDer= document.getElementById("moverDerecha");
let botonLimpiar = document.getElementById("limpiar");


let inputTexto = document.getElementById("nuevaEntrada");
let botonCrear = document.getElementById("creaEntrada");

botonCrear.addEventListener("click", ()=>{
    if(inputTexto.value==""){
        alert("Entrada vacia");
    }else{
        let entrada=document.createElement("li");
        entrada.innerHTML=inputTexto.value;
        contIzquierda.appendChild(entrada);
        inputTexto.value="";
    }
})

contIzquierda.addEventListener("click", (event)=>{
    if(event.target.nodeName=="LI"){
        event.target.classList.toggle("seleccionado");
    }
})

contDerecha.addEventListener("click", (event)=>{
    if(event.target.nodeName=="LI"){
        event.target.classList.toggle("seleccionado");
    }
})

botonIzq.addEventListener("click", ()=>{
    let seleccionadosDer=document.querySelectorAll("#contenedorDerecha .seleccionado");
    for(let seleccionado of seleccionadosDer){
        contIzquierda.appendChild(seleccionado);
    }
})

botonDer.addEventListener("click", ()=>{
    let seleccionadosIzq=document.querySelectorAll("#contenedorIzquierda .seleccionado");
    for(let seleccionado of seleccionadosIzq){
        contDerecha.appendChild(seleccionado);
    }
})

botonLimpiar.addEventListener("click", ()=>{
    let seleccionados=document.querySelectorAll(".seleccionado");
    for(let elemento of seleccionados){
        elemento.classList.remove("seleccionado");
    }
})

contIzquierda.addEventListener("dblclick", (e)=>{
    if(e.target.nodeName=="LI"){
        e.target.remove();
    }
})

contDerecha.addEventListener("dblclick", (e)=>{
    if(e.target.nodeName=="LI"){
        e.target.remove();
    }
})