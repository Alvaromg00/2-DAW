//Almaceno funcion en variable
let variable=function pintarHola(){
    console.log("Hola")
}
setTimeout(variable, 500);

//Almaceno funcion lambda en variable
let variable2=()=>{
    console.log("Hola");
}
setTimeout(variable2, 500);

//Con el método setTimeout llamo a una función y le doy 500 milisegundos 
setTimeout(function(){
    console.log("Hola")
}, 500);

//Con el método setTimeout llamo a una función lambda y le doy 500 milisegundos
setTimeout(()=>{
    console.log("Hola")
}, 500);

