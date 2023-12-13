document.addEventListener("DOMContentLoaded", main);

function main(){
    document.getElementById("divRojo").addEventListener(
        "click", (evento)=>{  
            console.log("Pulsaste el div rojo")}
    );

    document.getElementById("divAzul").addEventListener(
        "click", function(evento){
            evento.stopPropagation();
            console.log("Pulsaste el div azul")
        }
    );
}
