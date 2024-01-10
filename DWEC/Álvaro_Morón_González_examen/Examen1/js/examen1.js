'use strict';



//Selectores:
let selectBarra = document.getElementById("selectorBarra");
let selectColor = document.getElementById("selectorColor");
let selectPorcentaje = document.getElementById("selectorPorcentaje");

//Botones:
let bCambiar = document.getElementById("cambiarAjustes");
let bResetear = document.getElementById("resetear");


//Barras: Sobre estos elementos hay que cambiar el estilo.
//Os recuerdo que los estilos están dentro de la propiedad "style" y se utilizan
//las mismas propiedades css pero sin "-" y siempre en minúsculasMayúsculas (camelCase).
//Por ejemplo, para cambiar el color de fondo de la barra1:
// barra1.style.backgroundColor="red";
let barra1 = document.getElementById("barra1");
let barra2 = document.getElementById("barra2");
let barra3 = document.getElementById("barra3");
let barra4 = document.getElementById("barra4");

//añado el boton cambiar ajustes a la escucha
bCambiar.addEventListener('click', ()=>{

    //si selectPorcentaje esta entre 0 y 100 evalua el valor del atributo value de selectBarra
    if(selectPorcentaje.value>=0 && selectPorcentaje.value<=100){
        if(selectBarra.value=="1"){
            //pone la barra con el color de fondo que pone en el atributo value de selectColor y el ancho que pone en el atributo value de selectPorcentaje
            barra1.style.backgroundColor=selectColor.value;
            barra1.style.width=selectPorcentaje.value+"%";
        }
        if(selectBarra.value=="2"){
            barra2.style.backgroundColor=selectColor.value;
            barra2.style.width=selectPorcentaje.value+"%";
        }
        if(selectBarra.value=="3"){
            barra3.style.backgroundColor=selectColor.value;
            barra3.style.width=selectPorcentaje.value+"%";
        }
        if(selectBarra.value=="4"){
            barra4.style.backgroundColor=selectColor.value;
            barra4.style.width=selectPorcentaje.value+"%";
        }
        //sino, salta el alert
    }else{
        alert("El porcentaje no es correcto");
    }
})

//pongo el botón de resetear a la escucha de click, y pone todas las barras en color de fondo gris y 50% de ancho
bResetear.addEventListener('click', ()=>{
    barra1.style.backgroundColor="gray";
    barra1.style.width="50%";
    barra2.style.backgroundColor="gray";
    barra2.style.width="50%";
    barra3.style.backgroundColor="gray";
    barra3.style.width="50%";
    barra4.style.backgroundColor="gray";
    barra4.style.width="50%";
})


//pongo todas las barras a la escucha de doble click y se ponen en gris con 50% de ancho
barra1.addEventListener('dblclick', ()=>{
    barra1.style.backgroundColor="gray";
    barra1.style.width="50%";
})

barra2.addEventListener('dblclick', ()=>{
    barra2.style.backgroundColor="gray";
    barra2.style.width="50%";
})

barra3.addEventListener('dblclick', ()=>{
    barra3.style.backgroundColor="gray";
    barra3.style.width="50%";
})

barra4.addEventListener('dblclick', ()=>{
    barra4.style.backgroundColor="gray";
    barra4.style.width="50%";
})