

//estilos----------
document.addEventListener("DOMContentLoaded", function(){
    const div=document.getElementById("contenedorGeneral");
    div.style.width="200px";
    div.style.height="200px";
    div.style.backgroundColor="#9e9e9e";
    div.style.color="blue";
    div.style.borderWidth="1px";
    div.style.borderStyle="solid";
    div.style.borderColor="red";



//actualiza contenido al redimensionar---------
window.addEventListener("resize", function(){
    div.innerHTML = window.innerWidth +"-"+window.innerHeight;
})

});