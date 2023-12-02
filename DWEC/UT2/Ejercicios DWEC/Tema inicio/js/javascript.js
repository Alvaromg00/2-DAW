// Prueba 1
let nombre="Roberto";
console.log(nombre);
console.log(typeof nombre);

var altura = 187;

console.log(altura);
console.log(typeof altura);

altura="Uno con Ochenta y Siete";
console.log(altura);
console.log(typeof altura);

//Prueba 2
let booleano=true;
console.log(booleano);
console.log(typeof booleano);

let frase;
console.log(frase);
console.log( typeof frase);

//Prueba 3
function saludoBienvenida(nombre){
    console.log("Bienvenido, "+nombre);

}
saludoBienvenida("Roberto")
saludoBienvenida("Alvaro")
saludoBienvenida("Daniel")

//Prueba 4
let numUnidades;
let precio;


function CalcularPrecio(numUnidades, precio){
   let precioFinal=numUnidades*precio;
    return console.log("El precio final es: "+ precioFinal+ " euros");

}
CalcularPrecio(6, 2.50)

//Prueba 5
let funcionSumarUnoMas=function (valor){
    valor++;
    return valor++;

};
console.log(funcionSumarUnoMas(4));

let valorsuma=5;
console.log("Valor inicial = "+valorsuma);
console.log(valorsuma++);
console.log("Prueba suma 1 = "+valorsuma);
console.log(valorsuma++);
console.log("Prueba suma 2 = "+valorsuma);

//Prueba 6
let funcionLambda = (arg1, arg2)=> {return arg1 +arg2}

console.log(funcionLambda(3,2));

let funcionProcesadoraPar=function (arg1, arg2, funcionProcesadora){
    return funcionProcesadora(arg1, arg2);
}

console.log("Esta vez procesamos una función (de 3 y 2):" + funcionProcesadoraPar(3,2,(n1,n2)=> {return n1+n2}));

console.log("Esta vez procesamos una función (de 3 y 2): " + funcionProcesadoraPar(3,  2, (n1,n2)=>n1*n2));

//Prueba 6.2
let procesaTres = function (arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

console.log("Esta vez procesamos una función para sumar (de 2, 5 y 4): "+procesaTres(2, 5, 4, (arg1,arg2,arg3)=>{return arg1+arg2+arg3}));

console.log("Esta vez procesamos una función para devolver el mayor (de 2, 5 y 4): "+procesaTres(2, 5, 4, (arg1,arg2,arg3)=>{
    if(arg1>arg2 && arg1>arg3) {return arg1}
    else if(arg2>arg1 && arg2>arg3) {return arg2}
    else{return arg3}
}));

console.log("Esta vez procesamos una función para devolver el menor (de 2, 5 y 4): "+procesaTres(2, 5, 4, (arg1,arg2,arg3)=>{
    if(arg1<arg2 && arg1<arg3) {return arg1}
    else if(arg2<arg1 && arg2<arg3) {return arg2}
    else{return arg3}
}));

console.log("Esta vez procesamos una función para devolver la suma del primero por el tercero entre el segundo (de 2, 5 y 4): "+procesaTres(2, 5, 4, (arg1,arg2,arg3)=>{
    return (arg1+arg3)/arg2;
}));